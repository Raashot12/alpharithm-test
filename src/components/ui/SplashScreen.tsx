/* eslint-disable @next/next/no-img-element */
import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import IconLogo from "../IconComponents/IconLogo"

const SplashScreen = ({onComplete}: {onComplete: () => void}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onComplete()
    }, 6000) // Total animation time

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen overflow-hidden bg-[white]">
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{y: 200, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
          className="flex h-full w-full items-center justify-center bg-[white]"
        >
          <IconLogo size={70} />
        </motion.div>
      </div>

      <motion.div
        initial={{y: -650, x: -650}}
        animate={{y: 0, x: 0}}
        transition={{
          ease: "easeOut",
          duration: 1,
          delay: 1.5,
        }}
        className="absolute top-0 left-0 right-0 h-full w-full"
      >
        <img
          src="/bg-blur-cp.png"
          alt="Background Blur"
          className="h-full w-full scale-[2]"
        />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{x: -700, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3.3,
            }}
            className="lg:mr-80 mb-82 text-4xl lg:text-9xl font-black italic tracking-widest text-white"
          >
            AI MODELS
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{opacity: 0, x: 700}}
            animate={{opacity: 1, x: 0}}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3.3,
            }}
            className="lg:ml-80 mt-86 text-4xl lg:text-9xl font-black italic tracking-widest text-white"
          >
            SOLUTIONS
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{scale: 4, opacity: 0, rotate: 20}}
          animate={{scale: 1, opacity: 1, rotate: 0}}
          transition={{
            ease: "easeInOut",
            type: "spring",
            duration: 2.2,
            delay: 3.3,
          }}
          className="flex h-full w-full items-center justify-center"
        >
          <IconLogo size={150} />
        </motion.div>
      </div>
    </div>
  )
}

export default SplashScreen
