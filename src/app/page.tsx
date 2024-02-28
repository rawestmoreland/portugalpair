import { Header } from "@/components/Header";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen w-full flex-col items-center bg-white md:p-24">
        <div className="container max-w-xl">
          <iframe
            src="https://embeds.beehiiv.com/87ed1672-1f7d-42bd-854b-7746b0d4edf1"
            data-test-id="beehiiv-embed"
            width="100%"
            height="320"
            frameBorder="0"
            scrolling="no"
            style={{
              borderRadius: "4px",
              margin: 0,
              backgroundColor: "transparent",
            }}
          ></iframe>
        </div>
        <Link
          className="font-semibold text-astronaut underline"
          href="https://lisbonawaits.beehiiv.com"
          target="_blank"
        >
          Check out our recent newsletters
        </Link>
      </main>
    </>
  );
}
