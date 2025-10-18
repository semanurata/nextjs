"use client"; // İstemci tarafında etkileşim için

import { useState } from "react"; // Test durumu yönetimi için
import { Button } from "@/components/ui/button"; // Test butonları için
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Test kartları için
import { SparklesText } from "@/components/ui/sparkles-text"; // Başlık efekti için
import Image from "next/image"; // Kedi görselleri için

// Test sorusu tipi
type Question = {
  id: number; // Soru numarası
  question: string; // Soru metni
  options: { // Seçenekler
    text: string; // Seçenek metni
    scores: { [key: string]: number }; // Her kedi türü için puan
  }[];
};

// Kedi türü sonuç tipi
type CatBreed = {
  name: string; // Kedi türü adı
  description: string; // Açıklama
  traits: string[]; // Özellikler
  image: string; // Görsel yolu
};

// Test soruları - kişilik özelliklerine göre kedi türü belirleme
const questions: Question[] = [
  {
    id: 1,
    question: "Hangi aktiviteyi tercih edersin?",
    options: [
      { text: "Evde kitap okumak", scores: { "Persian": 3, "British": 2, "Scottish": 2, "Siamese": 1, "Turkish": 1, "Sphynx": 1 } },
      { text: "Arkadaşlarla sosyal aktiviteler", scores: { "Persian": 1, "British": 2, "Scottish": 3, "Siamese": 3, "Turkish": 2, "Sphynx": 2 } },
      { text: "Spor yapmak", scores: { "Persian": 1, "British": 1, "Scottish": 1, "Siamese": 2, "Turkish": 3, "Sphynx": 2 } },
      { text: "Yaratıcı projeler", scores: { "Persian": 2, "British": 1, "Scottish": 2, "Siamese": 3, "Turkish": 2, "Sphynx": 3 } }
    ]
  },
  {
    id: 2,
    question: "Hangi ortamda daha rahat hissedersin?",
    options: [
      { text: "Sessiz ve sakin", scores: { "Persian": 3, "British": 3, "Scottish": 2, "Siamese": 1, "Turkish": 1, "Sphynx": 1 } },
      { text: "Kalabalık ve enerjik", scores: { "Persian": 1, "British": 1, "Scottish": 2, "Siamese": 3, "Turkish": 2, "Sphynx": 2 } },
      { text: "Doğal ve açık", scores: { "Persian": 1, "British": 2, "Scottish": 1, "Siamese": 2, "Turkish": 3, "Sphynx": 1 } },
      { text: "Modern ve şık", scores: { "Persian": 2, "British": 2, "Scottish": 3, "Siamese": 2, "Turkish": 1, "Sphynx": 3 } }
    ]
  },
  {
    id: 3,
    question: "Hangi karakter özelliğin daha baskın?",
    options: [
      { text: "Bağımsız ve özgür", scores: { "Persian": 2, "British": 2, "Scottish": 1, "Siamese": 3, "Turkish": 3, "Sphynx": 2 } },
      { text: "Sadık ve bağlı", scores: { "Persian": 3, "British": 3, "Scottish": 3, "Siamese": 1, "Turkish": 2, "Sphynx": 2 } },
      { text: "Meraklı ve keşfedici", scores: { "Persian": 1, "British": 2, "Scottish": 2, "Siamese": 3, "Turkish": 3, "Sphynx": 3 } },
      { text: "Sakin ve huzurlu", scores: { "Persian": 3, "British": 3, "Scottish": 2, "Siamese": 1, "Turkish": 1, "Sphynx": 1 } }
    ]
  },
  {
    id: 4,
    question: "Hangi tarzda giyinmeyi tercih edersin?",
    options: [
      { text: "Klasik ve şık", scores: { "Persian": 3, "British": 3, "Scottish": 2, "Siamese": 1, "Turkish": 1, "Sphynx": 1 } },
      { text: "Rahat ve pratik", scores: { "Persian": 1, "British": 2, "Scottish": 3, "Siamese": 2, "Turkish": 2, "Sphynx": 2 } },
      { text: "Renkli ve dikkat çekici", scores: { "Persian": 1, "British": 1, "Scottish": 1, "Siamese": 3, "Turkish": 2, "Sphynx": 3 } },
      { text: "Doğal ve organik", scores: { "Persian": 2, "British": 2, "Scottish": 2, "Siamese": 1, "Turkish": 3, "Sphynx": 1 } }
    ]
  },
  {
    id: 5,
    question: "Hangi hobiyi tercih edersin?",
    options: [
      { text: "Bahçıvanlık", scores: { "Persian": 2, "British": 2, "Scottish": 1, "Siamese": 1, "Turkish": 3, "Sphynx": 1 } },
      { text: "Müzik dinlemek", scores: { "Persian": 2, "British": 2, "Scottish": 3, "Siamese": 2, "Turkish": 1, "Sphynx": 2 } },
      { text: "Sosyal medya", scores: { "Persian": 1, "British": 1, "Scottish": 2, "Siamese": 3, "Turkish": 1, "Sphynx": 3 } },
      { text: "El sanatları", scores: { "Persian": 3, "British": 2, "Scottish": 2, "Siamese": 1, "Turkish": 1, "Sphynx": 2 } }
    ]
  }
];

