
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
    <nav className="bg-white border-b border-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            FeedbackWave
          </Link>
        </div>

        {isMobile ? (
          <>
            <button
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white z-50 border-b border-gray-100 shadow-md">
                <div className="flex flex-col p-4 space-y-3">
                  {isAuthenticated ? (
                    <>
                      <Link 
                        to="/dashboard" 
                        className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
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
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link 
                        to="/login" 
                        className="py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        to="/register" 
                        className="py-2 px-4 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-center"
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
                <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">
                  Dashboard
                </Link>
                <Button 
                  variant="outline" 
                  onClick={logout}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </Link>
                <Link to="/register">
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
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
