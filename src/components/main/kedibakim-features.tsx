import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import Image from "next/image";

// Özellik öğesi için TypeScript tipi tanımı; her öğenin beklenen alanlarını açıklar
type Feature = {
  category: string; // Kategori adı (ör. Beslenme)
  title: string; // Başlık metni
  details: string; // Detay açıklama metni
  tutorialLink: string; // Dış bağlantı URL'si
  image: string; // Görsel yolu
};

// Özellikler listesini tipleyerek daha güvenli ve otokomplet destekli hale getiriyoruz
const features: Feature[] = [
  {
    category: "Fur Care",
    title: "Tüy Bakımı",
    details:
      "Kısa tüylü kediler, Haftada 1-2 kez taramak yeterlidir. Uzun tüylü kediler, Günlük tarama gerekir. Tüy yumağı oluşumunu önler.",
    tutorialLink:
      "https://markamama.com.tr/kedilerde-tuy-bakimi-ve-genel-bakim--part-1#:~:text=Haftada%20birka%C3%A7%20kez%20elle%20kuvvetlice,i%C3%A7in%20bunlar%C4%B1n%20f%C4%B1r%C3%A7alanmas%C4%B1%20tavsiye%20edilmez.",
      image: "/images/cat fur care.jpg",
  },
  {
    category: "Nutrition",
    title: "Beslenme",
    details:
      "Yaşa, kiloya ve aktiviteye göre kaliteli mama seçilmeli. Sürekli temiz su bulundurmak şarttır. Ev yemekleri ve süt genelde sindirim sorunlarına neden olabilir.",
    tutorialLink:
      "https://www.hospiveteriner.com/kedimizi-nasil-beslemeliyiz/75/34/",
      image: "/images/cat nutrition.jpg",
  },

  {
    category: "Veterinary Checks",
    title: "Veteriner Kontrolleri",
    details:
      "Yavru kedilerde ilk 6 ayda aşılar çok önemlidir. Yılda en az 1 kez genel sağlık kontrolü yapılmalı. İç ve dış parazit ilaçları düzenli verilmelidir.",
    tutorialLink:
      "https://www.petlebi.com/blog/kedilerde-genel-saglik-muayenesinde-dikkat-edilmesi-gerekenler",
      image: "/images/Veterinary Checks.jpg",
  },
  {
    category: "Toilet Training and Cleaning",
    title: "Tuvalet Eğitimi ve Temizlik",
    details:
      "Kedi kumu temiz olmalı; her gün topakları alınmalı. Kedi kumu kabı sessiz, özel bir köşede bulunmalı.",
    tutorialLink:
      "https://www.petlebi.com/blog/yavru-kedi-tuvalet-egitimi-nasil-verilir",
      image: "/images/Toilet Training and Cleaning.jpg",
  },
  {
    category: "Play and Exercise",
    title: "Oyun ve Egzersiz",
    details:
      "Günlük 15–30 dakika oyun kedinin hem fiziksel hem zihinsel sağlığı için önemlidir. Tırmalama tahtası, zeka oyuncakları ve lazer gibi aktiviteler ilgisini çeker.",
    tutorialLink:
      "https://www.petlebi.com/blog/oyun-yoluyla-kedilere-egzersiz-yaptirma-yontemleri",
      image: "/images/Play and Exercise.jpg",
  },
  {
    category: "Sleeping Area",
    title: "Uyku Alanı",
    details:
      "Kedi için sessiz, sıcak ve güvenli bir uyku alanı oluştur. Kediler günde 12–16 saat uyuyabilir, bu normaldir.",
    tutorialLink:
      "https://vetqom.com/blog/kedinizin-ve-kopeginizin-saglikli-uyku-aliskanliklari-icin-tavsiyeler#:~:text=Kedi%20ve%20k%C3%B6pekler%20i%C3%A7in%20uygun,konforlu%20bir%20uyku%20alan%C4%B1%20yarat%C4%B1labilir.",
      image: "/images/Sleeping Area.jpg",
    },
  {
    category: "Love and Socialization",
    title: "Sevgi ve Sosyalleşme",
    details:
      "Kediler ilgi ve sabırla yaklaşılınca çok bağlanır. Onun alanına saygı göstermek güven oluşturur.",
    tutorialLink:
      "https://www.alleycat.org/resources/cat-socialization-continuum-guide/",
      image: "/images/Love and Socialization.jpg",
  },
  {
    category: "Nail, Dental and Eye Care",
    title: "Tırnak, Diş ve Göz Bakımı",
    details:
      "Tırnaklar 2–3 haftada bir kesilmeli. Dişler özel kedi macunu ile fırçalanabilir. Göz çevresi pamukla nazikçe temizlenmeli.",
    tutorialLink:
      "https://www.petlebi.com/blog/kedilerde-pati-ve-tirnak-bakimi",
      image: "/images/Nail, Dental and Eye Care.jpg",
  },
];

const KediBakimFeatures = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          <SparklesText>KEDİ BAKIMINA DAİR HER ŞEYY!</SparklesText>
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Kedi bakımı sadece mama vermekle bitmez! Sağlıklı bir yaşam için
          dikkat edilmesi gereken tüm bakım önerilerini adım adım paylaştık.
        </p>
        {/* Liste semantiği için role=list ekliyoruz */}
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20" role="list">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
              /* Her öğeyi liste elemanı olarak işaretliyoruz */
              role="listitem"
              /* Başlık bağlantıları için stabil bölüm kimliği */
              id={feature.category ? feature.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined}
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2 overflow-hidden">
                <Image
                  src={feature.image}
                  /* Erişilebilirlik için daha açıklayıcı alt metin */
                  alt={`${feature.title} görseli`}
                  width={1080}
                  height={720}
                  className="w-full h-full object-cover"
                  /* Görselleri tembel yükleyerek performansı artırıyoruz */
                  loading="lazy"
                  /* Responsive görüntü boyutları bildirimi */
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                
                {/* Bölüm başlığını tanımlayıcı bir id ile işaretliyoruz */}
                <h4
                  className="my-3 text-2xl font-semibold tracking-tight"
                  id={`${feature.category ? feature.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") : ""}-title`}
                >
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                {/* Dış bağlantıyı yeni sekmede açan bağlantıyı butonun DIŞINA alıyoruz */}
                <Link
                  href={feature.tutorialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${feature.title} hakkında daha fazla bilgi al`}
                >
                  <Button size="lg" className="mt-6 rounded-full gap-3">
                    Learn More <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KediBakimFeatures;
