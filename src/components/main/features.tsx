import { SparklesText } from "@/components/ui/sparkles-text"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  CatIcon,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: CatIcon,
    title: "British Shorthair",
    description:
      "Yumuşak tüyleri ve yuvarlak yüzüyle tanınır, sakin ve sevecendir.",
  },
  {
    icon: CatIcon,
    title: "Scottish Fold",
    description: "Kıvrık kulaklı, uysal ve insanlara bağlı bir kedidir..",
  },
  {
    icon: CatIcon,
    title: "Persian (İran Kedisi)",
    description:
      "Uzun tüyleriyle asil bir görünüme sahiptir, ev yaşamına uygundur.",
  },
  {
    icon: CatIcon,
    title: "Siamese (Siyam)",
    description: "Mavi gözlü, konuşkan ve enerjiktir.",
  },
  {
    icon: CatIcon,
    title: "Turkish Van (Van Kedisi)",
    description:
      "Suya girmeyi sever, beyaz tüyleri ve renkli kuyruğuyla tanınır.",
  },
  {
    icon: CatIcon,
    title: "Sphynx",
    description: "Tüysüz olmasına rağmen sıcakkanlı ve meraklıdır.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:text-center">
        <SparklesText>Hangi Kedi Sana Göre?</SparklesText>
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
        Bazıları miskin, bazıları konuşkan, bazıları tam bir sevgi pıtırcığı! İşte en sevilen kedi cinsleri ve onlarla ilgili bilmen gerekenler.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3! text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
