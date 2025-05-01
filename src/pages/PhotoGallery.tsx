import React from 'react'

const images = import.meta.glob<string>('../assets/BeforeAfterPics/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default',
});


const imageArray = Object.values(images)

const PhotoGallery = () => {

    console.log(imageArray)
    return (
        <div>
            <h1 className='text-white text-center pt-[30px] pb-[30px]'>
                Gallery page
            </h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                {imageArray.map((srcId, index) => (
                    <div className='flex justify-center'>
                        <img className="h-[150px] md:h-[400px]" key={index} src={srcId} alt={`Image ${index}`} />
                    </div>
                ))}
            </div>
            <div>
                .
            </div>
        </div>
    )
}

export default PhotoGallery
