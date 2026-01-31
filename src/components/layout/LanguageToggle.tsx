"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.startsWith("/en") ? "en" : "ko";

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ko" : "en";
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Toggle Language"
    >
      {currentLang === "en" ? "KO" : "EN"}
    </button>
  );
}
