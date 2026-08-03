import { Container } from "../common/Container";

export const Contact = () => {
    return (
        <section
            id="contato"
            className="min-h-screen flex items-center justify-center bg-(--bg) py-20"
        >
            <Container className="w-full max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">
                        Entre em contato
                    </h2>
                    <p className="text-gray-400 text-lg mt-2">
                        Preencha o formulário ou use seus links sociais.
                    </p>
                </div>

                <form className="bg-(--bg-card) border border-(--accent-border) rounded-3xl p-6 sm:p-10 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Nome */}
                        <div className="flex flex-col text-start">
                            <label htmlFor="name" className="text-gray-300 font-medium mb-2">
                                Nome:
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Seu nome"
                                className="bg-(--bg-input) border border-(--accent-border) rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--accent) transition-all"
                            />
                        </div>

                        {/* E-mail */}
                        <div className="flex flex-col text-start">
                            <label htmlFor="email" className="text-gray-300 font-medium mb-2">
                                E-mail:
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="seu@email.com"
                                className="bg-(--bg-input) border border-(--accent-border) rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--accent) transition-all"
                            />
                        </div>
                    </div>

                    {/* Mensagem */}
                    <div className="flex flex-col text-start mt-6">
                        <label htmlFor="message" className="text-gray-300 font-medium mb-2">
                            Mensagem:
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            placeholder="Escreva sua mensagem aqui..."
                            className="bg-(--bg-input) border border-(--accent-border) rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-(--accent) transition-all resize-none"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="mt-8 w-full sm:w-auto px-8 py-4 bg-(--accent) text-white font-bold rounded-xl hover:bg-(--accent-hover) hover:shadow-(--shadow) transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Enviar mensagem
                    </button>
                </form>

                {/* Links sociais (opcional) */}
                <div className="flex justify-center gap-6 mt-8">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-(--accent) transition-colors text-xl"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-(--accent) transition-colors text-xl"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-(--accent) transition-colors text-xl"
                    >
                        Instagram
                    </a>
                </div>
            </Container>
        </section>
    );
};