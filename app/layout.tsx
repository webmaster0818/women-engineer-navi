import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Shippori_Mincho, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CareeHUB for woman",
    default: "CareeHUB for woman | 女性ITエンジニアのための転職エージェント比較サイト",
  },
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。あなたに最適な転職エージェントが見つかります。",
  metadataBase: new URL("https://women-engineer.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "JO-NDRHK3y8eQ2TRnsVf5plFdj7Ba2VuPzWrL4zMgTA",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "CareeHUB for woman",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CareeHUB for woman",
  url: "https://women-engineer.com",
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。",
  publisher: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
    parentOrganization: {
      "@type": "Organization",
      name: "株式会社MediaX",
      address: {
        "@type": "PostalAddress",
        addressRegion: "東京都",
        addressLocality: "渋谷区",
        addressCountry: "JP",
      },
    },
    publishingPrinciples: "https://women-engineer.com/content-policy/",
    knowsAbout: [
      "女性エンジニアの転職",
      "IT転職エージェント",
      "エンジニアの年収",
      "エンジニア向け資格",
      "未経験からのエンジニア転職",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${shippori.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
