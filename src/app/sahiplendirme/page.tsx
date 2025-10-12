import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal"
export default function Sahiplendirme() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Terminal>
  <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>
  <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
  <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
  <TypingAnimation>Success! Project initialization completed.</TypingAnimation>
</Terminal>
    </div>
  );
}
