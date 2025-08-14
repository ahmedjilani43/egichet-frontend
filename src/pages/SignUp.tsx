import { Separator } from "@/components/ui/separator";
import { Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import SignUpForm from "@/components/auth/SignUpForm";
import GoogleButton from "@/components/ui/google-button";
 
const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex">
        <SignUpForm />
 
       <div className="hidden lg:flex flex-1 relative min-h-[600px] flex-col">
  <img
    src="/festivals.jpg"
    alt="Concert"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
    <h1 className="text-3xl font-bold mb-2">Créer un compte</h1>
    <p className="text-lg opacity-90">rejoignez la communauté E-TIcETT</p>
  </div>
</div>

      </div>
    </div>
  );
};
 
export default SignUp;