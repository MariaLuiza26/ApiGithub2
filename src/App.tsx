import axios from "axios"
import {useState} from "react"
import "./App.css"

type GithubData = {
  name:string;
  bio:string;
  avatar_url:string
}

function App() {
  const [username,setUsername] = useState("")
  const [name,setName] = useState("loading...")
  const [bio,setBio] = useState("loading...")
  const [avatar_url,setAvatarURL] = useState("loading...")

 const handlePesquisa = () => {
  if (!username.trim()) {
    alert('Digite um nome de usuário válido!');
    return;
  }
  axios.get<GithubData>(`https://api.github.com/users/${username}`).then((responce) => {
    setName(responce.data.name)
    setBio(responce.data.bio)
    setAvatarURL(responce.data.avatar_url)
  })
 }


  return (
    <div className="container-geral">
      <div className="container">
        <header></header>
        <main>
          <div className="form">
            <h1>Consumindo Api do Github</h1>
            <input type="text" placeholder="Digite o usuário" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handlePesquisa}>Consultar</button>
          </div>
          <div className="conteudo">
            <img src={avatar_url} alt="" />
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
