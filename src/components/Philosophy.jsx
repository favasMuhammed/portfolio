"use client";
import { motion } from "framer-motion";

const Philosophy = () => {
  // Animation for main word
  const magicVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40, color: "rgba(126,128,135,0.6)" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      color: "#ffffff", // ✅ ensures final state is pure white
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    },
  };

  // Hover effect with liquid gradient
  const wordVariants = {
    hover: {
      background: "linear-gradient(120deg, #ff3cac, #784ba0, #2b86c5, #43cea2, #185a9d)",
      backgroundSize: "300% 300%",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow:
        "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,255,255,0.4)",
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen px-4 bg-[#0c0c0c]">
      {/* Top line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-[#7e8087] text-lg md:text-xl mb-6 text-center"
        style={{
          fontFamily: "var(--font-ppmor)",
          fontWeight: 400,
        }}
      >
        Ultimately, it's not about magic.
      </motion.p>

      {/* Main word */}
      <motion.h1
        variants={magicVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-[80px] sm:leading-[120px] md:leading-[160px] lg:leading-[200px] font-semibold text-center px-4"
        style={{
          fontFamily: "var(--font-ppmor)",
          fontWeight: 600,
        }}
      >
        magic.
      </motion.h1>

      {/* Bottom line */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="text-[#7e8087] text-lg md:text-xl mt-6 text-center"
        style={{
          fontFamily: "var(--font-ppmor)",
          fontWeight: 400,
        }}
      >
        It's all skill, practice, and philosophy.
      </motion.p>
    </section>
  );
};

export default Philosophy;
