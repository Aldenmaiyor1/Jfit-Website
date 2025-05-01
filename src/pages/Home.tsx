import React from 'react'
import HomeImage from "../assets/Home_Image.png"
import repsImage from "../assets/CertificationPhotos/REPS.png"
import NASMImage from "../assets/CertificationPhotos/NASM.png"
import redCrossImage from "../assets/CertificationPhotos/new zealand red cross.png"
import ISSAImage from "../assets/CertificationPhotos/ISSa.png"
import baImage1 from "../assets/BeforeAfterPics/483806350_688127143919537_3140524181447627788_n.jpg"
import baImage2 from "../assets/BeforeAfterPics/482527077_1009951511314983_6790662140455018492_n.jpg"
import baImage3 from "../assets/BeforeAfterPics/490988773_1447971729530712_3813854608345742112_n.jpg"
import TextCarousel from '../components/TextCarousel'

const Home = () => {
    return (
        <div>
            <div className='relative'>

                <TextCarousel />

                <img src={HomeImage} className='h-[300px] md:w-[100%] md:h-[700px] object-cover' />
            </div>

            <div >
                <h1 className='text-5xl font-extrabold text-white text-center'>BEFORE/AFTER</h1>
                <div className='flex flex-row overflow-scroll'>
                    <img className='h-[200px]' src={baImage1} />
                    <img className='h-[200px]' src={baImage2} />
                    <img className='h-[200px]' src={baImage3} />
                </div>
            </div>


            <div className='flex flex-wrap w-[100%]'>
                <img className="w-1/2" src={NASMImage} />
                <img className="w-1/2" src={redCrossImage} />
                <img className="w-1/2" src={ISSAImage} />
                <img className="w-1/2" src={repsImage} />
            </div>

            <div className='bg-[#010101]'>
                f
            </div>
        </div>
    )
}

export default Home
