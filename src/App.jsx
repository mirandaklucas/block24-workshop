import './App.css'
import {puppyList} from './data.js'
import { useState } from 'react'
import './path-to-css.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featuredPuppyId, setFeaturedPuppyId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featuredPuppyId)

  console.log("puppyList:", puppyList)

    return (
      <>
        <div className='all'>
          <section className='puppyNames'>
            {puppies.map((puppy) => {
              return (
              <p onClick={()=>{setFeaturedPuppyId(puppy.id)}} key={puppy.id}>
                {puppy.name}
              </p>)})
              }
            </section>
          {featuredPuppyId && (
            <section className='selectedPuppy'>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </section>
          )}
        </div>
      </>
    )
  }


export default App
