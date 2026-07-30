import { Container } from "../common/Container";
import { Button } from "../common/Button";


const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contato', href: '#contato' },
]

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-(--bg)/80 backdrop-blur-sm border-b border-(--border)">
            <Container className="flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-(--text-h)">
                    SAM<span className="text-(--accent)">.DEV</span>
                </a>

                {/* Navegação - desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-(--text) hover:text-(--text-h) transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Botão CTA e menu mobile (futuro) */}
                <div className="flex items-center gap-4">
                    <Button as="a" href="#contato" variant="primary">
                        Fale comigo
                    </Button>
                    {/* Ícone de menu mobile aqui depois */}
                </div>
            </Container>
        </header>
    )
}