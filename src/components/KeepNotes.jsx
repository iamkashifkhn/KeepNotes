import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const KeepNotes=(props)=>{
const deleteNote =(id)=>{
    props.deleteItem(props.id);
}
return(
    <React.Fragment>
        <div className="note">
            <h1> {props.title} </h1>
            <p> {props.content} </p>
            <button className="btn" onClick={deleteNote}>
                <DeleteIcon className="deleteIcon"/>
            </button>
        </div>
    </React.Fragment>
)
}
export default KeepNotes;