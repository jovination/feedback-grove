
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

const TestimonialsSection = () => {
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
            <CarouselItem>
              <Card className="border border-zinc-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">T</div>
                    <div>
                      <p className="font-medium">Team Lead</p>
                      <p className="text-sm text-zinc-500">Technology Company</p>
                    </div>
                    <div className="ml-auto flex">
                      <div className="text-amber-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-zinc-700">
                    "FeedbackWave has completely transformed our feedback process. We're now getting honest insights that we never had access to before."
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="border border-zinc-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium mr-3">M</div>
                    <div>
                      <p className="font-medium">Manager</p>
                      <p className="text-sm text-zinc-500">Retail Business</p>
                    </div>
                    <div className="ml-auto flex">
                      <div className="text-amber-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-zinc-700">
                    "The anonymity feature has been game-changing. Our team members now feel safe sharing their honest opinions, which has led to meaningful improvements."
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            
            <CarouselItem>
              <Card className="border border-zinc-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">D</div>
                    <div>
                      <p className="font-medium">Director</p>
                      <p className="text-sm text-zinc-500">Education Sector</p>
                    </div>
                    <div className="ml-auto flex">
                      <div className="text-amber-400">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-zinc-700">
                    "Setting up FeedbackWave was incredibly easy. Within minutes, I had a feedback system that my entire organization could use."
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
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
