import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt="possibility" />
      </div>

      <div className='gpt3__possibility-container'>
        <p className='gpt3__possibility-container_blue-link'>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p className='gpt3__possibility-container_text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='gpt3__possibility-container_orange-link'>Request Early Access to Get Started</p>
      </div>

    </div>
  )
}

export default Possibility