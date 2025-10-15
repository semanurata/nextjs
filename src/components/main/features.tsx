import { SparklesText } from "@/components/ui/sparkles-text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CatIcon } from "lucide-react";
import Image from "next/image";

// İsteğe bağlı arama terimini almak için prop tipi
type FeaturesProps = {
  query?: string; // Arama kutusundan gelen filtre metni
};

// Öne çıkan kedi cinsleri listesi; her biri için görsel ve kısa açıklama sağlar
const features = [
  {
    icon: CatIcon,
    title: "British Shorthair",
    description:
      "Yumuşak tüyleri ve yuvarlak yüzüyle tanınır, sakin ve sevecendir.",
    image: "/images/british-kedi.jpg",
  },
  {
    icon: CatIcon,
    title: "Scottish Fold",
    description: "Kıvrık kulaklı, uysal ve insanlara bağlı bir kedidir..",
    image: "/images/Scottish Fold.jpg",
  },
  {
    icon: CatIcon,
    title: "Persian (İran Kedisi)",
    description:
      "Uzun tüyleriyle asil bir görünüme sahiptir, ev yaşamına uygundur.",
    image: "/images/Persian (İran Kedisi).jpg",
  },
  {
    icon: CatIcon,
    title: "Siamese (Siyam)",
    description: "Mavi gözlü, konuşkan ve enerjiktir.",
    image: "/images/Siamese (Siyam).jpg",
  },
  {
    icon: CatIcon,
    title: "Turkish Van (Van Kedisi)",
    description:
      "Suya girmeyi sever, beyaz tüyleri ve renkli kuyruğuyla tanınır.",
    image: "/images/Turkish Van.jpg",
  },
  {
    icon: CatIcon,
    title: "Sphynx",
    description: "Tüysüz olmasına rağmen sıcakkanlı ve meraklıdır.",
    image: "/images/Sphynx.jpg",
  },
];

const Features = ({ query }: FeaturesProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] text-pretty sm:text-center">
          <SparklesText>Hangi Kedi Sana Göre?</SparklesText>
        </h2>
        {/* Sayfa açıklaması: kullanıcıya listede ne bulacağını anlatır */}
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl text-center">
          Bazıları miskin, bazıları konuşkan, bazıları tam bir sevgi pıtırcığı!
          İşte en sevilen kedi cinsleri ve onlarla ilgili bilmen gerekenler.
        </p>
        {/* Küçük bilgi: kullanıcıyı sahiplendirme sayfasına yönlendirme */}
        <p className="mt-1 text-sm text-center text-muted-foreground">
          Daha fazla keşfetmek ve bir dosta yuva olmak için sahiplendirme bölümüne göz atmayı unutma.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* Arama terimine göre başlık ve açıklama üzerinden filtreleme yapıyoruz */}
          {features
            .filter((f) => {
              if (!query) return true; // Sorgu yoksa tümünü göster
              const q = query.toLowerCase(); // Karşılaştırma için küçük harfe çevir
              return (
                f.title.toLowerCase().includes(q) || // Başlıkta ara
                f.description.toLowerCase().includes(q) // Açıklamada ara
              );
            })
            .map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0 bg-background/80 backdrop-blur-sm"
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
                {/* Görseli köşeden kırpmadan göstermek için kapsayıcıya object-cover uygularız */}
                <div className="bg-red-500 h-40 ml-6 rounded-tl-xl overflow-hidden">
                  {/* Görselin taşmasını önler */}
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1080}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
