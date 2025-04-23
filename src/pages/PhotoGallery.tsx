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
            <h1>
                Gallery page
            </h1>
            <div>
                {imageArray.map((srcId, index) => (
                    <img key={index} src={srcId} alt={`Image ${index}`} />
                ))}
            </div>
        </div>
    )
}

export default PhotoGallery
