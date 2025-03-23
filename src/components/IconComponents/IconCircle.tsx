import React from "react"
import {motion} from "framer-motion"

const IconCircle: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-[1500px] h-[800px] flex items-center justify-center">
        {/* Rotating Circle using Framer Motion */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-[50%] bg-[#0037FF] blur-[250px]"
          animate={{rotate: 360}}
          transition={{repeat: Infinity, duration: 10, ease: "linear"}}
        />
      </div>
    </div>
  )
}

export default IconCircle
