import { Carousel } from 'flowbite-react';
import { BannnerImg } from './BannnerImg';
import { images } from '../../helpers/images';
import { BannerAdvertising } from "./BannerAdvertising";
import { ContainerL } from "../../layouts/ContainerL";



export const Banner = () => {
    const { banner } = images;
    return (
        <>
            <div className='h-2/6 2xl:h-3/6 flex justify-center justify-items-center mx-0 w-full'>
                <Carousel >
                    {
                        banner.map((e, index) => (
                            <BannnerImg key={index} img={e} alt={"banner0" + (index + 1)} />
                        ))
                    }
                </Carousel>
            </div>
            <ContainerL>
                <BannerAdvertising />
            </ContainerL>
        </>

    )
}
