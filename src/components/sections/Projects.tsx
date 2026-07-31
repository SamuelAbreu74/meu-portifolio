import { Container } from "../common/Container"
import { ProjectBox } from "../common/ProjectBox"
// import { projectData } from "../../data/projects"

export const Projects = () => {
    return (
        <section id="projetos" className="min-h-screen flex  border-b items-center justify-center bg-(--bg)">
            <Container className="flex flex-col text-center py-20">
                <h1>Meus <span className="text-(--accent)">Projetos</span></h1>
                <p className="text-pretty">Minha trajetoria de aprendizado real.</p>

                <div className="min-w-full">
                    <ProjectBox />
                </div>

            </Container>
        </section>
    )
}