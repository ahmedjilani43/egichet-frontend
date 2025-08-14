import React, { useState, useRef } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
 
export default function VerifyPhoneCode() {
    const [code, setCode] = useState(["2", "5", "0", "1", "7", "7"])
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
 
    const handleInputChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...code]
            newCode[index] = value
            setCode(newCode)
 
            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }
 
    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }
 
    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6)
        const newCode = [...code]
 
        for (let i = 0; i < pastedData.length && i < 6; i++) {
            newCode[i] = pastedData[i]
        }
 
        setCode(newCode)
    }
 
    return (
        <div className="flex min-h-screen flex-col justify-center items-center  bg-gray-50">
            <div className="w-full max-w-[506px] h-[506px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-8">
                    <a
                        href="/"
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        <span className="text-sm">Retour à l'Accueil</span>
                    </a>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-secondary mb-4">
                        VÉRIFIEZ VOTRE NUMÉRO
                        <br />
                        DE TÉLÉPHONE
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Nous avons envoyé un SMS de vérification
                        <br />
                        au numéro suivant <span className="font-medium">+216 96 831 475</span>
                    </p>
                </div>
 
                <div className="mb-8">
                    <p className="text-center text-gray-700 text-sm mb-6">
                        Entrez le code à 6 chiffres
                    </p>
 
                    <div className="flex justify-center gap-3 mb-8">
                        {code.map((digit, index) => (
                            <Input
                                key={index}
                                ref={(el) => {
                                    inputRefs.current[index] = el
                                }}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                onPaste={handlePaste}
                                className="w-12 h-12 text-center text-lg font-semibold border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                            />
                        ))}
                    </div>
 
                    <Link to="/signin">
                        <Button
                            className="w-full bg-secondary hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
                            size="lg"
                        >
                            Verify
                        </Button>
                    </Link>
                </div>
 
                <div className="text-center">
                    <span className="text-gray-600 text-sm">I didn't receive a code </span>
                    <a
                        href="#"
                        className="text-secondary hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                        Resend
                    </a>
                </div>
            </div>
        </div>
    )
}