import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}><br/><br/>
        <h3><b className="add">ADD USER</b></h3>
        <input placeholder="Name" name="name" /><b>h</b>
        <input placeholder="Email" name="email" /><b>h</b>
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
