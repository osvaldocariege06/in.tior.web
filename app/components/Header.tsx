"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      <div className="max-w-7xl mx-auto px-6 xl:px-24 h-[57px] mt-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-orange-400 text-2xl">
          In.Tior
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex gap-10 items-center">
          {["Home", "About", "Services", "Process", "Portfolio", "Blog"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[#1F2730] transition hover:text-blue-400"
              >
                {item}
              </a>
            ),
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex gap-10 items-center">
          <a href="#" className="text-[#1F2730]">
            Login
          </a>
          <a
            href="#"
            className="text-blue-600 border border-blue-600 h-[47px] px-10 rounded-lg flex items-center"
          >
            Reservar
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-[#1F2730]"
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col gap-6 p-6">
            {["Home", "About", "Services", "Process", "Portfolio", "Blog"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#1F2730] text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ),
            )}

            <div className="border-t pt-4 flex flex-col gap-4">
              <a href="#" className="text-[#1F2730]">
                Login
              </a>
              <a
                href="#"
                className="text-blue-600 border border-blue-600 py-3 rounded-lg text-center"
              >
                Reservar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
