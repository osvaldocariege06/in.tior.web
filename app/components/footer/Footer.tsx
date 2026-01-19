import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/app/assets/images";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061936] py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 xl:grid-cols-4">
        {/* Logo & Info */}
        <div>
          <h5 className="font-bold text-white text-3xl">InTior.</h5>
          <p className="text-white/80 mt-6 text-sm leading-relaxed">
            Interior Design Center Inc. A USA Based Photo Editing Company in
            Tokyo, Japan. Corporation NO. 524172-2, Check Here.
          </p>

          <div className="flex gap-2 items-center mt-6">
            <PhoneIcon color="green" size={16} />
            <span className="text-white text-sm">+88(019)04-000012</span>
          </div>

          <div className="flex gap-2 items-center mt-2">
            <MailIcon color="orange" size={16} />
            <span className="text-white text-sm">Info.01241588@gmail</span>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h5 className="font-bold text-white text-xl">Menu</h5>
          <nav className="flex flex-col gap-4 mt-6">
            {["Home", "About", "Services", "Process", "Portfolio", "Blog"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white"
                >
                  {item}
                </a>
              ),
            )}
          </nav>
        </div>

        {/* Useful Links */}
        <div>
          <h5 className="font-bold text-white text-xl">Useful Links</h5>
          <nav className="flex flex-col gap-4 mt-6">
            {[
              "Home",
              "About Us",
              "Privacy Policy",
              "Terms and Conditions",
              "Return & Refund",
            ].map((item) => (
              <a key={item} href="#" className="text-white/80 hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h5 className="font-bold text-white text-xl">Connect Online</h5>
          <div className="flex gap-4 mt-6">
            {[FacebookIcon, InstagramIcon, WhatsappIcon].map((icon, index) => (
              <a key={index} href="#">
                <Image src={icon} alt="Social icon" width={30} height={30} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="border-t border-white/20" />
        <p className="text-center text-zinc-400 text-sm py-6">
          Copyright 2021 The EASYCLICK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
