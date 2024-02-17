
import { Header } from "./components/header"
import { BackgroundImg } from "./components/background"
import { CharacterList } from "./components/character-list"
import { api } from "./api"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([])

  const fetchData = async (url) =>{
    try{
      setData(await api(url))
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() =>{
    fetchData()
  }, [])


  return (
    <>
      <Header />
      <BackgroundImg />
      <CharacterList data={data} />
    </>
  )
}

export default App
