import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Lock, User } from "lucide-react";
import PasswordChangeForm from "@/components/profile/PasswordChange";
import ProfileSection from "@/components/profile/ProfileSection";
import { Button } from "@/components/ui/button";
import EmailChangeForm from "@/components/profile/EmailChangeForm";

const Profil = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6 sm:py-12">
      <div className="w-full max-w-6xl">
        <Tabs defaultValue="connexion" className="w-full">
          <div className="shadow-lg sm:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="bg-secondary">
              <div className="px-4 sm:px-6 py-6 sm:py-8 text-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">Espace Client</h1>
                <p className="text-blue-100 text-sm sm:text-lg max-w-2xl mx-auto">
                  Consulter vos commandes, mettez à jour vos informations personnelles et accédez à tous vos services
                </p>
              </div>

              <TabsList className="grid w-full grid-cols-3 bg-secondary h-[60px] sm:h-[89px]">
                <TabsTrigger
                  value="commandes"
                  className="flex flex-col items-center justify-center gap-0 sm:gap-1 data-[state=active]:bg-blue-100 data-[state=active]:text-secondary text-white hover:text-white transition-all duration-300 font-semibold h-full py-1 sm:py-2"
                >
                  <Package size={16} className="sm:size-5" />
                  <span className="hidden sm:inline text-xs sm:text-sm">MES COMMANDES</span>
                  <span className="sm:hidden text-[10px]">COMMANDES</span>
                </TabsTrigger>

                <TabsTrigger
                  value="connexion"
                  className="flex flex-col items-center justify-center gap-0 sm:gap-1 data-[state=active]:bg-blue-100 data-[state=active]:text-secondary text-white hover:text-white transition-all duration-300 font-semibold h-full py-1 sm:py-2"
                >
                  <Lock size={16} className="sm:size-5" />
                  <span className="hidden sm:inline text-xs sm:text-sm">DONNÉES DE CONNEXION</span>
                  <span className="sm:hidden text-[10px]">CONNEXION</span>
                </TabsTrigger>

                <TabsTrigger
                  value="profil"
                  className="flex flex-col items-center justify-center gap-0 sm:gap-1 data-[state=active]:bg-blue-100 data-[state=active]:text-secondary text-white hover:text-white transition-all duration-300 font-semibold h-full py-1 sm:py-2"
                >
                  <User size={16} className="sm:size-5" />
                  <span className="text-xs sm:text-sm">PROFIL</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="bg-white p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
              <TabsContent value="commandes" className="space-y-6 sm:space-y-8">
                <div className="bg-white flex items-center justify-center p-2 sm:p-4">
                  <div className="max-w-md w-full text-center space-y-4 sm:space-y-6">
                    <div className="flex justify-center mb-4 sm:mb-8">
                      <img
                        src="/mg.png"
                        alt="3D geometric shapes illustration"
                        width={300}
                        height={200}
                        className="rounded-xl sm:rounded-2xl w-[200px] sm:w-[300px]"
                      />
                    </div>

                    <h1 className="text-lg sm:text-xl font-medium text-blue-600 mb-1 sm:mb-2">Aucune commande pour le moment</h1>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-4">
                      Vous n'avez aucune commande en cours pour le moment. Découvrez nos événements exceptionnels et réservez vos
                      places dès maintenant
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center">
                      <Button className="bg-secondary text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-secondary/90 text-xs sm:text-sm">
                        Découvrir nos événements
                      </Button>

                      <Button
                        variant="outline"
                        className="border-secondary text-secondary font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-secondary/10 text-xs sm:text-sm"
                      >
                        Découvrir nos promotions
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="connexion" className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <PasswordChangeForm />
                  <EmailChangeForm /> 
                </div>
              </TabsContent>

              <TabsContent value="profil" className="space-y-6 sm:space-y-8">
                <ProfileSection />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Profil;