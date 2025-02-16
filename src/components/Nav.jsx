import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 

export default function Nav() {
    return (
        <nav>
          
          <a href={`${process.env.PUBLIC_URL}/resume`} title="View my resume" rel="noopener" target="_blank">
            <FontAwesomeIcon icon={solid('file-pdf')} /> <span>Resume</span>
          </a>
          
          <a href="https://www.instagram.com/heatherengle" rel="noopener" target="_blank" title="Follow me on Instagram">
            <FontAwesomeIcon icon={brands('instagram')} /> <span>Instagram</span>
          </a>
          <a href="https://www.github.com/haengle" rel="noopener" target="_blank" title="Find me on github">
          <FontAwesomeIcon icon={brands('github')} /> <span>GitHub</span>
          </a>
          
         
      </nav>
    )
}