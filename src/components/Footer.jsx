import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">ReturnIt</h3>
          <p className="text-sm text-gray-400">
            A community-driven platform helping people recover
            lost belongings safely and responsibly.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/lost-items" className="hover:text-white">Lost Items</Link></li>
            <li><Link to="/found-items" className="hover:text-white">Found Items</Link></li>
            <li><Link to="/report-lost" className="hover:text-white">Report Lost</Link></li>
            <li><Link to="/report-found" className="hover:text-white">Report Found</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} ReturnIt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
