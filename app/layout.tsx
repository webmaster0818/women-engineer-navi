import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 女性エンジニア転職ナビ",
    default: "女性エンジニア転職ナビ | 女性ITエンジニアのための転職エージェント比較サイト",
  },
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。あなたに最適な転職エージェントが見つかります。",
  metadataBase: new URL("https://women-engineer-navi.pages.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "女性エンジニア転職ナビ",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "女性エンジニア転職ナビ",
  url: "https://women-engineer-navi.pages.dev",
  description:
    "女性エンジニアに特化した転職エージェント比較サイト。産休育休取得率・リモートワーク率・女性アドバイザー有無など、女性ならではの視点で徹底比較。",
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
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
