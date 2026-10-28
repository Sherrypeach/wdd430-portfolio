import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-4 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <p className="text-2xl font-bold">Cas Perche</p>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6">
            <li><Link className="hover:underline" href="/">Home</Link></li>
            <li><Link className="hover:underline" href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
