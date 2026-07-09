import React from "react";
import { Link } from "react-router";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50/50 py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="mb-6 inline-flex items-center">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Legals Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              Legals
            </h3>
            <ul className="mt-4 space-y-3">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
