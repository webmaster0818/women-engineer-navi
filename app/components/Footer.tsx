import Link from "next/link";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { href: "/ranking/", label: "おすすめエージェント" },
      { href: "/articles/category-index/", label: "記事一覧" },
      { href: "/articles/faq-all/", label: "よくある質問" },
      { href: "/articles/beginner/", label: "未経験からエンジニアへ" },
      { href: "/articles/salary/", label: "年収ガイド" },
    ],
  },
  {
    title: "カテゴリから探す",
    links: [
      { href: "/articles/career-path/", label: "職種別キャリア" },
      { href: "/articles/certification/", label: "資格・学習" },
      { href: "/articles/age-30s/", label: "年代別の転職" },
      { href: "/articles/remote-jobs/", label: "リモート・働き方" },
      { href: "/articles/mama-engineer/", label: "産休育休・両立" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { href: "/terms/", label: "利用規約" },
      { href: "/privacy-policy/", label: "プライバシーポリシー" },
      { href: "/content-policy/", label: "記事制作ポリシー" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
