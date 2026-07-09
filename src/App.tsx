import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Route-level code splitting so the initial bundle only loads Home,
// not every page's code up front. This was previously one ~511KB chunk.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Admissions = lazy(() => import("./pages/Admissions"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  // NOTE: This used to be a hardcoded 5-second delay on every single visit
  // regardless of whether the page had actually finished loading — that was
  // the biggest cause of the site feeling slow. Now it's a short, real splash
  // that clears as soon as the page is ready (capped so it never hangs).
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsLoading(false);
      return;
    }

    const clear = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      // Already loaded — just show a brief, intentional splash, not a fake wait.
      const timer = setTimeout(clear, 400);
      return () => clearTimeout(timer);
    }

    window.addEventListener('load', clear);
    // Safety cap so a slow connection never leaves the splash stuck.
    const maxTimer = setTimeout(clear, 2500);

    return () => {
      window.removeEventListener('load', clear);
      clearTimeout(maxTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/facilities" element={<Facilities />} />
                  <Route path="/admissions" element={<Admissions />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
