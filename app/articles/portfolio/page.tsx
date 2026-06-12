import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職のポートフォリオ作成ガイド｜職種別の作るべきもの・評価ポイント【2026年】",
  description:
    "エンジニア転職のポートフォリオを実情ベースで解説。未経験は必須級・経験者は職務経歴書+GitHubで代替可という職種別の位置づけ、フロントエンド・バックエンド・データ系・QA別に作るべきもの、README・コミット履歴の評価ポイント、AI生成コードの扱いまで2026年の最新事情を網羅します。",
  alternates: { canonical: "/articles/portfolio/" },
  openGraph: {
    title: "エンジニア転職のポートフォリオ作成ガイド｜職種別の作るべきもの・評価ポイント【2026年】",
    description:
      "未経験は必須級・経験者はGitHubで代替可という実情から、職種別に作るべきもの・評価されるポイント・AI生成コードの扱いまで解説。",
    url: "https://women-engineer.com/articles/portfolio/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "エンジニア転職のポートフォリオ作成ガイド｜職種別の作るべきもの・評価ポイント【2026年】",
  datePublished: "2026-04-28",
  dateModified: "2026-06-12",
  author: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  publisher: { "@type": "Organization", name: "女性エンジニア転職ナビ", url: "https://women-engineer.com" },
  description:
    "エンジニア転職のポートフォリオ作成ガイド。職種別・経験別の位置づけ、評価されるポイントと落とし穴、AI生成コードの扱い、ブランク中の制作法までを解説。",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://women-engineer.com/articles/portfolio/" },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ポートフォリオは何作品あれば十分ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "完成度の高い1〜2作品で十分です。数を並べるより、1つの作品について「なぜ作ったか・なぜこの技術を選んだか・どこで詰まりどう解決したか」を深く語れることのほうが評価されます。未完成の作品を5つ並べるのは逆効果で、デプロイ済みでREADMEが整った作品を1つ仕上げるほうが確実に強い武器になります。面接の技術質問はポートフォリオを起点に展開されることが多いため、全コードを自分の言葉で説明できる規模に収めるのも大切です。",
      },
    },
    {
      "@type": "Question",
      name: "実務経験者でもポートフォリオは必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "経験者の場合、独立したポートフォリオサイトは必須ではないのが実情です。実務経験は職務経歴書で示すのが基本で、補強材料としてGitHubアカウント（個人開発リポジトリやOSSコントリビューション）を職務経歴書に記載する形が主流です。ただし、フロントエンドからバックエンドへの転向など職種チェンジを伴う転職や、職務経歴書に書ける実績が薄い領域に挑戦する場合は、経験者でもその領域の制作物があると説得力が大きく変わります。",
      },
    },
    {
      "@type": "Question",
      name: "AIに書かせたコードをポートフォリオに使ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "使うこと自体は2026年の開発現場では一般的で、隠す必要はありません。重要なのは2点です。第一に、READMEに使用したAIツールと役割分担（設計は自分・実装補助にAIなど）を明示すること。第二に、AIが書いた部分も含めて全コードを自分の言葉で説明できる状態にしておくことです。面接では「この処理はなぜこう書いたのですか」と深掘りされるのが普通で、答えられなければ「AIの出力を検証できない人」という最も避けたい評価になります。AIを使ったこと自体ではなく、説明できないことが落とされる理由になります。",
      },
    },
    {
      "@type": "Question",
      name: "育休中・ブランク中でもポートフォリオは作れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "作れます。むしろブランクがある人にとって、ポートフォリオは「いま手が動くこと」を示せる数少ない客観材料です。まとまった時間が取れない前提で、1日30分でも進められる小さなテーマ（家事や育児の困りごとを解決するツールなど）を選び、細かくコミットを積むのがコツです。コミット履歴がそのまま「ブランク中も学び続けた記録」になります。復職全体の進め方は復職ロードマップ記事も参考にしてください。",
      },
    },
    {
      "@type": "Question",
      name: "業務で書いたコードをポートフォリオに使ってもいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "原則NGです。業務で書いたコードの著作権は通常、雇用契約や就業規則により会社に帰属し、無断公開は秘密保持義務違反にもなり得ます。職務経歴書で「何を担当しどう貢献したか」を言葉で説明するにとどめ、公開する制作物は個人として新たに作りましょう。また個人開発でも、APIキー・パスワード等の機密情報をリポジトリに含めない（環境変数で管理し.gitignoreを徹底する）ことは、それ自体がセキュリティ意識の評価ポイントになります。",
      },
    },
  ],
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://women-engineer.com" },
    { "@type": "ListItem", position: 2, name: "転職コラム", item: "https://women-engineer.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ポートフォリオ作成ガイド", item: "https://women-engineer.com/articles/portfolio/" },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="relative py-12 md:py-16" style={{ background: "linear-gradient(135deg, #ecfeff 0%, #f0f9ff 100%)" }}>
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "転職コラム", href: "/articles/" }, { label: "ポートフォリオ作成ガイド" }]} />
          <div className="mt-4">
            <span className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>キャリア知識</span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              エンジニア転職のポートフォリオ作成ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">職種別の作るべきもの・評価ポイント【2026年】</span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年6月12日</p>
          </div>
        </div>
      </section>

      {/* 結論ボックス */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: "#ecfeff", border: "2px solid #0891b2" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0891b2" }}>先に結論：ポートフォリオは「誰に・どれだけ」必要？</h2>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>未経験・学習からの転職:</strong> <strong>必須級</strong>。実務実績がない分、「完成させてデプロイした制作物」が技術力と継続力のほぼ唯一の客観証拠になります。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>実務経験者:</strong> 独立したポートフォリオサイトは必須ではなく、<strong>職務経歴書＋GitHubアカウントの記載で代替するのが主流</strong>。職種チェンジを伴う転職では制作物があると説得力が増します。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>職種で重みが違う:</strong> 成果物が目に見える<strong>フロントエンドで最も効果が高く</strong>、バックエンドは設計力の証明として有効。QAなど制作物文化の薄い職種では資格・テスト設計サンプルが代わりになります（後述の職種別表へ）。</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#0891b2" }} className="mt-0.5 font-bold">&#10003;</span>
                <span><strong>2026年の最重要ポイント:</strong> AIでコードが書ける時代になり、評価の軸は「書けたか」から<strong>「なぜそう作ったかを説明できるか」</strong>へ移行。AI利用はREADMEで明示し、全コードを自分の言葉で語れる状態にしておくことが合否を分けます。</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-4">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d1dce5", backgroundColor: "#f8fafb" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#0891b2" }}>1. ポートフォリオの位置づけ：経験別・実情ベースで整理</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#0891b2" }}>2. 職種別・作るべきもの早見表（フロント/バックエンド/データ/QA）</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#0891b2" }}>3. 採用側はここを見る：評価されるポイント</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#0891b2" }}>4. 落とし穴：評価を下げる典型NG集</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#0891b2" }}>5. AI時代のポートフォリオ（2026年）：明示の仕方と説明責任</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#0891b2" }}>6. ブランク・育休中でも作れる制作プラン</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#0891b2" }}>7. 完成から選考活用までの4ステップ</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#0891b2" }}>8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 位置づけ */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ポートフォリオの位置づけ：経験別・実情ベースで整理</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              エンジニア転職におけるポートフォリオとは、自分の技術力を示す制作物（Webアプリ・ツール・分析ノートブックなど）と、その置き場所（GitHubリポジトリやデモサイト）の総称です。「全員に必須」と語られがちですが、実情は経験・職種によって重みが大きく異なります。志望先に合わせて、かける労力を正しく配分しましょう。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>状況</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>必要度</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>実情</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>未経験からの転職</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#f97066" }}>必須級</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>実務実績がない分、「企画から完成・公開までやり切った証拠」がほぼ唯一の客観材料。書類通過率に直結する</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>経験者（同職種への転職）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>任意</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>実績は職務経歴書で示すのが基本。GitHubアカウントを経歴書に記載して補強する形が主流で、専用サイトを作る必要はない</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>経験者（職種チェンジ）</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#7c3aed" }}>推奨</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>例: インフラ→バックエンド、SIer→Web系。経歴書に書ける実績が薄い領域の制作物があると「学習が口だけでない」証明になる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>ブランクからの復職</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#7c3aed" }}>推奨</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>「いまも手が動く」ことを示せる数少ない材料。小さな制作物＋コミット履歴がブランク不安を打ち消す（<a href="/articles/return-to-work/" className="underline" style={{ color: "#0891b2" }}>復職ロードマップ</a>参照）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#0891b2" }}>選考全体の中での役割</h3>
            <p className="text-sm text-text-light leading-relaxed">
              ポートフォリオは単体で合否を決めるものではなく、<strong>書類選考の補強材料 → 面接の話題の起点</strong>という2つの役割を持ちます。技術面接ではポートフォリオの技術選定や設計判断が深掘りされ、<a href="/articles/coding-test/" className="underline" style={{ color: "#0891b2" }}>コーディングテスト</a>では「その場で書く力」が別途測られます。つまりポートフォリオで盛っても他の選考ステップで露見するため、背伸びせず「自分が説明し切れるもの」を出すのが結局いちばん強い戦略です。
            </p>
          </div>
        </div>
      </section>

      {/* sec2 職種別 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">職種別・作るべきもの早見表（フロント/バックエンド/データ/QA）</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              「ポートフォリオ＝見栄えの良いWebサイト」と思われがちですが、職種によって採用側が見たいものはまったく違います。志望職種に合わせて、見せるべき軸を外さないことが最優先です。
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#ecfeff" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>職種</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>効果</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d1dce5" }}>作るべきもの・見せるべきもの</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>フロントエンド</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#f97066" }}>大</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>動くWebアプリ＋<strong>デモURL必須</strong>（Vercel/Netlify等で公開）。レスポンシブ対応、表示速度やアクセシビリティへの配慮、React/Vue等のコンポーネント設計。UIが成果物としてそのまま見えるため、職種の中で最もポートフォリオが効く</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>バックエンド</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#7c3aed" }}>中〜大</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>見た目より<strong>設計の言語化</strong>。API設計（エンドポイント一覧・OpenAPI定義）、DB設計（ER図）、テストコード、Docker・CI/CDの構成。READMEに「なぜこの構成にしたか」を書けるかが勝負どころ</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>データ系<br /><span className="font-normal text-xs">（分析・ML）</span></td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#7c3aed" }}>中〜大</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>アプリよりも<strong>分析の過程と考察</strong>。公開データを使った分析ノートブック（課題設定→前処理→可視化→結論のストーリー）、KaggleやSIGNATEなどコンペの参加実績。精度の数字より「なぜその手法か」の説明力が見られる</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5" }}>QA・テスト</td>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d1dce5", color: "#0891b2" }}>小〜中</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d1dce5" }}>制作物文化が薄い職種。代わりに<strong>テスト設計サンプル</strong>（テスト観点表・境界値分析の例）、PlaywrightやSeleniumによる自動テストコード、JSTQB等の資格が証明材料になる。自作アプリに自動テストを書いて公開すると差別化しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3aed" }}>テーマ選びのコツ：自分の課題から始める</h3>
            <p className="text-sm text-text-light leading-relaxed">
              どの職種でも共通するのは、<strong>自分が本当に困っていることを解決するテーマ</strong>が強いという点です。家計管理・育児記録・推し活の情報整理など、日常の課題から出発した作品は「なぜ作ったか」を自分の言葉で語れるため、面接で話が深まります。逆に「転職用に流行りの技術を使ってみた」だけの作品は動機の質問で止まりがちです。テーマに迷う場合は<a href="/articles/beginner/" className="underline" style={{ color: "#0891b2" }}>未経験からのエンジニア転職ガイド</a>で学習の全体像から整理するのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* sec3 評価されるポイント */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">採用側はここを見る：評価されるポイント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>
              採用担当者・現場エンジニアがGitHubやポートフォリオを見るとき、確認するポイントはおおよそ決まっています。READMEはリポジトリの説明書として最初に読まれ、コミット履歴からは取り組みの継続性が、リポジトリの言語構成からは得意領域が読み取られます（出典: LAPRAS HR TECH LAB「エンジニア採用担当が知っておくべきGitHubの基礎知識」、2026年6月参照）。逆に言えば、ここを整えるだけで同じコードでも評価は大きく変わります。
            </p>
          </div>
          <div className="space-y-4">
            {[
              { name: "1. README：最初に読まれる「作品の顔」", desc: "概要（何を解決するものか）、デモURL、スクリーンショット、使用技術、工夫した点・苦労した点、ローカルでの起動手順。この6点が揃ったREADMEは、それ自体がドキュメンテーション能力の証明になります。コードを読む前にREADMEで判断されると考えて、本文と同じ熱量で書きましょう。", color: "#0891b2" },
              { name: "2. コミット履歴：開発の過程と継続性", desc: "完成品を一括コミットした履歴と、機能単位で意味のあるメッセージを積み重ねた履歴では、後者が圧倒的に信頼されます。「ログイン機能を追加」「N+1クエリを修正」のような粒度のコミットは、実務のチーム開発に近い習慣の証拠です。毎日コミットする必要はなく、週単位でも継続していることが伝われば十分です。", color: "#7c3aed" },
              { name: "3. 動くこと：デプロイ済みデモURL", desc: "「クローンしてビルドしてください」では多忙な選考担当者は見てくれません。Vercel・Netlify・GitHub Pagesなどの無料枠でデプロイし、URLひとつで触れる状態にしておくこと。完成・公開まで持っていく完遂力そのものが評価対象です。", color: "#0891b2" },
              { name: "4. 実務に近いプラクティス", desc: "テストコード（ユニットテスト1ファイルでも印象が違う）、GitHub ActionsによるCI、環境変数での機密情報管理、Issue・Pull Requestを使った自己レビューの形跡。どれも「チーム開発に入ってすぐ馴染める人」のシグナルになります。全部は不要なので、1〜2個取り入れるだけで差がつきます。", color: "#7c3aed" },
              { name: "5. 説明できること（2026年最大の評価軸）", desc: "技術選定の理由（なぜReactか、なぜこのDB構成か）、詰まった箇所と解決プロセス、今後の改善案。コードはAIでも書ける時代だからこそ、面接ではここが最重要の確認ポイントになっています。READMEの「工夫した点」に書いた内容は必ず口頭でも語れるよう準備しておきましょう。", color: "#f97066" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: item.color }}>{item.name}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec4 落とし穴 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">落とし穴：評価を下げる典型NG集</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>努力して作ったのに逆効果になるパターンも決まっています。提出前にセルフチェックしましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "チュートリアルの複製をそのまま出す", desc: "教材や動画講座のTODOアプリ・ブログアプリの完コピは、採用側は何百回も見ているため一目で分かります。教材で学ぶこと自体は正攻法ですが、提出するなら「自分の課題に合わせた機能追加・設計変更」を必ず加え、READMEにベースとの差分を明記しましょう。差分こそが実力の証明です。" },
              { title: "READMEが空・1行だけ", desc: "コードがどれだけ良くても、READMEがないリポジトリは「何のプロジェクトか分からない」段階で読まれずに終わります。ドキュメントを書かない人という実務上のマイナス推定もつきます。最低でも概要・使用技術・起動手順の3点は書きましょう。" },
              { title: "デモURLが死んでいる・エラーで開けない", desc: "応募直前に必ず全リンクを確認すること。無料ホスティングのスリープでの初回表示遅延は許容されますが、404やビルドエラーは「動くものを出せない人」という最悪の印象を残します。" },
              { title: "業務コードの流用・機密情報の公開", desc: "業務で書いたコードの著作権は原則会社に帰属し、無断公開は秘密保持義務違反になり得ます。またAPIキー・パスワードのコミットはそれだけでセキュリティ意識を疑われます。環境変数と.gitignoreの徹底はポートフォリオ以前の基本動作です。" },
              { title: "数を増やして全部が中途半端", desc: "未完成の作品を並べるより、完成・公開済みの1〜2作に絞るほうが強いのが実情です。面接で深掘りされたとき、自分が隅々まで把握している作品しか武器になりません。「説明し切れる規模」を超えて広げないこと。" },
              { title: "見た目だけ整えて中身が説明できない", desc: "テンプレートやAIで見栄えの良いUIは簡単に作れる時代です。だからこそ「この状態管理はなぜこの方式？」のような一段深い質問が飛びます。1問も答えられないと、見た目の良さがそのまま不信感に変わります。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#f97066" }}>{i + 1}. {item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec5 AI時代 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">AI時代のポートフォリオ（2026年）：明示の仕方と説明責任</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              2026年の開発現場では、コーディング支援AI（GitHub Copilot、Claude Code、ChatGPTなど）を使った開発が一般化しています。採用側もそれを前提にしており、<strong>「AIを使ったかどうか」自体はもはや減点要素ではありません</strong>。選考ツール側でも、AI利用を前提に「AIと協働して解く力」ごと評価するサービスが登場している一方、無断利用を検知する仕組みを備えるサービスもあり、扱いは二極化しています（詳しくは<a href="/articles/coding-test/" className="underline" style={{ color: "#0891b2" }}>コーディングテスト対策ガイド</a>を参照）。
            </p>
            <p>
              ポートフォリオにおける現実的な指針は次の3つです。
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#0891b2" }}>指針1：READMEでAI利用を正直に明示する</h3>
              <p className="text-sm text-text-light leading-relaxed">
                「実装補助にGitHub Copilotを使用。要件定義・DB設計・技術選定は自分で行い、生成コードは全行レビューのうえ採用」のように、<strong>使用ツールと役割分担</strong>を書きます。隠して後の面接で露見するより、検証プロセスまで含めて開示するほうが「AIを道具として使いこなせる人」という今いちばん欲しがられる評価につながります。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#7c3aed" }}>指針2：全コードを自分の言葉で説明できる状態にする</h3>
              <p className="text-sm text-text-light leading-relaxed">
                面接で深掘りされたとき答えられないのが最悪のパターンです。AIが書いた部分も「なぜこの書き方を採用したか・他にどんな選択肢があったか」を語れるまで理解してから取り込むこと。説明できない箇所が残るなら、その機能は削るほうが安全です。<a href="/articles/technical-interview/" className="underline" style={{ color: "#0891b2" }}>技術面接対策</a>と合わせて、想定質問への回答を準備しておきましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#f97066" }}>指針3：「AIにできない部分」で差をつける</h3>
              <p className="text-sm text-text-light leading-relaxed">
                コードの生成はAIで均質化した分、差がつくのは<strong>課題設定（誰の何を解決するか）・設計判断・検証とドキュメント</strong>です。READMEの「工夫した点」にこの3つを書き込めるポートフォリオは、AI時代でも色あせません。AIとの開発過程そのもの（プロンプトの工夫、AIの誤りを修正した記録）を学びとしてまとめるのも、2026年ならではの差別化になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sec6 ブランク・育休中 */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">ブランク・育休中でも作れる制作プラン</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              育児や介護でキャリアにブランクがある場合、ポートフォリオは<strong>「いまも手が動く」ことを示せる数少ない客観材料</strong>になります。職務経歴書では空白期間に目が行きがちですが、ブランク中に作った小さな制作物とコミット履歴は、それ自体が「学び続けてきた記録」として機能します。
            </p>
            <p>
              現実的なコツは、まとまった時間が取れない前提で設計することです。
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 mt-6" style={{ borderColor: "#d1dce5" }}>
            <ul className="space-y-3 text-sm text-text-light leading-relaxed">
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>テーマは生活の中から:</strong> 育児記録・予防接種スケジュール管理・献立のローテーション化など、いま自分が困っていることをツール化する。動機が本物なので面接でも語りやすい</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>1日30分・1機能単位で進める:</strong> 細切れ時間でも完結する粒度にタスクを割り、そのままコミット単位にする。細かく積まれた履歴が継続の証明になる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>完成ラインを低く引く:</strong> 最初の公開は最小機能（MVP）で十分。「公開→少しずつ改善」の流れ自体が実務的な開発スタイルのアピールになる</span></li>
              <li className="flex items-start gap-2"><span style={{ color: "#0891b2" }} className="mt-1 font-bold">&#10003;</span><span><strong>キャッチアップを兼ねる:</strong> ブランク中に変わった技術（フレームワークのバージョンアップ、AI支援ツールの普及など）を制作の中で1つ試すと、技術の現在地確認と作品づくりが同時に進む</span></li>
            </ul>
          </div>
          <p className="text-text-light text-sm leading-relaxed mt-6">
            ブランクからの復職は、ポートフォリオだけでなく学び直しの支援制度や求人の選び方まで含めた全体設計が大切です。<a href="/articles/return-to-work/" className="underline" style={{ color: "#0891b2" }}>ブランクからの復職ロードマップ</a>で、ブランク年数別の戦略と公的支援制度を確認しておきましょう。
          </p>
        </div>
      </section>

      {/* sec7 4ステップ */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">完成から選考活用までの4ステップ</h2>
          <div className="space-y-4">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>STEP 1</span>
                <h3 className="text-lg font-bold">企画：課題とゴールを1行で書く</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                「誰の・どんな困りごとを・どう解決するか」を1行で言えるテーマを選びます。この1行がそのままREADMEの冒頭、面接の第一声になります。技術は志望職種・志望企業のスタックに寄せると即戦力アピールを兼ねられます。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3aed" }}>STEP 2</span>
                <h3 className="text-lg font-bold">実装：意味のあるコミットを積む</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                最初からGitHubで管理し、機能単位のコミットメッセージを習慣化します。AIを使う場合は出力を必ず理解してから取り込み、READMEに利用方針をメモしておきます。機密情報は環境変数で管理し、最初に.gitignoreを設定してから書き始めましょう。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#0891b2" }}>STEP 3</span>
                <h3 className="text-lg font-bold">公開：デプロイとREADME仕上げ</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                無料ホスティング（Vercel・Netlify・GitHub Pages等）でデモURLを用意し、READMEに概要・スクリーンショット・使用技術・工夫した点・起動手順を揃えます。スマホからもデモを開いて表示崩れを確認しておくと安心です。
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d1dce5" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#f97066" }}>STEP 4</span>
                <h3 className="text-lg font-bold">選考連携：経歴書に載せ、面接で語る準備</h3>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                GitHub URLとデモURLを<a href="/articles/resume-guide/" className="underline" style={{ color: "#0891b2" }}>職務経歴書</a>に記載し、概要を2〜3行添えます。面接前には「なぜ作ったか・技術選定の理由・一番苦労した点・今後の改善案」の4点を口頭で言える状態に。この準備は<a href="/articles/technical-interview/" className="underline" style={{ color: "#0891b2" }}>技術面接</a>の最頻出質問対策をそのまま兼ねます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">よくある質問</h2>
          <div className="space-y-4">
            {faqData.mainEntity.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group rounded-xl bg-white" style={{ border: "1px solid #d1dce5" }}>
                <summary className="cursor-pointer list-none px-6 py-4 font-bold text-sm flex items-center justify-between">
                  <span><span style={{ color: "#0891b2" }} className="mr-2">Q.</span>{faq.name}</span>
                  <span className="text-text-light group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-light leading-relaxed" style={{ borderTop: "1px solid #d1dce5" }}>
                  <p className="pt-4"><span style={{ color: "#f97066" }} className="font-bold mr-2">A.</span>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 出典 */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">出典・参考</h2>
          <ul className="space-y-2 text-sm text-text-light leading-relaxed">
            <li>・出典: LAPRAS HR TECH LAB「エンジニア採用担当が知っておくべきGitHubの基礎知識」（2026年6月参照）— 採用側がGitHubで確認する項目（README・コミット履歴・使用言語・アクティビティ等）</li>
            <li>・本記事のポートフォリオの位置づけ・評価ポイントに関する記述は、2026年6月時点で確認した転職エージェント各社・採用支援サービスの公開情報および一般的な選考実務に基づく実情解説です。</li>
          </ul>
        </div>
      </section>

      {/* 関連記事 */}
      <section className="py-10" style={{ backgroundColor: "#f8fafb" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">関連記事</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/articles/coding-test/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>コーディングテスト対策</h3>
              <p className="text-sm text-text-light">出題形式・難易度・AI利用ルールの最新事情</p>
            </a>
            <a href="/articles/technical-interview/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>技術面接対策</h3>
              <p className="text-sm text-text-light">ポートフォリオの深掘り質問への備え方</p>
            </a>
            <a href="/articles/resume-guide/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>職務経歴書の書き方</h3>
              <p className="text-sm text-text-light">GitHub・ポートフォリオの記載方法も解説</p>
            </a>
            <a href="/articles/beginner/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d1dce5" }}>
              <h3 className="font-bold mb-1" style={{ color: "#0891b2" }}>未経験からのエンジニア転職</h3>
              <p className="text-sm text-text-light">学習からポートフォリオ作成までの全体像</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12"><div className="mx-auto max-w-4xl px-4 text-center"><div className="rounded-2xl p-8 md:p-12" style={{ background: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)" }}><h2 className="text-2xl font-bold text-white mb-4">理想の転職を実現しましょう</h2><p className="text-white/90 mb-6">まずはエージェントに無料相談。あなたに合ったキャリアプランを一緒に考えましょう。</p><a href="/ranking/" className="inline-block rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#f97066", color: "#ffffff" }}>おすすめエージェントランキングを見る</a></div></div>
      </section>
    </>
  );
}
