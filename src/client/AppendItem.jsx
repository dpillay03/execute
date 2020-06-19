import React from 'react';
import { IoIosCheckmarkCircle, IoMdTrash } from "react-icons/io";
import './AddItem';
import './listItem.css';

export default function AppendItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>

            <input className="updateField" type="text" id={item.key} value={item.text} onChange={(e) => {
                props.updateItem(e.target.value, item.key)}}></input>
            <IoIosCheckmarkCircle />
            <IoMdTrash onClick={() => { props.deleteItem(item.key) }} />
        </div>
    })
    return (
        <div>{listItems}</div>
    )
}
