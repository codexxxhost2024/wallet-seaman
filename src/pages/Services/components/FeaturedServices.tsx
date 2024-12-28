const featuredServices = [
  {
    title: 'Maritime Training',
    description: 'Professional courses for maritime careers',
    icon: 'school'
  },
  {
    title: 'Vehicle Registration',
    description: 'Quick and easy vehicle registration',
    icon: 'directions_car'
  },
  {
    title: 'Digital Entertainment',
    description: 'Movies, games, and more',
    icon: 'sports_esports'
  }
];

export default function FeaturedServices() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Featured Services</h2>
      <div className="space-y-4">
        {featuredServices.map((service) => (
          <div key={service.title} className="bg-white p-4 rounded-lg shadow flex items-center">
            <span className="material-icons text-[#6CBF41] text-2xl mr-4">{service.icon}</span>
            <div>
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}