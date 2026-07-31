import { Header } from "./components/layout/Header"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        <Projects/>
        {/* <Skills/> */}
        {/* <Contact/> */}
      </main>
    </>



  )
}

export default App
