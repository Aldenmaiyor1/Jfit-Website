import React from 'react'
import JayPhoto from "../assets/JayFit_About_Photo.jpg"

const About = () => {
    return (
        <div className='border-black'>
            <div className=''>
                <img src={JayPhoto} />

                <div className=''>
                    <div>
                        <h1 className='text-3xl font-bold'>About us</h1>
                        <p>
                            Based on theories such as NASM, ISSA, and anatomy, we aim for healthy training that reduces the risk of injury and increases exercise efficiency through numerous experiences and careers.

                            We are setting up training for various purposes by conducting scientific exercise programming according to each member's purpose and physical fitness level.

                            Classes are conducted that consider the proportional factors of the body, not just muscle exercises.
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-bold'>Certification</h1>
                        <p>
                            23' ICN Men's Fitness Overall Champion
                            23' ICN Mens Fitness Open,Novice 1st
                            20' ICN Men's Fitness Open,Novice 2nd
                            20'23' INBA Sports model Open class 3rd

                            -ISSA CPT / Fitness Coach Certified
                            -ISSA Nutritionist Certified
                            -NASM CPT Certified
                            -REPS Registered
                            -First aid Certified
                            -Personal Trainer in Korea 2017~2018
                            -CityFitness Trainer 2019~ing
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About
