"use client";

import { useState } from "react";
import { registerUser } from "../../services/api";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await registerUser({
        username,
        email,
        password
      });

      alert("Registration successful");

      router.push("/login");

    } catch (error) {

      alert("Registration failed");

    }

  };

  return (

    <div style={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>

      <div style={{
        width:"350px",
        background:"white",
        padding:"40px",
        borderRadius:"10px",
        boxShadow:"0 5px 20px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{textAlign:"center",marginBottom:"30px"}}>
          Create Account
        </h2>

        <input
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button
          onClick={handleRegister}
          style={{width:"100%"}}
        >
          Sign Up
        </button>

        <p style={{marginTop:"20px",textAlign:"center"}}>

          Already have an account?

          <span
            style={{color:"#2563eb",cursor:"pointer"}}
            onClick={()=>router.push("/login")}
          >
            {" "}Login
          </span>

        </p>

      </div>

    </div>

  );
}