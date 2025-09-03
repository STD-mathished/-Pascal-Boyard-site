import { motion, type Variants } from 'framer-motion';

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function AutresAbeilles() {
  const texte: string[] = [
    'Les autres souches d’abeilles qui constituent mon cheptel, sont très adaptées à notre environnement.',
    'Leur comportement est comparable aux abeilles de type « Frère Adam ».',
    'Elles montrent même des facultés d’adaptation supérieures aux abeilles noires sur le plan des maladies et des parasites.',
    'Ceci est probablement dû à la grande diversité génétique dont elles sont issues.',
    'Les tests de résistance aux varroas que je pratique sur les meilleures colonies, nous montrent que chaque année, les mariages des meilleures lignées, m’ont fait progresser vers des abeilles capables de résister à cet acarien, sans intervention humaine.',
    'Le comportement hygiénique et le développement de fortes populations avec un faible taux de varroa oriente ma sélection, sachant que autonomie rime avec productivité. En effet, si des abeilles ne sont pas capables de produire suffisamment de miel, comment survivraient-elles à l’état sauvage.',
  ];

  return (
    <div className="flex justify-center py-12 px-4">
      {/* Passe en grid pour pouvoir faire span le titre */}
      <motion.div
        className="w-full max-w-4xl p-8 bg-white rounded-3xl shadow-2xl grid gap-8 md:grid-cols-2"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Titre plein largeur */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold md:col-span-2"
          variants={textVariants}
        >
          Les autres abeilles de type « Frère Adam » :
        </motion.h2>

        {/* Colonne texte */}
        <div className="order-2 md:order-1">
          <div className="space-y-4">
            {texte.map((phrase, i) => (
              <motion.p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed" variants={textVariants}>
                {phrase}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Colonne image */}
        <div className="order-1 md:order-2">
          <motion.img
            src="/abeilles/frere-adam.jpg"
            alt="Autres abeilles Frère Adam"
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            variants={imageVariants}
          />
        </div>
      </motion.div>
    </div>
  );
}
