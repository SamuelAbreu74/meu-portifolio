import { projectData } from "../../data/projects";

export const ProjectBox = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4">
      {projectData.map((project) => (
        <div
          key={project.id}
          className="bg-(--bg-card) border border-(--accent-border) rounded-3xl 
                     overflow-hidden flex flex-col transition-all duration-300 
                     hover:shadow-(--shadow) hover:-translate-y-2"
        >
          {/* Imagem */}
          <div className="p-3">
            <img
              src={project.image[0]}
              alt={project.title}
              className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-2xl 
                         transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Informações */}
          <div className="flex-1 flex flex-col justify-between p-4 pt-0 space-y-2">
            <div>
              <h3 className="font-bold text-lg text-white">{project.title}</h3>
              <p className="text-pretty text-gray-300 text-sm sm:text-base">
                {project.description}
              </p>
            </div>
            <p className="text-(--accent) font-medium flex items-center gap-1 
                          hover:gap-2 transition-all cursor-pointer">
              Ver detalhes →
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};