import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import SignUpForm from "@/components/auth/SignUpForm";
import GoogleButton from "@/components/ui/google-button";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-4"> 
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              e-gichet
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rejoignez-nous !</h1>
          <p className="text-gray-600">Créez votre compte pour découvrir les meilleurs événements</p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl w-full max-w-2xl mx-auto"> 
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Créer un compte</CardTitle>
            <CardDescription className="text-center">
              Rejoignez la communauté e-gichet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-4 sm:px-6">
            <div className="flex justify-center">
              <GoogleButton />
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white/80 px-2 text-gray-500">Ou</span>
              </div>
            </div>

            <SignUpForm />

            <div className="text-center pt-2">
              <p className="text-gray-600">
                Vous avez déjà un compte ?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium text-sm"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;