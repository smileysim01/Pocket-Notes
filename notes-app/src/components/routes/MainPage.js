import styles from "./MainPage.module.css";
import bg from "../../assets/mainPagebg.png";
import lock from "../../assets/lock.png";
import { useEffect, useState } from "react";
import NewGroup from "../NewGroup";
import {useNavigate} from 'react-router-dom';
import Popup from 'reactjs-popup';
import NotesGroup from "../utils/NotesGroup";
import Notes from "../Notes";

function MainPage() {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [notesGroups,setNotesGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);
    // checking device size to make it responsive
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    //local storage for notesGroups
    useEffect(() => {
        let storedGroups = localStorage.getItem('notesGroups');
        if(storedGroups) {
            setNotesGroups(JSON.parse(storedGroups));
        }
    }, []);
    
    
  return (
    <div className={styles.container}>

      {
        (width < '720') ? (
          //Mobile Left(only) container
            (selectedGroup ? 
              (<Notes selectedGroup={selectedGroup} notesGroups={notesGroups} setNotesGroups={setNotesGroups} width={width}/>) : 
              (
                <div className={styles.left} id={styles.mobileContainer}>
                  <div id={styles.header}>Pocket Notes</div>
                  <button id={styles.addBtn} onClick={() => setIsPopupOpen(true)}>+</button>
                  <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                      <NewGroup setIsPopupOpen={setIsPopupOpen} notesGroups={notesGroups} setNotesGroups={setNotesGroups} width={width}/>
                  </Popup>
                  {isPopupOpen && <div id={styles.onPopup}></div>}
                  <NotesGroup notesGroups={notesGroups} setSelectedGroup={setSelectedGroup}/>
                </div>
              )
            )
        ) :
        (
        //Desktop Containers  
          <>
          {/*Left Desktop Container*/}
            <div className={styles.left}>
              <div id={styles.header}>Pocket Notes</div>
              <button id={styles.addBtn} onClick={() => setIsPopupOpen(true)}>+</button>
              <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                  <NewGroup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} onClose={() => setIsPopupOpen(false)} notesGroups={notesGroups} setNotesGroups={setNotesGroups} width={width}/>
              </Popup>
              {isPopupOpen && <div id={styles.onPopup}></div>}
              <NotesGroup notesGroups={notesGroups} setSelectedGroup={setSelectedGroup} />
            </div>
          {//Right Desktop Container
            (selectedGroup) ? 
            (<Notes selectedGroup={selectedGroup} notesGroups={notesGroups} setNotesGroups={setNotesGroups} width={width}/>) : 
            (<div className={styles.right}>
              <div className={styles.contentBox}>
                <img src={bg} alt="Background" />
                <div id={styles.header}>Pocket Notes</div>
                Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone
              </div>
              <div className={styles.footer}>
                <img src={lock} alt="Lock" /> end-to-end encrypted
              </div>
            </div>
            )
          }
          </>
        )
      }

    </div>
  )
}

export default MainPage;
