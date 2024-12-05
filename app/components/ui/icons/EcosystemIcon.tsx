import { motion } from 'framer-motion'

export default function EcosystemIcon() {
  return (
    <motion.div
      className="relative w-[320px] h-[320px] flex items-center justify-center"
      initial="initial"
      animate="animate"
    >
      {/* 扩散圆环效果 */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute w-64 h-64 border-4 border-[#FF7ABC] rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 6,
            delay: index * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* 中心内容 */}
      <motion.div
        className="relative w-40 h-40 bg-gradient-to-br from-[#FF7ABC] to-[#FF4D94] rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* 旋转的卫星点 */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[0, 60, 120, 180, 240, 300].map((degree, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 bg-white rounded-full"
              style={{
                transform: `rotate(${degree}deg) translateY(-60px)`,
                opacity: 0.8,
              }}
            />
          ))}
        </motion.div>

        {/* 数字显示 */}
        <span className="text-white text-5xl font-bold">10+</span>
      </motion.div>
    </motion.div>
  )
} 