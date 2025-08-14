import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { Button } from "../ui/button"
import { useAuth } from "@/contexts/AuthContext"
 
export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState("")
 
    const navigate = useNavigate()
    const { login, isLoading } = useAuth()
 
    const isValidEmail = (email: string) => email.includes("@")
 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
 
        if (!email) return setError("L'email est requis.")
        if (!isValidEmail(email)) return setError("L'email doit contenir '@'.")
        if (!password) return setError("Le mot de passe est requis.")
        if (password.length < 6) return setError("Le mot de passe doit contenir au moins 6 caractères.") 
        setError("")
 
        try {
            await login(email, password) 
            navigate("/") 
        } catch (err) {
            setError("Échec de la connexion. Vérifiez vos identifiants.")
        }
    }
 
    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
            <div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex"
                style={{ width: "1082px", height: "590px" }}
            >
                <div className="flex-1 p-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à l'Accueil
                    </Link>
 
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1 text-left">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    className="pl-10 h-12"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Mail className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
 
                        <div className="space-y-1 text-left">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Votre mot de passe"
                                    className="pl-10 pr-10 h-12"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
 
                        <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span>Se souvenir de moi</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-blue-600">
                                mot de passe oublié ?
                            </Link>
                        </div>
 
                        {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
 
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                        >
                            {isLoading ? "Connexion..." : "Se Connecter"}
                        </button>
 
                        <div className="text-center text-sm text-gray-600">
                            Vous n'avez pas de compte ?{" "}
                            <Link to="/signup" className="text-indigo-600 hover:text-indigo-700">
                                Créer un compte
                            </Link>
                        </div>
                    </form>
                </div>
 
                <div className="hidden lg:flex flex-1 relative">
                    <img
                        src="/festivals.jpg"
                        alt="Concert crowd background"
                        className="object-cover w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 bg-blue-900/40 flex flex-col items-center justify-center text-white p-8">
                        <h1 className="text-4xl font-bold">Se Connecter</h1>
                        <p className="text-xl opacity-90">Accéder à votre compte E-TICKET</p>
                    </div>
                </div>
            </div>
        </div>
    )
}