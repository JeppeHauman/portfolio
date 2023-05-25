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
    <html className="snap-y snap-mandatory" lang="en">
      <body className={`${inter.className} bg-black text-stone-100`}>
        {children}
      </body>
    </html>
  );
}
