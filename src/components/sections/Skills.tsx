import { Container } from "../common/Container"
import { SkillBox } from "../common/SkillBox"

export const Skills = () => {
    return (
        <section id="habilidades">
            <Container className="flex flex-col text-center py-20">
                <div className="flex flex-col text-center">
                    <h1>Habilidades & <span className="text-(--accent)">ferramentas</span></h1>
                    <p className="text-pretty">Competências que eu domino</p>
                </div>

                <div className="max-w-full py-10">
                    <SkillBox />   
                </div>
            </Container>
        </section>
    )
}