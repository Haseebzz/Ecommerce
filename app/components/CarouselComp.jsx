

'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  return ( 
    <>
    
      <div className=' mx-auto'>
        <Carousel className=" max-w-[800px] mx-auto md:max-w-[1200px]" showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
            <div>
                <img src="/images/banner/1.png" />
            </div>
            <div>
                <img src="/images/banner/2.png" />
            </div>
            <div>
                <img src="/images/banner/3.png" />
            </div>
        </Carousel>
      </div>
  
    </>
  );
};