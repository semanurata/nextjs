"use client"; // Form etkileşimi için istemci modu
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { useState, FormEvent } from "react"; // Form durumları için
import { Input } from "../../components/ui/input"; // Metin girişleri
import { Button } from "@/components/ui/button"; // Gönder butonu

export default function Sahiplendirme() {
  const [name, setName] = useState(""); // İsim alanı
  const [email, setEmail] = useState(""); // E-posta alanı
  const [city, setCity] = useState(""); // Şehir alanı
  const [message, setMessage] = useState(""); // Başvuru notu
  const [submitted, setSubmitted] = useState(false); // Başvuru gönderildi mi

  // Basit istemci tarafı doğrulama ve sahte gönderim
  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    if (!name || !email || !city) {
      alert("Lütfen zorunlu alanları doldurun (İsim, E-posta, Şehir)."); // Eksik alan uyarısı
      return;
    }
    // Normalde burada bir API çağrısı yapılır
    setSubmitted(true); // Başarılı gönderim simülasyonu
  };

  return (
    <div>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20">
        <Terminal>
          <TypingAnimation>Kedi Sahiplenebilmek İçin;</TypingAnimation>
          <AnimatedSpan>✔ Bahçeli Bir Eviniz,</AnimatedSpan>
          <AnimatedSpan>
            ✔ Düzenli ve Sorumluluk Alabileceğiniz Bir Hayatınız,
          </AnimatedSpan>
          <TypingAnimation>Olması Gerekir..</TypingAnimation>
        </Terminal>
      </div>

      {/* Mini başvuru formu */}
      <div className="mb-16">
        <div className="w-full max-w-xl bg-background/80 backdrop-blur-sm rounded-xl border p-6 shadow-sm mx-auto">
          <h2 className="text-2xl font-semibold">Sahiplendirme Başvurusu</h2>
          <p className="text-muted-foreground mt-1">
            Bilgilerini paylaş, sana en uygun pati dostunu bulalım.
          </p>

          {submitted ? (
            <div className="mt-6 rounded-md bg-green-50 p-4 text-green-800 border border-green-200">
              Başvurun alındı! En kısa sürede seninle iletişime geçeceğiz.
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  İsim Soyisim
                </label>
                <Input
                  id="name"
                  placeholder="Örn. Ayşe Yılmaz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-posta
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="city" className="text-sm font-medium">
                  Şehir
                </label>
                <Input
                  id="city"
                  placeholder="Örn. İstanbul"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="note" className="text-sm font-medium">
                  Not (opsiyonel)
                </label>
                <Input
                  id="note"
                  placeholder="Kısaca kendinden bahset"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <Button type="submit" className="rounded-full">
                  Başvuruyu Gönder
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
