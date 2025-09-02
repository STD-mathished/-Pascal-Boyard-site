export default function Intro() {
  return (
    <section aria-labelledby="intro-title" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Image */}
          <figure className="overflow-hidden rounded-3xl shadow-md">
            <img
              src="/home/photo.jpg"
              alt="Apiculteur à Briis-sous-Forges devant ses ruches"
              loading="lazy"
              className="h-72 w-full object-cover md:h-[28rem]"
            />
          </figure>

          {/* Texte */}
          <div className="space-y-4">
            <h2 id="intro-title" className="text-3xl font-bold md:text-4xl">
              À propos de moi
            </h2>

            <p className="leading-relaxed text-gray-700">
              Apiculteur à Briis-sous-Forges, ma petite exploitation familiale
              me permet de produire, exclusivement dans notre région, des miels de qualité.
              Depuis plus de 20 ans, je propose des miels de cru pour le plus grand plaisir de vos papilles.
            </p>

            <p className="leading-relaxed text-gray-700">
              Ma production artisanale est réalisée à partir d’abeilles sélectionnées
              pour leur rusticité et leur adaptation à l’environnement local —
              gages d’une abeille autonome. Je milite pour une approche locale et
              développe des partenariats valorisant les acteurs de notre économie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
