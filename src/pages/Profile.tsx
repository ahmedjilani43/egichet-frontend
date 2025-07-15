
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Lock, User, MapPin, Clock } from "lucide-react";
import PasswordChangeForm from "@/components/profile/PasswordChange";
import EmailChangeForm from "@/components/profile/EmailChangeForm";
import ProfileSection from "@/components/profile/ProfileSection";

const Profil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Espace Client</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Consulter vos commandes, mettez à jour vos informations personnelles et accédez à tous vos services
          </p>
        </div>

        <Tabs defaultValue="connexion" className="w-full space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl h-[52px]">
            <TabsTrigger
              value="commandes"
              className="flex items-center justify-center gap-3 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-lg text-white/90 hover:text-white transition-all duration-300 rounded-xl font-semibold h-full"
            >
              <Package size={20} />
              <span className="hidden sm:inline">MES COMMANDES</span>
              <span className="sm:hidden">COMMANDES</span>
            </TabsTrigger>
            <TabsTrigger
              value="connexion"
              className="flex items-center justify-center gap-3 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-lg text-white/90 hover:text-white transition-all duration-300 rounded-xl font-semibold h-full"
            >
              <Lock size={20} />
              <span className="hidden sm:inline">DONNÉES DE CONNEXION</span>
              <span className="sm:hidden">CONNEXION</span>
            </TabsTrigger>
            <TabsTrigger
              value="profil"
              className="flex items-center justify-center gap-3 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-lg text-white/90 hover:text-white transition-all duration-300 rounded-xl font-semibold h-full"
            >
              <User size={20} />
              <span>PROFIL</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="commandes" className="space-y-8 ">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center py-16">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <Package className="h-16 w-16 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-8 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-6 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Aucune commande pour le moment</h3>
                  <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                    Vous n'avez pas encore passé de commande. Découvrez nos événements exceptionnels et réservez vos places dès maintenant.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Découvrir nos événements
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                      Voir les promotions
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">0</p>
                      <p className="text-gray-600 font-medium">Commandes en cours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">0</p>
                      <p className="text-gray-600 font-medium">Total commandes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">0</p>
                      <p className="text-gray-600 font-medium">Événements suivis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="connexion" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <PasswordChangeForm />
              <EmailChangeForm />
            </div>
          </TabsContent>

          <TabsContent value="profil" className="space-y-8">
            <ProfileSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profil;