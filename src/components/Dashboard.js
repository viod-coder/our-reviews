import React, { useState } from 'react'
import './Dashboard.css'
import data from '../data'
import Person from './Person'

const Dashboard = () => {
  const [people] = useState(data)
  const [index, setIndex] = useState(0)

  const decrease = () => {
    index === 0
      ? setIndex(people.length - 1)
      : setIndex((index - 1) % people.length)
  }
  const increase = () => {
    setIndex((index + 1) % people.length)
  }
  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * Math.floor(people.length)))
  }
  return (
    <section>
      <header>
        <h1>Our reviews</h1>
        <div className='line'></div>
      </header>
      <Person
        {...people[index]}
        moveLeft={decrease}
        moveRight={increase}
        surprise={randomPerson}
      />
    </section>
  )
}

export default Dashboard
