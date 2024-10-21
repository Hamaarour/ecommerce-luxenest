import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";
import { PageTransition } from "@/components/Transition";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LuxeNest - Your Luxury Real Estate Destination",
  description:
    "Discover exclusive luxury properties and real estate opportunities with LuxeNest. Find your dream home today.",
  keywords: "luxury real estate, premium properties, high-end homes, LuxeNest",
  openGraph: {
    title: "LuxeNest - Your Luxury Real Estate Destination",
    description:
      "Discover exclusive luxury properties and real estate opportunities with LuxeNest.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LuxeNest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeNest - Your Luxury Real Estate Destination",
    description:
      "Discover exclusive luxury properties and real estate opportunities with LuxeNest.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader
          color="#000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #000,0 0 5px #000"
        />
        <div className="flex flex-col min-h-screen">
          <Toaster position="top-center" />
          <PageTransition>
            <Navbar />
            <main className="flex-grow">{children}</main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
