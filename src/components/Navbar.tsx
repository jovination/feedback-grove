
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="py-4 px-4 sm:px-6 border-b border-zinc-100 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-black flex items-center">
            FeedbackWave
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              className="p-2 rounded-md text-zinc-700 hover:text-zinc-900 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white z-50 border-b border-zinc-100 shadow-sm">
                <div className="flex flex-col p-4 space-y-3">
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
            <Link to="#" className="text-[15px] text-zinc-600 hover:text-zinc-900">
              Product
            </Link>
            <Link to="#" className="text-[15px] text-zinc-600 hover:text-zinc-900">
              Resources
            </Link>
            <Link to="#" className="text-[15px] text-zinc-600 hover:text-zinc-900">
              Pricing
            </Link>
            
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
