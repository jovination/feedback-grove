
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-3 px-4 sm:px-6 border-b border-zinc-100 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-black flex items-center">
            FeedbackWave
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              className="p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white z-50 border-b border-zinc-100 shadow-sm">
                <div className="flex flex-col p-4 space-y-3">
                  <div className="py-1 border-b border-zinc-100">
                    <button 
                      className="flex items-center justify-between w-full py-2 px-4 text-zinc-700 hover:bg-zinc-50 rounded-md"
                      onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                    >
                      <span>Product</span>
                      <ChevronDown size={16} className={`transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {productDropdownOpen && (
                      <div className="pl-4 py-2 space-y-2">
                        <Link 
                          to="/features" 
                          className="block py-2 px-4 text-zinc-600 hover:bg-zinc-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Features
                        </Link>
                        <Link 
                          to="/how-it-works" 
                          className="block py-2 px-4 text-zinc-600 hover:bg-zinc-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          How it works
                        </Link>
                        <Link 
                          to="/pricing" 
                          className="block py-2 px-4 text-zinc-600 hover:bg-zinc-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Pricing
                        </Link>
                      </div>
                    )}
                  </div>

                  <div className="py-1 border-b border-zinc-100">
                    <button 
                      className="flex items-center justify-between w-full py-2 px-4 text-zinc-700 hover:bg-zinc-50 rounded-md"
                      onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
                    >
                      <span>Resources</span>
                      <ChevronDown size={16} className={`transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {resourcesDropdownOpen && (
                      <div className="pl-4 py-2 space-y-2">
                        <Link 
                          to="/resources" 
                          className="block py-2 px-4 text-zinc-600 hover:bg-zinc-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Documentation
                        </Link>
                        <a 
                          href="#" 
                          className="block py-2 px-4 text-zinc-600 hover:bg-zinc-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Blog
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {isAuthenticated ? (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="py-2 px-4 text-zinc-700 hover:bg-zinc-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full border-zinc-200"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="py-2 px-4 text-zinc-700 hover:bg-zinc-50 rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Log In
                      </Link>
                      <Link 
                        to="/register" 
                        className="py-2 px-4 bg-black text-white hover:bg-zinc-800 rounded-md text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-zinc-600 hover:text-zinc-900">
                Product
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white rounded-md shadow-md border border-zinc-200 py-1 min-w-[160px]">
                  <Link to="/features" className="block px-4 py-2 text-[14px] text-zinc-600 hover:bg-zinc-50">
                    Features
                  </Link>
                  <Link to="/how-it-works" className="block px-4 py-2 text-[14px] text-zinc-600 hover:bg-zinc-50">
                    How it works
                  </Link>
                  <Link to="/pricing" className="block px-4 py-2 text-[14px] text-zinc-600 hover:bg-zinc-50">
                    Pricing
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-[15px] text-zinc-600 hover:text-zinc-900">
                Resources
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white rounded-md shadow-md border border-zinc-200 py-1 min-w-[160px]">
                  <Link to="/resources" className="block px-4 py-2 text-[14px] text-zinc-600 hover:bg-zinc-50">
                    Documentation
                  </Link>
                  <a href="#" className="block px-4 py-2 text-[14px] text-zinc-600 hover:bg-zinc-50">
                    Blog
                  </a>
                </div>
              </div>
            </div>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-[15px] text-zinc-600 hover:text-zinc-900">
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className="text-[15px] font-medium"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[15px] text-zinc-600 hover:text-zinc-900">
                  Log In
                </Link>
                <Link to="/register">
                  <Button className="bg-black hover:bg-zinc-800 text-[15px] font-medium rounded-md" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
