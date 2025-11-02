import { Briefcase, Link2, Mail, MapPin } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import DownloadCV from './downloadCVbutton';

const HeroCardDetails = () => {
    const infoItems = [
        {label: 'muhammedahmedragab@gmail.com', icon: <Mail />},
        {label: 'Egypt', icon: <MapPin />},
        {label: 'Full-time / Freelancer', icon: <Briefcase />},
        {label: 'https://muhammad-ahmad-0.vercel.app/', icon: <Link2 />},
    ];
    
    const languageItems = [
        {label: 'HTML', href: 'https://html.com/'},
        {label: 'JS', href: 'https://javascript.com/'},
        {label: 'REACT', href: 'https://react.dev/'},
        {label: 'NEXT', href: 'https://nextjs.org/'},
    ];

  return (
    <section className='border-l-4 border-t-4 border-Aqua-Neon rounded-tl-[154px]'>
        <div className='dark:bg-Charcoal text-sm dark:text-white border-4 dark:border-white rounded-br-[150px] rounded-tl-[150px] flex flex-col items-center justify-center gap-5 p-6'>
            <img 
                src='/images/muhammad-ahmad.jpg' 
                alt='muhammad image-for-me' 
                className='w-20 h-20 rounded-full border-2 border-Aqua-Neon'
            />
            <div className='items-center text-center'>
                <h1 className='font-bold sm:text-xl md:text-3xl'>Muhammad</h1>
                <p className='dark:text-white/70'>Front-end developer</p>
            </div>
            <div className='flex flex-col gap-4'>
                {infoItems.map((item) => (
                    <div key={item.label} className='flex gap-2 justify-start w-full'>
                        <p className='text-Aqua-Neon'>{item.icon}</p>
                        <p className='dark:text-white/70'>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className='flex gap-2 text-sm'>
                {languageItems.map((item) => (
                    <Link 
                        key={item.label}    
                        href={item.href}
                        target='_blank'
                        className='bg-Aqua-Neon rounded-full py-0.5 px-2 text-Charcoal text-sm'
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <DownloadCV />
        </div>
    </section>
  )
}

export default HeroCardDetails