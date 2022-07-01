import React from 'react'
import './user.css'

const User = ({id,email,name,onDelete,onUpdate}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    const handleUpdate = () => {
         onUpdate(id,name,email);
        // alert("hello cedro",id);
    }
   
   


    return (
        <div className='list' key={id}>
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button onClick={handleUpdate}>edit</button><i>h</i>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User