"use client"
import React, { useState } from "react";
import Input from "../components/Input";
import Link from "next/link";

const defaultData = { name:"", username:"", password:""};

const Profile = () => {
    const[data, setData] = useState(defaultData);


    const onValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value  })
    }

    const onLogout = (e) => {
        e.preventDefault();

      


    }


  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12">
          <h1 className="text-2xl mb-4 text-center">Home Page</h1>
        
          
          <p className="mb-3"> Welcome to HOMEPAGE Thank you<br /> Welcome to HOMEPAGE Thank you</p>
          

        <button onClick={(e) => onLogout(e)} className="bg-red-600 hover:bg-red-400 text-white py-2 px-4 mb-3 rounded-full w-full">

            Logout

        </button>

     

        
        </div>
      </div>
    </>
  );
};

export default Profile;
