import Carousel from 'react-bootstrap/Carousel';


const TextCarousel = () => {
    return (
        <div className="absolute md:h-[500px] md:w-[100%] h-[300px] w-[100%] lg:h-[700px] lg:w-[100%] z-10 bg-transparent">
            <Carousel className='bg-transparent' fade={false} interval={null}>
                <Carousel.Item className='h-[300px] w-[100%] lg:h-[700px] lg:w-[100%] md:h-[500px] md:w-[100%] self-center' >
                    <Carousel.Caption className='flex flex-col items-center justify-center h-[300px] lg:h-[700px] '>
                        <h3 style={{textShadow:"1px black"}} >Want to make a change? We'll take the responsibility to get you there!</h3>
                        <p>--Korean stuff--</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='h-[300px] w-[100%] lg:h-[700px] lg:w-[100%] md:h-[500px] md:w-[100%]'>

                    <Carousel.Caption className='flex flex-col items-center justify-center h-[300px] lg:h-[700px]'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
        
            </Carousel>
        </div>

    )
}

export default TextCarousel
