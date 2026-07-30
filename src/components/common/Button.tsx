import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  as?: 'a' | 'button';
  href?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center px-10 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-[var(--accent)] text-white hover:opacity-90 focus:ring-[var(--accent)]',
    secondary: 'bg-[var(--code-bg)] text-[var(--text-h)] hover:bg-[var(--border)]',
    outline: 'border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-bg)]',
  };

  const combinedClass = `${baseClasses} ${variants[variant]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClass} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};