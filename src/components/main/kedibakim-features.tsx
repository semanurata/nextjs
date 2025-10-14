import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text"

const features = [
  {
    category: "Tüy Bakımı",
    title: "Tüy Bakımı",
    details:
      "Kısa tüylü kediler, Haftada 1-2 kez taramak yeterlidir. Uzun tüylü kediler, Günlük tarama gerekir. Tüy yumağı oluşumunu önler.",
    tutorialLink: "https://markamama.com.tr/kedilerde-tuy-bakimi-ve-genel-bakim--part-1#:~:text=Haftada%20birka%C3%A7%20kez%20elle%20kuvvetlice,i%C3%A7in%20bunlar%C4%B1n%20f%C4%B1r%C3%A7alanmas%C4%B1%20tavsiye%20edilmez.",
     image: "/"
  },
  {
    category: "Beslenme",
    title: "Beslenme",
    details:
      "Yaşa, kiloya ve aktiviteye göre kaliteli mama seçilmeli. Sürekli temiz su bulundurmak şarttır. Ev yemekleri ve süt genelde sindirim sorunlarına neden olabilir.",
    tutorialLink: "https://www.hospiveteriner.com/kedimizi-nasil-beslemeliyiz/75/34/",
  },
  
  {
    category: "Veteriner Kontrolleri",
    title: "Veteriner Kontrolleri",
    details:
      "Yavru kedilerde ilk 6 ayda aşılar çok önemlidir. Yılda en az 1 kez genel sağlık kontrolü yapılmalı. İç ve dış parazit ilaçları düzenli verilmelidir.",
    tutorialLink: "https://www.petlebi.com/blog/kedilerde-genel-saglik-muayenesinde-dikkat-edilmesi-gerekenler",
  },
  {
    category: "Tuvalet Eğitimi ve Temizlik",
    title: "uvalet Eğitimi ve Temizlik",
    details:
      "Kedi kumu temiz olmalı; her gün topakları alınmalı. Kedi kumu kabı sessiz, özel bir köşede bulunmalı.",
    tutorialLink: "https://www.petlebi.com/blog/yavru-kedi-tuvalet-egitimi-nasil-verilir",
  },
  {
    category: "Oyun ve Egzersiz",
    title: "Oyun ve Egzersiz",
    details:
      "Günlük 15–30 dakika oyun kedinin hem fiziksel hem zihinsel sağlığı için önemlidir. Tırmalama tahtası, zeka oyuncakları ve lazer gibi aktiviteler ilgisini çeker.",
    tutorialLink: "https://www.petlebi.com/blog/oyun-yoluyla-kedilere-egzersiz-yaptirma-yontemleri",
  },
  {
    category: "Uyku Alanı",
    title: "Uyku Alanı",
    details:
      "Kedi için sessiz, sıcak ve güvenli bir uyku alanı oluştur. Kediler günde 12–16 saat uyuyabilir, bu normaldir.",
    tutorialLink: "https://vetqom.com/blog/kedinizin-ve-kopeginizin-saglikli-uyku-aliskanliklari-icin-tavsiyeler#:~:text=Kedi%20ve%20k%C3%B6pekler%20i%C3%A7in%20uygun,konforlu%20bir%20uyku%20alan%C4%B1%20yarat%C4%B1labilir.",
  },
  {
    category: "Sevgi ve Sosyalleşme",
    title: "Sevgi ve Sosyalleşme",
    details:
      "Kediler ilgi ve sabırla yaklaşılınca çok bağlanır. Onun alanına saygı göstermek güven oluşturur.",
    tutorialLink: "https://www.alleycat.org/resources/cat-socialization-continuum-guide/",
  },
  {
    category: "Tırnak, Diş ve Göz Bakımı",
    title: "Tırnak, Diş ve Göz Bakımı",
    details:
      "Tırnaklar 2–3 haftada bir kesilmeli. Dişler özel kedi macunu ile fırçalanabilir. Göz çevresi pamukla nazikçe temizlenmeli.",
    tutorialLink: "https://www.petlebi.com/blog/kedilerde-pati-ve-tirnak-bakimi",
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
        Kedi bakımı sadece mama vermekle bitmez! Sağlıklı bir yaşam için dikkat edilmesi gereken tüm bakım önerilerini adım adım paylaştık.
        </p>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button  size="lg" className="mt-6 rounded-full gap-3">
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KediBakimFeatures;
