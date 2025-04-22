import React from 'react'
import HomeImage from "../assets/Home_Image.png"

const Home = () => {
    return (
        <div>
            <img src={HomeImage} className=' md:w-[100%] md:h-[700px] object-cover'/>
        </div>
    )
}

export default Home
