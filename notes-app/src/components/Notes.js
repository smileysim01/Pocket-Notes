import styles from './Notes.module.css';
import arrow from '../assets/arrow.png';
import back from '../assets/back.png';
import { useEffect, useState } from "react";

function Notes(selectedGroup, notesGroups, setNotesGroups) {
    const [width, setWidth] = useState(window.innerWidth);
    const group = selectedGroup.selectedGroup;
    const [newNote, setNewNote] = useState('');
    
    // checking device size to make it responsive
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    function handleChange(e) {
        setNewNote(e.target.value);
    };

    function handleSubmit() {

    }
  return (
    <div className={styles.container}>
        {/*Header*/}
        <div className={styles.header}>
            {
            (width < '720') ? (
            <>
                <img id={styles.backImg} src={back} alt='back' onClick={() => {window.location.reload()}} />
                <div id={styles.groupIcon} style={{backgroundColor: group.color}}>
                {group.groupName?.split(' ').
                filter((word,index) => index ===0 || index === group.groupName.split(' ').length-1).
                map((word) => word.charAt(0)).join('').toUpperCase()}
                </div>
                <span id={styles.groupName}>{group.groupName}</span>
            </>) :
            (<>
                <div id={styles.groupIcon} style={{backgroundColor: group.color}}>
                {group.groupName?.split(' ').
                filter((word,index) => index ===0 || index === group.groupName.split(' ').length-1).
                map((word) => word.charAt(0)).join('').toUpperCase()}
                </div>
                <span id={styles.groupName}>{group.groupName}</span>
            </>)}
        </div>
        {/*Typing Section*/}
        <div className={styles.newNote}>
            <textarea id={styles.textArea} type='text' placeholder='Enter your text here...........' value={newNote} onChange={handleChange}></textarea>
            <img id={styles.sendImg} src={arrow} alt="Send" onClick={handleSubmit}/>
        </div>

    </div>
  )
}

export default Notes
