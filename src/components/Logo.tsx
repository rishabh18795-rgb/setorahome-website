import Image from "next/image";
import Link from "next/link";

export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-lg">
      <Image
        src="/brand/emblem-192.png"
        alt=""
        width={40}
        height={40}
        className="size-9 shrink-0 rounded-full bg-white sm:size-10"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.2rem] font-bold sm:text-[1.3rem] tracking-tight ${tone === "light" ? "text-white" : "text-ink"}`}>
          Setora<span className="text-brand">Home</span>
        </span>
        <span className={`mt-1 hidden text-[0.62rem] font-semibold tracking-wide min-[400px]:block ${tone === "light" ? "text-white/70" : "text-muted"}`}>
          Your Home, Our Responsibility
        </span>
      </span>
    </Link>
  );
}
