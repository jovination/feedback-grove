
import { LineChart, TrendingUp, Users } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const StatsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-slim">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Trusted by teams worldwide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="stat-card bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-200">
                <Users className="w-5 h-5 text-blue-700" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-blue-900">Active Users</h3>
              </div>
            </div>
            <div className="stat-counter text-blue-700">5,000+</div>
            <p className="text-blue-600 mt-1 font-medium">Growing every day</p>
            <div className="h-1 w-24 bg-blue-200 rounded-full mt-4"></div>
          </div>
          
          <div className="stat-card bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-200">
                <LineChart className="w-5 h-5 text-amber-700" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-amber-900">Feedback Collected</h3>
              </div>
            </div>
            <div className="stat-counter text-amber-700">120,000+</div>
            <p className="text-amber-600 mt-1 font-medium">Actionable insights</p>
            <div className="h-1 w-24 bg-amber-200 rounded-full mt-4"></div>
          </div>
          
          <div className="stat-card bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-200">
                <TrendingUp className="w-5 h-5 text-green-700" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-green-900">Satisfaction</h3>
              </div>
            </div>
            <div className="stat-counter text-green-700">98%</div>
            <p className="text-green-600 mt-1 font-medium">Customer happiness</p>
            <div className="h-1 w-24 bg-green-200 rounded-full mt-4"></div>
          </div>
        </div>
        
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-6 bg-white rounded-xl border border-zinc-100 shadow-sm h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div>
                        <div className="font-medium">{`Company ${index + 1}`}</div>
                        <div className="text-sm text-zinc-500 mt-1">
                          Increased team productivity by {20 + index * 10}% using anonymous feedback
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-y-0 translate-x-0 mr-2" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
