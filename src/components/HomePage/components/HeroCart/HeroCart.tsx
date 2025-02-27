
import HeroCartDestop from "./HeroCartDestop";
import HeroCartMobile from "./HeroCartMobile";

const HeroCart = () => {


    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Best Picks</h2>

            {/* Mobile: Show as a Slider */}
            <HeroCartMobile/>
            {/* Desktop: Show as a 3-Grid Layout */}
            <HeroCartDestop/>
           
        </div>
    );
};

export default HeroCart;
