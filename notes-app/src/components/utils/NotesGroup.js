import styles from './NotesGroup.module.css';

function NotesGroup({notesGroups, setSelectedGroup}) {
    const handleClick = (grp) => {
        setSelectedGroup(grp);
    };

  return (
    <div className={styles.container}>
      <div className={styles.notesGroups}>
            {notesGroups.map((grp) => (
                <div className={styles.notesGr} id={styles.noteGroup} key={grp.id} onClick={()=>handleClick(grp)}>
                    <div id={styles.groupIcon} style={{backgroundColor: grp.color}}>
                        {grp.groupName?.split(' ').filter((word,index) => index ===0 || index === grp.groupName.split(' ').length-1).map((word) => word.charAt(0)).join('').toUpperCase()}
                    </div>
                    <span id={styles.groupName}>{grp.groupName}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NotesGroup
