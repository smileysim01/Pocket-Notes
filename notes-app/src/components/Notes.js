import styles from './Notes.module.css';
import arrow from '../assets/arrow.png';
import arrowActive from '../assets/arrowActive.png';
import back from '../assets/back.png';
import { useEffect, useState } from "react";

function Notes({selectedGroup, notesGroups, setNotesGroups, width}) {
    const [newNote, setNewNote] = useState('');

    function handleChange(e) {
        setNewNote(e.target.value);
    };

    function handleSubmit() {
        if(!newNote.trim()){
            return
        }
        let updatedNotesGroup = [...notesGroups];
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
        const formattedTime = currentDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }).replace('am', 'AM').replace('pm', 'PM');;
        updatedNotesGroup[selectedGroup.id]['notes'].push([
            newNote, formattedDate, formattedTime,
        ]);
        localStorage.setItem('notesGroups', JSON.stringify(updatedNotesGroup));
        setNotesGroups(updatedNotesGroup);
        setNewNote("");
    };

    function handleEnter(e) {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

// console.log(notesGroups,selectedGroup.notes)
  return (
    <div className={styles.container}>
        {/*Header*/}
        <div className={styles.header}>
            {
            (width < '720') ? (
            <>
                <img id={styles.backImg} src={back} alt='back' onClick={() => {window.location.reload()}} />
                <div id={styles.groupIcon} style={{backgroundColor: selectedGroup.color}}>
                {selectedGroup.groupName?.split(' ').
                filter((word,index) => index ===0 || index === selectedGroup.groupName.split(' ').length-1).
                map((word) => word.charAt(0)).join('').toUpperCase()}
                </div>
                <span id={styles.groupName}>{selectedGroup.groupName}</span>
            </>) :
            (<>
                <div id={styles.groupIcon} style={{backgroundColor: selectedGroup.color}}>
                {selectedGroup.groupName?.split(' ').
                filter((word,index) => index ===0 || index === selectedGroup.groupName.split(' ').length-1).
                map((word) => word.charAt(0)).join('').toUpperCase()}
                </div>
                <span id={styles.groupName}>{selectedGroup.groupName}</span>
            </>)}
        </div>
        {/*Old Notes Section*/}
        <div className={styles.oldNotes}>
            {selectedGroup.notes && selectedGroup.notes.map((note,index) => (
                <div id={styles.notes}>
                    <p key={index}>{note[0]}</p>
                    <p id={styles.dateTime} key={index}>{note[1]} <span></span> {note[2]}</p>
                </div>
            ))}
        </div>
        {/*Typing Section*/}
        <div className={styles.newNote}>
            <textarea id={styles.textArea} type='text' placeholder='Enter your text here...........' value={newNote} onChange={handleChange} onKeyDown={handleEnter}></textarea>
            <img id={styles.sendBtn} src={newNote?arrowActive:arrow} alt="Send" onClick={handleSubmit}/>
        </div>

    </div>
  )
}

export default Notes
