
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
    <nav className="py-4 px-4 sm:px-6 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold text-zinc-900">
            FeedbackWave
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              className="p-2 rounded-md text-zinc-500 hover:text-zinc-800 focus:outline-none"
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
                        Login
                      </Link>
                      <Link 
                        to="/register" 
                        className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 rounded-md text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-[15px] text-zinc-600 hover:text-zinc-900">
                  Dashboard
                </Link>
                <Button 
                  variant="outline" 
                  onClick={logout}
                  size="sm"
                  className="text-sm font-medium border-zinc-200"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[15px] text-zinc-600 hover:text-zinc-900">
                  Login
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-sm font-medium" size="sm">
                    Get Started
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
