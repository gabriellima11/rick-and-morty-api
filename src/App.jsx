
import { Header } from "./components/header"
import { Footer } from "./components/footer"
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

  const fetchNextPage = (url) =>{
    fetchData(url)
  }

  const fetchPreviousPage = (url) =>{
    fetchData(url)
  }

  return (
    <>
      <Header />
      <BackgroundImg />
      <CharacterList data={data} 
      fetchNextPage = {(url) => fetchNextPage(url)}
      fetchPreviousPage = {(url) => fetchPreviousPage(url)}
      />
      <Footer />
    </>
  )
}

export default App
