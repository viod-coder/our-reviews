import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const Person = ({ name, image, job, text, moveLeft, moveRight, surprise }) => {
  return (
    <article>
      <div className='img-container'>
        <FaQuoteRight className='icon' />
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <h3 className='blue'>{job}</h3>
      <p>{text}</p>
      <div className='butoane'>
        <button onClick={moveLeft}>
          <BsChevronLeft />
        </button>
        <button onClick={moveRight}>
          <BsChevronRight />
        </button>
      </div>
      <button className='surprise' onClick={surprise}>
        Surprise me
      </button>
    </article>
  )
}

export default Person
