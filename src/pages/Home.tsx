import React from 'react'
import HomeImage from "../assets/Home_Image.png"
import repsImage from "../assets/CertificationPhotos/REPS.png"
import NASMImage from "../assets/CertificationPhotos/NASM.png"
import redCrossImage from "../assets/CertificationPhotos/new zealand red cross.png"
import ISSAImage from "../assets/CertificationPhotos/ISSa.png"
import baImage1 from "../assets/BeforeAfterPics/482977286_2498148860533310_8779842121047667045_n.jpg"
import baImage2 from "../assets/BeforeAfterPics/491295558_10028177130546756_1977342796225078057_n.jpg"
import baImage3 from "../assets/BeforeAfterPics/491024876_1399760217694967_9085287870948982458_n.jpg"
import baImage4 from "../assets/BeforeAfterPics/491022060_3814366938780244_8028907897400521580_n.jpg"
import baImage5 from "../assets/BeforeAfterPics/490986400_687094897348663_149443216634239436_n.jpg"
import baImage6 from "../assets/BeforeAfterPics/490986458_2051099182036315_3587029622981008114_n.jpg"
import TextCarousel from '../components/TextCarousel'

const Home = () => {
    return (
        <div className='min-h-screen overflow-auto'>
            <div className='relative'>

                <TextCarousel />

                <img src={HomeImage} className='h-[300px] md:h-[500px] md:w-[100%] lg:w-[100%] lg:h-[700px] object-cover' />
            </div>

            <div >
                <h1 className='text-5xl font-extrabold text-white text-center !my-[20px]'>BEFORE/AFTER</h1>
                <div className='flex justify-center'>
                    <div className='flex flex-row overflow-scroll '>
                        <img className='h-[200px]' src={baImage1} />
                        <img className='h-[200px]' src={baImage2} />
                        <img className='h-[200px]' src={baImage3} />
                        <img className='h-[200px]' src={baImage4} />
                        <img className='h-[200px]' src={baImage5} />
                        <img className='h-[200px]' src={baImage6} />
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='flex w-[800px] lg:w-[1000px] mt-[100px] flex-wrap flex-row'>
                    <img className="w-1/2 lg:w-1/4" src={NASMImage} />
                    <img className="w-1/2 lg:w-1/4" src={redCrossImage} />
                    <img className="w-1/2 lg:w-1/4" src={repsImage} />
                    <img className="w-1/2 lg:w-1/4" src={ISSAImage} />
                </div>
            </div>

            <div className='bg-[#010101] md:h-[500px]'>
                h
            </div>
        </div>
    )
}

export default Home
