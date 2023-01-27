import React, { useState}from "react";
import Test from "./Test";
import UserDetails from "./UserDetails";
import "./style.css"


const AllUserList = () => 
{
    let [state, setState] = useState({ 
        name: "Saurav kumar",});

    // making a list.
    let allUsers = [
        {
            name: " deepak", email:"deep@mail.com",
            phone: "987654345",
        },
        {
            name: " deep", email:"deepak@mail.com",
            phone: "765434567",
        },
        { 
            name: " divyansh", email:"divyansh@mail.com",
            phone: "765434567",
        },
    ];
    
    let setStateName = (name) => {
        setState({...state, name});
    };
     return (
        <div  className="saurav">
            <Test name ={state.name} setName={setStateName} />
            {
            allUsers.map((user,index) => (
                <UserDetails key={index} user={user} />
            ))}
        </div>
     );
    
    };
export default AllUserList;