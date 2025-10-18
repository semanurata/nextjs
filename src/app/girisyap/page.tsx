import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cat } from "lucide-react";
import Link from "next/link";

export default function GirisYap() {
  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        action=""
        className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <div className="text-center">
            <Link href="/" aria-label="go home" className="mx-auto block w-fit">
              <Cat />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Giriş Yapın
            </h1>
            <p className="text-sm">Tekrar hoş geldiniz! Devam etmek için oturum açın</p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Kullanıcı Adı
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pwd" className="text-sm">
                  Şifre
                </Label>
                <Button asChild variant="link" size="sm">
                  <Link
                    href="#"
                    className="link intent-info variant-ghost text-sm"
                  >
                    Şifremi Unuttum?
                  </Link>
                </Button>
              </div>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
              />
            </div>

            <Button className="w-full">Miyav!</Button>
          </div>
        </div>

        <div className="p-3">
          <p className="text-white text-center text-sm">
            Hesabınız yok mu?
            <Button asChild variant="link" className="px-2">
              <Link href="/kayitol">Hesap oluştur</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
