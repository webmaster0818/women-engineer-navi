import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性モバイルアプリエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性モバイルアプリエンジニア（iOS/Android）の転職ガイド。平均年収約555万円・年代別目安、iOS（Swift）・Android（Kotlin）・Flutter/React Nativeの必要スキル、未経験からのロードマップ、求人動向、キャリアパスを実データで解説。産休育休後も長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/mobile-app/" },
  openGraph: {
    title: "女性モバイルアプリエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性モバイルアプリエンジニア（iOS/Android）の年収・必要スキル・未経験ロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/mobile-app/",
    type: "article",
    siteName: "女性エンジニア転職ナビ",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性モバイルアプリエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
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
    "女性モバイルアプリエンジニア（iOS/Android）の年収・必要スキル・未経験ロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/mobile-app/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性モバイルアプリエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "モバイルアプリエンジニア全体の平均年収はおよそ497万〜555万円です。年代別では20代前半で約350万〜450万円、20代後半〜30代前半（中堅）で約500万〜650万円、30代後半以降のリーダー・マネジメント層で700万〜900万円以上が目安です。iOS（Swift）・Android（Kotlin）に精通すると経験3年で600万円超を狙いやすく、フリーランスのiOSアプリ開発で平均約873万円、Androidで約867万円と高水準です。性別による給与差はスキルと実績で埋められる職種で、エージェント経由の年収交渉で適正額を得ることが重要です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でもモバイルアプリエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。まず「どのOS向けに作るか」を決め（iPhoneユーザーならiOS=Swift、Windows PC中心ならAndroid=Kotlin、両OS対応ならFlutter）、開発環境（Xcode / Android Studio）の構築 → 基本文法 → 小さなアプリ作成 → UIとAPI連携 → ストア公開、の順で進めるのが王道です。学習期間は1日2〜3時間で半年〜1年が目安。App StoreやGoogle Playに自作アプリを公開すると、最も強い実績になります。未経験可・ポテンシャル採用の求人もあり、スクールやIT特化型エージェントの活用で成功率が上がります。",
      },
    },
    {
      "@type": "Question",
      name: "iOSとAndroid、Flutterのどれから学ぶべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "手持ちの端末・PCで選ぶのが現実的です。iPhoneとMacがあるならiOS（Swift／Xcodeはmac必須）、Windows PCならAndroid（Kotlin／Android Studio）から始めやすいです。最初から両OSに対応したい場合は、1つのコードでiOS/Android両対応アプリを作れるFlutter（Dart）が効率的で、フリーランス平均単価も月78万円前後と高め。ただしネイティブ機能に深く触れる場面ではSwift/Kotlinの知識が必要になるため、将来的に市場価値を高めるならネイティブの基礎も押さえておくと安心です。",
      },
    },
    {
      "@type": "Question",
      name: "モバイルアプリエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすい職種のひとつです。アプリ開発はオンラインで完結しやすくフルリモート求人が豊富で、担当した画面・機能やストアの評価など成果が客観的に残るため、時短勤務でも実力が認められやすいのが特徴です。ただし企業差が大きいため、産休育休の取得・復帰実績、リモートの運用実態、女性管理職比率などを事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "モバイルアプリ転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT特化型のレバテックキャリアやGeekly、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。IT特化型はSwift・Kotlin・Flutterといったモバイル特有の技術スタックを理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。2〜3社の併用がベストです。",
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
              { label: "モバイルアプリエンジニア転職ガイド" },
            ]}
          />
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: "#7c3a55" }}
            >
              職種別ガイド
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              女性モバイルアプリエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                iOS・Androidの年収・必要スキル・未経験からの道のりを実データで解説
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
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. モバイルアプリエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性がモバイルアプリ開発で長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと言語</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. モバイルアプリエンジニアの年収相場（年代別・領域別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. モバイルアプリエンジニアのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>10. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">モバイルアプリエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              モバイルアプリエンジニアは、iPhone（iOS）やAndroidスマートフォンで動くアプリを設計・開発する職種です。SNS・ECアプリ・ゲーム・金融・ヘルスケアなど、私たちが毎日触れているアプリを作るのが仕事。ユーザーの手の中で動くものを作るため、UIの作り込みから端末機能（カメラ・位置情報・プッシュ通知）の活用、サーバーとのデータ連携まで幅広く担当します。
            </p>
            <p>
              開発の進め方は大きく2系統に分かれます。1つはOSごとに専用言語で作る<strong>ネイティブ開発</strong>（iOS＝Swift、Android＝Kotlin）。もう1つは1つのコードでiOS/Android両方を作る<strong>クロスプラットフォーム開発</strong>（Flutter＝Dart、React Native＝JavaScript）です。プロジェクトの規模や求める品質に応じて、これらを使い分けます。
            </p>
            <p>
              具体的な業務は、(1)画面（UI）の実装、(2)端末機能やセンサーの組み込み、(3)サーバーAPIとのデータ連携、(4)App Store / Google Playへのリリース対応、(5)クラッシュ・パフォーマンス改善やアップデート運用など。リリース後もOSのバージョンアップに追従し続けるのが特徴です。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>モバイルアプリエンジニアの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>iOS開発（Swift / SwiftUI / Xcode）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>Android開発（Kotlin / Jetpack Compose / Android Studio）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クロスプラットフォーム開発（Flutter / React Native）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>サーバーAPIとの連携（REST / GraphQL）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>App Store / Google Play へのリリース・審査対応</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>クラッシュ解析・パフォーマンス改善・アップデート運用</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性がモバイルアプリ開発で長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              IT人材における女性比率はまだ2割程度とされますが、ダイバーシティ推進やリモートワークの普及で、女性が長くキャリアを築ける環境は年々整っています。中でもモバイルアプリ開発は、生活に身近なプロダクトを扱い、ライフイベントと両立しやすい要素が多い職種です。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. リモート・フレックスと相性が良い</h3>
              <p className="text-text-light text-sm leading-relaxed">アプリ開発はオンラインで完結しやすく、フルリモート求人が豊富。通勤負担を減らし、育児・介護と両立しながら働きやすい職種です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 成果が可視化され時短でも評価されやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">担当した画面・機能やストアのレビュー・ダウンロード数が客観的に残るため、勤務時間の長さではなく成果で評価されやすく、時短勤務でも実力が認められます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 生活者目線が武器になる</h3>
              <p className="text-text-light text-sm leading-relaxed">アプリは「使いやすさ」が成否を分けます。日常生活やライフステージの変化で得たユーザー視点は、UI/UXの提案でそのまま強みになります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. 需要が高く転職の選択肢が多い</h3>
              <p className="text-text-light text-sm leading-relaxed">あらゆる業界がスマホアプリを持つ時代で、Swift・Kotlin・Flutter人材は不足気味。求人が多いほど「働きやすい会社」を選びやすく、女性が条件交渉できる余地も大きくなります。</p>
            </div>
          </div>
        </div>
      </section>

      {/* sec3 スキルと言語 */}
      <section id="sec3" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">必要なスキルと言語</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              モバイルアプリ開発は複数のスキルを組み合わせる職種ですが、すべてを最初から完璧にする必要はありません。まず<strong>OSと言語を1つに絞って深く</strong>習得し、小さなアプリをストアまで出せるようになることが土台です。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>スキル領域</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>具体例</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>ポイント</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>iOS開発</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Swift / SwiftUI / Xcode</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Mac必須。Swiftは文法が読みやすく未経験にも学びやすい</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>Android開発</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Kotlin / Jetpack Compose / Android Studio</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Windows PCでも開発可。Kotlinは公式推奨言語</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>クロスプラットフォーム</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Flutter（Dart）/ React Native（JS）</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>1コードで両OS対応。Flutterはフリーランス単価が高め</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>API・連携</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>REST / GraphQL / JSON / 認証</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>サーバーからデータを取得・送信する基本スキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>共通ツール・基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Git / Firebase / UI設計 / ストア審査</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Gitは必須。Firebaseは認証・DBを手早く実装できる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、ネイティブの<strong>Swift / Kotlin</strong>に加え、開発効率の高い<strong>Flutter</strong>の需要が急速に伸びています。ネイティブの知識を持ちつつクロスプラットフォームも扱えると、市場価値・単価ともに上がりやすい傾向です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">モバイルアプリエンジニアの年収相場（年代別・領域別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              モバイルアプリエンジニア全体の平均年収はおよそ<strong>497万〜555万円</strong>。年代・経験・扱う技術で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
            </p>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#efe3d8" }}>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>区分</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>平均年収の目安</th>
                  <th className="border px-4 py-3 text-left" style={{ borderColor: "#d9c7b8" }}>備考</th>
                </tr>
              </thead>
              <tbody className="text-text-light">
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約350万〜450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>経験浅め・実務を積む時期</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代後半〜30代前半</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約500万〜650万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>中堅。Swift/Kotlin経験3年で600万円超も</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代後半以降</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約700万〜900万円以上</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リーダー・マネジメント層</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>iOS約873万円 / Android約867万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>Flutterは平均月単価約78万円（年収換算約940万円）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>ネイティブを極める</strong>（Swift / Kotlinを深く理解し、設計・パフォーマンスまで担う）</li>
              <li>② <strong>クロスプラットフォームを掛け合わせる</strong>（Flutter／React Nativeで対応範囲を広げ希少性を上げる）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>（市場価値を客観評価してもらう）</li>
            </ul>
          </div>
        </div>
      </section>

      {/* sec5 求人動向・将来性 */}
      <section id="sec5" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">求人動向と将来性</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              スマホは生活インフラとなり、あらゆる業界が自社アプリを持つ時代です。EC・金融・ヘルスケア・行政・エンタメまで、モバイルアプリ人材は慢性的に不足しており、iOS（Swift）・Android（Kotlin）の需要・将来性は高い水準が続く見込みです。
            </p>
            <p>
              特に伸びているのが、1つのコードで両OSに対応できる<strong>Flutter</strong>。スタートアップから大企業まで採用が広がり、フリーランス案件ではスマホアプリエンジニア職種だけで多数の募集があり、平均月単価は約78万円（中央値80万円）と高めです。経験年数別では、Flutter経験2〜3年で月68万円前後、3〜5年で月80万円前後、5年以上で月96万円前後と、スキルの積み上げが単価に直結します。一方で、ネイティブの設計力やストア運用まで担える人材は希少で、年収も高くなります。これらの領域はリモート求人も多く、女性が働き方を選びやすい点も魅力です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。次の順序で進めると挫折しにくいです。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "作るOSと言語を決める", "iPhone+MacがあるならiOS（Swift）、Windows PCならAndroid（Kotlin）、両OS対応ならFlutter。手持ちの環境で選ぶと始めやすい。"],
              ["STEP2", "開発環境を整える", "iOSはXcode、AndroidはAndroid Studio、FlutterはFlutter SDKを導入。まずは公式チュートリアルで画面を1つ表示してみる。"],
              ["STEP3", "言語の基本文法を習得", "Swift / Kotlin / Dart のいずれかを1つに集中。Progateや公式ドキュメント、Udemyで手を動かしながら学ぶ。"],
              ["STEP4", "UIとAPI連携を学ぶ", "SwiftUI / Jetpack Compose / Flutterウィジェットで画面を作り、サーバーAPIからデータを取得・表示できるように。"],
              ["STEP5", "Git・Firebaseに触れる", "Gitでのコード管理は必須。Firebaseで認証やデータ保存を実装できると、実務に近いアプリが作れる。"],
              ["STEP6", "アプリを公開しポートフォリオに", "ToDo・家計簿・レシピ管理など小さなアプリをApp Store / Google Playに公開。動くアプリが転職活動で最も効く実績になります。"],
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

      {/* sec7 キャリアパス */}
      <section id="sec7" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">モバイルアプリエンジニアのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>モバイルアプリ開発は「ユーザーに届くプロダクトを作る力」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">iOS/Androidテックリード → モバイルアーキテクト。設計・大規模アプリの専門家として高年収を狙う道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">エンジニアリングマネージャー（EM）／モバイルチームリーダー。開発プロセスとメンバーをリードする道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">フルスタック／プロダクトエンジニア／UI/UXへ。Flutterなどクロスプラットフォームで対応範囲を広げる道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">フリーランスとして高単価のSwift/Kotlin/Flutter案件・リモート中心の働き方へ。ライフステージに合わせやすい。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>モバイルアプリの技術を正当に評価してもらうには、IT特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web業界に特化し求人数が豊富。技術に精通したアドバイザーがSwift・Kotlin・Flutterといったモバイルの技術スタックを理解した提案をしてくれます。リモート求人も多く、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">Geekly</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・ゲーム業界に強く、年収アップ実績が豊富。アプリ開発の求人も多く、スピーディーなマッチングと年収交渉力に定評があります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモートなど、女性のキャリア継続に配慮した求人を中心に紹介。働き方の条件で絞り込みたい人に最適です。</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl p-6 text-center" style={{ backgroundColor: "#efe3d8", border: "2px solid #7c3a55" }}>
            <p className="font-bold text-lg mb-2">エージェント選びで転職の成否が決まる</p>
            <p className="text-sm text-text-light mb-4">複数登録して、自分に合ったアドバイザーを見つけましょう。</p>
            <a href="/ranking/" className="inline-block rounded-full px-8 py-3 text-white font-bold transition-transform hover:scale-105" style={{ backgroundColor: "#c15f47" }}>おすすめエージェントランキングを見る</a>
          </div>
        </div>
      </section>

      {/* sec9 成功事例 */}
      <section id="sec9" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">転職成功事例</h2>
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・Android→Flutter）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">受託のAndroidエンジニア（Kotlin）/ 年収440万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社サービスのモバイル開発（Flutter）/ 年収620万円・フルリモート</p></div>
              </div>
              <p className="text-sm text-text-light">IT特化型エージェントでKotlinの実績に加えFlutterの個人アプリを整理。両OS対応できる希少性を評価され、年収180万円アップとフルリモートを同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・未経験→iOS）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">販売職（IT未経験）/ 年収310万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">自社開発企業のiOSエンジニア（Swift）/ 年収420万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学＋スクールでSwift/SwiftUIを学び、家計簿アプリをApp Storeに公開。公開実績を武器に未経験可の自社開発企業へ転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
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
            <a href="/articles/frontend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>フロントエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">UI構築の考え方はアプリ開発にも活きる</p></a>
            <a href="/articles/game-industry/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>ゲーム業界エンジニア転職ガイド</h3><p className="text-sm text-text-light">スマホゲーム開発との接点も多い領域</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/remote-jobs/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>リモートワーク求人ガイド</h3><p className="text-sm text-text-light">在宅で働きやすい職種と探し方</p></a>
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
