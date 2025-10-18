"use client"; // İstemci tarafında etkileşim için

import { useState } from "react"; // Durum yönetimi için
import { Button } from "@/components/ui/button"; // Butonlar için
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Kartlar için
import { SparklesText } from "@/components/ui/sparkles-text"; // Başlık efekti için
import { Input } from "@/components/ui/input"; // Giriş alanları için
import { Badge } from "@/components/ui/badge"; // İsim etiketleri için
import { RefreshCw, Heart, Copy, Check } from "lucide-react"; // İkonlar için

// İsim kategorisi tipi
type NameCategory = {
  id: string; // Kategori kimliği
  name: string; // Kategori adı
  names: string[]; // İsim listesi
};

// İsim kategorileri - farklı karakteristikler için
const nameCategories: NameCategory[] = [
  {
    id: "cute",
    name: "Sevimli İsimler",
    names: ["Mırmır", "Pamuk", "Şeker", "Bal", "Tatlı", "Minik", "Prenses", "Prens", "Yıldız", "Ayşe", "Melek", "Gül"]
  },
  {
    id: "elegant",
    name: "Zarif İsimler", 
    names: ["Luna", "Apollo", "Athena", "Zeus", "Venus", "Mars", "Neptune", "Juno", "Diana", "Artemis", "Hermes", "Aphrodite"]
  },
  {
    id: "playful",
    name: "Oynak İsimler",
    names: ["Zıpır", "Çılgın", "Enerji", "Hızlı", "Koşar", "Zıplar", "Oyun", "Eğlence", "Şakacı", "Neşeli", "Mutlu", "Güler"]
  },
  {
    id: "mysterious",
    name: "Gizemli İsimler",
    names: ["Gölge", "Gece", "Ay", "Yıldız", "Büyü", "Sihir", "Rüya", "Hayal", "Efsane", "Masal", "Hikaye", "Sır"]
  },
  {
    id: "nature",
    name: "Doğa İsimleri",
    names: ["Çiçek", "Ağaç", "Deniz", "Dağ", "Güneş", "Yağmur", "Kar", "Rüzgar", "Toprak", "Su", "Ateş", "Hava"]
  },
  {
    id: "food",
    name: "Yemek İsimleri",
    names: ["Çikolata", "Vanilya", "Tarçın", "Karamel", "Muz", "Çilek", "Vişne", "Elma", "Armut", "Şeftali", "Kayısı", "Üzüm"]
  },
  {
    id: "color",
    name: "Renk İsimleri",
    names: ["Beyaz", "Siyah", "Gri", "Kahverengi", "Turuncu", "Sarı", "Yeşil", "Mavi", "Mor", "Pembe", "Kırmızı", "Altın"]
  },
  {
    id: "personality",
    name: "Karakter İsimleri",
    names: ["Cesur", "Akıllı", "Sadık", "Meraklı", "Sakin", "Enerjik", "Sevecen", "Bağımsız", "Güvenilir", "Yaratıcı", "Sabırlı", "Uysal"]
  }
];

// Kedi cinsi için özel isimler
const breedSpecificNames: { [key: string]: string[] } = {
  "Persian": ["Şah", "Prenses", "Asil", "Zarif", "Lüks", "Kraliçe"],
  "British": ["Winston", "Churchill", "Gentleman", "Lady", "Duke", "Earl"],
  "Scottish": ["Bonnie", "Clyde", "Highland", "Tartan", "Whisky", "Bagpipe"],
  "Siamese": ["Siam", "Bangkok", "Thai", "Oriental", "Exotic", "Royal"],
  "Turkish": ["Van", "Anatolia", "Cappadocia", "Bosphorus", "Istanbul", "Ankara"],
  "Sphynx": ["Pharaoh", "Cleopatra", "Sphinx", "Mystic", "Unique", "Bold"]
};

const NameGenerator = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Seçili kategoriler
  const [breed, setBreed] = useState(""); // Kedi cinsi
  const [gender, setGender] = useState<"male" | "female" | "any">("any"); // Cinsiyet
  const [generatedNames, setGeneratedNames] = useState<string[]>([]); // Üretilen isimler
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]); // Favori isimler
  const [copiedName, setCopiedName] = useState<string | null>(null); // Kopyalanan isim

  // Kategori seçme/seçimi kaldırma
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // İsim üretme fonksiyonu
  const generateNames = () => {
    let allNames: string[] = [];

    // Seçili kategorilerden isimleri topla
    selectedCategories.forEach(categoryId => {
      const category = nameCategories.find(cat => cat.id === categoryId);
      if (category) {
        allNames = [...allNames, ...category.names];
      }
    });

    // Kedi cinsine özel isimler ekle
    if (breed && breedSpecificNames[breed]) {
      allNames = [...allNames, ...breedSpecificNames[breed]];
    }

    // Karıştır ve 12 isim seç
    const shuffled = allNames.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 12);

    setGeneratedNames(selected);
  };

  // Favori isim ekleme/çıkarma
  const toggleFavorite = (name: string) => {
    setFavoriteNames(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  // İsim kopyalama
  const copyName = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 2000); // 2 saniye sonra sıfırla
    } catch (err) {
      console.error("Kopyalama hatası:", err);
    }
  };

  return (
    <section className="max-w-(--breakpoint-lg) w-full mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          <SparklesText>İsim Bulucu: Kedin İçin İsim Önerisi</SparklesText>
        </h2>
        <p className="text-muted text-lg">
          Kedinin karakterine ve cinsine uygun mükemmel ismi bul! 🐱✨
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Ayarlar kartı */}
        <Card className="bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <h3 className="text-xl font-semibold">İsim Tercihlerini Seç</h3>
            <p className="text-muted-foreground">Hangi tarzda isimler istediğini belirt</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Kedi cinsi seçimi */}
            <div>
              <label className="text-sm font-medium mb-2 block">Kedi Cinsi (Opsiyonel)</label>
              <Input
                placeholder="Örn: Persian, British Shorthair, Siamese..."
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                className="max-w-md"
              />
            </div>

            {/* Kategori seçimi */}
            <div>
              <label className="text-sm font-medium mb-3 block">İsim Kategorileri</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {nameCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleCategory(category.id)}
                    className="justify-start"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* İsim üret butonu */}
            <div className="flex justify-center">
              <Button 
                onClick={generateNames}
                disabled={selectedCategories.length === 0}
                className="rounded-full gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                İsim Önerileri Üret
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Üretilen isimler */}
        {generatedNames.length > 0 && (
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-xl font-semibold">İsim Önerilerin</h3>
              <p className="text-muted-foreground">Beğendiğin isimleri favorilere ekleyebilirsin</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium">{name}</span>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => toggleFavorite(name)}
                        className="h-8 w-8 p-0"
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            favoriteNames.includes(name) 
                              ? "fill-red-500 text-red-500" 
                              : "text-muted-foreground"
                          }`} 
                        />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyName(name)}
                        className="h-8 w-8 p-0"
                      >
                        {copiedName === name ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Favori isimler */}
        {favoriteNames.length > 0 && (
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                Favori İsimlerin
              </h3>
              <p className="text-muted-foreground">En çok beğendiğin isimler</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {favoriteNames.map((name, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-base px-3 py-1 cursor-pointer hover:bg-primary/20"
                    onClick={() => copyName(name)}
                  >
                    {name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default NameGenerator;
