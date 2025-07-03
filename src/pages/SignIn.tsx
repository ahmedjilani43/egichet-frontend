import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Ticket, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GoogleButton from "@/components/ui/google-button";
import { useAuth } from "@/contexts/AuthContext";
import SignInForm from "@/components/auth/SignInForm";

const SignIn = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6 group">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl group-hover:shadow-lg transition-all duration-200">
              <Ticket className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              e-gichet
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Bon retour !</h1>
          <p className="text-gray-600 text-lg">Connectez-vous à votre compte pour continuer</p>
        </div>

        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-2xl w-full max-w-2xl mx-auto"> {/* Added w-full and max-w-2xl */}
          <CardHeader className="space-y-2 pb-8">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Se connecter</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Accédez à votre compte e-gichet
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <GoogleButton />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm uppercase">
                <span className="bg-white px-4 text-gray-500 font-medium">Ou</span>
              </div>
            </div>

           <SignInForm/>

            <div className="text-center pt-4">
              <p className="text-gray-600">
                Vous n'avez pas de compte ?{" "}
                <Link
                  to="/signup"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Créer un compte
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 font-medium transition-colors inline-flex items-center"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;