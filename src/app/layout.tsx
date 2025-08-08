import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/providers/client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferro Advocacia - Especialistas em Direito",
  description: "Escritório de advocacia especializado em direito civil, trabalhista e previdenciário. Atendimento personalizado e resultados comprovados.",
  keywords: "advocacia, direito civil, direito trabalhista, direito previdenciário, advogado, escritório de advocacia",
  authors: [{ name: "Ferro Advocacia" }],
  creator: "Ferro Advocacia",
  publisher: "Ferro Advocacia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ferro-advocacia.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ferro Advocacia - Especialistas em Direito",
    description: "Escritório de advocacia especializado em direito civil, trabalhista e previdenciário. Atendimento personalizado e resultados comprovados.",
    url: "https://ferro-advocacia.com.br",
    siteName: "Ferro Advocacia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferro Advocacia - Especialistas em Direito",
    description: "Escritório de advocacia especializado em direito civil, trabalhista e previdenciário. Atendimento personalizado e resultados comprovados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
