import ServiceText from './ServiceText'
import Image from 'next/image'
import Place from '../../public/projects/cuarto.png'
import { useState } from 'react'

const Services =[
    {
      title:'Discover',
      image: '/projects/playa.jpg',
      service: 'Feasibility Studies, Client Consultation, Site Analysis'
    },
    {
      title:'Ideate',
      image: '/projects/plants.png',
      service: 'Concept Development, Sketching and Modeling, Iteration & Collaboration'
    },
    {
      title:'Define',
      image: '/projects/cd.png',
      service: 'Construction Documents, Permits'
    },
    {
        title:'Create',
        image: '/projects/pixelcut-export.jpeg',
        service: 'Site Visits, Inspections, Project Closeout'
    },
  
    
]

const SectionServices = () => {

    const [hoveredService, setHoveredService] = useState(null);
  return (
    <div className=' flex flex-col lg:flex-row  h-full items-center justify-between mt-10'>
     <div className='w-1/2 p-[4vw] flex flex-col justify-center text-[#99C3FF] '>
        <h2 className='text-[3vw] mb-[1vw] text-[#0156cf] '>What we do </h2>
        {
                  Services.map(( {title, image, service} ) =>{
                    return (
                    <ServiceText 
                        text={title} 
                        key={title} 
                        onMouseEnter={() => setHoveredService(image)}
                        />  
                    )

                  })
                }
     </div> 
     <div className='w-1/2 relative  h-3/4 min-h-[45vh]  max-w-4xl 2xl:max-w-6xl' >
            <Image 
                    className="object-cover w-full"
                    src={hoveredService || Place}
                    alt="img"
                    fill
            />
     </div> 
    </div>
  )
}

export default SectionServices
