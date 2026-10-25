import { useState, useRef } from 'react'
import './App.css'
import icon from './assets/icon-bw.png'

import folder1 from './assets/folder1.png'
import folder2 from './assets/folder2.png'
import musicFile from './assets/pahintulot.mp3';

import Letter from './Letter'

function App() {
  const [folderNum, setFolderNum] = useState(folder1);
  const [opened, setOpened] = useState(false);

  const audioRef = useRef(null);

  const toggle = () => {
    if (opened) {
      audioRef.current.pause();
      } else {
      audioRef.current.play();
      }
      setOpened(!opened);
  }

  return (
    <>
      <audio ref={audioRef} src={musicFile} />
      <header>
        <div className='duo'>
          <a
            href={icon}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={icon} className='icon'/>
          </a>

          <h3>RyeDay</h3>
        </div>
      </header>

      <section id="center">
        <div>
          <img 
            src={folderNum} 
            className='folder' 
            onMouseEnter={()=> setFolderNum(folder2)} 
            onMouseLeave={()=> setFolderNum(folder1)} 
            onClick={toggle}
          />
        </div>
        
        <div>
          <p>2026</p>
        </div>
        
      </section>

      {opened ? (
        <>
          <section>
            <Letter />
          </section>
        </>
        ) :
        null
      }
      
      <section id="spacer"></section>
    </>
  )
}

export default App