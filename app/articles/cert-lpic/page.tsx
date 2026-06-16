import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性エンジニアのLPIC・LinuC資格ガイド｜難易度・勉強時間・年収への影響を解説",
  description:
    "女性エンジニアがLPIC・LinuC（Linux技術者認定）を取得するためのガイド。LPICとLinuCの違い、レベル1〜3の難易度・受験料（1科目15,000円／16,500円）、勉強時間（未経験130〜180時間）、Ping-t・あずき本など教材、取得後の年収・キャリアへの影響を実データで解説。インフラ・サーバー職を目指す女性に役立つ理由も紹介します。",
  alternates: { canonical: "/articles/cert-lpic/" },
  openGraph: {
    title: "女性エンジニアのLPIC・LinuC資格ガイド｜難易度・勉強時間・年収への影響を解説",
    description:
      "LPIC・LinuCの違い・レベル別難易度・受験料・勉強時間・教材・年収への影響を、インフラ職を目指す女性エンジニア向けに実データで徹底解説。",
    url: "https://women-engineer.com/articles/cert-lpic/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性エンジニアのLPIC・LinuC資格ガイド｜難易度・勉強時間・年収への影響を解説",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "女性エンジニア転職ナビ",
    url: "https://women-engineer.com",
  },
  description:
    "女性エンジニア向けにLPIC・LinuC（Linux技術者認定）の違い・レベル別難易度・受験料・勉強時間・教材・年収への影響を実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/cert-lpic/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性エンジニアはLPICとLinuC、どちらを取得すべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学ぶ内容の8割は共通なので、どちらでも基礎力は身につきます。判断軸は2つです。外資系やグローバルな現場、海外でも通用する認定を重視するなら世界共通資格のLPIC。国内SIerやクラウド・仮想化を扱う現場、日本語環境での受験のしやすさを重視するならLinuCがおすすめです。LinuCは仮想化・クラウド・システムアーキテクチャなど現代的な内容を多く含み、日本企業の求人で指定されるケースが増えています。応募先の求人票に「LPIC/LinuCいずれか」と書かれることも多いため、迷ったら国内転職に強いLinuCから始める女性が多いです。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもLPIC-1（LinuCレベル1）に合格できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。LPIC-1（LinuCレベル1）はエントリーレベルで、未経験から取得を目指せる内容です。勉強時間の目安は未経験で130〜180時間（1日2時間なら約2〜3か月）。問題演習サイトPing-tとテキスト「あずき本」を中心に学べば、文系・IT未経験から合格している人が多数います。合格体験記では平日2時間・休日6時間で101試験に3週間合格した例もあります。101試験と102試験の2科目に合格して初めてレベル1認定となる点に注意しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "LPIC・LinuCを取ると年収はどのくらい上がりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "資格単体で年収が決まるわけではありませんが、目安として、レベル1取得の未経験者向け運用保守で年収320万〜400万円、経験者の構築・運用で400万〜500万円が狙えます。レベル2やAWSなどクラウド資格と組み合わせると年収550万円以上のポジションも視野に入ります。資格は「Linuxの基礎を体系的に学んだ証明」として書類選考や面接で評価され、未経験では届きにくいスタートラインに立つための土台になります。年収交渉ではエージェントに市場価値を客観評価してもらうのが有効です。",
      },
    },
    {
      "@type": "Question",
      name: "LPIC・LinuCに有効期限はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "認定そのものに失効はありませんが、「有意性の期限」が5年と定められています。これは認定が最新技術に対応していることを証明する期間で、5年を超えると有意性が失われ、最新と見なされなくなります。また、レベル1は101試験と102試験を5年以内に両方合格する必要があり、片方だけで5年経過すると先に合格した試験が無効になります。出産・育児でブランクが空く可能性がある女性は、受験を始めたら同レベルの2科目をなるべく続けて取り切るのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "LPIC・LinuCはインフラ・サーバー職の転職で本当に評価されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "評価されます。多くの企業がインフラ・サーバーエンジニア採用時にLPIC/LinuCの有無を確認しており、Linuxは大半のサーバーで使われるOSのため需要が安定しています。採用担当が見ているのは資格そのものより「Linuxの基礎をきちんと学んでいる理解度と成長意欲」です。特に未経験・第二新卒の女性にとっては、実務経験の不足を学習意欲で補える客観的な材料になります。資格＋簡単な構築の練習記録（ブログやGitHub）をセットで示すと、書類通過率がさらに上がります。",
      },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero */}
      <section
        className="relative py-12 md:py-16"
        style={{ background: "linear-gradient(135deg, #efe3d8 0%, #f4e7da 100%)" }}
      >
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb
            items={[
              { label: "ホーム", href: "/" },
              { label: "転職コラム", href: "/articles/" },
              { label: "LPIC・LinuC資格ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              資格ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性エンジニアのLPIC・LinuC資格ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                Linux技術者認定の難易度・勉強法・年収への影響を実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月10日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. LPIC・LinuCとは（Linux技術者認定）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. LPICとLinuCの違い</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. レベルと難易度・受験料（一覧表）</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 女性エンジニアに役立つ理由</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 出題範囲（レベル1の内容）</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 勉強時間と勉強法（STEP）</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. おすすめ教材</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. 取得後の年収・キャリアへの影響</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. おすすめ転職エージェント</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">LPIC・LinuCとは（Linux技術者認定）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              LPIC（エルピック）とLinuC（リナック）は、どちらも<strong>Linux（リナックス）の知識・技術力を客観的に証明するIT資格</strong>です。Linuxは世界中のWebサーバー・クラウド基盤の大半で使われているOSで、インフラエンジニアやサーバーエンジニアにとって「読み書きできて当たり前」の基礎技術。その習得度を段階的に測れるのがこの2つの認定試験です。
            </p>
            <p>
              LPICは非営利団体LPI（Linux Professional Institute）が運営する<strong>世界共通の資格</strong>。LinuCは2018年3月にLPI-Japanが独自に開始した<strong>日本国内向けの認定</strong>で、仮想化・クラウド・システムアーキテクチャといった現代的な内容を多く含みます。いずれもレベル1〜3の3段階で構成され、レベルが上がるほど実務に近い高度な内容になります。
            </p>
            <p>
              試験はCBT（パソコンを使った試験）方式で、各科目60問・90分。合格基準は800点満点中500点以上が目安です。プログラミング言語の資格と違い、<strong>OSとサーバーの土台</strong>を扱うため、職種が変わっても長く活きる「つぶしの効く」資格として、未経験からインフラ職を目指す人の最初の一歩によく選ばれています。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>LPIC・LinuCで証明できること</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Linuxのインストール・パッケージ管理ができる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>コマンドライン操作・シェルスクリプトが書ける</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ユーザー・権限・プロセスを管理できる</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ネットワーク設定・システムログを扱える</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>基本的なセキュリティ設定ができる（レベル1）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>仮想化・クラウド・高可用性構成の設計（上位レベル）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 LPICとLinuCの違い */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">LPICとLinuCの違い</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              「結局どっちを取ればいいの？」という疑問が一番多い部分です。学ぶ内容の大半は共通で、<strong>どちらを取っても身につくLinuxの基礎力はほぼ同じ</strong>。違いは「運営元」「対応領域」「通用する範囲」にあります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>比較項目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>LPIC</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>LinuC</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>運営団体</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>LPI（本部はカナダ）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>LPI-Japan（2018年開始）</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>通用範囲</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>世界共通（海外・外資で有利）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>日本国内中心</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>対応領域</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Linuxの基礎〜応用が中心</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>仮想化・クラウド・OSS等を強化</td>
                </tr>
                <tr style={{ backgroundColor: "#fff" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>受験料の目安</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1科目 約15,000円（税別）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1科目 16,500円（税込）</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>向いている人</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>外資・グローバル志向／海外でも使いたい</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>国内SIer・クラウド現場志向</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            国内のインフラ・サーバー職への転職が目的なら、近年求人で指定が増えている<strong>LinuC</strong>から始める女性が多い傾向です。一方、外資やグローバルなプロジェクトを視野に入れるなら<strong>LPIC</strong>。求人票に「LPIC/LinuCいずれか」と併記されることも多いので、応募先の傾向に合わせて選べば失敗しません。
          </p>
        </div>
      </section>

      {/* sec3 レベルと難易度・受験料 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">レベルと難易度・受験料（一覧表）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              LPIC・LinuCはレベル1〜3の3段階。レベル1・2はそれぞれ<strong>2科目に合格</strong>して認定、レベル3は分野別の1科目に合格すれば認定されます。下表は各レベルの位置づけと難易度の目安です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>レベル</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>必要な試験</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>難易度・対象</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>受験料（LPIC目安）</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レベル1</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>101・102（2科目）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>エントリー。未経験から取得可</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2科目で約30,000円</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レベル2</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>201・202（2科目）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実務寄り。構築・運用ができる中級者</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>2科目で約30,000円</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レベル3</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>300/303/304のいずれか1科目</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>最高難度。分野特化の専門家</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1科目 約15,000円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>レベル3の分野（混在・セキュリティ・仮想化）</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>・<strong>300（Mixed Environment）</strong>：Windowsなどとの混在環境の運用</li>
              <li>・<strong>303（Security）</strong>：暗号化・認証・アクセス制御などセキュリティ</li>
              <li>・<strong>304（Virtualization & HA）</strong>：仮想化・高可用性システム</li>
            </ul>
            <p className="text-sm text-text-light mt-3">
              レベル3は有意なレベル2認定が前提です。合格基準はどのレベルも<strong>800点満点中500点以上</strong>が目安。なお認定には<strong>「有意性の期限」が5年</strong>あり、レベル1・2は2科目を5年以内に取り切る必要があります。
            </p>
          </div>
        </div>
      </section>

      {/* sec4 女性エンジニアに役立つ理由 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性エンジニアに役立つ理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度ですが、インフラ・サーバー領域は<strong>実務経験よりも「基礎を体系的に学んだ証明」が効きやすい</strong>分野で、資格が実力の客観的な裏づけになります。未経験・第二新卒・ブランクありの女性にとって、LPIC・LinuCは特に強い武器になります。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. 実務未経験を「学習意欲」で補える</h3>
              <p className="text-text-light text-sm leading-relaxed">採用担当が見るのは資格そのものより「Linuxの基礎をきちんと学んでいる理解度と成長意欲」。経験の浅さを客観的な努力の証明で補え、書類選考の通過率が上がります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 在宅・スキマ時間で取り切れる</h3>
              <p className="text-text-light text-sm leading-relaxed">Ping-tはスマホでも演習でき、勉強場所を選びません。育児や仕事の合間に、1日2時間×2〜3か月でレベル1が狙えるため、ライフイベントと両立しながら準備できます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. インフラ職はリモート・安定が両立しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">サーバー・クラウド運用はリモートと相性がよく、需要も安定。Linuxは大半のサーバーで使われ続けるため、一度身につけた知識が長く通用し、ブランク後も復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. クラウド資格への橋渡しになる</h3>
              <p className="text-text-light text-sm leading-relaxed">LinuxはAWSやGCPなどクラウドの土台。LPIC・LinuCで基礎を固めると、AWS認定などへステップアップしやすく、年収550万円以上の求人にも手が届きやすくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec5 出題範囲 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出題範囲（レベル1の内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              入口となるレベル1は<strong>101試験</strong>と<strong>102試験</strong>の2科目。どちらも60問・90分のCBT形式で、多肢選択に加えて<strong>コマンドを直接入力する穴埋め問題</strong>が出るのが特徴です。暗記だけでなく、手を動かして覚えるのが合格の近道になります。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>科目</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>主な出題範囲</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>101試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>システムアーキテクチャ／Linuxのインストールとパッケージ管理／GNU・Unixコマンド／デバイス・ファイルシステム</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>102試験</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シェル・スクリプト／ユーザーインターフェース／管理タスク（ユーザー・グループ管理）／ネットワークの基本／セキュリティ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            101がコマンド操作・ファイルシステム中心、102がシステム管理・ネットワーク・セキュリティ中心です。先に101から受けるのが一般的。仮想環境（VirtualBox等）に無料でLinuxを入れて実際に触りながら学ぶと、穴埋め問題に強くなります。
          </p>
        </div>
      </section>

      {/* sec6 勉強時間と勉強法 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">勉強時間と勉強法（STEP）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              未経験からレベル1合格までの勉強時間は<strong>130〜180時間</strong>が目安（1日2時間なら約2〜3か月）。集中できれば100時間前後で受かる人もいます。挫折しないコツは「完璧を目指さず、間違えた問題の復習を最優先」。次の順序で進めると効率的です。
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "目標日と1科目ずつの計画を立てる", "まず受験日を決めて逆算。あれこれ広げず「101を1か月で」など1科目単位で区切ると、最後までやり切りやすくなります。"],
              ["STEP2", "あずき本を2周“読み流す”", "テキスト（あずき本）は最初から完璧に理解しようとせず、全体を2周ほど読み流して「なんとなく分かる」状態を作るのが先決です。"],
              ["STEP3", "Ping-tでひたすら問題演習", "問題演習サイトPing-tでアウトプット。正答率より「間違えた問題をつぶす」ことを重視し、全問“金（正解定着）”を目指します。"],
              ["STEP4", "仮想環境で実際にコマンドを打つ", "VirtualBox等に無料でLinuxを入れ、テキストのコマンドを自分の手で実行。穴埋め・コマンド入力問題への対応力が一気に上がります。"],
              ["STEP5", "白本（問題集）で仕上げ", "スピードマスター等の問題集（白本）で本番形式に慣れ、コマンド系の取りこぼしを最終チェック。Ping-tと併用で精度を高めます。"],
              ["STEP6", "101合格後すぐ102へ", "勢いを止めず102の学習へ。レベル1は2科目を5年以内に取得する必要があるため、間隔を空けず続けて取り切るのが安全です。"],
            ].map(([step, title, desc], i) => (
              <div key={i} className="flex gap-4 rounded-xl border bg-white p-5" style={{ borderColor: "#d9c7b8" }}>
                <span className="flex-shrink-0 rounded-full px-3 py-1 h-fit text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>{step}</span>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec7 おすすめ教材 */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ教材</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              定番は「あずき本＋Ping-t＋白本」の3点セット。<strong>テキストでインプット → Ping-tでアウトプット → 白本で仕上げ</strong>という流れが、未経験合格者の王道ルートです。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>あずき本（Linux教科書）</h3>
              <p className="text-sm text-text-light leading-relaxed">「Linux教科書 LPICレベル1」。表紙の色から“あずき本”と呼ばれる定番テキスト。範囲を体系的にカバー。まずは2周読み流して全体像をつかむ使い方が効果的です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>Ping-t（問題演習サイト）</h3>
              <p className="text-sm text-text-light leading-relaxed">レベル1は無料範囲が充実し、スマホでも演習可能。解説が丁寧で、上手に使えばPing-tだけでも合格ラインに到達できると言われる必須ツールです。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>白本（スピードマスター問題集）</h3>
              <p className="text-sm text-text-light leading-relaxed">本番に近い形式の問題集。Ping-tでカバーしきれないコマンド入力問題の対策に有効で、仕上げの総点検に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#7c3a55" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>無料の仮想環境（VirtualBox等）</h3>
              <p className="text-sm text-text-light leading-relaxed">CentOSやUbuntuを無料で入れて実際にコマンドを叩く環境。費用ゼロで“手を動かす”学習ができ、穴埋め問題への強さに直結します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec8 年収・キャリアへの影響 */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">取得後の年収・キャリアへの影響</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              資格単体で年収が跳ね上がるわけではありませんが、<strong>応募できる求人の幅が広がり、スタートラインに立てる</strong>のが最大の効果です。レベルと経験に応じた年収の目安は次の通り（地域・企業・スキルで変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>想定ポジション</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レベル1＋未経験</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約320万〜400万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サーバー運用・監視・保守</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>レベル1〜2＋実務</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約400万〜500万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サーバー・インフラの構築/運用</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>＋クラウド資格</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約550万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>クラウド・SRE・インフラ設計</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>資格を年収・キャリアにつなげる3つのコツ</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>資格＋実践記録</strong>をセットで提示（構築手順をブログ/GitHubに残す）</li>
              <li>② <strong>クラウド資格へ接続</strong>（AWS認定などと組み合わせて市場価値を底上げ）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。資格を踏まえた適正年収を客観評価してもらう</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec9 エージェント */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>資格を正当に評価してもらい、インフラ職への転職を成功させるには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。インフラ・サーバー職にも精通したアドバイザーが、LPIC・LinuCを活かせる求人を提案してくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。スピーディーなマッチングと年収交渉力に定評があり、資格取得後のキャリアアップ転職に向いています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。資格を活かしつつ、働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec10" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl border overflow-hidden" style={{ borderColor: "#d9c7b8" }}>
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold hover:bg-gray-50" style={{ color: "#7c3a55" }}>
                  <span className="pr-4">{faq.name}</span>
                  <span className="transition-transform group-open:rotate-180">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d9c7b8" }}>
                  <p className="pt-4">{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">LPIC・LinuCが活きる安定職種</p></a>
            <a href="/articles/sre-devops/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>SRE・DevOpsエンジニアガイド</h3><p className="text-sm text-text-light">Linux基礎の先にある高年収キャリア</p></a>
            <a href="/articles/cloud-gcp-azure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>クラウド（GCP・Azure）ガイド</h3><p className="text-sm text-text-light">Linuxを土台に広がるクラウド職</p></a>
            <a href="/articles/certification/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの資格ガイド</h3><p className="text-sm text-text-light">転職で評価される資格まとめ</p></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #7c3a55 0%, #7c3a55 100%)" }}>
            <h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2>
            <p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47", color: "#ffffff" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>
    </>
  );
}
