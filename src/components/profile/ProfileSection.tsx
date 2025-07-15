
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Edit3 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de la Paix",
    city: "Paris",
    postalCode: "75001",
    country: "France",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    setIsEditing(false);
    toast({
      title: "Succès",
      description: "Votre profil a été mis à jour avec succès",
    });
  };

  return (
    <Card className="bg-white shadow-lg border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-gray-900 text-lg font-semibold">
            <User className="h-5 w-5 text-pink-600" />
            INFORMATIONS PERSONNELLES
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
            className="border-pink-200 text-pink-600 hover:bg-pink-50"
          >
            <Edit3 className="h-4 w-4 mr-2" />
            {isEditing ? "Annuler" : "Modifier"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                Prénom
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                disabled={!isEditing}
                className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                Nom
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                disabled={!isEditing}
                className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Téléphone
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={!isEditing}
              className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-medium text-gray-700">
              Adresse
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              disabled={!isEditing}
              className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                Ville
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                disabled={!isEditing}
                className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode" className="text-sm font-medium text-gray-700">
                Code postal
              </Label>
              <Input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                disabled={!isEditing}
                className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                Pays
              </Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                disabled={!isEditing}
                className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 disabled:bg-gray-50"
              />
            </div>
          </div>

          {isEditing && (
            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
            >
              <User className="mr-2 h-4 w-4" />
              SAUVEGARDER LES MODIFICATIONS
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;