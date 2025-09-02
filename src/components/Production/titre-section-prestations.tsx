import { motion } from "framer-motion";

export default function TitreSectionPrestations() {
  return (
    <section
      className="h-[40vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/production/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        className="text-6xl text-white font-bold"
        initial={{ opacity: 0.2, scale:0.9 }}            
        whileInView={{ opacity: 1, scale:1 }}           
        viewport={{ amount: 0.6, once: false }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Production
      </motion.h1>
    </section>
  );
}
