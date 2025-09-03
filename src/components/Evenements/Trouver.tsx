import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function Trouver() {
  const evenements: string[] = [
    'Brocante de Briis sous Forges',
    'Marché Gourmand – Les Molières',
    'Marché de Noël de Briis sous Forges',
    'Marché de Noël de Gometz le Chatel',
  ];

  return (
    <div className="flex justify-center py-12 px-4">
      <motion.section
        className="w-full max-w-5xl p-8 bg-white rounded-3xl shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="trouver-title"
      >
        {/* Titre pleine largeur */}
        <motion.h2
          id="trouver-title"
          className="text-center text-3xl md:text-5xl font-bold mb-10"
          variants={itemVariants}
        >
          Vous pouvez me retrouver sur les événements suivants :
        </motion.h2>

        {/* Liste d'événements */}
        <motion.ul className="space-y-2 mb-10" variants={itemVariants}>
          {evenements.map((evt, i) => (
            <li
              key={i}
              className="text-gray-400 text-2xl md:text-3xl leading-tight"
            >
              {evt}
            </li>
          ))}
        </motion.ul>

        {/* Texte final + téléphone */}
        <div className="space-y-2">
          <motion.p
            className="text-2xl md:text-3xl leading-snug"
            variants={itemVariants}
          >
            En dehors de ces événements vous pouvez me retrouver à la miellerie.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl leading-snug"
            variants={itemVariants}
          >
            Un simple appel téléphonique et nous convenons d’un rendez-vous.{' '}
            <a
              href="tel:+33613164259"
              className="whitespace-nowrap font-semibold hover:underline"
            >
              06 13 16 42 59
            </a>
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
}
