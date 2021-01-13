import React, { useState } from 'react'

export const Search = ({ getQuery }) => {
  const [search, setSearch] = useState('')

  const handleChange = (q) => {
    setSearch(q)
    getQuery(q)
  }
  return (
    <section className='search'>
      <form

      >
        <input
          type='text'
          placeholder='Search charaters'
          className='form-control'
          onChange={handleChange}
          value={search}
        />
      </form>
    </section>
  )
}
