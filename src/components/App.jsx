import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [list,setList] = useState([])
  //add new note to the list
  function addNote(note){
    setList(prev=>([...prev,note]))
  }
  function deleteNote(key){
    setList(prev=>(
      prev.filter((item,index)=>(
        index !== key)
      )))}
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {
        list.map((item,index)=>(<Note key={index} id={index} title={item.title} content={item.content} deleteNote={deleteNote}/>))
      
      }
      <Footer />
    </div>
  );
}

export default App;