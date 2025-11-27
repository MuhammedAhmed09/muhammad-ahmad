'use client';
import { motion } from "motion/react"
import Link from "next/link";

function ScrollDown({ pageToScroll }) {
    return (
        <div className='w-full relative sm:flex items-center justify-center h-full hidden bottom-20'>
            <Link 
                href={`#${pageToScroll}`}  
                className='absolute border-2 border-Aqua-Neon rounded-2xl p-2 h-12'
                onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(`#${pageToScroll}`).scrollIntoView({ behavior: 'smooth' })
                }}
            >
                <motion.div
                    animate={{
                        y: [0, 20, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                    className='w-2 h-2 bg-Aqua-Neon rounded-full ' 
                />
            </Link>
        </div>
    )
}

export default ScrollDown