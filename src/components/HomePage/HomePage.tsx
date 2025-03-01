import CardSection from "./components/Card/CardSection";
import HeroCart from "./components/HeroCart/HeroCart";
import { Section } from "./components/NewCart/Section";
import SecondSection from "./components/SecoundSection/SecoundSection";
import { CarouselPlugin } from "./components/Slider/CarouselPlugin";

const HomePage = () => {
  return (
    <>
      <CarouselPlugin />
      <HeroCart />
      <CardSection title='Popular Products' />
      <CardSection title='Daily Best Sells' />
      <Section />
      <SecondSection />
    </>
  )
}

export default HomePage;

