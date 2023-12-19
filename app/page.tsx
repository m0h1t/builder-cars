import VideoCarousel from "../components/VideoCarousel/VideoCarousel";
import { getCarousels } from '../lib/actions/carousel.actions';

type Color = {
  hex: string;
}

type Asset = {
  url: string;
}

type CarouselType = {
  id: string;
  position: string;
  subtitleText: string;
  titleColor: Color;
  titleText: string;
  carSlug: string;
  background: Asset
}

export default async function Home() {
  const carousels: CarouselType[] = (await getCarousels());
  return (
    <main style={{fontFamily:"Inter", fontWeight:"500"}}>
      <VideoCarousel carousels={carousels} />
    </main>
  )
}