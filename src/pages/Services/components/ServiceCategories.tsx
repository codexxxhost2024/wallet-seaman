const categories = [
  { icon: '⛵', name: 'Maritime', route: '/maritime' },
  { icon: '💼', name: 'Finance', route: '/finance' },
  { icon: '🎓', name: 'Academy', route: '/academy' },
  { icon: '🎞', name: 'Media', route: '/media' },
  { icon: '🚘', name: 'Vehicle', route: '/vehicle' },
  { icon: '🎮', name: 'Games', route: '/games' },
  { icon: '🎟', name: 'Lottery', route: '/lottery' },
  { icon: '➕', name: 'More', route: '/more' }
];

export default function ServiceCategories() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {categories.map((category) => (
        <div key={category.name} className="bg-white p-3 rounded-lg shadow text-center">
          <div className="text-2xl mb-2">{category.icon}</div>
          <div className="text-sm">{category.name}</div>
        </div>
      ))}
    </div>
  );
}