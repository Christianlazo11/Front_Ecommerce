import { Carousel } from 'flowbite-react';
import { BannnerImg } from './BannnerImg';
import { images } from '../../helpers/images';



export const Banner = () => {
    const {banner} = images;
    return (
        <div className='h-2/6 2xl:h-3/6 bg-indigo-500 flex justify-center justify-items-center mx-0 w-full'>
            <Carousel >
                {
                    banner.map((e, index) => (
                        <BannnerImg key={index} img={e} alt = {"banner0" + (index+1)}/>
                    ))
                }
            </Carousel>
        </div>
    )
}
