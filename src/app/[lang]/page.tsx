import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-4">{dictionary.home.title}</h1>
        <p className="text-xl">{dictionary.home.description}</p>
      </div>
    </main>
  );
}
