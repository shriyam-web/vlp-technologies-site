export function ProjectsHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of successful web and mobile applications built with 
            cutting-edge technologies. Each project showcases our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}