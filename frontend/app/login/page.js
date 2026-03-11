"use client";

import { useState } from "react";
import { loginUser } from "../../services/api";
import { saveToken } from "../../utils/auth";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await loginUser({
        email,
        password
      });

      saveToken(res.data);

      router.push("/dashboard");

    } catch (error) {

      alert("Invalid login");

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
          Login
        </h2>

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
          onClick={handleLogin}
          style={{width:"100%"}}
        >
          Login
        </button>

        <p style={{marginTop:"20px",textAlign:"center"}}>

          Don't have an account?

          <span
            style={{color:"#2563eb",cursor:"pointer"}}
            onClick={()=>router.push("/register")}
          >
            {" "}Sign Up
          </span>

        </p>

      </div>

    </div>

  );
}