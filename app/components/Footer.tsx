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
    <footer className="bg-footer text-[#e7d8cf]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:pr-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <span aria-hidden className="text-secondary text-base leading-none">
                &#9670;
              </span>
              <span
                className="text-lg font-bold tracking-wide text-[#f3e7dd]"
                style={{ fontFamily: "var(--font-shippori), serif" }}
              >
                女性エンジニア転職ナビ
              </span>
            </Link>
            <p
              className="mt-3 text-[0.62rem] tracking-[0.28em] uppercase text-[#b89a8c]"
              style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
            >
              Women in Tech Careers
            </p>
            <p className="mt-5 text-sm text-[#c4ab9e] leading-relaxed">
              産休育休・リモートワーク・女性アドバイザーなど、女性ならではの視点で
              転職エージェントを比較する情報サイトです。
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3
                className="text-xs tracking-[0.16em] text-secondary mb-5 uppercase"
                style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic" }}
              >
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#d6c1b5] hover:text-[#fdf6ee] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[#473640] text-center">
          <p className="text-[0.7rem] tracking-[0.18em] text-[#9c8278]">
            &copy; {new Date().getFullYear()} 女性エンジニア転職ナビ ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
