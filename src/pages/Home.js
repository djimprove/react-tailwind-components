import React from 'react'
import Heading from '../components/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className="flex flex-col">
    <h1 className="text-6xl">Headers</h1>
    <Heading icon={<FontAwesomeIcon  icon={faCoffee} ></FontAwesomeIcon>} text="Heading component" size="6xl " type="primary" className="shadow-lg p-4"></Heading>
    </div>
  )
}

export default Home
