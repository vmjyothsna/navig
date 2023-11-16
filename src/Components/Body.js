import React, { useState } from 'react'

import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])

    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?auto=compress&cs=tinysrgb&w=200' alt=""/> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>output : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=RLzC55ai0eo&pp=ygUMaGVlcml5ZSBzb25n'} height={400} controls />
                <div>
                    <p>The song </p>
                </div>
            </div>
        </div>
    )
}
export default Body