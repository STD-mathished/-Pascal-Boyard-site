import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/home/miel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="h-[93vh] flex justify-center items-center text-center text-white relative"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.2 } }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="text-7xl font-bold"
        >
          La diversité
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="text-6xl font-semibold"
        >
          des saveurs
        </motion.h2>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          className="text-5xl font-semibold"
        >
          de votre terroir
        </motion.h2>
      </motion.div>
    </section>
  );
}