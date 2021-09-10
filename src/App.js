import React, { useState } from 'react';
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Footer from './components/Footer';
import Note from './components/Note'
import KeepNotes from './components/KeepNotes';

const App=()=>{

  const [addItem, setAddItem] = useState([]);
  const addNote =(notes)=>{
    setAddItem((prevData)=>{
      return [...prevData, notes]
    })
    console.log(notes);
  }
  const onDelete =(id)=>{
    setAddItem((oldItem)=>
      oldItem.filter((currentIndex, indx)=>{
        return indx !== id;
      })
    )
  }
  return(
    <>
      <Header/>
      <Note passNote={addNote}/>

    {  addItem.map((val, index)=>{
        return <KeepNotes
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
      {/* <Footer/> */}
    </>
  )
}
export default App;