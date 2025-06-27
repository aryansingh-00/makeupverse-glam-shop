
import { User, Settings, Heart, ShoppingBag, BookOpen, Star, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfileScreen = () => {
  const menuItems = [
    { icon: ShoppingBag, label: "My Orders", count: 3 },
    { icon: Heart, label: "Wishlist", count: 12 },
    { icon: BookOpen, label: "My Courses", count: 2 },
    { icon: Star, label: "My Reviews", count: 5 },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-8 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <User size={40} className="text-pink-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 font-montserrat mb-1">
            Welcome Back!
          </h1>
          <p className="text-gray-700 opacity-90">
            jessica.chen@email.com
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mt-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="makeup-card p-4 text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">15</div>
            <div className="text-sm text-gray-600">Orders</div>
          </div>
          <div className="makeup-card p-4 text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Courses</div>
          </div>
          <div className="makeup-card p-4 text-center">
            <div className="text-2xl font-bold text-pink-600 mb-1">4.8</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 mt-6">
        <div className="makeup-card">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between p-4 hover:bg-pink-50 transition-colors ${
                  index !== menuItems.length - 1 ? 'border-b border-pink-100' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon size={20} className="text-pink-600" />
                  <span className="font-medium text-gray-800">{item.label}</span>
                </div>
                {item.count && (
                  <div className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-medium">
                    {item.count}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6 mt-6">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center space-x-2 border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileScreen;
