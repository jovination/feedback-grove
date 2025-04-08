
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Link2, 
  Shield, 
  Sparkles, 
  MessageSquare, 
  Share2, 
  BarChart3,
  ArrowUpRight,
  Users,
  Rocket,
  Zap
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      {/* Hero Section - Improved with illustration */}
      <section className="hero-gradient pt-20 pb-32 md:pt-28 md:pb-40 relative overflow-hidden">
        <div className="container-tight text-center relative z-10">
          <div className="inline-block mb-4 py-1.5 px-3 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-full text-[14px] font-medium text-zinc-800">
            <Sparkles className="w-4 h-4 inline-block mr-2 text-amber-500" />
            Anonymous feedback collection made simple
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6 tracking-tight">
            Anonymous Feedback <br className="hidden md:block" />
            With <span className="gradient-text">Superpowers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 mb-10 mx-auto max-w-2xl">
            FeedbackWave is the open-source feedback management infrastructure 
            for gathering honest, anonymous insights that help teams improve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <RouterLink to="/register">
              <Button className="h-11 px-5 rounded-md text-[15px] font-medium bg-black hover:bg-zinc-800 text-white">
                Start for Free
              </Button>
            </RouterLink>
            <RouterLink to="#how-it-works">
              <Button variant="outline" className="h-11 px-5 rounded-md text-[15px] font-medium border-zinc-200">
                See how it works
              </Button>
            </RouterLink>
          </div>

          {/* Interactive Demo Widget */}
          <div className="mx-auto max-w-3xl relative">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-100 rounded-full filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full filter blur-xl opacity-70"></div>
            
            <div className="bg-white rounded-xl border border-zinc-200 shadow-md relative z-10 overflow-hidden">
              <div className="p-4 border-b border-zinc-100 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium">F</div>
                  <div className="text-sm font-medium">Send anonymous feedback</div>
                </div>
                <div className="ml-auto flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-200 cursor-pointer transition-all">
                    <Share2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-white to-zinc-50">
                <div className="w-full h-36 bg-white border border-zinc-200 rounded-md p-3 text-sm text-zinc-700 mb-4 focus-within:ring-2 focus-within:ring-amber-500 focus-within:border-amber-500 transition-all">
                  <div className="animate-pulse">I really appreciate how you handled the client meeting yesterday. Your presentation was clear and engaging. One thing that could be improved is...</div>
                </div>
                <Button className="w-full bg-black hover:bg-zinc-800 rounded-md h-11">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Send Feedback Anonymously
                </Button>
              </div>

              {/* Widget Annotation */}
              <div className="absolute top-full right-0 transform -translate-y-6 translate-x-4">
                <div className="bg-blue-50 text-blue-700 rounded-lg px-3 py-2 text-xs font-medium shadow-sm border border-blue-100">
                  100% anonymous!
                  <div className="absolute -top-2 right-6 w-2 h-2 bg-blue-50 border-t border-l border-blue-100 transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview Floating */}
            <div className="hidden md:block absolute -bottom-10 right-0 transform translate-x-1/2 translate-y-1/4 w-48 h-36 bg-white rounded-lg shadow-xl border border-zinc-200 overflow-hidden">
              <div className="h-5 bg-zinc-50 border-b border-zinc-200 flex items-center px-2">
                <div className="w-2 h-2 rounded-full bg-zinc-300 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-300 mr-1"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
              </div>
              <div className="p-2">
                <div className="w-full h-3 bg-amber-100 rounded mb-2"></div>
                <div className="w-2/3 h-3 bg-zinc-100 rounded mb-2"></div>
                <div className="w-full h-10 bg-zinc-50 rounded border border-zinc-100 mb-2"></div>
                <div className="w-1/2 h-3 bg-zinc-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-50 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-50 rounded-full filter blur-3xl opacity-30"></div>
      </section>

      {/* Social proof section - enhanced with logos */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50">
        <div className="container-tight">
          <p className="text-center text-sm text-zinc-500 mb-8">Trusted by teams from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">COMPANY</div>
            <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">STARTUP</div>
            <div className="w-28 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">ENTERPRISE</div>
            <div className="w-24 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">BUSINESS</div>
            <div className="w-20 h-8 bg-gradient-to-r from-zinc-300 to-zinc-200 rounded-md flex items-center justify-center text-zinc-50 font-bold">AGENCY</div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced with illustrations */}
      <section id="how-it-works" className="section bg-white">
        <div className="container-tight">
          <div className="text-center mb-16">
            <span className="inline-block mb-2 text-amber-600 font-medium">How it works</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Collect anonymous feedback in 3 simple steps
            </h2>
            <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
              Setting up your anonymous feedback collection system takes less than 2 minutes.
              No technical skills required!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
              <div className="step-number mb-6">1</div>
              <div className="illustration-placeholder mb-6 bg-blue-50 rounded-lg h-40 flex items-center justify-center">
                <Users size={50} className="text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Create your account</h3>
              <p className="text-zinc-600 text-[15px]">
                Sign up in less than 2 minutes and get your personal feedback link immediately.
              </p>
            </div>
            
            <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
              <div className="step-number mb-6">2</div>
              <div className="illustration-placeholder mb-6 bg-purple-50 rounded-lg h-40 flex items-center justify-center">
                <Share2 size={50} className="text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Share your feedback link</h3>
              <p className="text-zinc-600 text-[15px]">
                Share the link with friends, colleagues, or embed it on your website.
              </p>
            </div>
            
            <div className="how-it-works-step bg-white rounded-xl border border-zinc-100 shadow-sm p-6 hover:shadow-md transition-all duration-200">
              <div className="step-number mb-6">3</div>
              <div className="illustration-placeholder mb-6 bg-amber-50 rounded-lg h-40 flex items-center justify-center">
                <MessageSquare size={50} className="text-amber-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Receive honest feedback</h3>
              <p className="text-zinc-600 text-[15px]">
                Get 100% anonymous feedback to help you improve and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Improved with modern cards */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Features</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Everything you need for better feedback
            </h2>
            <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
              Our platform is designed to make feedback collection simple, insightful, and actionable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Complete Anonymity</h3>
              <p className="text-zinc-600 text-[15px]">
                Get honest opinions with complete anonymity that encourages candid responses.
              </p>
            </div>
            
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Link2 className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Simple Integration</h3>
              <p className="text-zinc-600 text-[15px]">
                Share a link or embed our widget directly on your website with a simple snippet.
              </p>
            </div>
            
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-amber-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Insights Dashboard</h3>
              <p className="text-zinc-600 text-[15px]">
                Track feedback trends and insights with our powerful built-in analytics.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                <Rocket className="text-purple-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Quick Setup</h3>
              <p className="text-zinc-600 text-[15px]">
                Get started in minutes with our intuitive setup process. No coding required.
              </p>
            </div>
            
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-red-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Instant Notifications</h3>
              <p className="text-zinc-600 text-[15px]">
                Get notified instantly when someone sends you new feedback.
              </p>
            </div>
            
            <div className="feature-card hover:-translate-y-1">
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                <Users className="text-indigo-600" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Team Collaboration</h3>
              <p className="text-zinc-600 text-[15px]">
                Share insights with your team and collaborate on improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
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

      {/* Example Feedback Section */}
      <section className="section bg-zinc-50">
        <div className="container-tight">
          <div className="text-center mb-14">
            <span className="inline-block mb-2 text-amber-600 font-medium">Examples</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              See what feedback looks like
            </h2>
            <p className="text-zinc-600 mx-auto max-w-2xl mt-4">
              Here are examples of the kind of valuable feedback you can collect with FeedbackWave.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="feedback-example hover:shadow-md hover:border-zinc-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">A</div>
                  <div className="text-sm font-medium">Anonymous Feedback</div>
                </div>
                <div className="text-xs text-zinc-500">2 days ago</div>
              </div>
              <p className="text-zinc-700">
                "I really appreciated your presentation yesterday. Your explanation of the new project roadmap was clear and helped me understand our goals for the next quarter."
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center">
                <div className="text-xs text-zinc-500">Positive feedback</div>
                <div className="flex gap-1">
                  <div className="p-1 rounded hover:bg-zinc-100 cursor-pointer">
                    <Share2 size={14} className="text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="feedback-example hover:shadow-md hover:border-zinc-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">A</div>
                  <div className="text-sm font-medium">Anonymous Feedback</div>
                </div>
                <div className="text-xs text-zinc-500">5 days ago</div>
              </div>
              <p className="text-zinc-700">
                "I think the team could benefit from more regular check-ins. Sometimes I feel like I'm missing important updates that could help me be more effective."
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-between items-center">
                <div className="text-xs text-zinc-500">Constructive feedback</div>
                <div className="flex gap-1">
                  <div className="p-1 rounded hover:bg-zinc-100 cursor-pointer">
                    <Share2 size={14} className="text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RouterLink to="/register">
              <Button variant="outline" className="border-zinc-200 hover:bg-zinc-100 transition-all duration-200">
                Start collecting feedback <ArrowRight size={16} className="ml-2" />
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container-slim">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
              <div className="stat-counter text-blue-700">5k+</div>
              <p className="text-blue-600 mt-1 font-medium">Active users</p>
            </div>
            <div className="p-6 rounded-lg bg-amber-50 border border-amber-100">
              <div className="stat-counter text-amber-700">120k</div>
              <p className="text-amber-600 mt-1 font-medium">Feedback collected</p>
            </div>
            <div className="p-6 rounded-lg bg-green-50 border border-green-100">
              <div className="stat-counter text-green-700">98%</div>
              <p className="text-green-600 mt-1 font-medium">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-zinc-50">
        <div className="container-slim text-center relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-12 border border-amber-200">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              Ready to gather honest feedback?
            </h2>
            <p className="text-lg text-zinc-700 mb-8">
              Create your feedback widget in under 2 minutes.
            </p>
            <RouterLink to="/register">
              <Button className="bg-black hover:bg-zinc-800 h-12 px-8 rounded-md text-[16px] font-medium">
                Get started for free <ArrowRight size={18} className="ml-2" />
              </Button>
            </RouterLink>
            <p className="mt-4 text-sm text-zinc-600">No credit card required. Free plan available.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-zinc-200 mt-auto bg-white">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-xl font-bold mb-4 md:mb-0 flex items-center">
              <MessageSquare className="h-5 w-5 text-amber-500 mr-2" />
              FeedbackWave
            </div>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
              <RouterLink to="/features" className="text-sm text-zinc-600 hover:text-zinc-900">Features</RouterLink>
              <RouterLink to="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">Pricing</RouterLink>
              <RouterLink to="/resources" className="text-sm text-zinc-600 hover:text-zinc-900">Resources</RouterLink>
              <RouterLink to="/how-it-works" className="text-sm text-zinc-600 hover:text-zinc-900">How It Works</RouterLink>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100">
            <p className="text-sm text-zinc-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} FeedbackWave. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Terms</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Privacy</a>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-800">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
