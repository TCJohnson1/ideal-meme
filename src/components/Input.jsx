import React, {useState} from 'react'

export default function Input(props) {
      const [input, setInput] = useState('')

      const handleChange = e =>{
            setInput(e.target.value)
      };
      const handleSubmit = e => {
            e.preventDefault();

      props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
      });
      setInput('')
      };

      return (
            <form className="to-do-input" onSubmit={handleSubmit}>
                  <input 
                  type="text" 
                  placeholder= "Add to list" 
                  value={input} 
                  name="text" 
                  onChange={handleChange}
                  />
                  <button className="to-do-button">Add To List</button>
            </form>
      )
}