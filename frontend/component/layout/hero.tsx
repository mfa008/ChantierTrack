"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight, BarChart3, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);

  const features = [
    { icon: BarChart3, text: "Suivi en temps réel" },
    { icon: Users, text: "Équipes connectées" },
    { icon: Zap, text: "Performance optimisée" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const generatedParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generatedParticles);

    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-20 left-20 w-52 sm:w-72 h-52 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 sm:w-96 h-72 sm:h-96 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-bounce"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        ></div>
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 h-full py-16 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div
            className={`space-y-8 transition-all mt-30 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-slate-200 bg-clip-text text-transparent animate-pulse">
                  ChantiersTrack
                </span>
                <br />
                {/* <span className="text-white">en temps réel</span> */}
              </h1>

              {/* Features */}
              <div className="flex justify-center lg:justify-start items-center space-x-3 h-8">
                {features.map((Feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 transition-all duration-500 ${
                      currentFeature === index
                        ? "scale-110 opacity-100"
                        : "scale-90 opacity-40"
                    }`}
                  >
                    <Feature.icon className="w-5 h-5 text-white" />
                    <span className="text-gray-300 text-sm font-medium">
                      {Feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/connexion"
                className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Commencer</span>
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </Link>
            </div>
          </div>
          <div
            className={`relative transition-all mt-30 duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <div className="w-24 h-6 bg-white/10 rounded-full animate-pulse"></div>
              </div>
              <div className="relative group">
                <Image
                  src="/Images/LogoEats.png"
                  alt="Logo de l'entreprise"
                  width={400}
                  height={400}
                  className="w-full h-auto max-h-80 object-contain rounded-2xl transform transition-all duration-700 group-hover:scale-105 filter drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-100/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm">En ligne</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-gray-300 text-sm">Synchronisé</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl animate-bounce delay-100 shadow-lg shadow-pink-400/25"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl animate-bounce delay-300 shadow-lg shadow-green-400/25"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="w-4 h-4 bg-cyan-400/60 rounded-full animate-spin"
                style={{
                  animationDuration: "8s",
                  transformOrigin: "100px 0px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950/50 to-transparent"></div>
    </section>
  );
}
