import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Eventopia",
  description: "Eventopia is a platform for hosting and booking events.",
  icons: {
    icon: "/assets/images/logoo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
