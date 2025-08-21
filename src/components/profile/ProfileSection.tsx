import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PersonalInfoForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    prenom: "Sofie",
    nom: "Dubois",
    telephone: "98 765 432",
    email: "sofie.dubois@email.com",
    adresse: "23, Rue du Park, Soukra",
    codePostal: "2036",
    ville: "Ariana",
    pays: "Tunisie"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="mb-6 sm:mb-8">
      <div className="px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-9">
          INFORMATIONS PERSONNELLES
        </h1>

        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
                <AvatarImage src="/Sophie.png" alt="Sophie Dubois" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {formData.prenom} {formData.nom}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">{formData.email}</p>
              </div>
            </div>
            {isEditing ? (
              <Button 
                onClick={handleSave}
                className="bg-secondary hover:bg-secondary/80 text-white w-full sm:w-auto mt-2 sm:mt-0"
                size="sm"
              >
                Enregistrer
              </Button>
            ) : (
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(true)}
                className="text-secondary border-secondary/60 hover:bg-white w-full sm:w-auto mt-2 sm:mt-0"
                size="sm"
              >
                Modifier
              </Button>
            )}
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-xs sm:text-sm font-poppins text-primary">
                  Prénom
                </Label>
                <Input
                  id="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-xs sm:text-sm font-poppins text-primary">
                  Nom
                </Label>
                <Input
                  id="nom"
                  type="text"
                  value={formData.nom}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-xs sm:text-sm font-medium text-gray-700">
                Téléphone
              </Label>
              <Input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adresse" className="text-xs sm:text-sm font-medium text-gray-700">
                Adresse
              </Label>
              <Input
                id="adresse"
                type="text"
                value={formData.adresse}
                onChange={handleInputChange}
                disabled={!isEditing}
                className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label htmlFor="codePostal" className="text-xs sm:text-sm font-medium text-gray-700">
                  Code postal
                </Label>
                <Input
                  id="codePostal"
                  type="text"
                  value={formData.codePostal}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ville" className="text-xs sm:text-sm font-medium text-gray-700">
                  Ville
                </Label>
                <Input
                  id="ville"
                  type="text"
                  value={formData.ville}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pays" className="text-xs sm:text-sm font-medium text-gray-700">
                  Pays
                </Label>
                <Input
                  id="pays"
                  type="text"
                  value={formData.pays}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}