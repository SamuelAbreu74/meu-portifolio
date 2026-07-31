import { projectData } from "../../data/projects"

export const ProjectBox = () => {
    return (
        <div className="flex gap-5 overflow-auto ">
            <div className="w-full border flex flex-col justify-center items-center rounded-3xl">
                <div className="p-3 w-full">
                    <img className="object-cover w-full h-60 border rounded-3xl" src="./src/assets/todo-list-image2.png" />
                </div>
                {/* Informaçoes */}
                <div className="text-start py-2 m-2">
                    <h3 className="font-bold text-white">Projeto 1</h3>
                    <p className="text-pretty">Descriçao do projeto com bastante texto, bastante mesmo mesmomesmomesmomesmomesmo </p>
                    <p className="text-pretty text-(--accent)">Ver detalhes →</p>
                </div>
            </div>
            <div className="w-full border flex flex-col justify-center items-center rounded-3xl">
                <div className="p-3 w-full">
                    <img className="object-cover w-full h-60 border rounded-3xl" src="./src/assets/todo-list-image2.png" />
                </div>
                {/* Informaçoes */}
                <div className="text-start py-2 m-2">
                    <h3 className="font-bold text-white">Projeto 1</h3>
                    <p className="text-pretty">Descriçao do projeto com bastante texto, bastante mesmo mesmomesmomesmomesmomesmo </p>
                    <p className="text-pretty text-(--accent)">Ver detalhes →</p>
                </div>
            </div>
            <div className="w-full border flex flex-col justify-center items-center rounded-3xl">
                <div className="p-3 w-full">
                    <img className="object-cover w-full h-60 border rounded-3xl" src="./src/assets/todo-list-image2.png" />
                </div>

                {/* Informaçoes */}
                <div className="text-start py-2 m-2">
                    <h3 className="font-bold text-white">Projeto 1</h3>
                    <p className="text-pretty">Descriçao do projeto com bastante texto, bastante mesmo mesmomesmomesmomesmomesmo </p>
                    <p className="text-pretty text-(--accent)">Ver detalhes →</p>
                </div>
            </div>
            <div className="w-full border flex flex-col justify-center items-center rounded-3xl">
                <div className="p-3 w-full">
                    <img className="object-cover w-full h-60 border rounded-3xl" src="./src/assets/todo-list-image2.png" />
                </div>

                {/* Informaçoes */}
                <div className="text-start py-2 m-2">
                    <h3 className="font-bold text-white">Projeto 1</h3>
                    <p className="text-pretty">Descriçao do projeto com bastante texto, bastante mesmo mesmomesmomesmomesmomesmo </p>
                    <p className="text-pretty text-(--accent)">Ver detalhes →</p>
                </div>
            </div>
            <div className="w-full border flex flex-col justify-center items-center rounded-3xl">
                <div className="p-3 w-full">
                    <img className="object-cover w-full h-60 border rounded-3xl" src="./src/assets/todo-list-image2.png" />
                </div>

                {/* Informaçoes */}
                <div className="text-start py-2 m-2">
                    <h3 className="font-bold text-white">Projeto 1</h3>
                    <p className="text-pretty">Descriçao do projeto com bastante texto, bastante mesmo mesmomesmomesmomesmomesmo </p>
                    <p className="text-pretty text-(--accent)">Ver detalhes →</p>
                </div>
            </div>
        </div>
    )
}