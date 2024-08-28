import styles from './NotesGroup.module.css';

function NotesGroup({notesGroups, setSelectedGroup}) {
    const handleClick = (group) => {
        setSelectedGroup(group);
    };
  return (
    <div className={styles.container}>
      <div className={styles.notesGroups}>
            {notesGroups.map((group) => (
                <div className={styles.notesGr} id={styles.noteGroup} key={group.id} onClick={()=>handleClick(group)}>
                    <div id={styles.groupIcon} style={{backgroundColor: group.color}}>
                        {group.groupName?.split(' ').filter((word,index) => index ===0 || index === group.groupName.split(' ').length-1).map((word) => word.charAt(0)).join('').toUpperCase()}
                    </div>
                    <span id={styles.groupName}>{group.groupName}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NotesGroup
