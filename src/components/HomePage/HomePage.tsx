import React from 'react'
import { CarouselPlugin } from './components/Slider/CarouselPlugin'
import HeroCart from './components/HeroCart/HeroCart'
import CardSection from './components/Card/CardSection'


const HomePage = () => {
  return (
    <>
      <CarouselPlugin />
      <HeroCart />
      <CardSection title='Popular Products' />
      <CardSection title='Daily Best Sells' />

    </>
  )
}

export default HomePage