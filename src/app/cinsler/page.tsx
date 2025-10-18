"use client"; // Bu sayfada client-side etkileşim var
import Features from "@/components/main/features";
import FAQ01 from "@/components/ui/faq";
import { useState, ChangeEvent } from "react"; // İstemci tarafında arama için durum yönetimi
import { Input } from "../../components/ui/input"; // Arama kutusu için giriş bileşeni (göreli yol)
import { Search } from "lucide-react"; // Arama ikonu

export default function Cinsler() {
  const [query, setQuery] = useState(""); // Arama terimini tutar

  return (
    <>
      {/* Arama kutusu: kedi cinslerini başlık/açıklamaya göre filtreler */}
      <div className="max-w-(--breakpoint-lg) w-full mx-auto px-6 mt-24">
        <label htmlFor="breed-search" className="sr-only">
          Kedi cinsi ara
        </label>
        {/* Erişilebilirlik için gizli etiket */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          {/* Arama ikonu */}
          <Input
            id="breed-search"
            placeholder="Kedi cinsi veya özellik ara..."
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            className="pl-10"
          />
        </div>
      </div>

      <Features query={query} />
      <FAQ01 />
    </>
  );
}
