"use client"
import React, { useState } from "react";
import Input from "../components/Input";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";




const Register = () => {
  const[name, setName] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
   

    const router = useRouter();


 

    const onRegister = async(e) => {
        e.preventDefault();

    


        try {
          const response = await fetch('http://localhost:3000/api/users/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name, username, password})
          });
      
          
          if (response.ok) {
              router.push('/login');
          } else {
            throw new Error("Failed to create a Product");
          }
      } catch (error) {
          console.log(error);
      }


    }


  return (
    <>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12">
          <h1 className="text-2xl mb-4 text-center">Register</h1>
         
          <form>
            <Input label="Name" type="text" id="name"     onChange={(e) => setName(e.target.value)}
                value={name} />

            <Input label="Username" type="text" id="username"      onChange={(e) => setUsername(e.target.value)}
                value={username} />

            <Input label="Password" type="password" id="password"      onChange={(e) => setPassword(e.target.value)}
                value={password} />

        <button onClick={(e) => onRegister(e)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mb-3 rounded-full w-full">

            Submit

        </button>

        <p>
            Already have an accont ? {""}
            <Link href="/login" className="text-blue-500  hover:underline">
            Login
            </Link>
        </p>

          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
