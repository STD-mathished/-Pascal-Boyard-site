import { motion, type Variants } from 'framer-motion';

type Orientation = 'left' | 'right';

const cardVariants = (orientation: Orientation): Variants => ({
  hidden: { opacity: 0, x: orientation === 'left' ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      // équivalent d’un easeOut agréable
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export default function Cartes() {
  const cartes = [
    { url: '/about/abeilles.jpg', text: 'La base de mon cheptel est constituée de souches d’abeilles locales, adaptées à leur environnement. Des analyses génétiques ont mis en évidence que certaines de ces souches sont des abeilles noires qui se sont hybridées et adaptée au fil du temps. Chaque année, mes ruches sont l’objet d’observations poussées afin de déterminer celles qui sont les plus adaptées. Ces observations me permettent de surveiller des points particuliers tels que le parasitisme, les maladies, la capacité d’hivernage, l’auto-subsistance et le comportement.', orientation: 'left',  titre: 'Mes abeilles' },
    { url: '/about/ruche.jpg',    text: 'Je milite pour que les abeilles soient autonomes et mon travail de sélection est orienté dans ce sens. Soucieux du maintien de la biodiversité, je reproduis les meilleures colonies afin de conserver des abeilles adaptées à leur environnement. J’ai mutualisé mes méthodes de travail avec d’autres apiculteurs partageant les mêmes valeurs, et les pedigrees de nos colonies font l’objet d’un suivi informatisé. Grâce à une collaboration active et à des échanges, nous pouvons collectivement prévenir toute dérive consanguine et conserver des abeilles d’une grande vitalité.', orientation: 'right', titre: 'Un pari pour l’avenir' },
    { url: '/about/recolte.jpg',  text: 'Le procédé d’extraction du miel et le mode de gestion de mes ruches sont globalement compatibles avec une production en mode « agriculture biologique », néanmoins je ne recherche pas de certification bio car je considère que l’octroi de ce label n’est pas crédible pour des raisons de localisation géographique. Je suis d’avis que pour justifier d’une certification bio, il faut situer les ruches dans des zones exclusivement bio, et actuellement les exploitations localisées dans le rayon d’action des ruches ne sont pas toutes en cours de conversion.', orientation: 'left',  titre: "L’authenticité" },
    { url: '/about/env.jpg',      text: 'Mes ruches sont situées dans des zones particulièrement préservées, au sein desquelles la profusion et la qualité des ressources alimentaires permettent à mes abeilles de subvenir à leurs besoins. Les partenariats que je développe avec des agriculteurs attachés à la conservation d’un environnement de qualité me permettent de disposer mes ruches à proximité de ressources alimentaires privilégiées. De plus, les arbres fruitiers situés dans les jardins de particuliers, ainsi que les arbres de nos campagnes et forêts, ne font pas l’objet de traitements chimiques, pour le plus grand bonheur de mes abeilles qui élaborent ainsi des miels de qualité. La grande qualité environnementale de notre région me permet de m’affranchir de longues transhumances, et de vous proposer des miels exclusivement locaux avec un impact carbone très faible. À la différence d’autres apiculteurs, je ne perds pas de colonies d’abeilles, ce qui démontre que l’environnement dans lequel elles évoluent reste protégé des pollutions.', orientation: 'right', titre: 'Mon environnement' },
  ]

  return (
    <div className="container mx-auto py-12 px-4 space-y-16 md:space-y-24">
      {cartes.map((carte, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
            carte.orientation === 'right' ? 'md:flex-row-reverse' : ''
          }`}
          variants={cardVariants(carte.orientation as Orientation)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full md:w-1/2 p-2 bg-white rounded-3xl shadow-lg">
            <img src={carte.url} alt="" className="w-full h-auto object-cover rounded-2xl" />
          </div>

          <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{carte.titre}</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{carte.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
