import { motion, type Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Reine() {
  const phrases: string[] = [
    'Je propose des reines issues de ma sélection.',
    'Ces abeilles adaptées à la région du Hurepoix, sont également appréciées dans d’autres régions d’Europe.',
    'Cette sélection est principalement orientée vers l’obtention d’abeilles hygiéniques pour les raisons suivantes :',
    '– le comportement hygiénique permet de lutter contre les maladies à spores telles que l’ascosphérose, la loque américaine et la loque européenne.',
    '– les abeilles résistantes au parasite varroa, sont très hygiéniques et notre but est de maintenir et renforcer les caractères de résistance au varroa (VSH).',
    'Mes élevages sont réalisés à partir des meilleures reines de l’an passé. Les commandes se font sur réservation.',
    'Vous êtes informé de la disponibilité dès le début de ponte, ce qui vous permet de vous organiser pour la recevoir.',
    'Elles sont expédiées 10 jours plus-tard par lettre max. Il est aussi possible de venir chercher vos reines, sur rendez-vous, ce qui permet d’augmenter le taux d’acceptation des reines puisque l’arrêt de ponte est très fortement réduit.',
    'Afin de prévenir tout blocage en centre de tri pendant tout un week-end, les envois ont lieu les lundi, mardi et mercredi pour une réception qui peut varier entre 24 et 48 heures (exceptionnellement 72 heures).',
  ];

  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        className="w-full max-w-4xl p-8 bg-white rounded-3xl shadow-2xl space-y-4"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {phrases.map((phrase, index) => (
          <motion.p
            key={index}
            className="text-gray-800 text-lg leading-relaxed"
            variants={textVariants}
          >
            {phrase}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
