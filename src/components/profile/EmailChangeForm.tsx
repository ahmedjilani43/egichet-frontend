import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmailChangeForm = () => {
  const [formData, setFormData] = useState({
    currentEmail: "",
    newEmail: "",
    confirmEmail: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.newEmail !== formData.confirmEmail) {
      toast({
        title: "Erreur",
        description: "Les adresses e-mail ne correspondent pas",
        variant: "destructive",
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.newEmail)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse e-mail valide",
        variant: "destructive",
      });
      return;
    }

    console.log("Email change submitted:", formData);
    toast({
      title: "Succès",
      description: "Votre adresse e-mail a été modifiée avec succès",
    });
    
    setFormData({
      currentEmail: "",
      newEmail: "",
      confirmEmail: "",
    });
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
      <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <CardTitle className="flex items-center gap-3 text-gray-900 text-xl font-bold">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
            <Mail className="h-5 w-5 text-white" />
          </div>
          CHANGER VOTRE E-MAIL
        </CardTitle>
        <p className="text-gray-600 mt-2 text-sm">
          Mettez à jour votre adresse e-mail pour recevoir vos notifications
        </p>
      </CardHeader>
      <CardContent className="space-y-8 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="currentEmail" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" />
              Ancien e-mail
            </Label>
            <Input
              id="currentEmail"
              type="email"
              value={formData.currentEmail}
              onChange={(e) => setFormData({ ...formData, currentEmail: e.target.value })}
              className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 px-4 transition-all duration-300 hover:border-gray-300"
              placeholder="votre.ancien@email.com"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="newEmail" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              Nouveau e-mail
            </Label>
            <Input
              id="newEmail"
              type="email"
              value={formData.newEmail}
              onChange={(e) => setFormData({ ...formData, newEmail: e.target.value })}
              className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 px-4 transition-all duration-300 hover:border-gray-300"
              placeholder="votre.nouveau@email.com"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="confirmEmail" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              Confirmer nouveau e-mail
            </Label>
            <Input
              id="confirmEmail"
              type="email"
              value={formData.confirmEmail}
              onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
              className="border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl py-3 px-4 transition-all duration-300 hover:border-gray-300"
              placeholder="confirmer.nouveau@email.com"
              required
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-3 h-5 w-5" />
              VALIDER L'EMAIL
            </Button>
          </div>
        </form>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Sécurité</p>
              <p className="text-xs text-blue-700 mt-1">
                Un e-mail de confirmation sera envoyé à votre nouvelle adresse pour valider le changement.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailChangeForm;
