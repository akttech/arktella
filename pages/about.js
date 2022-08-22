import Link from "next/link";

export default function About() {
  return (
    <div className="">
      <main className="">
        <h1>About Page</h1>
        <p className="">
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
