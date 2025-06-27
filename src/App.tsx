
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ShopScreen from "./components/ShopScreen";
import CoursesScreen from "./components/CoursesScreen";
import BookingScreen from "./components/BookingScreen";
import ReviewsScreen from "./components/ReviewsScreen";
import ProfileScreen from "./components/ProfileScreen";
import BottomNavigation from "./components/BottomNavigation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
            <Route path="/courses" element={<CoursesScreen />} />
            <Route path="/booking" element={<BookingScreen />} />
            <Route path="/reviews" element={<ReviewsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
