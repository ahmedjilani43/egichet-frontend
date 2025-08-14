import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, User, Phone, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const SignUpForm = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { isLoading } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password.trim() !== formData.confirmPassword.trim()) {
            toast({
                title: "Erreur",
                description: "Les mots de passe ne correspondent pas",
                variant: "destructive",
            });
            return;
        }

        if (!formData.acceptTerms) {
            toast({
                title: "Erreur",
                description: "Vous devez accepter les conditions d'utilisation",
                variant: "default",
            });
            return;
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
            });

            toast({
                title: "Code envoyé",
                description: `Un code de vérification a été envoyé au ${formData.phone}`,
                variant: "default",
            });
        } catch (err) {
            toast({
                title: "Erreur",
                description: "Une erreur est survenue",
                variant: "destructive",
            });
            console.error("SMS send error:", err);
        }
    };

    return (
        
        <div className="flex-1 p-8">
            <Link
                to="/"
                className="flex w-full items-center text-sm text-secondary hover:text-blue-800 mb-8"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l&apos;Accueil
            </Link>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label
                        htmlFor="prenom"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Prénom
                    </Label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="prenom"
                            type="text"
                            placeholder="Entrez votre Prénom"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="w-full h-[52px] pl-10 pr-4 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="nom"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Nom
                    </Label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="nom"
                            type="text"
                            placeholder="Entrez votre Nom"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className="w-full h-[52px] pl-10 pr-4 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="telephone"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Téléphone
                    </Label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="telephone"
                            type="tel"
                            placeholder="+216 XX XXX XXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full h-[52px] pl-10 pr-4 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Email
                    </Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="votre@gmail.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full h-[52px] pl-10 pr-4 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="password"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Créer le password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="w-full h-[52px] pl-10 pr-12 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-secondary" />
                            ) : (
                                <Eye className="h-5 w-5 text-secondary" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label
                        htmlFor="confirmPassword"
                        className="text-left text-sm font-medium text-gray-900"
                    >
                        Confirm Password
                    </Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                handleInputChange("confirmPassword", e.target.value)
                            }
                            className="w-full h-[52px] pl-10 pr-12 bg-white border border-black rounded-2xl text-gray-900 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            aria-label={
                                showConfirmPassword
                                    ? "Hide confirm password"
                                    : "Show confirm password"
                            }
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5 text-secondary" />
                            ) : (
                                <Eye className="h-5 w-5 text-secondary" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex items-start space-x-3 pt-2">
                    <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) =>
                            handleInputChange("acceptTerms", Boolean(checked))
                        }
                        className="mt-0.5"
                    />
                    <Label
                        htmlFor="terms"
                        className="text-left text-sm text-gray-600 leading-5"
                    >
                        {"J'accepte les "}
                        <Link to="#" className="text-blue-500 hover:underline">
                            conditions d'utilisation
                        </Link>
                    </Label>
                </div>

                <div className="flex items-center py-2">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-sm text-gray-500">or</span>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>

                <button
                    type="button"
                    className="w-full h-[52px] flex items-center justify-center space-x-3 border border-gray-300 rounded-[16px] hover:bg-gray-50 bg-white transition-colors"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    <span className="text-gray-700">Sign in with Google</span>
                </button>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-[52px] bg-secondary hover:bg-secondary-dark border border-transparent rounded-[16px] text-white font-medium text-base mt-6 transition-colors disabled:opacity-50"
                >
                    {isLoading ? "Envoi en cours..." : "Créer un compte"}
                </button>

                <p className="text-center text-sm text-gray-600 pt-4">
                    Vous avez déjà un compte ?{" "}
                    <button
                        onClick={() => navigate("/signin")}
                        className="text-indigo-600 hover:underline font-medium"
                    >
                        Se Connecter
                    </button>
                </p>
            </form>
            
        </div>
        
    );
};

export default SignUpForm;