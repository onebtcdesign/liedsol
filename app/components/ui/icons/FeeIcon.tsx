import { motion } from 'framer-motion'

export default function FeeIcon() {
  return (
    <motion.div
      className="relative w-[320px] h-[320px] flex items-center justify-center"
      initial="initial"
      animate="animate"
    >
      {/* 背景装饰圆环 */}
      <motion.div
        className="absolute w-64 h-64 border-4 border-[#00FFA9] rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 主要内容容器 */}
      <motion.div
        className="relative w-56 h-56 bg-gradient-to-br from-[#00FFA9] to-[#00CC87] rounded-2xl flex items-center justify-center"
        animate={{
          rotate: [0, 360],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* 数字显示 */}
        <motion.div
          className="text-white text-6xl font-bold flex items-center gap-1"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span>3.0</span>
          <span className="text-4xl">%</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 