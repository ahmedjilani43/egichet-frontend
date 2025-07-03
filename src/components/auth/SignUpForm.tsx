import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const SignUpForm = () => {
    const { toast } = useToast();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        acceptNewsletter: false
    });
    const {  isLoading } = useAuth();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password.trim() !== formData.confirmPassword.trim()) {
      toast({ title: "Erreur", description: "Les mots de passe ne correspondent pas", variant: "destructive" })
      return
    }

    if (!formData.acceptTerms) {
      toast({ title: "Erreur", description: "Vous devez accepter les conditions d'utilisation", variant: "default" })
      return
    }

    try {
      navigate("/sms-verification", {
        state: {
          userData: {
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
          },
        },
      })

      toast({
        title: "Code envoyé",
        description: `Un code de vérification a été envoyé au ${formData.phone}`,
        variant: "default",
      })
    } catch (err) {
      toast({ title: "Erreur", description: "Une erreur est survenue", variant: "destructive" })
      console.error("SMS send error:", err)
    }
  }


    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full text-left">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="block text-left">Prénom</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            id="firstName"
                            type="text"
                            placeholder="Prénom"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="pl-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="block text-left">Nom</Label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            id="lastName"
                            type="text"
                            placeholder="Nom"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="pl-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="block text-left">Adresse email</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="block text-left">Téléphone</Label>
                <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+216 XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="block text-left">Mot de passe</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Votre mot de passe"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pl-10 pr-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="block text-left">Confirmer le mot de passe</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirmer votre mot de passe"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pl-10 pr-10 w-full bg-white border-gray-300 focus:border-blue-500 text-left"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <div className="space-y-3 pt-2 text-left">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                        className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 leading-snug">
                        J'accepte les{" "}
                        <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                            conditions d'utilisation
                        </Link>
                    </Label>
                </div>

            </div>
             <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-medium mt-4"
        size="lg"
        disabled={isLoading}
      >
        {isLoading ? "Envoi en cours..." : "Continuer"}
      </Button>
        </form>
    )
}

export default SignUpForm;