'use client'

import { motion } from 'framer-motion'

const CubeAnimation = () => {
  return (
    <div className="relative w-[300px] h-[300px] perspective-1000">
      <motion.div
        className="w-full h-full transform-style-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Front face */}
        <div className="absolute w-full h-full bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform translate-z-[150px] shadow-lg" />
        {/* Back face */}
        <div className="absolute w-full h-full bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform -translate-z-[150px] shadow-lg" />
        {/* Right face */}
        <div className="absolute w-[300px] h-full bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform origin-right rotate-y-90 translate-x-[150px] shadow-lg" />
        {/* Left face */}
        <div className="absolute w-[300px] h-full bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform origin-left -rotate-y-90 -translate-x-[150px] shadow-lg" />
        {/* Top face */}
        <div className="absolute w-full h-[300px] bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform origin-top -rotate-x-90 -translate-y-[150px] shadow-lg" />
        {/* Bottom face */}
        <div className="absolute w-full h-[300px] bg-blue-400/10 backdrop-blur-sm border border-blue-200/50 transform origin-bottom rotate-x-90 translate-y-[150px] shadow-lg" />
      </motion.div>
    </div>
  )
}

export default CubeAnimation 