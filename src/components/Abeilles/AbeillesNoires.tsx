import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function AbeillesNoires() {
  // Bloc de texte à droite de l’image
  const bloc1: string[] = [
    "Le berceau de l’abeille noire se situe dans l’ouest de l’Europe. Néanmoins, différents événements ont contribué à réduire sa population :",
    "À la fin de la guerre 14-18, l’Allemagne dut payer un tribut en colonies d’abeilles pour remplacer celles qui avaient été détruites.",
    "Ce fut le premier gros phénomène d’importation d’une race étrangère en France.",
    "Dans les années 1920, l’acariose, une maladie des abeilles, décimait les cheptels. Les abeilles italiennes, résistantes à cette affection, furent massivement importées.",
    "La guerre de 39-45 et ses famines décimèrent encore plus les populations d’abeilles. Les cheptels furent reconstitués avec des abeilles de toutes provenances. Les années 50 représentent le début de la mondialisation de l’apiculture et l’INRA produisait et diffusait des abeilles dites « tri-hybride » (Caucasienne × Italienne) × Noire. Ces abeilles à la descendance instable ont majoritairement contribué à la pollution génétique de la région.",
    "Cette tendance à la mondialisation n’a pas cessé et aujourd’hui, en Europe et en France, il est possible de se procurer des abeilles d’origines très différentes.",
  ];

  // Suite de texte (plein largeur sous la grille)
  const bloc2: string[] = [
    "En 2009, nous avons réalisé des analyses d’ADN mitochondrial afin de déterminer l’origine maternelle de nos colonies.",
    "Ces analyses ont montré que certaines colonies étaient des abeilles noires.",
    "D’autres analyses biométriques ont montré que des souches restées assez fidèles à ce qu’a pu être l’abeille noire nous sont parvenues.",
    "J’ai multiplié ces souches du mieux que je pouvais et sélectionné celles qui me semblent les plus adaptées à l’environnement dans lequel nous vivons aujourd’hui.",
    "La sobriété alimentaire et la résistance hivernale sont les principales qualités de ces lignées. Malheureusement, les mauvaises années, ces souches d’abeilles ne produisent pas suffisamment de miel pour que je puisse en récolter. C’est probablement la raison principale pour laquelle les apiculteurs qui vivent exclusivement de cette activité n’utilisent plus cette race. Au fil des mauvaises années (ces 5 dernières années), beaucoup d’apiculteurs ont changé de race d’abeille ou changé de métier.",
  ];

  // Lignes avec style distinct
  const accentLine =
    "Les abeilles noires restent plus rustiques mais aussi plus agressives et ne conviennent pas pour une pratique de l’apiculture avec un proche voisinage.";

  const mutedLines: string[] = [
    "Les dernières souches pures race d’abeilles noires se sont éteintes, probablement à cause de l’instabilité climatique que nous observons.",
    "Pragmatiquement, je multiplie les abeilles les plus autonomes, seul gage d’une abeille locale pérenne.",
  ];

  return (
    <div className="flex justify-center py-12 px-4">
      <motion.section
        className="w-full max-w-5xl p-8 bg-white rounded-3xl shadow-2xl grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-labelledby="abeilles-noires-title"
      >
        {/* Titre pleine largeur */}
        <motion.h2
          id="abeilles-noires-title"
          className="md:col-span-2 text-4xl md:text-5xl font-bold"
          variants={itemVariants}
        >
          Abeilles noires :
        </motion.h2>

        {/* Image à gauche */}
        <motion.figure className="order-1" variants={imageVariants}>
          <img
            src="/abeilles/abeille-noires.jpg" 
            alt="Abeille noire marquée dans une colonie"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </motion.figure>

        {/* Texte à droite */}
        <div className="order-2 space-y-6">
          {bloc1.map((p, i) => (
            <motion.p key={i} className="text-gray-800 leading-relaxed text-lg" variants={itemVariants}>
              {p}
            </motion.p>
          ))}
        </div>

        {/* Suite du texte sous la grille (titre déjà plein largeur) */}
        <div className="md:col-span-2 space-y-6 pt-4">
          {bloc2.map((p, i) => (
            <motion.p key={`b2-${i}`} className="text-gray-800 leading-relaxed text-lg" variants={itemVariants}>
              {p}
            </motion.p>
          ))}

          <motion.p className="font-semibold text-gray-900 leading-relaxed text-lg" variants={itemVariants}>
            {accentLine}
          </motion.p>

          {mutedLines.map((p, i) => (
            <motion.p
              key={`muted-${i}`}
              className="text-gray-400 leading-relaxed text-lg"
              variants={itemVariants}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
