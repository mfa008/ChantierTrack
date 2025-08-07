"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Texte à gauche */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Suivez vos chantiers en temps réel
        </h1>
        <p className="text-gray-700 text-lg">
          Une plateforme intuitive pour connecter les équipes de terrain et de bureau.
        </p>
        <div>
          <a
            href="/dashboard"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            Accéder à la plateforme
          </a>
        </div>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2">
        <Image
          src="/images/LogoEats.png" 
          alt="Logo de l'entreprise "
          width={600}
          height={400}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
}
