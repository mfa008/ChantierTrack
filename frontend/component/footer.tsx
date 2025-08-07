"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Monitor,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <Monitor className="h-8 w-8 text-blue-400" /> */}
              <Image
                src="/images/LogoEats.png"
                width={30}
                height={30}
                alt={""}
              />

              <span className="text-2xl font-bold">EATS-SARL</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Votre partenaire technologique de confiance . Nous accompagnons
              les entreprises dans leur transformation digitale.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://eats-sarl.com"
                  className="text-gray-400 hover:text-white transition-colors">
                  Site officiel
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </button>
              </li>
              {/* <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Témoignages
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Radiocommunication</span>
              </li>
              <li>
                <span className="text-gray-400">Energie </span>
              </li>
              <li>
                <span className="text-gray-400">Fibre Optique </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Solution Reseau Informatique et Services Collaboratifs{" "}
                </span>
              </li>
              <li>
                <span className="text-gray-400">Geolocalisation </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Virtualisation et Securite Informatique{" "}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">
                    {" "}
                    Parcelles Assainies Rond point Case Unité 8 villa N°572
                  </p>
                  {/* <p className="text-gray-400">75001 Paris, France</p> */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">+221 33 855 19 46</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">contact@eats-sarl.sn</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-400">Lun-Ven: 8h-17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm ">
              © 2025 EATS-SARL. Tous droits réservés.
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions dutilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
