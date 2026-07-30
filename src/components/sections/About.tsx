import { Container } from "../common/Container";
import { aboutData } from "../../data/abouts";


export const About = () => {
    return (
        <section id="sobre" className="min-h-screen min-w-full flex items-center justify-center bg-(--bg)">
            <Container className="text-center w-full justify-center gap-20 flex py-20">
                {/* Sobre mim */}
                <div className="flex flex-col justify-center text-start w-full ">
                    <h1>
                        {aboutData.title.split(' ')[0]}{' '}
                        <span className="text-(--accent)">{aboutData.highlight}</span>
                    </h1>
                    <p className="text-pretty">{aboutData.description}</p>
                </div>

                {/* Foto */}
                <img className="object-cover w-full border-5 rounded-full border-(--accent-border) hover:shadow-(--shadow) transition duration-1000 ease-in-out" src={aboutData.image} alt="Samuel Abreu" />
            </Container>
        </section>
    )
}