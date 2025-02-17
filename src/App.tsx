
import Header from './components/Header.tsx'
import Card from './components/Card.tsx'
import { Projects } from './projects.ts'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main id="projects">
        {Projects.map((project, index) => {
          return (
            <Card key={project.title} index={index} {...project} />
          )
        })}
      </main>
    </>
  )
}

export default App
