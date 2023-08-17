import React, { useState } from 'react'
import { Profile } from '../data'
import BirthDayList from './BirthDayList'

const BirthList = () => {
    const [people, setpeople] = useState(Profile)

    const ClearList = () => {
        setpeople([])
    }

  return (
    <main>
    <div className='container'>
        <ul className='One'>
            <h2>{people.length} BIRTHDAYS TODAY</h2>
            {people.map((value) => {
                return(
                <   BirthDayList key={value.id} {...value}/>
             )
            })}
            <button className='btn' onClick={ClearList}>Clear All</button>
        </ul>
    </div>
    </main>
  )
}

export default BirthList