import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { heroData } from '../../data/heros';

export const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex  border-b items-center justify-center bg-(--bg)">
            <Container className="text-center py-20">
                <p className="text-sm tracking-widest text-(--accent) uppercase font-semibold mb-2">
                    {heroData.greeting}
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--text-h)">
                    {heroData.name.split(' ')[0]}{' '}
                    <span className="text-(--accent)">{heroData.highlight}</span>
                </h1>
                <p className="mt-4 max-w-xl mx-auto text-lg text-(--text)">
                    {heroData.description}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button as="a" href="#projetos" variant="primary">
                        {heroData.ctaPrimary}
                    </Button>
                    <Button as="a" href="/curriculo.pdf" variant='outline'> {/* Lembrar de ver como colocar para fazer download*/} 
                        {heroData.ctaSecondary}
                    </Button>
                </div>
            </Container>
        </section>
    );
};