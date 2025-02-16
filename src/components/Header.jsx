import { useEffect, useRef } from 'react';
import '../css/header.css';

export default function Header() {

    const animateRef = useRef();

    useEffect(() => {
        animateRef.current.classList.add('animate');
    }, [])
 
    return (
        <header>
         
          <div className='intro'>
            <span>Hi, I'm</span>
            <div className='animate-wrapper'>
              <h1 ref={animateRef}>
                <span>Heather Engle</span></h1>
            </div>
            <h2>A <span>design-obsessed</span> front end UX engineer with 10+ years experience</h2>
          </div>
         
        </header>
    )
}