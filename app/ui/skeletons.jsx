// LOADING ANIMATION
const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function HeroCardDetailsSkeleton() {
    const infoItemsSkeleton = (
        <div className='flex gap-2 items-start' >
            <div className='bg-gray-200 h-5 w-5 rounded-full'/>
            <div className='bg-gray-200 h-5 w-30 rounded-full'/>
        </div>
    );
    
    return (
        <section
            className={`${shimmer} relative shadow-sm border-l-4 border-t-4 border-gray-300 rounded-tl-[154px]`}
        >
            <div className='bg-white border-4 border-gray-300 rounded-br-[150px] overflow-hidden rounded-tl-[150px] flex flex-col items-center justify-center gap-5 p-6'>
                <div className='rounded-full w-20 h-20 border-2 border-gray-100 bg-gray-200'/>
                <div className='flex flex-col gap-4 items-center'>
                    <div className='w-60 h-8 bg-gray-200 rounded-xl'/>
                    <div className='bg-gray-300 w-40 h-3 rounded-xl'/>
                </div>
                <div className='flex flex-col gap-4 w-full'>
                    {infoItemsSkeleton}
                    {infoItemsSkeleton}
                    {infoItemsSkeleton}
                    {infoItemsSkeleton}
                </div>
                <div className='flex gap-2'>
                    <div className='bg-gray-200 rounded-full h-8 w-12'/>
                    <div className='bg-gray-200 rounded-full h-8 w-12'/>
                    <div className='bg-gray-200 rounded-full h-8 w-12'/>
                    <div className='bg-gray-200 rounded-full h-8 w-12'/>
                </div>
                <div 
                    className='bg-gray-200 rounded-xl h-8 w-46'
                />
            </div>
        </section>
    )
};

export function HeroDetailsSkeleton() {
    const infoDetails = (
        <div className="flex gap-3">
            <div className="h-12 w-12 bg-gray-200 rounded-2xl"/>
            <div className="flex flex-col gap-2 items-start">
                <div className="h-4 w-28 bg-gray-200 rounded-2xl"/>
                <div className="h-4 w-24 bg-gray-200 rounded-2xl"/>
            </div>
        </div>
    );

    return (
        <div
            className={`${shimmer} flex flex-col md:flex-row gap-12 w-full`}
        >
            <div
                className='flex flex-col gap-8 p-6'
            >
                <div className="flex flex-col gap-2">
                    <div className="h-8 w-12 bg-gray-300 rounded-2xl"/>
                    <div className="flex flex-col gap-2 translate-x-5">
                        <div className="bg-gray-200 rounded-xl h-8 w-30"/>
                        <div className="bg-gray-200 rounded-xl h-8 w-60"/>
                        <div className="bg-gray-200 rounded-xl h-8 w-70"/>
                    </div>
                    <div className="h-8 w-12 bg-gray-300 rounded-2xl"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-8 w-10 bg-gray-300 rounded-2xl"/>
                    <div className="flex flex-col gap-2 translate-x-5">
                        <div className="bg-gray-200 rounded-xl h-5 w-80"/>
                        <div className="bg-gray-200 rounded-xl h-5 w-86"/>
                        <div className="bg-gray-200 rounded-xl h-5 w-60"/>
                    </div>
                    <div className="h-8 w-10 bg-gray-300 rounded-2xl"/>
                </div>
                <div className="flex gap-3 translate-x-5">
                    <div className="w-40 h-10 bg-gray-200 rounded-full"/>
                    <div className="w-10 h-10 bg-gray-200 rounded-full"/>
                </div>
            </div>

            <div
                className='w-full flex flex-col gap-3 items-center'
            >  
                {infoDetails}
                {infoDetails}
                {infoDetails}
            </div>
        </div>
    )
};

const scrollImageSkeleton = (
    <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col p-1 bg-white h-12 w-6 border-2 border-gray-200 rounded-2xl">
            <div className="bg-gray-300 top-0 place-self-center flex h-3 w-1 rounded-2xl"/>
        </div>
        <div className="flex flex-col gap-1 items-center" >
            <div className="bg-gray-200 h-1 w-0.5 rounded-xl"/>
            <div className="bg-gray-200 h-1 w-0.5 rounded-xl"/>
            <div className="bg-gray-200 h-1 w-0.5 rounded-xl"/>
            <div className="bg-gray-200 h-1 w-0.5 rounded-xl"/>
            <div className="bg-gray-200 h-1 w-0.5 rounded-xl"/>
            <div className="bg-gray-200 h-2 w-2 rounded-full"/>
        </div>
    </div>
);

const titleOfPage = (
    <div className="flex flex-col gap-6 items-center">
        <div className="w-44 h-10 p-4 rounded-2xl bg-gray-200" >
            <div className="w-full rounded-full h-4 place-self-center bg-gray-50"/>
        </div>
        <div className="flex flex-row items-center">
            <div className="w-2 h-2 bg-gray-200 rounded-full"/>
            <div className="w-48 h-1 bg-gray-200 rounded-2xl" />
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
        </div>
    </div>
)

