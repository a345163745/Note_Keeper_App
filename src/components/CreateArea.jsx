import React,{useState} from "react";

function CreateArea(props) {
  const [note,setNote] = useState({
    title:"",
    content:""
  });

  //preserve the note input 
  function handleChange(e){
    const {value,name} = e.target;
    setNote(prev=>({...prev,[name]:value}));
    console.log(note)
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={note.title} onChange={(e)=>{handleChange(e)}}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={(e)=>handleChange(e)}/>
        <button onClick={e=>{
          e.preventDefault(); 
          props.addNote(note)
          }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;