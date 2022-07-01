import './update.css';
import NavBar from './NavBar';
import Footer from "./Footer";
import React, { useEffect, useState } from 'react'
function App() {
  const [users, setUser] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setUserId(resp[0].id)
      })
    })
  }

  function selectUser(id)
  {
    let item=users[id-1];
        setName(item.name)
        setEmail(item.email)
        // setMobile(item.mobile);
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={name,email}
    console.warn("item",item)
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        // alert("must be updated",userId)
        getUsers()
      })
    })
    
  }
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <div className='mine'>
      <h1>Update User Data With API </h1></div> <br/>
      <table border="0" style={{ float: 'left' }}>
        <tbody>
          <tr className='xx'>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            
            <td colSpan={2}>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                
                
                <td><button onClick={() => selectUser(item.id)}>Edit</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div className='fm'>
        <h2>UPDATE FORM</h2><br/>
      <input type="text" value={userId} onChange={(e)=>{setUserId(e.target.value)}} /> <br /><br />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /><br />
        {/* <input type="text" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}} /> <br /><br /> */}
       <br/> <button onClick={updateUser} className='update' >Update User</button>  
      </div><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}
export default App;