
import { Star, ThumbsUp, MessageSquare, Camera } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ReviewsScreen = () => {
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);
  const { toast } = useToast();

  const reviews = [
    {
      id: 1,
      name: "Jessica Chen",
      rating: 5,
      date: "2 days ago",
      service: "Bridal Makeup",
      review: "Absolutely stunning work! The makeup lasted all day and looked flawless in photos. Sofia is incredibly talented and professional.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop",
      helpful: 24,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      rating: 5,
      date: "1 week ago",
      service: "Party Glam Kit",
      review: "The party glam kit exceeded my expectations! Quality products and amazing results. Will definitely purchase again.",
      helpful: 18,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 4,
      date: "2 weeks ago",
      service: "Makeup Course",
      review: "Great course for beginners! Emma's teaching style is very clear and easy to follow. Learned so much about color theory and application techniques.",
      helpful: 31,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Priya Patel",
      rating: 5,
      date: "3 weeks ago",
      service: "HD Makeup Kit",
      review: "Professional quality products that work perfectly for photo shoots. The coverage is excellent and the finish is flawless.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      helpful: 27,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const submitReview = () => {
    if (!newReview.trim() || newRating === 0) {
      toast({
        title: "Please complete your review",
        description: "Add a rating and write your experience.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Review Submitted! ⭐",
      description: "Thank you for sharing your experience with MakeupVerse!",
    });

    setNewReview("");
    setNewRating(0);
    setShowWriteReview(false);
  };

  const StarRating = ({ rating, interactive = false, onRate }: { rating: number, interactive?: boolean, onRate?: (rating: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => interactive && onRate && onRate(star)}
            disabled={!interactive}
            className={`${interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'} transition-transform`}
          >
            <Star
              size={20}
              className={`${
                star <= rating
                  ? "text-yellow-500 fill-current"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 pb-20">
      {/* Header */}
      <div className="makeup-gradient pt-12 pb-6 px-6 rounded-b-3xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 font-montserrat mb-2">
            Customer Reviews
          </h1>
          <p className="text-gray-700 opacity-90">
            See what our customers are saying
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 mt-6">
        <div className="makeup-card p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Star size={24} className="text-yellow-500 fill-current" />
            <span className="text-3xl font-bold text-gray-800">4.8</span>
          </div>
          <p className="text-gray-600 mb-4">Based on 1,247 reviews</p>
          
          <Button
            onClick={() => setShowWriteReview(!showWriteReview)}
            className="makeup-button flex items-center space-x-2"
          >
            <MessageSquare size={18} />
            <span>Write a Review</span>
          </Button>
        </div>
      </div>

      {/* Write Review Form */}
      {showWriteReview && (
        <div className="px-6 mt-6">
          <div className="makeup-card p-6 animate-fade-in">
            <h3 className="font-semibold text-gray-800 mb-4">Share Your Experience</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              <StarRating rating={newRating} interactive onRate={setNewRating} />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
              <Textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Tell us about your experience with MakeupVerse..."
                rows={4}
                className="w-full resize-none"
              />
            </div>
            
            <div className="flex space-x-3">
              <Button onClick={submitReview} className="makeup-button flex-1">
                Submit Review
              </Button>
              <Button
                onClick={() => setShowWriteReview(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="px-6 mt-6">
        <div className="grid gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="makeup-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-pink-200"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-pink-600 font-medium">
                      {review.service}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {review.review}
                  </p>
                  
                  {review.image && (
                    <img
                      src={review.image}
                      alt="Review"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  )}
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors">
                      <ThumbsUp size={16} />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
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

export default ReviewsScreen;
