import { Mail } from 'lucide-react'
import Link from 'next/link'

const HeroDetails = () => {

    const infoItems = [
        {id: 0, number: 4, label: 'Programmin Language'},
        {id: 1, number: 6, label: `Development Tools`},
        {id: 2, number: 2, label: 'Years of Experience'},
    ]
  return (
    <section className='text-white gap-12 flex flex-col md:flex-row w-full'>
        <div
            className='flex flex-col gap-8'
        >
            <div className='text-2xl md:text-3xl'>
                <span className='text-Aqua-Neon'>{`<h1>`}</span><br />
                <h1 className='translate-x-5 md:text-4xl'>
                    Hey <br />I'm <span className='text-Aqua-Neon'>Muhammad</span>, <br />Front-end developer <br />
                </h1>
                <span className='text-Aqua-Neon'>{`</h1>`}</span>
            </div>
            <div className='text-lg md:text-xl'>
                <span className='text-Aqua-Neon'>{`<p>`}</span><br />
                <h1 className='translate-x-5 my-2 text-white/90'>
                I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
                </h1>
                <span className='text-Aqua-Neon'>{`</p>`}</span>
            </div>
            <Link 
                href='#contact' 
                className='text-3xl md:text-4xl text-Aqua-Neon flex justify-start mx-5 items-center gap-4 transition-transform duration-300 hover:rotate-6'
            >
                <p>Let's Talk</p> <p className='bg-neutral-700 rounded-full p-2'><Mail /></p>
            </Link>
        </div>
        
        <div 
            className='w-full flex justify-center'
        >
            <div className='bg-Dark-Navy flex flex-col gap-14 justify-center w-60 h-fit items-center p-10 rounded-[25%]'>
                {infoItems.map((item) => (
                    <div key={item.id} className='flex gap-3 items-center text-lg text-white/80'>
                        <p className='text-Aqua-Neon text-6xl'>{item.number}</p>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HeroDetails