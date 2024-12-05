import { motion } from 'framer-motion'

export default function ApyIcon() {
  return (
    <motion.div
      className="relative w-[320px] h-[320px] flex items-center justify-center"
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-tr from-[#4C6FFF] to-[#55ACEE] rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-gradient-to-tr from-[#4C6FFF] to-[#55ACEE] rounded-full"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="relative text-white text-6xl font-bold flex items-center gap-1"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>8.8</span>
        <span className="text-4xl">%</span>
      </motion.div>
    </motion.div>
  )
} 