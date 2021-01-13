import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import { Header } from './components/ui/Header'
import NavBar from './components/ui/NavBar'
import CharacterGrid from './components/characters/CharacterGrid'
import { Search } from './components/ui/Search'
const App = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setData(response.data)
      setLoading(false)
    }
    fetchData()
  }, [query])

  return (
    <div>
      <NavBar />

      
      <Search getQuery={() => setQuery()} />
      <CharacterGrid isLoading={isLoading} data={data} />
    </div>
  )
}

export default App
