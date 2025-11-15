import Image from 'next/image';

export const ScrollImage = () => {
  return (
    <Image 
      src="/images/Scroll.png" 
      alt="scroll icon"
      className="w-auto h-auto"
      width={10}
      height={10}
      sizes='20' 
    />
  )
};

export const LineImage = () => {
  return (
    <Image 
      src="/images/line.png"
      alt="line" 
      className="text-Aqua-Neon w-auto h-auto"
      width={100}
      height={20} 
    />
  )
};
