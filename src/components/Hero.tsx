export default function Hero() {
    return (
        <main className="flex w-full min-h-screen justify-center items-center bg-black">
            <div className="flex flex-col items-center p-8 text-center max-w-xl">
                <p className="text-sm tracking-widest text-purple-600 uppercase font-bold">Olá, eu sou</p>
                <h1 className="text-4xl font-bold my-2">Samuel <span className="text-purple-600">Abreu</span></h1>
                <p className="text-pretty text-gray-600">
                    Subtítulo ou descrição breve do que eu faço. Preciso substituir este texto pela minha apresentação profissional.
                </p>
            </div>
        </main>
    )
}
