import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import MainLayout from './components/layout/MainLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import Conditions from "./pages/Conditions";
import { EventSection } from "./components/EventSection";
import Card from "./pages/Card";
import Orders from "./pages/Orders";
import SMSVerification from "./pages/SMSVerification";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/terms" element={<Conditions />} />
              <Route path="/upcomingEvent" element={<EventSection showAllByDefault/>} />
              <Route path="/card" element={<Card />} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/sms-verification" element={<SMSVerification />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
