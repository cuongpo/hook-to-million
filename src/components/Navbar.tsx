
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-4 md:px-8 lg:px-12 absolute top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">ViralHook</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-viral-purple transition-colors">
            How It Works
          </a>
          <a href="#who-its-for" className="text-sm font-medium hover:text-viral-purple transition-colors">
            Who It's For
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-viral-purple transition-colors">
            Pricing
          </a>
          <Button className="gradient-bg">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 space-y-3">
          <a 
            href="#how-it-works" 
            className="block py-2 text-center hover:text-viral-purple"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#who-its-for" 
            className="block py-2 text-center hover:text-viral-purple"
            onClick={() => setIsOpen(false)}
          >
            Who It's For
          </a>
          <a 
            href="#pricing" 
            className="block py-2 text-center hover:text-viral-purple"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <Button className="w-full gradient-bg">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
