"use client"

import React, { useEffect, useState } from 'react'

import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

type Color = {
    hex: string;
}

type Asset = {
    url: string;
}

type CarouselType = {
    id?: string;
    position?: string;
    subtitleText?: string;
    titleColor?: Color;
    titleText?: string;
    slug?: string;
    backgroundAsset?: string;
}

const VideoCarousel = (props: { carousels: CarouselType[] }) => {
    const { carousels } = props;
    return <Carousel autoPlay={true} infiniteLoop={true}>
        {carousels?.map(caroursel =>
            <div key={caroursel.id}>
                <Link key={caroursel.slug} href={`/cars${caroursel.slug}`} target='blank'>
                    <ReactPlayer
                        width={"auto"}
                        height={"auto"}
                        url={caroursel.backgroundAsset}
                        loop={true}
                        playing={true}
                    />
                    <h3 style={{color:`${caroursel.titleColor}`}}>{caroursel.titleText}</h3>
                    <span>{caroursel.subtitleText}</span>
                </Link>
            </div>
        )}
    </Carousel>
    return <></>
}

export default VideoCarousel
