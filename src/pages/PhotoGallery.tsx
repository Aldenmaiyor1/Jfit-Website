import React from 'react'

const images = import.meta.glob<{ default: string }>('../assets/BeforeAfterPics/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default',
  });
  

  const imageArray = Object.values(images).map((mod) => mod.default);

const PhotoGallery = () => {


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
