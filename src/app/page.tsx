import { Header } from "@/components/Header";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-white p-8 md:p-24">
        <iframe
          src="https://embeds.beehiiv.com/87ed1672-1f7d-42bd-854b-7746b0d4edf1"
          data-test-id="beehiiv-embed"
          width="480"
          height="320"
          frameborder="0"
          scrolling="no"
          style={{
            borderRadius: "4px",
            margin: 0,
            backgroundColor: "transparent",
          }}
        ></iframe>
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
