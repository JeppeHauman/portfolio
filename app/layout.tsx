import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeppe Hauman",
  description: "Portfolio site of Jeppe Hauman's work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${inter.className} scroll-smooth bg-black text-stone-100`}
      >
        {children}
        <footer className="bottom-2 lg:fixed">
          <ul className="flex justify-center gap-3 lg:justify-start">
            <li>
              <Link href={"https://github.com/jeppehauman"} target="_blank">
                <img
                  className="h-8 w-8"
                  src="logos/github.svg"
                  alt="github logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"https://twitter.com/JeppeHauman"} target="_blank">
                <img
                  className="h-8 w-8"
                  src="/logos/twitter.svg"
                  alt="twitter logo"
                />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/jeppehauman/"}
                target="_blank"
              >
                <img
                  className="h-8 w-8"
                  src="/logos/linkedin.svg"
                  alt="linkedin logo"
                />
              </Link>
            </li>
            <li>
              <Link href={"mailto:hauman.jeppe@gmail.com"} target="_blank">
                <img
                  className="h-8 w-8"
                  src="/logos/mail.svg"
                  alt="mail icon"
                />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
