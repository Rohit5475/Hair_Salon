import API from "../utils/axios";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({});

  const submit = async () => {
    const res = await API.post("/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/";
  };

  return (
    <>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button onClick={submit}>Login</button>
    </>
  );
}
