
import { Calendar, Clock, MapPin, Star, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BookingScreen = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const cities = ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"];
  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const artists = [
    {
      id: 1,
      name: "Sofia Martinez",
      rating: 4.9,
      reviews: 127,
      specialties: ["Bridal", "Editorial"],
      availability: "Available Today",
      price: 150,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      city: "Los Angeles"
    },
    {
      id: 2,
      name: "Emma Thompson",
      rating: 4.8,
      reviews: 89,
      specialties: ["Party", "Natural"],
      availability: "Available Tomorrow",
      price: 120,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      city: "New York"
    },
    {
      id: 3,
      name: "Zara Ahmed",
      rating: 4.9,
      reviews: 156,
      specialties: ["HD", "Fashion"],
      availability: "Available Today",
      price: 180,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=face",
      city: "Miami"
    },
    {
      id: 4,
      name: "Lisa Wang",
      rating: 4.7,
      reviews: 98,
      specialties: ["Bridal", "Traditional"],
      availability: "Available This Week",
      price: 140,
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=300&fit=crop&crop=face",
      city: "Chicago"
    }
  ];

  const filteredArtists = selectedCity 
    ? artists.filter(artist => artist.city === selectedCity)
    : artists;

  const bookArtist = (artist: typeof artists[0]) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Choose your preferred appointment slot before booking.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Confirmed! ✨",
      description: `Your appointment with ${artist.name} is confirmed for ${selectedDate} at ${selectedTime}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-6 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 font-montserrat mb-2">
            Book Makeup Artist
          </h1>
          <p className="text-gray-700 opacity-90">
            Find the perfect artist for your occasion
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 mt-6 space-y-4">
        <div className="makeup-card p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="mr-2 text-pink-600" size={20} />
            Select Date & Time
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <Select value={selectedTime} onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent className="bg-white z-50">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="makeup-card p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
            <MapPin className="mr-2 text-pink-600" size={20} />
            Location Filter
          </h3>
          
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Artists List */}
      <div className="px-6 mt-6">
        <div className="grid gap-6">
          {filteredArtists.map((artist, index) => (
            <div
              key={artist.id}
              className="makeup-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-pink-200"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 font-montserrat">
                      {artist.name}
                    </h3>
                    <span className="text-xl font-bold text-pink-600">
                      ${artist.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span>{artist.rating} ({artist.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{artist.city}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {artist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 font-medium">
                      {artist.availability}
                    </span>
                    <Button
                      onClick={() => bookArtist(artist)}
                      className="makeup-button flex items-center space-x-2"
                    >
                      <Phone size={16} />
                      <span>Book Now</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;
