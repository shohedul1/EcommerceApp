// "use client";
// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export function CarouselPlugin() {
//   const plugin = React.useRef(
//     Autoplay({ delay: 2000, stopOnInteraction: true })
//   );

//   return (
//     <div className="px-10">
//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full "
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <div className="p-1">
//                 <Card className=" py-4  bg-amber-200 dark:bg-black">
//                   <CardContent className="flex h-full w-full justify-center gap-5 items-center ">
//                     <div className=" gap-2 grid grid-cols-1 md:grid-cols-2">
//                       <div className="flex flex-col gap-2">
//                         <div className="text-xl">
//                           Organic Vegetables
//                         </div>
//                         <div className="text-xl md:text-5xl font-bold">
//                           The best way to stuff your wallet.
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <div>
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
//                             reiciendis beatae consequuntur.
//                           </div>
//                           <div>
//                             <Button className="dark:text-white dark:bg-gray-400 bg-red-500 text-black hover:bg-white dark:hover:bg-white dark:hover:text-black  ">Shop now</Button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="w-full h-full overflow-hidden relative">
//                         <Image src={"/Food_Web.png"} alt="iamge" height={500} className="rounded-full" width={500} priority/>
//                       </div>

//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }


"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CarouselPlugin() {
  // Use `useMemo` instead of `useRef` to improve performance
  const plugin = React.useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  return (
    <div className="px-10">
      <Carousel
        plugins={[plugin]}
        className="w-full"
        onMouseEnter={plugin.stop}
        onMouseLeave={plugin.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="py-4 bg-amber-200 dark:bg-black">
                <CardContent className="flex flex-col md:flex-row h-full w-full items-center gap-5">
                  {/* Left Section: Text Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-xl">Organic Vegetables</h2>
                    <h1 className="text-xl md:text-5xl font-bold">
                      The best way to stuff your wallet.
                    </h1>
                    <p className="text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                      reiciendis beatae consequuntur.
                    </p>
                    <div>
                      <Button className="dark:text-white dark:bg-gray-400 bg-red-500 text-black hover:bg-white dark:hover:bg-white dark:hover:text-black">
                        Shop now
                      </Button>
                    </div>
                  </div>

                  {/* Right Section: Image */}
                  <div className="md:flex-1 relative w-full h-[200px] md:h-[300px]">
                    <Image
                      src="/Food_Web.png"
                      alt="Food"
                      priority
                      fill
                      className="rounded-full object-contain h-full w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
