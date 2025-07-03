import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronUp, FileText, ArrowLeft, Link } from "lucide-react"

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections = [
    { id: "generalites", title: "1. Généralités" },
    { id: "commandes", title: "2. Commandes" },
    { id: "prix-paiement", title: "3. Prix et paiement" },
    { id: "livraison", title: "4. Livraison des billets" },
    { id: "annulations", title: "5. Annulations et remboursements" },
    { id: "responsabilite", title: "6. Responsabilité" },
    { id: "donnees", title: "7. Protection des données personnelles" },
    { id: "modifications", title: "8. Modifications des conditions de vente" },
    { id: "juridiction", title: "9. Droit applicable et juridiction compétente" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-9">
<div className="hidden lg:block w-96 flex-shrink-0"> 
  <Card className="sticky top-24 border-0 shadow-none bg-transparent">
    <CardContent className="p-8">
      <h2 className="font-semibold text-gray-900 mb-6 text-xl">Table des matières</h2> 
      <ScrollArea className="h-[24rem]"> 
        <nav className="space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-md text-base transition-colors ${
                activeSection === section.id
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </ScrollArea>
    </CardContent>
  </Card>
</div>


          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <Card className="border-0 shadow-none">
              <CardContent className="p-8 lg:p-12">
                <div className="prose prose-gray max-w-none">
                  <h1 className="text-3xl font-bold mb-8 text-gray-900">Termes et Conditions de Vente</h1>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                    <p className="text-blue-800">
                      Les présentes conditions de vente régissent l'utilisation de la billetterie en ligne fournie par
                      Tunisie Billet (ci-après dénommée "le Vendeur"). En utilisant la billetterie en ligne, vous
                      acceptez d'être lié par ces conditions de vente. Veuillez les lire attentivement avant d'effectuer
                      un achat.
                    </p>
                  </div>

                  <section id="generalites" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">1. Généralités</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Les présentes conditions de vente régissent l'utilisation de la billetterie en ligne fournie par
                      Tunisie Billet, ci-après dénommée "le Vendeur". En utilisant la billetterie en ligne, vous
                      acceptez d'être lié par ces conditions de vente. Veuillez les lire attentivement avant d'effectuer
                      un achat.
                    </p>
                  </section>

                  <section id="commandes" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">2. Commandes</h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">2.1 Disponibilité des billets</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Toutes les commandes de billets sont soumises à disponibilité. Le Vendeur se réserve le droit
                          de refuser ou d'annuler toute commande en cas de rupture de stock ou pour toute autre raison
                          justifiée. Dans de tels cas, le Vendeur s'efforcera de vous fournir une solution alternative
                          ou de vous rembourser intégralement.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">2.2 Informations sur l'événement</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Il est de votre responsabilité de vérifier les informations relatives à l'événement avant de
                          passer commande, y compris la date, l'heure, le lieu et toute autre information pertinente. Le
                          Vendeur décline toute responsabilité en cas de changement d'horaire, de lieu ou d'annulation
                          de l'événement.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">2.3 Processus de commande</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Pour passer une commande, vous devrez fournir des informations exactes et complètes sur
                          vous-même et sur les billets que vous souhaitez acheter. Une fois votre commande passée, elle
                          est considérée comme une offre d'achat. Le Vendeur se réserve le droit d'accepter ou de
                          refuser cette offre à sa seule discrétion.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="prix-paiement" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      3. Prix et paiement
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">3.1 Prix</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Les prix des billets sont indiqués en devise locale et incluent toutes les taxes applicables,
                          sauf indication contraire. Le Vendeur se réserve le droit de modifier les prix à tout moment,
                          mais les modifications n'affecteront pas les commandes déjà confirmées.
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                          <p className="text-amber-800">
                            <strong>Frais de service :</strong> Une commission de 1.5 Dt est appliquée à tous les
                            tickets vendus sur notre site, elle correspond aux frais de service de notre prestataire
                            informatique et nous permet de maintenir le service, de résoudre les problèmes techniques
                            ainsi que de continuer les recherches et développement pour améliorer l'expérience client.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">3.2 Modes de paiement</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Le Vendeur accepte les modes de paiement indiqués sur le site de la billetterie en ligne. Le
                          paiement doit être effectué intégralement au moment de la commande. Les informations de
                          paiement sont traitées de manière sécurisée et confidentielle.
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <p className="text-red-800">
                            <strong>Paiement en espèce :</strong> Le mode de paiement en espèce est soumis à deux
                            conditions importantes : (1) La commande à payer en espèce reste valide 4h seulement, sinon
                            elle est automatiquement annulée. (2) La commande reste valide sous réserve de stock
                            disponible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="livraison" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      4. Livraison des billets
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">4.1 Modes de livraison</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Les billets peuvent être livrés électroniquement par courrier électronique ou par
                          l'intermédiaire d'un compte utilisateur sur le site de la billetterie en ligne. Dans certains
                          cas, des options de livraison physique peuvent être proposées moyennant des frais
                          supplémentaires.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">4.2 Responsabilité de la livraison</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Le Vendeur s'efforcera de livrer les billets dans les délais indiqués lors de la commande.
                          Cependant, le Vendeur décline toute responsabilité en cas de retard, de perte ou de vol des
                          billets lors de la livraison.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="annulations" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      5. Annulations et remboursements
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">5.1 Annulations par l'acheteur</h3>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                          <p className="text-gray-800 font-medium mb-2">Politique de remboursement :</p>
                          <p className="text-gray-700 leading-relaxed">
                            Les billets ne sont ni échangeables ni remboursables, sauf en cas d'annulation de
                            l'événement par l'organisateur. L'annulation d'un événement par l'organisateur n'est en
                            aucun cas la responsabilité du Vendeur. L'organisateur doit impérativement informer le
                            vendeur de l'annulation afin que ce dernier prévienne l'acheteur. L'organisateur doit
                            impérativement procéder directement ou à travers le vendeur au remboursement de tous les
                            acheteurs. Les Frais ne sont pas remboursés car ils sont payés directement lors de l'achat
                            du billet pour des prestataires externes (Banques ou partenaire point de vente physique).
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-medium mb-3 text-gray-800">5.2 Annulations par le Vendeur</h3>
                        <p className="mb-4 text-gray-700 leading-relaxed">
                          Le Vendeur se réserve le droit d'annuler une commande pour diverses raisons, notamment en cas
                          de violation des conditions de vente, de fraude ou d'indisponibilité des billets. En cas
                          d'annulation par le Vendeur, vous serez intégralement remboursé pour le prix du billet. Les
                          Frais ne sont pas remboursés car ils sont payés directement lors de l'achat du billet pour des
                          prestataires externes (Banques ou partenaire point de vente physique).
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="responsabilite" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">6. Responsabilité</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Le Vendeur décline toute responsabilité en cas de perte, de dommage ou de blessure découlant de
                      l'utilisation des billets ou de l'assistance à l'événement. Il est de votre responsabilité de
                      prendre toutes les mesures nécessaires pour assurer votre sécurité lors de l'événement.
                    </p>
                  </section>

                  <section id="donnees" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      7. Protection des données personnelles
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Le Vendeur s'engage à protéger vos données personnelles conformément à la législation en vigueur.
                      Veuillez consulter notre politique de confidentialité pour plus d'informations sur la manière dont
                      nous collectons, utilisons et protégeons vos données.
                    </p>
                  </section>

                  <section id="modifications" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      8. Modifications des conditions de vente
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Le Vendeur se réserve le droit de modifier ces conditions de vente à tout moment. Les
                      modifications seront effectives dès leur publication sur le site de la billetterie en ligne. Il
                      vous est conseillé de consulter régulièrement les conditions de vente pour prendre connaissance
                      des éventuelles modifications.
                    </p>
                  </section>

                  <section id="juridiction" className="mb-12">
                    <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-900 border-b pb-2">
                      9. Droit applicable et juridiction compétente
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Les présentes conditions de vente sont régies par les lois Tunisiennes. Tout litige découlant de
                      l'utilisation de la billetterie en ligne sera soumis à la juridiction exclusive des tribunaux de
                      Tunis.
                    </p>
                  </section>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-12">
                    <p className="text-blue-800 font-medium">
                      En passant commande, vous reconnaissez avoir lu, compris et accepté ces conditions de vente. Si
                      vous avez des questions, veuillez contacter notre service clientèle.
                    </p>
                  </div>

                  <div className="text-center mt-8 pt-8 border-t">
                    <p className="text-sm text-gray-500">
                      Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <Button onClick={scrollToTop} className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg" size="icon">
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

export default TermsAndConditions
