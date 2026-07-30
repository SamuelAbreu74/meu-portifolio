import { Header } from "./components/layout/Header"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About/>
        {/* <Projects/> */}
        {/* <Skills/> */}
        {/* <Contact/> */}
      </main>
    </>



  )
}

export default App
