import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      Sorray, this page does not exista.
      <br />
      <Link href="/">Schuib home</Link>
    </div>
  );
}
