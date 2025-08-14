import { Phone, Search, ShoppingBag, User, UserPlus, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
 
export const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const { token, logout } = useAuth();
  const { cartItems, clearCart } = useCart();
  const cartCount = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const handleLogout = () => {
    clearCart();
    logout();
    setMenuOpen(false);
  };
 
  return (
    <div className="w-full">
      <div className="bg-white py-2 border-b border-gray-100 px-4 sm:px-20">
        <div className="flex justify-between items-center text-sm flex-wrap">
          <div className="flex flex-wrap gap-6 font-bold text-primary">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 fill-secondary" />
              <span>+216 50 548 028</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 fill-secondary" />
              <span>+216 99 727 727</span>
            </div>
          </div>
 
          <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0">
            {token ? (
              <>
                <button
                  onClick={() => {
                    navigate("/profil");
                    setMenuOpen(false);
                  }}
                  className="px-3 py-1 text-sm font-bold text-secondary hover:bg-secondary/10 rounded-md flex items-center"
                >
                  <User className="w-4 h-4 mr-1" />
                  Mes commandes
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 text-sm font-bold text-secondary hover:bg-secondary/10 rounded-md flex items-center"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/signin");
                    setMenuOpen(false);
                  }}
                  className="px-3 py-1 text-sm font-bold text-secondary hover:bg-secondary/10 rounded-md flex items-center"
                >
                  <User className="w-4 h-4 mr-1" />
                  Se Connecter
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                  className="px-3 py-1 text-sm font-bold text-secondary hover:bg-secondary/10 rounded-md flex items-center"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  Créer un compte
                </button>
              </>
            )}
          </div>
        </div>
      </div>
 
      <header
        className={`bg-white py-3 border-t border-gray-100 ${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-md" : ""
          } transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 sm:px-20">
          <div className="flex items-center gap-4 sm:gap-10">
            <Link
              to="/"
              className="text-2xl font-bold text-black whitespace-nowrap flex-shrink-0 flex items-center gap-1"
              onClick={() => setMenuOpen(false)}
            >
               <img src="/logo black.png" alt="E-Ticket Logo" className="h-10 w-auto object-contain"  />
            </Link>
 
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-black hover:text-secondary font-medium">
                Home
              </Link>
              <Link to="/clubbing" className="text-black hover:text-secondary font-medium">
                Clubbing
              </Link>
              <Link to="/festivals" className="text-black hover:text-secondary font-medium">
                Festivals
              </Link>
              <Link to="/experience" className="text-black hover:text-secondary font-medium">
                Experience
              </Link>
              <Link to="/theatre" className="text-black hover:text-secondary font-medium">
                Théâtre
              </Link>
              <Link to="/sport" className="text-black hover:text-secondary font-medium">
                Sport
              </Link>
            </nav>
          </div>
 
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-secondary hover:bg-secondary/20"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
 
          <div className="hidden md:flex items-center gap-3 w-full max-w-xs sm:max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
              <Input
                placeholder="Search"
                className="pl-10 w-full rounded-full border-0 bg-white text-secondary placeholder-secondary/50"
              />
            </div>
            <Button
              onClick={() => navigate("/card")}
              variant="outline"
              size="icon"
              className="rounded-full bg-transparent border-0 relative"
            >
              <ShoppingBag className="w-5 h-5 text-secondary" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
         {menuOpen && (
          <nav className="md:hidden px-4 pb-4 bg-white border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/clubbing"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Clubbing
              </Link>
              <Link
                to="/festivals"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Festivals
              </Link>
              <Link
                to="/experience"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                to="/theatre"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Théâtre
              </Link>
              <Link
                to="/sport"
                className="text-black hover:text-secondary font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Sport
              </Link>
               <div className="flex items-center gap-3 mt-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary w-5 h-5" />
                  <Input
                    placeholder="Search"
                    className="pl-10 w-full rounded-full border-0 bg-white text-secondary placeholder-secondary/50"
                  />
                </div>
                <Button
                  onClick={() => {
                    navigate("/card");
                    setMenuOpen(false);
                  }}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-0 relative"
                >
                  <ShoppingBag className="w-5 h-5 text-secondary" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};