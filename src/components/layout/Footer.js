import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 text-primary-content bg-gray-200 bg-opacity-50 footer-center">
      &copy; Copyright {footerYear}. Rocky Rasakith.
    </footer>
  );
}

export default Footer;
