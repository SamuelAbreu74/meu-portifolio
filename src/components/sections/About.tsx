import { Container } from "../common/Container";
import { aboutData } from "../../data/abouts";

export const About = () => {
  return (
    <section
      id="sobre"
      className="min-h-screen min-w-full flex items-center justify-center bg-(--bg)"
    >
      <Container className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Bloco de texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {aboutData.title.split(" ")[0]}{" "}
              <span className="text-(--accent)">{aboutData.highlight}</span>
            </h1>
            <p className="text-pretty text-gray-300 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
              {aboutData.description}
            </p>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg group shrink-0">
            <div
              className="absolute -inset-4 rounded-full 
                         bg-purple-500/20 blur-2xl 
                         transition-all duration-500 
                         group-hover:scale-125 group-hover:bg-blue-500/30 
                         -z-10"
            />

            {/* Imagem */}
            <img
              className="w-full aspect-square object-cover 
                         border-[3px] rounded-2xl 
                         border-(--accent-border) 
                         shadow-[0_0_20px_rgba(0,0,0,0.3)]
                         transition-all duration-500 ease-in-out 
                         group-hover:shadow-(--shadow) 
                         group-hover:scale-105 group-hover:rounded-3xl
                         motion-reduce:transition-none"
              src={aboutData.image}
              alt="Samuel Abreu"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};