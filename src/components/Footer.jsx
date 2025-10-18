
import React from "react";
import { Link } from "react-router-dom";
import maroLogo from '../assets/marosautosales.png';

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/></svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
    ),
  },
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.18 1.62 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.93 0-3.8-.5-5.44-1.44l-.39-.23-3.67.96.98-3.58-.25-.41A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-1 2.43s1.03 2.82 1.18 3.02c.15.2 2.03 3.21 4.93 4.38.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/></svg>
    ),
  },
];

const Footer = () => (
  <footer className="bg-[#05141F] text-white pt-10 pb-6 mt-16 border-t-0">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Info principal con logo */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
        <img src={maroLogo} alt="Logo Maro Auto Sales" className="h-12 md:h-16 w-auto mb-1 drop-shadow-lg" />
        <span className="text-sm text-[#3498DB] font-semibold">Denver, Colorado</span>
        <span className="text-xs mt-1 text-gray-300">© {new Date().getFullYear()} Todos los derechos reservados.</span>
        <span className="text-xs mt-2 text-gray-300">Tel: <a href="tel:+13035551234" className="text-[#3498DB] hover:underline">(303) 555-1234</a></span>
        <span className="text-xs text-gray-300">Email: <a href="mailto:info@maroautosales.com" className="text-[#3498DB] hover:underline">info@maroautosales.com</a></span>
      </div>
      {/* Enlaces */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
  <Link to="/" className="hover:text-[#3498DB] font-medium transition">Inicio</Link>
  <Link to="/inventario" className="hover:text-[#3498DB] font-medium transition">Inventario</Link>
  <Link to="/financiamiento" className="hover:text-[#3498DB] font-medium transition">Financiamiento</Link>
  <Link to="/contacto" className="hover:text-[#3498DB] font-medium transition">Contacto</Link>
      </div>
      {/* Redes sociales */}
      <div className="flex gap-4 items-center">
        {socialLinks.map(social => (
          <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="bg-[#11263D] hover:bg-[#3498DB] text-white rounded-full p-2 shadow-lg transition" aria-label={social.label}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-gray-400">
      Sitio web desarrollado con React, Vite y Tailwind CSS · Diseño brutal para Maro Auto Sales LLC
    </div>
  </footer>
);

export default Footer;
