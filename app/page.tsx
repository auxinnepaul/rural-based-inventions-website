export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        Welcome to RURAL BASED INTERVENTIONS - KENYA (RUBI-KENYA)
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We are dedicated to improving lives in rural Kenya through sustainable
        interventions and community-driven initiatives.
      </p>
      {/* Add more content to enable scrolling */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      ))}
    </div>
  );
}
