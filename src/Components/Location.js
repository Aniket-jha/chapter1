import React from 'react'

const Location = () => {
  return (
    <div className='lg:mx-16 mx-4 lg:pt-12 pb-12  ' >
        <div>
      
        <div className='lg:grid grid-cols-2 gap-6 mt-4 grid-flow-col' >
        <div>
        <h4 className='font-[NeueBold] my-1 text-[2.5rem]'>Location</h4>
        <iframe className='w-[100%] my-3 lg:my-0 h-[250px]  lg:h-[300px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.784048897862!2d73.0302992!3d19.0110825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3dde9c5be97%3A0xc877a9113d600ddc!2sChapter%201%20by%20Union%20Co-Living!5e0!3m2!1sen!2sin!4v1718741621357!5m2!1sen!2sin"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        {/* <div >
        <h4 className='font-[NeueBold] my-1 text-[2.5rem]'>Property Tour</h4>
        <iframe className='h-[250px] w-[100%]   lg:h-[300px]' src="https://www.youtube.com/embed/sP_tmYSOWPE?si=sp-H2rNbxc_dZbA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div> */}
        </div>
        </div>
    </div>
  )
}

export default Location