
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{name: "", age:""}])

  const handleInput = (ind, e)=>{
    const {name, value} = e.target;
    const newFields = [...fields];
    newFields[ind][name] = value;
    setFields(newFields);
  }
  const addField = ()=>{
    setFields([...fields, {name:"", age:""}]);
  }
  const removeField = (index)=>{
    const newFields = fields.filter((el, i) => i!==index);
    setFields(newFields);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(fields);
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <input type="text" name="name" placeholder="name" value={field.name} onChange={(e) => handleInput(index,e)} />
              <input type="number" name="age" placeholder="age" value={field.age} onChange={(e) => handleInput(index,e)} />
              <button type="button" onClick={()=>removeField(index)}>Remove</button>
            </div>  
          ))}
            <button type="button" onClick={addField}>Add Field</button>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
