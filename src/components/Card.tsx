import { useState } from 'react';
import ReactPlayer from 'react-player/file';
import '../css/card.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

type CardProps = {
    siteLink: string;
    image: string;
    imageDesc: string;
    title: string;
    summary: string;
    video: string;
    videoFallback: string;
    codeJs: string;
    codeCss: string;
}

const extLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>`;

const codeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`;

const Card = ({ siteLink, image, imageDesc, title, summary, video, videoFallback, codeJs, codeCss } : CardProps)=> {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const hasCode = codeJs || codeCss;

    return (
        <article className="card-container">
            <div className="project-header">
                <h2>{title} 
                    
                </h2>
                <div className='header-buttons'>
                {siteLink &&
                    <a href={siteLink} target="_blank" rel="noopener" className="site-link">
                    Visit Site 
                    <span dangerouslySetInnerHTML={{ __html: extLinkIcon }} />
                    </a>        
                    }
                    {hasCode &&
                    <button className='code-button' onClick={onOpenModal}>Code snippet <span dangerouslySetInnerHTML={{ __html: codeIcon }} /></button>
             }
                </div>
                <div className='summary-container'>
                    <p>{summary}</p>
                   
                    {open && 
                        <Modal open={open} onClose={onCloseModal} center 
                            classNames={{
                            modal: 'codeModal',
                            }}>
                        {codeJs &&
                        <div>
                            <h3>Javascript</h3>
                            <SyntaxHighlighter language="javascript" style={docco}>
                                {codeJs}
                            </SyntaxHighlighter>
                        </div>
                        
}
                        {codeCss &&
                        <div>
                            <h3>CSS</h3> 
                            <SyntaxHighlighter language="css" style={docco}>
                            {codeCss}
                        </SyntaxHighlighter>
                        </div>
                       
}
                        </Modal>
                    }
                </div>
            </div>
            <div className="project-summary">
                
                {image &&
                <div className='image-container'>
                    <img src={image} alt={imageDesc} />
                </div>
                  }

                {video &&
                    <div className='video-container'>
                    <ReactPlayer 
                        muted
                        url={video} 
                        loop={true}
                        controls
                        className='react-player'
                        playing
                        width='100%'
                        height='100%'
                        />
                        <div className='video-fallback'>
                         <img src={videoFallback} alt={title} />
                        </div>
                    </div>
                }
            </div>
        </article>
    )
}

export default Card;