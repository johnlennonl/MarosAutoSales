
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import maroLogo from '../assets/marosautosales.png';

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/inventario", label: "Inventario" },
  { to: "/financiamiento", label: "Financiamiento" },
  { to: "/contacto", label: "Contacto" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", color: "text-pink-500", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
  ) },
  { href: "https://facebook.com", label: "Facebook", color: "text-blue-500", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/></svg>
  ) },
  { href: "https://wa.me/", label: "WhatsApp", color: "text-green-500", icon: (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.56 4.18 1.62 5.98L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.93 0-3.8-.5-5.44-1.44l-.39-.23-3.67.96.98-3.58-.25-.41A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.26-1 1-1 2.43s1.03 2.82 1.18 3.02c.15.2 2.03 3.21 4.93 4.38.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/></svg>
  ) },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-[#05141F] shadow-lg border-b-0 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo alineado a la izquierda */}
        <div className="flex items-center min-w-[120px] h-full">
          <img src={maroLogo} alt="Logo Maro Auto Sales" className="h-12 md:h-16 w-auto object-contain" />
        </div>
        {/* Desktop menu horizontal */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-2 py-1 font-semibold text-lg transition text-white hover:text-[#3498DB] ${location.pathname === link.to ? "border-b-2 border-[#3498DB]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Buscador y redes sociales desktop separados */}
        <div className="hidden md:flex items-center gap-8">
          <form className="flex items-center bg-[#11263D] rounded-lg px-2 py-1 mr-6">
            <input type="text" placeholder="Buscar..." className="bg-transparent text-white placeholder-gray-400 px-2 py-1 outline-none" />
            <button type="submit" className="text-[#3498DB] hover:text-white px-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" /><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" /></svg>
            </button>
          </form>
          <div className="flex gap-4 items-center">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white hover:text-[#3498DB]" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-[#323A43] hover:bg-[#11263D]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#05141F] border-t border-[#323A43] shadow px-4 pb-4 flex flex-col gap-2 animate-fade-in">
          <>{navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 font-semibold text-base text-white hover:text-[#3498DB] ${location.pathname === link.to ? "border-b-2 border-[#3498DB]" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}</>
          {/* Buscador mobile */}
          <form className="flex items-center bg-[#11263D] rounded-lg px-2 py-1 mt-2">
            <input type="text" placeholder="Buscar..." className="bg-transparent text-white placeholder-gray-400 px-2 py-1 outline-none w-full" />
            <button type="submit" className="text-[#3498DB] hover:text-white px-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" /><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" /></svg>
            </button>
          </form>
          <div className="flex gap-4 mt-4 justify-center">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition text-white hover:text-[#3498DB]" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
