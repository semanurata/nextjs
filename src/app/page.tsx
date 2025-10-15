import Hero from "@/components/main/hero";
import Image from "next/image"; // Popüler yazılar kart görselleri için
import Link from "next/link"; // Yazı bağlantıları için
import PersonalityTest from "@/components/main/personality-test"; // Kişilik testi bileşeni
import NameGenerator from "@/components/main/name-generator"; // İsim bulucu bileşeni

export default function Home() {
  return (
    <>
      <Hero />
      {/* En Popüler Yazılar bölümü */}
      <section className="max-w-(--breakpoint-lg) w-full mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">En Popüler Yazılar</h2>
        <p className="text-muted-foreground mt-1">Kedi bakımı, beslenme ve davranışlar hakkında en çok okunan içerikler.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Yazı kartı 1 */}
          <Link href="/kedi-bakim" className="group block rounded-xl overflow-hidden border bg-background/80 backdrop-blur-sm">
            <div className="aspect-video relative">
              <Image src="/images/hero1.jpg" alt="Kedi Bakım Rehberi" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Kedi Bakım Rehberi</h3>
              <p className="text-muted-foreground mt-1">Evde kedi bakımının püf noktaları: tüy, kum, oyun ve sağlık.</p>
            </div>
          </Link>
          {/* Yazı kartı 2 */}
          <Link href="/cinsler" className="group block rounded-xl overflow-hidden border bg-background/80 backdrop-blur-sm">
            <div className="aspect-video relative">
              <Image src="/images/hero2.jpg" alt="Hangi Kedi Sana Göre?" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Hangi Kedi Sana Göre?</h3>
              <p className="text-muted-foreground mt-1">Karakterine uygun kedi cinsini bulmak için ipuçları.</p>
            </div>
          </Link>
          {/* Yazı kartı 3 */}
          <Link href="/sahiplendirme" className="group block rounded-xl overflow-hidden border bg-background/80 backdrop-blur-sm">
            <div className="aspect-video relative">
              <Image src="/images/hero3.jpg" alt="Sahiplendirme Rehberi" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Sahiplendirme Rehberi</h3>
              <p className="text-muted-foreground mt-1">Doğru bir başlangıç için adım adım sahiplendirme süreci.</p>
            </div>
          </Link>
        </div>
      </section>
      
      {/* Kişilik Testi bölümü */}
      <PersonalityTest />
      
      {/* İsim Bulucu bölümü */}
      <NameGenerator />
    </>
  );
}
