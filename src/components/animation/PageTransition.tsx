"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

const pageTransitionVariants = {
  initial: {
    clipPath: 'circle(0% at -30px -30px)',
    opacity: 1
  },
  animate: {
    clipPath: 'circle(170% at -30px -30px)',
    opacity: 0,
    transition: {
      clipPath: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      },
      opacity: {
        duration: 0.3,
        delay: 0.6
      }
    }
  },
  exit: {
    clipPath: 'circle(0% at -30px -30px)',
    opacity: 0,
    transition: {
      clipPath: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      },
      opacity: {
        duration: 0.5 
      }
    }
  }
}

interface PageTransitionProps {
  className?: string;
  children: ReactNode;
}

const PageTransition = ({ className = "bg-primary/90", children }: PageTransitionProps) => {
  return (
    <>
      {children}
      <motion.div
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`fixed inset-0 z-50 pointer-events-none ${className}`}
      />
    </>
  )
}

export default PageTransition