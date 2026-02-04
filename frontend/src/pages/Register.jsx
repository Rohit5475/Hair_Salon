import API from "../utils/axios";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({});

  const submit = async () => {
    const res = await API.post("/auth/register", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/";
  };

  return (
    <>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button onClick={submit}>Register</button>
    </>
  );
}
