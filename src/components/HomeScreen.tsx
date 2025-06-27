
import { ShoppingBag, GraduationCap, Paintbrush, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const mainActions = [
    {
      title: "Shop Kits",
      icon: ShoppingBag,
      emoji: "🛍",
      path: "/shop",
      description: "Browse our makeup collections"
    },
    {
      title: "Makeup Courses",
      icon: GraduationCap,
      emoji: "🎓",
      path: "/courses",
      description: "Learn from professionals"
    },
    {
      title: "Book Artist",
      icon: Paintbrush,
      emoji: "💄",
      path: "/booking",
      description: "Schedule your appointment"
    },
    {
      title: "Reviews",
      icon: Star,
      emoji: "⭐",
      path: "/reviews",
      description: "See what others say"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-8 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-montserrat mb-2">
            MakeupVerse
          </h1>
          <p className="text-gray-700 opacity-90 font-medium">
            Your Beauty Universe
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 mt-8">
        <div className="makeup-card p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome to MakeupVerse! ✨
          </h2>
          <p className="text-gray-600">
            Discover premium makeup kits, learn from expert artists, and transform your beauty routine.
          </p>
        </div>

        {/* Main Action Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mainActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.title}
                onClick={() => navigate(action.path)}
                className="makeup-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{action.emoji}</div>
                <Icon size={32} className="mx-auto mb-3 text-pink-600" />
                <h3 className="font-semibold text-gray-800 mb-2 font-montserrat">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {action.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 font-montserrat">
            ✨ Featured This Week
          </h3>
          <div className="makeup-card p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">💕</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Bridal Makeup Special
                </h4>
                <p className="text-gray-600 text-sm">
                  Get 20% off on all bridal makeup kits this week!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
