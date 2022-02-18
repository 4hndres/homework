import React, {useState} from 'react';
import PropTypes from "prop-types";

const LayerApp = () => {
  const [inputValue, setinputValue] = useState ('')
  const [listItems, setlistItems] = useState([])
  let newOne= []
  const handleAdd = (e) => { setinputValue(e.target.value) }

  const handleClick = () => {
    if(inputValue.trim().length > 2)  {
      setlistItems(inputValue.trim().split(","))
    }
  }

  const handleClean = () => {
    listItems.map(item =>{
      if(!newOne.includes(item.trim())){
        newOne.push(item)
      }
      setlistItems(newOne)
    })
    console.log(newOne)
  }

  return <>

    <input type="text" value={inputValue} onChange={handleAdd}></input>
    <button onClick={handleClick}>SPLIT</button>
    <button onClick={handleClean}>CLEAN</button>
    <ol>
      {
        listItems.map(item =>{
          return <li key={item}>{item}</li>
        })
      }
    </ol>
  </>;
};

export default LayerApp;