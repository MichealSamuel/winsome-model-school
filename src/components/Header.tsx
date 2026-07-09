import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import wfsLogo from '@/assets/wms-logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            <img 
              src={wfsLogo} 
              alt="Winsome Model Schools Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-display font-bold text-primary">
              Winsome Model Schools
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/admissions">
            <Button className="btn-primary hidden sm:inline-flex">
              Apply Now
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-primary/20">
                    <img 
                      src={wfsLogo} 
                      alt="Winsome Model Schools Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-lg font-display font-bold text-primary">
                    Winsome Model Schools
                  </span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <ul className="space-y-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-3 px-4 rounded-2xl font-semibold transition-all duration-200 ${
                              isActive(item.href)
                                ? 'bg-primary text-primary-foreground'
                                : 'text-muted-foreground hover:text-primary hover:bg-secondary'
                            }`}
                          >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border">
                  <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="btn-primary w-full">
                      Apply for Admission
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
