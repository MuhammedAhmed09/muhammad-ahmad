import { Briefcase, Link2, Mail, MapPin } from 'lucide-react'
import React from 'react'
import DownloadCV from './downloadCVbutton';

const infoItems = [
    {label: 'E-mail', icon: <Mail />, href: 'mailto:muhammedahmedragab@gmail.com?subject=Job%20Inquiry&body=Hello%20Muhammad,'},
    {label: 'Egypt', icon: <MapPin />},
    {label: 'Full-time / Freelancer', icon: <Briefcase />},
    {label: 'WhatsApp', icon: <Link2 />, href: 'http://wa.me/201097182681'},
];

const languageItems = [
    {label: 'HTML', href: 'https://html.com/'},
    {label: 'JS', href: 'https://javascript.com/'},
    { label: 'React', href: 'https://react.dev/' },
    { label: 'Next.js', href: 'https://nextjs.org/' },
];

const HeroCardDetails = () => {

  return (
    <section className='border-l-4 border-t-4 border-Aqua-Neon rounded-tl-[154px]'>
        <div className='dark:bg-Charcoal text-sm dark:text-white border-4 dark:border-white rounded-br-[150px] rounded-tl-[150px] flex flex-col items-center justify-center gap-5 p-6'>
            <img 
                src='/images/muhammad-ahmad.jpg' 
                alt='Portrait of Muhammad Ahmad, front-end developer'
                className='w-20 h-20 rounded-full border-2 border-Aqua-Neon'
                loading='lazy'
            />
            <div className='items-center text-center'>
                <h1 className='font-bold sm:text-xl md:text-3xl'>Muhammad</h1>
                <p className='dark:text-white/70'>Front-end developer</p>
            </div>
            <ul className='flex flex-col gap-4'>
                {infoItems.map((item, index) => (
                    <li 
                        key={`${item.label}-${index}`} 
                    >
                        {item.href ? (
                            <a  
                                href={item.href}
                                target='_blank'
                                rel="noopener noreferrer"
                                className='flex gap-2 justify-start w-full'
                            >
                                <p className='text-Aqua-Neon'>{item.icon}</p>
                                <p className='dark:text-white/70'>{item.label}</p>
                            </a>
                        ) : (
                            <div className='flex gap-2 justify-start w-full'>
                                <p className='text-Aqua-Neon'>{item.icon}</p>
                                <p className='dark:text-white/70'>{item.label}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div className='flex gap-2 text-sm'>
                {languageItems.map((item) => (
                    <a 
                        key={item.label}    
                        href={item.href}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='bg-Aqua-Neon rounded-full py-0.5 px-2 text-Charcoal text-sm'
                    >
                        {item.label}
                    </a>
                ))}
            </div>
            <DownloadCV />
        </div>
    </section>
  )
}

export default HeroCardDetails