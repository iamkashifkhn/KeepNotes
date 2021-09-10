import React, { useState } from 'react';
import Button from '@material-ui/core/Button'; 
import AddIcon from '@material-ui/icons/Add';

const Note=(props)=>{
    const [expand, setExpand]=useState(false);
    const [notes, setNotes]= useState({
        title:'',
        content:''
    });
    const inputEvent =(event)=>{
        const {name, value}= event.target;

        setNotes((prevData)=>{
            return{
                ...prevData,
                [name]: value,
            };
        });
    };

    const addEvent =()=>{ 
      props.passNote(notes)  
      setNotes({
          title:"",
          content: ""
      })
    };
    const expandIt =()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(true);
    }
    return(
        <React.Fragment>
            <div className="main-note">
                <form>
               {   expand? 
                   <input 
                    type="text" 
                    name="title"
                    value={notes.title}  
                    onChange={inputEvent}
                    placeholder="Title" 
                    autoComplete="off"
                    /> : null }
                    <textarea 
                    name="content"
                    value={notes.content}
                    onChange={inputEvent} 
                    rows=""  cols="" 
                    onClick={expandIt}
                    placeholder="Type something here">
                    </textarea>
              { expand?     <Button color="primary" onClick={addEvent} onDoubleClick={btoNormal}>
                        <AddIcon className="plus-sign"/>
                    </Button> : null }
                </form>
            </div>
        </React.Fragment>
    )
}
export default Note;