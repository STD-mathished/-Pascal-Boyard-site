export default function Hero() {
    return (
        <section
            style={{
        backgroundImage: `url('/home/miel.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        className="h-[93vh] flex justify-center items-center"
        >

        <div>
                <div className="text-5xl font-semibold ">
                <h1 className="text-7xl">La diversité</h1>
                <h2 className="text-6xl ml-16">des saveurs</h2>
                <h2 className="ml-20">de votre terroir</h2>
            </div>
        </div>
        </section>
    )
}