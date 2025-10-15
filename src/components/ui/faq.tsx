import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// SSS listesi: kullanıcıların sık sorduğu sorular ve anlaşılır kısa cevaplar
const faq = [
  {
    question: "❓ Kediler gerçekten 9 cana sahip mi?",
    answer:
      "➡️ Hayır ama öyleymiş gibi davranıyorlar. Tehlikeyi iyi atlatırlar.",
  },
  {
    question: "❓ Kediler neden mırıldanır?",
    answer:
      "➡️ Mutlu olduklarında… bazen de kendilerini sakinleştirmek için.",
  },
  {
    question: "❓ Kediler geceleri neden bu kadar aktif?",
    answer:
      "➡️ Çünkü içlerinde minik bir gece avcısı yaşıyor.",
  },
  {
    question: "❓ Kediler ilgi istemediğinde ne yapmalı?",
    answer:
      "➡️ Onurlu bir şekilde geri çekil ve uygun zamanda tekrar dene.",
  },
  {
    question: "❓ Kediler insanları anlar mı?",
    answer:
      "➡️ Evet… sadece bazen görmezden gelmeyi tercih eder.",
  },
  {
    question: "❓ Kedi sahiplenmeden önce ne hazırlamalıyım?", // Yeni SSS maddesi
    answer:
      "➡️ Mama-kap, su kabı, kum kabı, kaliteli kum, tarak, tırmalama tahtası ve oyuncaklar.", // Yeni cevap
  },
  {
    question: "❓ Evde kedi alerjisi olanlar ne yapmalı?", // Yeni SSS maddesi
    answer:
      "➡️ HEPA filtreli hava temizleyici, düzenli temizlik ve temas sonrası elleri yıkamak yardımcı olur.", // Yeni cevap
  },
];

const FAQ01 = () => {
  return (
    <div className=" flex items-center justify-center px-6 py-24">
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter text-center">
          Soru & Cevap
        </h2>

        {/* Tek seferde bir sorunun açık kalacağı akordeon */}
        <Accordion type="single" className="mt-6" defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ01;
