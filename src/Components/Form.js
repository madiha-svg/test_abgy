import React, { useState } from "react";


const Form = () => {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {

        if(!newItem){
            alert("please ente a value");
        }
       const item = {
        id: Math.floor(Math.random()*1000),
        value: newItem
       };
       setItems(oldList=>[...oldList,item]);
       setNewItem("");
       console.log(items);
    }

    function deleteItem(id) {
        const newArray = items.filter(item=>item.id!=id)
        setItems(newArray);

    }
    return (
        <div>
        <input type="text" placeholder="Enter a value..." value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        <button onClick= {addItem}>Add</button>
        <ul>
            {items.map(item=> {
                return(
                    <li key ={item.id}>{item.value} <button onClick ={()=>deleteItem(item.id)}>delete</button></li>
                )
            })}
        </ul>
        </div>
        
    )
}

export default Form;