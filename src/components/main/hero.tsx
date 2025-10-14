import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AuroraText } from "../ui/aurora-text";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <Badge
            variant="secondary"
            className="flex rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
        </div>
        <AuroraText>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-neutral-950">
            <AuroraText>MİYAV MİYAV!</AuroraText>
          </h1>
        </AuroraText>
        <p className="mt-6 md:text-lg">
          Kedi severlerin buluşma noktası! Burada patili dostlarımız hakkında her
          şeyi bulabilirsiniz.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="size-5" /> Watch Cat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
