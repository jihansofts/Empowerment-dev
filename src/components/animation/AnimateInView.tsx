"use client"

import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface AnimateInViewProps {
  children: ReactNode
  variants: Variants
  delay?: number
  className?: string
}

const AnimateInView = ({ children, variants, delay = 0.3, className = "" }: AnimateInViewProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        initial: variants.initial,
        animate: {
          ...variants.animate,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimateInView