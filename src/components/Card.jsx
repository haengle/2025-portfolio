import React, { useState } from 'react';
import ReactPlayer from 'react-player/file';
import '../css/card.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 


const Card = (props) => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const { 
        siteLink, 
        image, 
        imageDesc, 
        title, 
        summary, 
        video, 
        videoFallback,
        codeJs, 
        codeCss 
    } = props;

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
                    <FontAwesomeIcon icon={solid('external-link-alt')} />
                    </a>        
                    }
                    {hasCode &&
                    <button className='code-button' onClick={onOpenModal}>Code snippet<FontAwesomeIcon icon={solid('code')} /></button>
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