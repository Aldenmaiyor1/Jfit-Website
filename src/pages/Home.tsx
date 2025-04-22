import React from 'react'
import HomeImage from "../assets/Home_Image.png"
import repsImage from "../assets/CertificationPhotos/REPS.jpeg"
import NASMImage from "../assets/CertificationPhotos/NASM.png"
import redCrossImage from "../assets/CertificationPhotos/new zealand red cross.png"
import ISSAImage from "../assets/CertificationPhotos/ISSa.png"
import baImage1 from "../assets/BeforeAfterPics/483806350_688127143919537_3140524181447627788_n.jpg"
import baImage2 from "../assets/BeforeAfterPics/482527077_1009951511314983_6790662140455018492_n.jpg"
import baImage3 from "../assets/BeforeAfterPics/490988773_1447971729530712_3813854608345742112_n.jpg"

const Home = () => {
    return (
        <div>
            <img src={HomeImage} className=' md:w-[100%] md:h-[700px] object-cover' />

            <div >
                <h1 className='text-5xl font-extrabold'>BEFORE/AFTER</h1>
                <div className='flex flex-row overflow-scroll'>
                    <img className='h-[200px]' src={baImage1} />
                    <img className='h-[200px]' src={baImage2} />
                    <img className='h-[200px]' src={baImage3} />
                </div>
            </div>

            <div>
                <img src={NASMImage} />
                <img src={redCrossImage} />
                <img src={ISSAImage} />
                <img src={repsImage} />
            </div>
        </div>
    )
}

export default Home
