import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";


const Footer = () => {
    const socialItems = [
        {icon: <Instagram />, href: 'https://www.instagram.com/b7r090/'},
        {icon: <Github />, href: 'https://github.com/MuhammedAhmed09?tab=repositories'},
        {icon: <Linkedin />, href: 'https://www.linkedin.com/in/muhammad-a-ragab-a29078307/'},
    ];
         
  return (
    <div className="bg-Dark-Navy lg:gap-20 gap-8 py-8 text-white/70 flex flex-col lg:flex-row-reverse justify-center items-center w-full">
        <div className="flex gap-8">
            {socialItems.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.href}
                    target="_blank"
                    className="rounded-full bg-Aqua-Neon text-Dark-Navy p-2"
                >
                    {item.icon}
                </Link>
            ))}
        </div>
        <div className="md:flex grid gap-8 md:gap-x-20">
            <p>© 2025 MuhammadAhmad. All rights reserved.</p>
            <div className="flex justify-center gap-x-8 sm:gap-x-20">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer