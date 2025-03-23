import { motion } from "framer-motion"
import localFont from "next/font/local"
import IconCircle from "./IconComponents/IconCircle"

const text = "Leverage on Automation"

export const container = {
  hidden: {opacity: 0},
  visible: (i = 1) => ({
    opacity: 1,
    transition: {staggerChildren: 0.12, delayChildren: 0.04 * i},
  }),
}
export const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      repeat: Infinity,
    },
  },
}
const plusJakartaSans = localFont({
  src: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
  weight: "400",
  style: "normal",
})
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-30 md:py-35  text-white">
      <div className="z-40 relative container mx-auto text-center">
        <motion.p
          className="text-sm md:text-[16px] font-bold text-[#7191FF] mb-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {Array.from(text).map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.h1
          className="text-5xl mb-6 lg:text-[76px] font-semibold lg:leading-[82px]"
          data-testid="cypress-title"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
        >
          AI Models for <br />
          <span className="text-white">Business Solutions</span>
        </motion.h1>
        <motion.p
          data-testid="cypress-subtitle"
          className={`text-[20px] ${plusJakartaSans.className} mt-6 mx-auto lg:text-[22px] max-w-[860px] leading-[28px] lg:leading-[38px] text-[#FFFFFF]`}
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          Leverage the power of AI to automate, analyze, and optimize your
          workflows. Our specialized models are designed to fit different
          business needs.
        </motion.p>
        <motion.button
          className="mt-6 px-[26px] py-[12px] text-[18px] cursor-pointer font-semibold bg-white text-[#05152C] rounded-md shadow-md transition hover:bg-gray-200"
          initial={{opacity: 0, scale: 0.9}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.9}}
        >
          Get Started Now
        </motion.button>
      </div>
      <div className="absolute w-full top-30 md:top-150 bottom-0">
        <IconCircle />
      </div>
    </section>
  )
}
