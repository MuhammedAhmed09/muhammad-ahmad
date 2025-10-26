import { ComputerIcon, } from "lucide-react";

export default function Skills() {
  const languageItems = [
    {id: 0, label: 'HTML', icon: '/images/html.png', textColor:'text-Vivid-Orange'},
    {id: 1, label: 'CSS', icon: '/images/css.png', textColor: 'text-Bright-Blue'},
    {id: 2, label: 'JS', icon: '/images/js.png', textColor: 'text-Golden-Yellow'},
    {id: 3, label: 'REACT', icon: '/images/react.png', textColor: 'text-Sky-Blue'},
  ]
    return (
    <section id="skills" className={`flex py-8 px-[14%] lg:px-[8%] gap-8 flex-col min-h-screen text-white items-center justify-center font-sans bg-[url('/images/skills-bg.jpg')]`}>
      <div className="hidden md:flex">
        <img src="/images/Scroll.png" alt="scroll" className="w-1/2" />
      </div>
      <div className="items-center gap-4 text-center flex flex-col justify-center">
        <p className="text-Aqua-Neon text-3xl md:text-4xl">Skills</p>
        <img src="images/line.png" alt="line" className="text-Aqua-Neon w-20 md:w-30" />
        <p className="text-white/70 text-sm">I am striving to never stop learning and improving</p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center bg-Mint-Light text-Dark-Navy border-l-4 border-Bright-Blue rounded-lg py-2 px-4">
        <p><ComputerIcon /></p>
        <p className="font-semibold">Frontend Developement</p>
        <p className="text-xs">HTML · CSS · JS · React · NEXT</p>
      </div>
      <div className="flex flex-row items-center text-center justify-center flex-wrap gap-8">
        {languageItems.map((item) => (
          <div key={item.id} className="flex flex-col flex-wrap gap-2">
            <img src={item.icon} alt={item.label} className="w-20"/>
            <h3 className={`${item.textColor} text-2xl`}>{item.label}</h3>
          </div>
        ))}
      </div>
    </section>
    )
}