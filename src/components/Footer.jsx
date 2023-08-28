import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto text-gray-400 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-4">About Us</h3>
            <p>About the movie app and company.</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Movie App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