export function AboutSkeleton() {
    
    return(
        <div className={`${shimmer} relative shadow-sm bg-white flex flex-col gap-6 py-20 p-2`}>
            {scrollImageSkeleton}
            <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">            
                <div className="flex flex-col gap-8">
                    <div className="h-18 w-52 flex p-4 justify-center items-center bg-gray-100 rounded-tl-4xl rounded-br-4xl">
                        <div className="h-8 w-full bg-gray-200 rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-2 bg-gray-100 rounded-2xl p-4 overflow-hidden">
                        <div className="h-8 w-20 bg-gray-200 rounded-xl"/>
                        <div className="h-10 w-30 bg-gray-200 rounded-xl"/>
                        <div className="h-5 w-180 bg-gray-200 rounded-xl"/>
                        <div className="h-5 w-150 bg-gray-200 rounded-xl"/>
                        <div className="h-5 w-130 bg-gray-200 rounded-xl"/>
                        <div className="h-5 w-180 bg-gray-200 rounded-xl"/>
                        <div className="h-5 w-150 bg-gray-200 rounded-xl"/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col bg-gray-100 rounded-2xl p-8 items-center">
                        <div className="h-10 w-8 rounded-full bg-gray-200"/>
                        <div className="h-30 w-20 rounded-full bg-gray-200"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export function SkillsSkeleton() {
    const language = (
        <div className="flex flex-col gap-2 items-center"> 
            <div className="flex items-center justify-center rounded-full p-10 bg-gray-50">
                <div className="h-6 w-6 bg-gray-200 rounded-sm"/>
            </div>
            <div className="bg-gray-200 h-3 w-10 rounded-xl"/>
        </div>
    )
    return(
        <div className={`${shimmer} w-full items-center relative shadow-sm bg-white py-20 flex flex-col gap-4`}>
            {scrollImageSkeleton}
            {titleOfPage}
            <div className="w-96 h-4 rounded-full bg-gray-100"/>
            <div className="bg-gray-50 rounded-2xl p-4 border-l-4 flex flex-col gap-3 border-gray-200">
                <div className="h-10 w-12 bg-gray-200 rounded-xl" />
                <div className="h-1 w-12 bg-gray-200 rounded-xl" />
                <div className="h-2 w-70 bg-gray-200 rounded-xl" />
                <div className="flex flex-row gap-1 items-center w-full justify-center">
                    <div className="h-4 w-12 bg-gray-200 rounded-2xl"/>
                    <div className="h-1 w-1 bg-gray-200 rounded-full" />
                    <div className="h-4 w-12 bg-gray-200 rounded-2xl"/>
                    <div className="h-1 w-1 bg-gray-200 rounded-full" />
                    <div className="h-4 w-12 bg-gray-200 rounded-2xl"/>
                    <div className="h-1 w-1 bg-gray-200 rounded-full" />
                    <div className="h-4 w-12 bg-gray-200 rounded-2xl"/>
                </div>
            </div>
            <div className="flex gap-3 flex-wrap overflow-hidden">
                {language}
                {language}
                {language}
                {language}
            </div>
        </div>
    )
};

export function WorksSkeleton() {
    return (
        <div className={`${shimmer} w-full items-center relative shadow-sm bg-white py-20 flex flex-col gap-4`}>
            {scrollImageSkeleton}
            {titleOfPage}
            <div className="w-96 h-4 rounded-full bg-gray-100"/>
            <div className="flex flex-row items-center overflow-hidden gap-6 mt-6">
                <div className="h-8 w-8 bg-gray-200 rounded-full"/>
                <div className="bg-gray-50 p-4 flex flex-col gap-2 rounded-xl">
                    <div className="w-20 h-3 bg-gray-100"/>
                    <div className="w-18 h-3 bg-gray-100"/>
                    <div className="w-15 h-3 bg-gray-100"/>
                    <div className="w-20 h-3 bg-gray-100"/>
                    <div className="w-18 h-3 bg-gray-100"/>
                    <div className="w-15 h-3 bg-gray-100"/>
                </div>
                <div className="flex flex-col items-center gap-8">
                    <div className="w-24 h-4 bg-gray-200 rounded-xl" />
                    <div className="w-32 h-14 bg-gray-100 rounded-xl" />
                    <div className="w-24 h-4 bg-gray-200 rounded-xl" />
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"/>
            </div>
        </div>
    )
};

export function ContactSkeleton() {
    const input = (
        <div className="flex w-full items-center bg-gray-100 p-2 rounded-xl">
            <div className="w-full h-4 bg-gray-200 rounded-2xl" />
        </div>
    )
    return (
        <div className={`${shimmer} w-full items-center relative shadow-sm bg-white py-20 flex flex-col gap-4 overflow-hidden`}>
            {scrollImageSkeleton}
            {titleOfPage}
            <div className="w-96 h-4 rounded-full bg-gray-100"/>
            <div className="border-2 border-gray-200 rounded-tl-4xl p-6 rounded-br-4xl overflow-hidden bg-gray-50 flex items-center">
                <div className="bg-gray-200 w-48 h-2 rounded-xl"/>
            </div>
            <div className="flex flex-col md:flex-row gap-8 self-center justify-center w-full md:w-sm">
                <div className="w-full">{input}</div>
                <div className="w-full">{input}</div>
            </div>
            <div className="w-full md:w-sm">{input}</div>
        </div>
    )
};
