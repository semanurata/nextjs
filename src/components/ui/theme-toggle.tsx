"use client"; // İstemci tarafında tema değişimi için

import { useState, useEffect } from "react"; // Durum yönetimi ve yaşam döngüsü
import { Moon, Sun } from "lucide-react"; // Tema ikonları
import { Button } from "./button"; // Toggle butonu için

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false); // Dark mode durumu

  // Sayfa yüklendiğinde kaydedilen tema tercihini oku
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme"); // Yerel depolamadan tema oku
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Sistem tercihi
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true); // Dark mode aktif et
      document.documentElement.classList.add("dark"); // HTML'e dark class ekle
    }
  }, []);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    const newTheme = !isDark; // Tema durumunu tersine çevir
    setIsDark(newTheme); // Durumu güncelle
    
    if (newTheme) {
      document.documentElement.classList.add("dark"); // Dark mode aktif et
      localStorage.setItem("theme", "dark"); // Tercihi kaydet
    } else {
      document.documentElement.classList.remove("dark"); // Light mode aktif et
      localStorage.setItem("theme", "light"); // Tercihi kaydet
    }
  };

  return (
    <Button
      variant="outline" // Çerçeveli buton stili
      size="icon" // Sadece ikon için küçük boyut
      onClick={toggleTheme} // Tıklama olayı
      className="rounded-full" // Yuvarlak köşeler
      aria-label={isDark ? "Light mode'a geç" : "Dark mode'a geç"} // Erişilebilirlik etiketi
    >
      {isDark ? (
        <Sun className="h-4 w-4" /> // Light mode ikonu
      ) : (
        <Moon className="h-4 w-4" /> // Dark mode ikonu
      )}
    </Button>
  );
}
