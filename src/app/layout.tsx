import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Droit Habitat Expertise — Contrats & Crédits Abusifs",
  description: "Victime d'un crédit ou d'un contrat signé sous pression, manipulation ou tromperie dans le domaine de l'habitat ? Analyse de conformité et constitution de mémoire juridique pour faire valoir vos droits.",
  keywords: ["droit habitat", "crédit abusif", "annulation crédit", "vice de forme", "tromperie contrat", "défense consommateur"],
  authors: [{ name: "Droit Habitat Expertise" }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-white font-sans selection:bg-brand-accent/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
