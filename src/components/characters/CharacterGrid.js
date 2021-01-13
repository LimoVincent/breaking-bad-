import React from 'react'
import Spinner from '../ui/Spinner'
import Character from './Character'

function CharacterGrid({ data, isLoading }) {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {data.map((character) => (
        <Character character={character} key={character.char_id} />
      ))}
    </section>
  )
}

export default CharacterGrid
