interface MenuItem {
  icon: string;
  label: string;
  description?: string;
  onClick: () => void;
}

interface ProfileMenuProps {
  items: MenuItem[];
}

export default function ProfileMenu({ items }: ProfileMenuProps) {
  return (
    <div className="space-y-2 mt-6">
      {items.map((item) => (
        <button
          key={item.label}
          onClick={item.onClick}
          className="w-full flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
        >
          <span className="material-icons mr-3 text-gray-600">{item.icon}</span>
          <div className="text-left">
            <h3 className="font-medium">{item.label}</h3>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </div>
          <span className="material-icons ml-auto text-gray-400">chevron_right</span>
        </button>
      ))}
    </div>
  );
}