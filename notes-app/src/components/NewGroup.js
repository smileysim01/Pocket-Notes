import { useEffect, useState } from 'react';
import styles from './NewGroup.module.css';

function NewGroup({setIsPopupOpen,notesGroups,setNotesGroups}) {
    const presetColors = ["#B38BFA","#FF79F2","#43E6FC","#F19576", "#0047FF","#6691FF"];
    const [groupInfo, setGroupInfo] = useState({
        groupName: '',
        color: '',
    });

    function handleChange(e){
        e.preventDefault();
        setGroupInfo((prev)=>({...prev, [e.target.name]: e.target.name=='color' ? e.target.getAttribute('color') : e.target.value }))
    }
    function handleSubmit(e){
        if (!groupInfo.color){
            alert('Please select a color');
            return;
        }
        let newGroup = [...notesGroups, {groupName: groupInfo.groupName, color: groupInfo.color, notes: [], id: notesGroups.length}];
        setNotesGroups(newGroup);
        localStorage.setItem('notesGroups',JSON.stringify(newGroup));
        setIsPopupOpen(false);
    }

  return (
    <div className={styles.container}>
      <div id={styles.heading}>Create New group</div>
      <form onSubmit={handleSubmit}>
        <label>Group Name </label>
        <input type="text" name='groupName' placeholder="Enter group name" value={groupInfo.groupName} onChange={handleChange} required/><br />
        <label>Choose colour </label>
        {presetColors.map((color,index) => (
            <button name='color' color={color} key={index} id={styles.colorBtn} style={{
                height: '1rem',
                width: '1rem',
                background: color,
                borderRadius: '100%',
                border: 'none',
                marginRight: '0.51rem'  
            }} onClick={handleChange} required></button>
        ))} <br />
        <button id={styles.createBtn}>Create</button>
      </form>
    </div>
  )
}

export default NewGroup
