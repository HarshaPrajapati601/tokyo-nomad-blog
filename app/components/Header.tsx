import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-red-700 py-6 px-10 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Site Title / Logo */}
        <Link href="/">
          <h1 className="text-3xl font-serif font-black text-stone-900 tracking-tighter uppercase cursor-pointer">
            Tokyo Nomad <span className="text-red-700">Diaries</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-stone-600">
          <Link href="/about" className="hover:text-red-700 transition">About</Link>
          <Link href="/japan" className="hover:text-red-700 transition">Japan</Link>
          <Link href="/hiking" className="hover:text-red-700 transition">Hiking</Link>
          <Link href="/vegan" className="hover:text-red-700 transition">Vegan</Link>
        </nav>
      </div>
    </header>
  );
}