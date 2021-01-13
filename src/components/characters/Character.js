import React from 'react'

export default function Character({ character }) {
  const { name, status, img, portrayed, nickname, birthday } = character
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={img} alt={nickname} srcset='' />
        </div>
        <div className='card-back'>
          <h1>{nickname}</h1>
          <ul>
            <li>
              <strong>Actor's Name : </strong>
              {portrayed}
            </li>
            <li>
              <strong>Cast Name : </strong>
              {name}
            </li>
            <li>
              <strong>Actor's NickName : </strong>
              {nickname}
            </li>
            <li>
              <strong>Birthday : </strong>
              {birthday}
            </li>
            <li>
              <strong>Status : </strong>
              {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
