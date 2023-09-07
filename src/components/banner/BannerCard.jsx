import { Card } from 'flowbite-react';
//import Image from 'next/image';

export const BannerCard = ({ title, text }) => {
    return (
        <div className='basis-11/12 md:basis-auto lg:basis-1/4 m-3 hover:scale-110 transition ease-in-out'>
            <Card className='h-full hover:bg-neutral-100' renderImage={() => { <Image width={500} height={500} src="/images/blog/image-1.jpg" /> }}>
                <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                    {text}
                </p>
            </Card>

        </div>
    )
}
