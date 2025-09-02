import { motion, type Variants } from 'framer-motion';

type Orientation = 'left' | 'right';

const cardVariants = (orientation: Orientation): Variants => ({
  hidden: { opacity: 0, x: orientation === 'left' ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export default function CartesProd() {
  const cartes = [
    { url: '/production/printemps.jpg', text: 'Les premières fleurs qui apparaissent sont celles des épines noires, petits buissons produisant de prunelles violettes remarquables à l’automne. Suivent les floraisons des merisiers de la forêt puis des arbres fruitiers de nos jardins, et selon les années des érables et des aubépines. La récolte de ce miel s’est faite mi-mai, avant qu’il ne cristallise dans les rayons. Une période de maturation et de brassage permet de mettre en pot un miel blanc, doux, aux subtils arômes qui restera crémeux.', orientation: 'left',   titre: 'Printemps :' },
    { url: '/production/acacia.jpg',      text: 'Les fleurs des acacias de nos forêts prennent la relève et si la période est propice, fin mai-début juin une nouvelle récolte a lieu. Le miel d’acacia monofloral est compliqué à récolter car il faut veiller à ce qu’il soit le moins possible mélangé à d’autres fleurs, ceci afin qu’il ait tendance à rester liquide.', orientation: 'right', titre: 'Acacia :' },
    { url: '/production/tilleul.jpg',   text: 'Les abeilles des ruches situées sur le secteur de Vaugrigneuse élaborent un miel de tilleul dont l’arôme rappelle des notes mentholées. Sur Briis sous Forges, Forges les bains et Pecqueuse, le massif forestier autrefois exploité pour la production de châtaigne nous permet de produire un miel de fleurs de châtaignier. Mon miel de châtaignier est très doux en comparaison de ce que vous trouverez ailleurs car les sols de nos forêts de châtaignier sont sablonneux. Les ronces fleurissant au même moment apportent également leur contribution aux arômes plus prononcés de ce miel liquide, qui peut cristalliser plus ou moins rapidement en fonction de la température à laquelle il est conservé.', orientation: 'left',   titre: "Tilleul & Châtaignier " },
    { url: '/production/ete.jpg',       text: 'Ce miel est élaboré par mes abeilles à partir d’un mélange de nectar de fleurs dont les dominantes sont tilleul, châtaignier, ronce, trèfle, chardons, et ombellifères. ', orientation: 'right', titre: 'Toutes fleurs d’été :' },
    { url: '/production/selection.jpg',        text: 'Le miel en section, aussi appelé rayon de miel brut, est demandé par de nombreux clients nostalgiques de leur enfance. En bouche, il suffit de plaquer la cire sur votre palais, d’avaler le miel puis de faire une boule avec la cire pour la jeter. Face à la demande croissante, j’ai dédié une partie de mes ruches à cette production particulière.', orientation: 'right', titre: 'Le miel en section' },
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
          {/* Conteneur de taille fixe pour l'image */}
          <div className="w-full md:w-1/2 p-2 bg-white rounded-3xl shadow-lg h-96 flex items-center justify-center">
            <img 
              src={carte.url} 
              alt="" 
              className="object-contain max-h-full max-w-full rounded-2xl" 
            />
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