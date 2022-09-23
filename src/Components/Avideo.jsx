import React from 'react'

const src = 'https://www.avisare.com/wp-content/uploads/2022/08/Avisare-Website-Bkgrd-Video_COMPRESSED.mp4'
const Avideo = () => {
  return (
    <>
        <video loop autoPlay muted height='100%' width='100%'>
        <source src={src} type="video/mp4"/>
        </video>
    </>
  )
}

export default Avideo
