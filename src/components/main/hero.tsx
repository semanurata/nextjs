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
      src: "/images/kedi.jpg",
      alt: "Sevimli Kedi",
      title: "MİYAV MİYAV!",
      description:
        "Kedi severlerin buluşma noktası! Burada patili dostlarımız hakkında her şeyi bulabilirsiniz.",
    },
    {
      src: "/images/british-kedi.jpg",
      alt: "British Shorthair Kedi",
      title: "BRİTİSH SHORTHAİR",
      description:
        "Sakin ve sevimli British Shorthair kedilerimizle tanışın. Mükemmel aile dostu!",
    },
    {
      src: "/images/kedi.jpg",
      alt: "Van Kedisi",
      title: "VAN KEDİSİ",
      description:
        "Enerjik ve oyuncu Van kedilerimiz. Gözlerindeki mavi renk büyüleyici!",
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
          <Button
            size="lg"
            className="rounded-full text-base bg-white text-black hover:bg-white/90"
          >
            Get Started <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none border-white text-white hover:bg-white hover:text-black"
          >
            <CirclePlay className="size-5" /> Watch Cat
          </Button>
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
