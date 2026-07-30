export default function Header(){
    return(
        <header className="flex justify-around items-center h-full bg-black border-b-gray-700 border-b">
            {/* LOGO */}
            <div className="ml-10">
                <a href="#">
                    <p className="p-4 text-white text-2xl font-bold">Sam <span className="text-purple-600">Dev</span></p>
                </a>
            </div>

            {/* NAVBAR / LINKS */}
            <nav className="flex gap-10 items-center">
                <a href="#">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#contato">Contato</a>
            </nav>

            {/* Link para contato */}
            <div className="mr-10 w-fit">
                <a href="#contato">
                    <p className="pl-5 pr-5 pt-1 pb-1 font-bold text-white rounded-4xl bg-purple-500">Fale Comigo</p>
                </a>
            </div>
        </header>
    )
}