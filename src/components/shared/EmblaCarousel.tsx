import React, {useEffect, useState} from "react"
import { EmblaOptionsType } from "embla-carousel"

import useEmblaCarousel from "embla-carousel-react"
import {motion} from "framer-motion"
import Card from "./Card"
import { cauroselSlideItems } from "../constants"



const EmblaCarousel: React.FC = () => {
  const emblaOptions: EmblaOptionsType = {
    loop: false, 
    align: "center", 
    containScroll: "trimSnaps", 
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("init", onSelect)
    emblaApi.on("select", onSelect)

    return () => {
      emblaApi.off("init", onSelect)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {cauroselSlideItems?.map((item, index) => (
            <motion.div
              className="embla__slide"
              key={index}
              animate={{
                y: selectedIndex === index ? -14 : 0, // Move active slide up
              }}
              transition={{type: "spring", stiffness: 200, damping: 15}}
            >
              <Card  title={item?.title} image={item?.image} content={item?.content} />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
