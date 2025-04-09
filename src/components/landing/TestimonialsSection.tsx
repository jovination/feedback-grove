import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// Define the type for our testimonial data
interface Testimonial {
  initial: string;
  initialBgColor: string;
  initialTextColor: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
}

// Define our dynamic data
const testimonialsData: Testimonial[] = [
  {
    initial: "T",
    initialBgColor: "bg-blue-100",
    initialTextColor: "text-blue-600",
    role: "Team Lead",
    company: "Technology Company",
    rating: 5,
    comment: "FeedbackWave has completely transformed our feedback process. We're now getting honest insights that we never had access to before."
  },
  {
    initial: "M",
    initialBgColor: "bg-green-100",
    initialTextColor: "text-green-600",
    role: "Manager",
    company: "Retail Business",
    rating: 5,
    comment: "The anonymity feature has been game-changing. Our team members now feel safe sharing their honest opinions, which has led to meaningful improvements."
  },
  {
    initial: "D",
    initialBgColor: "bg-purple-100",
    initialTextColor: "text-purple-600",
    role: "Director",
    company: "Education Sector",
    rating: 5,
    comment: "Setting up FeedbackWave was incredibly easy. Within minutes, I had a feedback system that my entire organization could use."
  }
];

const TestimonialsSection = () => {
  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    return "★".repeat(rating);
  };

  return (
    <section className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-14">
          <span className="inline-block mb-2 text-amber-600 font-medium">Testimonials</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            What our users say
          </h2>
          <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
            See how FeedbackWave has transformed the way our customers collect and utilize feedback.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border border-zinc-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${testimonial.initialBgColor} flex items-center justify-center ${testimonial.initialTextColor} font-medium mr-3`}>
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.role}</p>
                        <p className="text-sm text-zinc-500">{testimonial.company}</p>
                      </div>
                      <div className="ml-auto flex">
                        <div className="text-amber-400">{renderStars(testimonial.rating)}</div>
                      </div>
                    </div>
                    <p className="text-zinc-700">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static transform-none translate-y-0 translate-x-0 h-9 w-9 rounded-full border-zinc-200" />
            <CarouselNext className="static transform-none translate-y-0 translate-x-0 h-9 w-9 rounded-full border-zinc-200" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;