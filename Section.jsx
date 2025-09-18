import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <div className='con'>
        <h1 className="heading">Welcome to React</h1>
        <p className="paragraph">1:Websites are made of parts – like header, footer, buttons, forms, etc.
React lets you create these parts as components (small reusable building blocks).<br></br>
2:Components are like Lego blocks – you build small pieces (button, card, navbar) and then combine them to make the full website.
<br></br>
3:React is smart with updates –
Normally, if something changes (like new data), the whole page reloads.
React only updates the specific part that changed, making it fast and smooth.</p>
        

    </div>

  )
}

export default Section