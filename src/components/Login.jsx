import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault();
    if(username==="admin" && password==="admin"){
      localStorage.setItem("username",username);
      localStorage.setItem("token",12345);
      navigate("/home",{replace:true})
    } else{
      alert("Invalid credentials!")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}
