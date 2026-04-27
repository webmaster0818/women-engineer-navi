import Link from "next/link";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { href: "/ranking/", label: "おすすめエージェント" },
      { href: "/age-guide/", label: "年代別ガイド" },
      { href: "/column/", label: "キャリアコラム" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { href: "/about/", label: "当サイトについて" },
      { href: "/privacy/", label: "プライバシーポリシー" },
      { href: "/contact/", label: "お問い合わせ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold">
              女性エンジニア転職ナビ
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              女性エンジニアの転職を応援する情報サイトです。
              産休育休・リモートワーク・女性アドバイザーなど、
              女性ならではの視点で転職エージェントを比較しています。
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold text-sm mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} 女性エンジニア転職ナビ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
