"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AuroraText } from "../ui/aurora-text";
import Image from "next/image";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "/images/hero1.jpg",
      alt: "Sevimli Kedi",
      title: "MİYAV MİYAV!",
      description:
        "Kedi severlerin buluşma noktası! Burada patili dostlarımız hakkında her şeyi bulabilirsiniz.",
    },
    {
      src: "/images/hero2.jpg",
      alt: "MİYAV MİYAV!",
      title: "MİYAV MİYAV!",
      description:
        "Bir kediyle tanıştığın an hayatın güzelleşir.",
    },
    {
      src: "/images/hero3.jpg",
      alt: "MİYAV MİYAV!",
      title: "MİYAV MİYAV!",
      description:
        "Kedime sordum, bu siteyi o onayladı.",
    },
    {
      src: "/images/hero4.jpg",
      alt: "MİYAV MİYAV!",
      title: "MİYAV MİYAV!",
      description:
        "Kedim bu siteyi beğendi.",
    },
    {
      src: "/images/hero5.jpg", // Yeni görsel yolu
      alt: "Mutlu kedi", // Yeni görsel için alternatif metin
      title: "KEDİ DOSTU BİR DÜNYA", // Yeni görsel için başlık
      description:
        "Kedi bakımı, cinsler ve sahiplendirme hakkında aradığın her şey burada.", // Yeni görsel açıklaması
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 saniyede bir değişir

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Arka plan geçişli görseller */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Koyu overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* İçerik */}
      <div className="text-center max-w-3xl relative z-10 text-white">
        <div className="flex justify-center mb-6">
          <Badge
            variant="secondary"
            className="flex rounded-full py-1 border-border bg-white/90 text-black hover:bg-white"
            asChild
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
        </div>

        {/* Geçişli başlık */}
        <div className="mb-8">
          <AuroraText>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white drop-shadow-lg">
              <AuroraText>{currentImage.title}</AuroraText>
            </h1>
          </AuroraText>
        </div>

        {/* Geçişli açıklama */}
        <p className="mt-6 md:text-lg text-white/90 drop-shadow-md">
          {currentImage.description}
        </p>

        {/* Butonlar */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Başlangıç butonunu kedi cinsleri sayfasına yönlendiriyoruz */}
          <Link href="/cinsler" aria-label="Kedi cinslerini keşfet sayfasına git">{/* Erişilebilirlik için açıklayıcı etiket */}
            <Button
              size="lg"
              className="rounded-full text-base bg-white text-black hover:bg-white/90"
            >
              Keşfet <ArrowUpRight className="size-5" />{/* Daha net Türkçe CTA */}
            </Button>
          </Link>
          {/* Tanıtım videosuna giden buton */}
          <Link
            href="https://www.youtube.com/results?search_query=cute+cats" // Örnek bir video araması
            target="_blank" // Yeni sekmede aç
            rel="noopener noreferrer" // Güvenlik için
            aria-label="Kedi videolarını izle"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none border-white text-white hover:bg-white hover:text-black"
            >
              <CirclePlay className="size-5" /> Kedi İzle{/* Türkçe buton metni */}
            </Button>
          </Link>
        </div>

        {/* Görsel göstergeler */}
        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
