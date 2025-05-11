
const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">ViralHook</span>
            <p className="text-sm text-gray-600 mt-1">
              Turn your demos into viral traffic
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-viral-purple">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-viral-purple">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-viral-purple">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ViralHook. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
