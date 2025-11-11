import Image from 'next/image';

export const ScrollImage = () => {
  return (
    <Image 
        src="/images/Scroll.png" 
        alt="scroll icon" 
        width={20} 
        height={20}
    />
  )
};

export const LineImage = () => {
  return (
    <Image 
        src="/images/line.png"
        alt="line" 
        className="text-Aqua-Neon"
        width={100}
        height={20} 
    />
  )
};
