
import { Home, ShoppingBag, BookOpen, Calendar, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Shop", icon: ShoppingBag, path: "/shop" },
    { name: "Courses", icon: BookOpen, path: "/courses" },
    { name: "Booking", icon: Calendar, path: "/booking" },
    { name: "Profile", icon: User, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 shadow-lg z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-pink-600 bg-pink-50"
                  : "text-gray-500 hover:text-pink-500"
              }`}
            >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
