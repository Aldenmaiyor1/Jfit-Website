import React from 'react'
import JayPhoto from "../assets/JayFit_About_Photo.jpg"

const About = () => {
    return (
        <div className='border-black'>
            <div className='flex flex-col'>
                <img className='mt-[30px] self-center' src={JayPhoto} />

                <div className='flex flex-col items-center px-[10px]'>
                    <div className='bg-gray-900 mx-[15px] !my-[15px] p-[10px] border-b-gray-800 rounded-2xl w-[100%]'>
                        <h1 className='text-3xl font-bold text-white text-center'>About us</h1>
                        <p className='text-white'>
                            Based on theories such as NASM, ISSA, and anatomy, we aim for healthy training that reduces the risk of injury and increases exercise efficiency through numerous experiences and careers.

                            We are setting up training for various purposes by conducting scientific exercise programming according to each member's purpose and physical fitness level.

                            Classes are conducted that consider the proportional factors of the body, not just muscle exercises.
                        </p>
                    </div>

                    <div className='bg-gray-900 mx-[15px] mb-[50px] p-[10px] border-b-gray-800 rounded-2xl w-[100%]'>
                        <h1 className='text-3xl font-bold text-white text-center !mb-[20px]'>Certifications</h1>
                        <p className='text-white text-center'>
                            23' ICN Men's Fitness Overall Champion
                            <br></br>
                            23' ICN Mens Fitness Open,Novice 1st
                            <br></br>
                            20' ICN Men's Fitness Open,Novice 2nd
                            <br></br>
                            20'23' INBA Sports model Open class 3rd
                            <br></br>
                            -ISSA CPT / Fitness Coach Certified
                            <br></br>
                            -ISSA Nutritionist Certified
                            <br></br>
                            -NASM CPT Certified
                            <br></br>
                            -REPS Registered
                            <br></br>
                            -First aid Certified
                            <br></br>
                            -Personal Trainer in Korea 2017~2018
                            <br></br>
                            -CityFitness Trainer 2019~ing
                        </p>
                    </div>
                    <div>
                        sdg
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
