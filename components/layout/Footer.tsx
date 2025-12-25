const Footer = () => {
    return (
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Mohammed Vepari. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Add social links here */}
              <a href="#" className="text-gray-600 hover:text-gray-800">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
