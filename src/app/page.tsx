import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 grid grid-cols-[auto_1fr] gap-4 items-center">
          <span className="text-foreground/50">Owned by</span>
          <Image
            className="dark:invert"
            src="/maxtac.png"
            alt="Maxtac"
            width={180}
            height={38}
            priority
          />
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
      Reverse proxying N0 Data Tracking and other making services easier to implement.
    </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
            className="dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://maxtac.tech"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
              className="mr-2"
            />
            Person behind this
            </a>
        </div>
      </main>
    </div>
  );
}