// Kedi türü sonuçları
const catBreeds: CatBreed[] = [
  {
    name: "Persian (İran Kedisi)",
    description: "Sen sakin, zarif ve asil bir kişiliğe sahipsin. Klasik güzelliği ve huzurlu doğasıyla tanınan Persian kedisi gibisin.",
    traits: ["Sakin", "Zarif", "Asil", "Huzurlu", "Bağımlı"],
    image: "/images/Persian (İran Kedisi).jpg"
  },
  {
    name: "British Shorthair",
    description: "Sen güvenilir, sakin ve dengeli bir kişiliğe sahipsin. British Shorthair'in yumuşak tüyleri ve sakin mizacı gibi.",
    traits: ["Güvenilir", "Sakin", "Dengeli", "Sevecen", "Sabırlı"],
    image: "/images/british-kedi.jpg"
  },
  {
    name: "Scottish Fold",
    description: "Sen uysal, sevimli ve insanlara bağlı bir kişiliğe sahipsin. Scottish Fold'un kıvrık kulakları gibi özel ve çekicisin.",
    traits: ["Uysal", "Sevimli", "Bağlı", "Özel", "Çekici"],
    image: "/images/Scottish Fold.jpg"
  },
  {
    name: "Siamese (Siyam)",
    description: "Sen konuşkan, enerjik ve meraklı bir kişiliğe sahipsin. Siamese kedisi gibi sosyal ve dikkat çekicisin.",
    traits: ["Konuşkan", "Enerjik", "Meraklı", "Sosyal", "Dikkat çekici"],
    image: "/images/Siamese (Siyam).jpg"
  },
  {
    name: "Turkish Van (Van Kedisi)",
    description: "Sen özgür ruhlu, maceracı ve doğa sever bir kişiliğe sahipsin. Turkish Van gibi suyu seven ve bağımsız birisin.",
    traits: ["Özgür ruhlu", "Maceracı", "Doğa sever", "Bağımsız", "Su sever"],
    image: "/images/Turkish Van.jpg"
  },
  {
    name: "Sphynx",
    description: "Sen benzersiz, yaratıcı ve cesur bir kişiliğe sahipsin. Sphynx kedisi gibi farklı ve özel birisin.",
    traits: ["Benzersiz", "Yaratıcı", "Cesur", "Farklı", "Özel"],
    image: "/images/Sphynx.jpg"
  }
];

const PersonalityTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Mevcut soru indeksi
  const [scores, setScores] = useState<{ [key: string]: number }>({}); // Puanlar
  const [showResult, setShowResult] = useState(false); // Sonuç gösterimi
  const [result, setResult] = useState<CatBreed | null>(null); // Test sonucu

  // Cevap seçme fonksiyonu
  const handleAnswer = (optionScores: { [key: string]: number }) => {
    // Puanları topla
    const newScores = { ...scores };
    Object.keys(optionScores).forEach(breed => {
      newScores[breed] = (newScores[breed] || 0) + optionScores[breed];
    });
    setScores(newScores);

    // Sonraki soruya geç veya sonucu hesapla
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // En yüksek puanlı kedi türünü bul
      const maxScore = Math.max(...Object.values(newScores));
      const winningBreed = Object.keys(newScores).find(breed => newScores[breed] === maxScore);
      const breedResult = catBreeds.find(breed => breed.name.includes(winningBreed || ""));
      
      setResult(breedResult || catBreeds[0]);
      setShowResult(true);
    }
  };

  // Testi sıfırlama fonksiyonu
  const resetTest = () => {
    setCurrentQuestion(0);
    setScores({});
    setShowResult(false);
    setResult(null);
  };

  return (
    <section className="max-w-(--breakpoint-lg) w-full mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          <SparklesText>Sen Hangi Kedi Türüsün?</SparklesText>
        </h2>
        <p className="text-muted text-lg">
          Kişilik testi ile sana en uygun kedi türünü keşfet! 🐱
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {!showResult ? (
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  Soru {currentQuestion + 1} / {questions.length}
                </span>
                <div className="w-full bg-muted rounded-full h-2 ml-4">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </h3>
            </CardHeader>
            <CardContent className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-4 hover:bg-primary/10"
                  onClick={() => handleAnswer(option.scores)}
                >
                  <span className="text-base">{option.text}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-background/80 backdrop-blur-sm text-center">
            <CardHeader>
              <h3 className="text-2xl font-semibold mb-2">🎉 Test Sonucun!</h3>
              <h4 className="text-xl text-primary font-medium">{result?.name}</h4>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={result?.image || "/images/hero1.jpg"}
                  alt={result?.name || "Kedi"}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {result?.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {result?.traits.map((trait, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <Button onClick={resetTest} className="rounded-full">
                Testi Tekrar Yap 🔄
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PersonalityTest;
