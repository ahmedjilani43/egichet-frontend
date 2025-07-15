import { Phone, ShoppingCart, User, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

export const Header = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const { token, logout } = useAuth();
  const { cartItems, clearCart } = useCart();
  const cartCount = cartItems.length;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    clearCart();
    logout();
  };


  return (
    <div className="w-full">
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+216 50 548 028</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+216 99 727 727</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {token ? (
                <>
                  <button
                    onClick={() => navigate("/profil")}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 group"
                  >
                    <User className="w-4 h-4 mr-2 inline-block" />
                    <span>Mes commandes</span>
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </button>

                  <button
                    onClick={handleLogout}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 group"
                  >
                    <UserPlus className="w-4 h-4 mr-2 inline-block" />
                    <span>Se déconnecter</span>
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/signin")}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 group"
                  >
                    <User className="w-4 h-4 mr-2 inline-block" />
                    <span>Se connecter</span>
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="relative px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 group"
                  >
                    <UserPlus className="w-4 h-4 mr-2 inline-block" />
                    <span>Créer un compte</span>
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      <header
        className={`${isSticky ? "fixed top-0 left-0 w-full z-50 shadow-md" : ""
          } bg-white py-4 px-4 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-blue-500">E</span>
              <span className="text-gray-800">-GUICHET</span>
              <span className="text-blue-500">.tn</span>
            </Link>
          </div>

          <nav className="md:flex items-center space-x-8 overflow-x-auto no-scrollbar md:space-x-8">
            <div className="flex space-x-8 min-w-max">
              <Link
                to="/festivals"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Festivals
              </Link>
              <Link
                to="/spectacles"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Spectacles
              </Link>
              <Link
                to="/concerts"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Concerts
              </Link>
              <Link
                to="/theatre"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Théâtre
              </Link>
              <Link
                to="/sport"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Sport
              </Link>
              <Link
                to="/upcomingEvent"
                className="text-gray-700 hover:text-blue-500 transition-colors whitespace-nowrap"
              >
                Upcoming Events
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/card">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
