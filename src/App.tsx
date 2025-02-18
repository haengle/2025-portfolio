
import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import Card from './components/Card.tsx'
import { Projects } from './projects.ts'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  const handleDOMContentLoaded = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleDOMContentLoaded();
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);

  return (
    <>
      <div className={`loading ${!loading ? 'hidden' : ''}`}>
        <img src='/icon.svg' alt='loading' />
      </div> 
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
