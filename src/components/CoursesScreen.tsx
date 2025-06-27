
import { BookOpen, Clock, Users, Star, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CoursesScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const { toast } = useToast();

  const filters = ["All", "Beginner", "Advanced", "Bridal", "Party"];

  const courses = [
    {
      id: 1,
      title: "Bridal Makeup Mastery",
      level: "Advanced",
      duration: "6 weeks",
      students: 234,
      rating: 4.9,
      price: 299,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      instructor: "Sarah Johnson",
      category: "Bridal"
    },
    {
      id: 2,
      title: "Everyday Makeup Basics",
      level: "Beginner",
      duration: "3 weeks",
      students: 567,
      rating: 4.8,
      price: 149,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      instructor: "Emma Davis",
      category: "Beginner"
    },
    {
      id: 3,
      title: "Party Glam Techniques",
      level: "Intermediate",
      duration: "4 weeks",
      students: 345,
      rating: 4.7,
      price: 199,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      instructor: "Lisa Chen",
      category: "Party"
    },
    {
      id: 4,
      title: "Professional Makeup Artistry",
      level: "Advanced",
      duration: "8 weeks",
      students: 123,
      rating: 4.9,
      price: 399,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop",
      instructor: "Maya Patel",
      category: "Advanced"
    }
  ];

  const filteredCourses = selectedFilter === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedFilter || course.level === selectedFilter);

  const enrollInCourse = (course: typeof courses[0]) => {
    toast({
      title: "Enrollment Successful! 🎓",
      description: `You've enrolled in ${course.title}. Check your email for details.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-6 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 font-montserrat mb-2">
            Makeup Courses
          </h1>
          <p className="text-gray-700 opacity-90">
            Learn from industry professionals
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 mt-6">
        <div className="flex items-center space-x-2 mb-2">
          <Filter size={20} className="text-pink-600" />
          <span className="font-medium text-gray-700">Filters:</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedFilter === filter
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-pink-200 hover:border-pink-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Courses List */}
      <div className="px-6 mt-6">
        <div className="grid gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className="makeup-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  by {course.instructor}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">
                    ${course.price}
                  </span>
                  <Button
                    onClick={() => enrollInCourse(course)}
                    className="makeup-button flex items-center space-x-2"
                  >
                    <BookOpen size={18} />
                    <span>Enroll Now</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;
