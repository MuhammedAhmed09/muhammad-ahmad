'use client'
import { useEffect, useState } from 'react';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';

const Projects = ()  => {
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        fetch('/files/projects.json')
        .then((res) => res.json())
        .then((data) => setProjectItems(data))
    }, []);

  return (
    <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Navigation]}
    >
        {projectItems.map((project) => (
            <SwiperSlide key={project.id} className="w-full px-[2%] sm:px-[4%] md:p-0 ">
                <div className="flex items-center flex-row justify-center gap-4 px-[12%] sm:px-[14%]">
                    <p className="bg-Charcoal text-white w-2/5 text-sm rounded-2xl p-4">
                        {project.description}
                    </p>
                    <div className='flex flex-col w-3/5 items-center h-fit sm:text-xl'>
                        <Link target='_blank' href={project.github} className='absolute top-0'> 
                            <span className='text-Aqua-Neon font-semibold sm:text-xl'>{`<`}</span>
                            GitHub 
                            <span className='text-Aqua-Neon font-semibold sm:text-xl'>{` />`}</span>
                        </Link>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-2xl p-2 object-cover"
                        />
                        <Link target='_blank' href={project.demo} className='absolute bottom-0'> 
                            <span className='text-Aqua-Neon font-semibold sm:text-xl'>{`<`}</span>
                            Demo 
                            <span className='text-Aqua-Neon font-semibold sm:text-xl'>{` />`}</span>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Projects