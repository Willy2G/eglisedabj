import React from 'react';

import VideoCarousel from '../components/VideoCarousel';
import About from '../components/About';
import MediaCard from '../components/MediaCard';


function HomePage() {
  return (
    <>
      <VideoCarousel />
      <MediaCard />
      <About />
    </>
  )
}


export default HomePage
