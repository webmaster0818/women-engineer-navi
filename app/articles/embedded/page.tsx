import type { Metadata } from "next";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "女性組み込み・IoTエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  description:
    "女性組み込み・IoTエンジニアの転職ガイド。平均年収約557万円（20代約450万〜50代約730万）や必要なC/C++・マイコン・RTOSスキル、未経験からのロードマップ、車載・IoTで伸びる求人動向、キャリアパスを実データで解説。長く働きやすい理由とおすすめ転職エージェントも紹介します。",
  alternates: { canonical: "/articles/embedded/" },
  openGraph: {
    title: "女性組み込み・IoTエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
    description:
      "女性組み込み・IoTエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで徹底解説。",
    url: "https://women-engineer.com/articles/embedded/",
    type: "article",
    siteName: "CareeHUB for woman",
    locale: "ja_JP",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "女性組み込み・IoTエンジニア転職ガイド｜年収・必要スキル・未経験からの道",
  datePublished: "2026-06-10",
  dateModified: "2026-07-09",
  author: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CareeHUB for woman",
    url: "https://women-engineer.com",
  },
  description:
    "女性組み込み・IoTエンジニアの年収・必要スキル・未経験からのロードマップ・求人動向・キャリアパスを実データで解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://women-engineer.com/articles/embedded/",
  },
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "女性組み込みエンジニアの平均年収はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "厚生労働省の職業情報提供サイトjob tagによると、組み込みエンジニア（システムエンジニア・組込み/IoT）の平均年収は約557.6万円で、日本全体の平均458万円より高めです。年代別では20代後半で約454万円、30代前半で約510万円、30代後半で約600万円、ピークの50代後半で約730万円が目安です。車載（CASE/SDV）や半導体分野は需要が高く給与に反映されやすく、フリーランスの平均月単価は約60万円（年収換算700万円前後）、月80万円超の高単価案件もあります。性別による給与差はスキルと経験で埋められる職種なので、エージェント経由の年収交渉が有効です。",
      },
    },
    {
      "@type": "Question",
      name: "未経験の女性でも組み込みエンジニアになれますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。C言語の基礎 → マイコンとハードウェアの基礎（CPU・メモリ・GPIO）→ ArduinoやRaspberry Piでの電子工作 → 通信プロトコル（UART/I2C/SPI）→ RTOS・割り込みの理解 → センサーを使った小さな作品（ポートフォリオ）の順で進めるのが王道です。組み込みは人材が慢性的に不足する超売り手市場で、未経験可・研修ありの求人や、第二新卒・異業種からのポテンシャル採用も少なくありません。家電・産業機器メーカーやSESから始め、実務2〜3年で市場価値が大きく上がります。",
      },
    },
    {
      "@type": "Question",
      name: "組み込みエンジニアの将来性は？オワコンではないですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "将来性は高い職種です。日本の組み込みシステム市場は2027年度まで年平均5.3%で成長予測、IoT市場は2023年の約6.5兆円から2028年に約9.5兆円へ拡大すると見込まれます。EV化・SDV・CASEで車載の需要が急増し、半導体・防衛・IoT家電でも人材不足が深刻です。組み込みソフト開発企業の約68%が「人材の確保・強化」を課題に挙げており、特に若手が不足しています。AIに置き換わりにくいハードウェア連携の専門性があるため、安定して長く働ける領域です。",
      },
    },
    {
      "@type": "Question",
      name: "組み込みエンジニアは産休・育休後も働きやすいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "働きやすさは企業差が大きいですが、長く続けやすい職種です。C/C++やマイコン・RTOSの設計スキルは流行に左右されにくく、ブランクがあっても復帰しやすいのが強みです。一方で実機検証はオフィス勤務が前提の現場もあるため、設計・ファームウェア開発中心のポジションやリモート対応の有無、製造業大手の手厚い福利厚生（産休育休取得実績・復帰率）を事前に確認しましょう。求人票に出ない実態は、女性のキャリアに詳しいエージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "組み込み転職におすすめの転職エージェントはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "技術を正当に評価してもらうならIT・モノづくり特化型のレバテックキャリアやGeekly、機電・製造系に強いメイテックネクスト、女性のキャリア継続を重視するならtype女性の転職エージェントがおすすめです。特化型は車載・家電・産業機器など分野ごとの技術スタックを理解したアドバイザーが多く、年収交渉にも強みがあります。女性特化型は産休育休やリモートなど働き方の条件で求人を絞り込めます。2〜3社の併用がベストです。",
      },
    },
    {
      "@type": "Question",
      name: "組み込みエンジニアの職場は男性が多いと聞きますが、女性は働きにくいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "製造業系の開発現場は男性比率が高い職場が依然多いのが実情ですが、働きにくいかどうかは会社・チームの文化で大きく変わります。ダイバーシティ採用を進める大手メーカーを中心に女性エンジニアの採用・登用は広がっており、育休・時短の制度運用が定着している企業も少なくありません。応募前に、女性エンジニアの在籍状況、育休取得・復帰の実績、時短勤務者がどの工程（設計中心か実機検証中心か）を担当しているかを確認しましょう。求人票に出ない現場の実態は、エージェント経由で確認するのが確実です。",
      },
    },
    {
      "@type": "Question",
      name: "時短勤務でも組み込み開発は続けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "続けられます。設計・ファームウェア実装・コードレビューが中心のポジションであれば業務を時間で区切りやすく、時短勤務との相性は悪くありません。一方、実機検証・量産立ち上げ・不具合対応が重なる時期は稼働が読みにくくなるため、時短で働くなら担当工程と繁忙期の対応ルール（当番制の有無・時短者の扱い）を事前に確認することが重要です。長期プロジェクトが多くマイルストーンや引き継ぎの計画を立てやすい点は、時短・育児との両立において組み込みの有利な特徴です。",
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
              { label: "組み込みエンジニア転職ガイド" },
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
              女性組み込み・IoTエンジニア転職ガイド
              <span className="block text-lg font-medium text-text-light mt-2 md:text-xl">
                年収・必要スキル・未経験からの道のりを実データで解説
              </span>
            </h1>
            <p className="mt-4 text-text-light">最終更新: 2026年7月9日</p>
          </div>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8", backgroundColor: "#f0e7dd" }}>
            <h2 className="text-lg font-bold mb-4">目次</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#sec1" className="hover:underline" style={{ color: "#7c3a55" }}>1. 組み込み・IoTエンジニアとは（仕事内容）</a></li>
              <li><a href="#sec2" className="hover:underline" style={{ color: "#7c3a55" }}>2. 女性が組み込みで長く働きやすい理由</a></li>
              <li><a href="#sec3" className="hover:underline" style={{ color: "#7c3a55" }}>3. 必要なスキルと言語</a></li>
              <li><a href="#sec4" className="hover:underline" style={{ color: "#7c3a55" }}>4. 組み込みの年収相場（年代別）</a></li>
              <li><a href="#sec5" className="hover:underline" style={{ color: "#7c3a55" }}>5. 求人動向と将来性</a></li>
              <li><a href="#sec6" className="hover:underline" style={{ color: "#7c3a55" }}>6. 未経験から目指すロードマップ</a></li>
              <li><a href="#sec7" className="hover:underline" style={{ color: "#7c3a55" }}>7. 組み込みのキャリアパス</a></li>
              <li><a href="#sec8" className="hover:underline" style={{ color: "#7c3a55" }}>8. おすすめ転職エージェント</a></li>
              <li><a href="#sec9" className="hover:underline" style={{ color: "#7c3a55" }}>9. 転職成功事例</a></li>
              <li><a href="#sec-women-real" className="hover:underline" style={{ color: "#7c3a55" }}>10. 女性が組み込みエンジニアとして働くリアル</a></li>
              <li><a href="#sec10" className="hover:underline" style={{ color: "#7c3a55" }}>11. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* sec1 とは */}
      <section id="sec1" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">組み込み・IoTエンジニアとは（仕事内容）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              組み込みエンジニアは、自動車・家電・産業機器・医療機器・スマート家電など「特定の機能を持つ機械」を動かすソフトウェア（ファームウェア）を設計・開発する職種です。エアコンの温度制御、車のエンジンやブレーキの制御、洗濯機の運転モード、IoTセンサーのデータ送信――身の回りのあらゆる機器の「頭脳」をプログラムで作ります。
            </p>
            <p>
              Webエンジニアと大きく違うのは、<strong>ハードウェア（電子回路・マイコン）とソフトウェアの両方</strong>を扱う点です。限られたメモリ・処理能力・消費電力の中で、リアルタイムに正確な動作を実現する設計力が求められます。近年はIoTの普及で、デバイスをクラウドにつなぎ、データを収集・分析する役割も担うようになりました。
            </p>
            <p>
              Webのようにトレンドの移り変わりが激しくなく、C/C++やマイコン・RTOSの知識は10年以上通用するため、スキルが資産になりやすいのが特徴です。製造業を支える基盤技術であり、AIに置き換わりにくい専門性として安定した需要があります。
            </p>
            <div className="rounded-xl border p-6 mt-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "#7c3a55" }}>組み込み・IoTの主な担当領域</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>ファームウェア開発（C / C++ でマイコンを制御）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>マイコン（MCU）・CPUアーキテクチャ・メモリマップの理解</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>RTOS（FreeRTOS / ThreadX / VxWorks）でのリアルタイム制御</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>通信プロトコル実装（UART / I2C / SPI / CAN / USB）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>IoT連携（センサー → クラウド送信・データ管理）</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#7c3a55" }} className="mt-1 font-bold">&#10003;</span><span>実機デバッグ（ロジックアナライザ・オシロスコープ・エミュレータ）</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* sec2 女性が働きやすい理由 */}
      <section id="sec2" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が組み込みで長く働きやすい理由</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              組み込みは「理系・男性中心」のイメージが残る分野ですが、製造業大手を中心に育休・時短制度が手厚く、専門性で長く食べていける職種です。慢性的な人材不足を背景に、ダイバーシティ採用で女性の門戸も着実に広がっています。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>1. スキルが10年通用しブランク復帰しやすい</h3>
              <p className="text-text-light text-sm leading-relaxed">C/C++やマイコン制御、RTOSの考え方は流行に左右されず長く通用します。一度身につけた設計力は産休育休でブランクが空いても武器として残り、復帰しやすい土台になります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>2. 大手メーカーの福利厚生が手厚い</h3>
              <p className="text-text-light text-sm leading-relaxed">自動車・家電・産業機器メーカーは育休取得率・復帰率が高く、時短勤務や事業所内保育の整った企業も多数。腰を据えて長期キャリアを築きやすい環境が揃っています。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>3. 慢性的な人材不足で需要が高い</h3>
              <p className="text-text-light text-sm leading-relaxed">組み込みソフト開発企業の約68%が「人材の確保・強化」を課題に挙げる超売り手市場。求人が多いほど「働きやすい会社」を選びやすく、条件交渉の余地も大きくなります。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>4. ファーム設計中心ならリモートも可能</h3>
              <p className="text-text-light text-sm leading-relaxed">実機検証は出社が前提の現場もありますが、設計・ファームウェア開発・コードレビュー中心のポジションならリモートやフレックスを導入する企業も増えており、育児との両立がしやすくなっています。</p>
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
              組み込みはソフトとハードの両方を扱いますが、すべてを最初から完璧にする必要はありません。まず<strong>C言語を1つ深く</strong>習得し、マイコンを動かせるようになることが土台です。下表が主なスキル領域です。
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
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>プログラミング言語</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>C / C++ / Rust / Python</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>シェアNo.1はC言語。車載・IoTでメモリ安全なRustの採用も拡大中</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>マイコン / ハード基礎</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ARM Cortex-M / メモリマップ / GPIO</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>CPUアーキテクチャとレジスタ操作の理解が中核スキル</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>RTOS / 制御</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>FreeRTOS / ThreadX / VxWorks / 割り込み</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>リアルタイム処理の経験は実務で高く評価される</td>
                </tr>
                <tr style={{ backgroundColor: "#f0e7dd" }}>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>通信プロトコル</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>UART / I2C / SPI / CAN / USB / BLE</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>センサーや外部機器との接続に必須。車載はCANが重要</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>デバッグ / IoT</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>オシロ / ロジアナ / Git / クラウド連携</td>
                  <td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>実機デバッグ力は必須。IoTはクラウド送信の知識で市場価値UP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-light leading-relaxed mt-4 text-sm">
            2026年時点では、<strong>車載（CASE/SDV）でのモデルベース開発・機能安全（ISO 26262）</strong>と、<strong>IoTでのエッジAI・無線通信（BLE/Wi-Fi/LPWA）</strong>のスキルが特に評価され、これらを扱えると単価・年収が上がりやすい傾向です。
          </p>
        </div>
      </section>

      {/* sec4 年収 */}
      <section id="sec4" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">組み込みの年収相場（年代別）</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              厚生労働省の職業情報提供サイトjob tagによると、組み込みエンジニアの平均年収は<strong>約557.6万円</strong>。日本全体の平均458万円より高めで、年代・経験・分野で差が出ます。下表は各種調査をもとにした目安です（企業・地域・スキルにより変動します）。
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
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>20代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約450万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>20代後半で約454万円</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>30代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約510〜600万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>30代前半510万・後半600万円が目安</td></tr>
                <tr><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>40〜50代</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>約650〜730万円</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>ピークの50代後半で約730万円。1000万円も</td></tr>
                <tr style={{ backgroundColor: "#fff" }}><td className="border px-4 py-3 font-bold" style={{ borderColor: "#d9c7b8" }}>フリーランス</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>月単価 約60万円〜</td><td className="border px-4 py-3" style={{ borderColor: "#d9c7b8" }}>年収換算700万円前後。月80万超の高単価案件も</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border p-6 mt-6 bg-white" style={{ borderColor: "#d9c7b8" }}>
            <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>年収を上げる3つの方向性</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>① <strong>高単価分野</strong>（車載のCASE/SDV、半導体、医療機器）に軸足を移す</li>
              <li>② <strong>上流・設計</strong>の経験を積む（要件定義・アーキテクチャ設計・機能安全）</li>
              <li>③ <strong>エージェント経由で年収交渉</strong>。市場価値を客観評価してもらう</li>
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
              組み込みエンジニアは製造業全体で需要が急増しており、他職種に比べても転職しやすい<strong>「超売り手市場」</strong>が続いています。組み込みソフト開発企業の約68%が「人材の確保・強化」を課題に挙げ、特に若手人材の不足が深刻です。日本の組み込みシステム市場は2027年度まで年平均5.3%で成長予測、IoT市場は2023年の約6.5兆円から2028年には約9.5兆円へ拡大する見込みです。
            </p>
            <p>
              特に伸びているのは、<strong>車載分野（EV化・SDV・CASEへの対応で求人ニーズが給与にも反映）</strong>と、<strong>IoT・スマート家電・エッジAI領域</strong>。半導体・防衛分野でもニーズが高い水準です。「組み込みはオワコン」という声もありますが、ハードウェアとの連携はAIに置き換わりにくく、専門性の高さゆえに人材供給が追いつかない――つまり長く安定して働ける将来性の高い職種です。
            </p>
          </div>
        </div>
      </section>

      {/* sec6 未経験ロードマップ */}
      <section id="sec6" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">未経験から目指すロードマップ</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>1日2〜3時間の学習で<strong>半年〜1年</strong>が一つの目安。実機を触りながら進めると挫折しにくいです。次の順序で進めましょう。</p>
          </div>
          <div className="space-y-4">
            {[
              ["STEP1", "C言語の基礎を習得する", "組み込みのシェアNo.1はC言語。変数・ポインタ・配列・構造体まで。あれこれ手を出さずまずCに集中するのが近道です。"],
              ["STEP2", "マイコン・ハードの基礎を知る", "CPUとメモリ、GPIO（入出力ピン）、レジスタ操作など「マイコンが動く仕組み」を理解。ソフトとハードのつながりが見えてきます。"],
              ["STEP3", "ArduinoやRaspberry Piで電子工作", "実機でLED点灯やセンサー制御を体験。手を動かすとハードとソフトの関係を実感でき、学習が一気に楽しくなります。"],
              ["STEP4", "通信プロトコルを学ぶ", "UART / I2C / SPI で外部機器とデータをやり取り。Raspberry Piなら回路を自分で組んで試せます。"],
              ["STEP5", "RTOS・割り込みを理解する", "FreeRTOSなどでタスク管理・割り込み処理を学ぶ。リアルタイム制御の考え方は実務で高く評価されます。"],
              ["STEP6", "ポートフォリオ（作品）を作る", "センサーで取得したデータをクラウドに送るIoT作品など、小さくても動くものを公開。転職活動で最も効く実績になります。"],
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
          <h2 className="text-2xl font-bold mb-6">組み込みのキャリアパス</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>組み込みは「設計力」と「分野の専門性」が積み上がる職種で、キャリアの選択肢が広いのが魅力です。代表的な進路は次の通りです。</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>技術を深める</h3><p className="text-sm text-text-light">特定分野（車載・半導体・医療機器）のITスペシャリスト／組み込みアーキテクトへ。希少性が高く高年収を狙える道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>マネジメント</h3><p className="text-sm text-text-light">プロジェクトリーダー → プロジェクトマネージャー。予算・人員・品質・スケジュールを統括する道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>領域を広げる</h3><p className="text-sm text-text-light">IoT／エッジAI／クラウド連携エンジニアへ。ハードとクラウドをつなぐ希少なスキルで市場価値を高める道。</p></div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}><h3 className="text-lg font-bold mb-2" style={{ color: "#7c3a55" }}>独立・柔軟な働き方</h3><p className="text-sm text-text-light">実務2〜3年以上でフリーランスへ。月60万〜80万円超の案件もあり、ライフステージに合わせやすい働き方が可能。</p></div>
          </div>
        </div>
      </section>

      {/* sec8 エージェント */}
      <section id="sec8" className="py-10" style={{ backgroundColor: "#f0e7dd" }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">おすすめ転職エージェント</h2>
          <div className="space-y-4 text-text-light leading-relaxed mb-6">
            <p>組み込みの技術を正当に評価してもらうには、IT・モノづくり特化型と女性特化型の併用が効果的です。</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">レバテックキャリア</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>IT特化型</span></div>
              <p className="text-sm text-text-light">IT・Web・モノづくり業界に特化し求人数が豊富。技術に精通したアドバイザーが組み込み・IoTの技術スタックを理解した提案をしてくれます。設計中心のリモート求人も探しやすく、女性アドバイザーの指名も可能です。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">メイテックネクスト</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>機電・製造特化型</span></div>
              <p className="text-sm text-text-light">機械・電気・組み込みなど製造業エンジニアに特化。車載・家電・産業機器メーカーの非公開求人に強く、メーカー出身のアドバイザーが分野に踏み込んだ支援をしてくれます。</p>
            </div>
            <div className="rounded-xl border bg-white p-6" style={{ borderColor: "#d9c7b8" }}>
              <div className="flex items-center gap-3 mb-3"><h3 className="text-lg font-bold">type女性の転職エージェント</h3><span className="inline-block rounded-full px-3 py-1 text-xs font-bold text-white" style={{ backgroundColor: "#7c3a55" }}>女性特化型</span></div>
              <p className="text-sm text-text-light">産休育休やリモート・時短など、女性のキャリア継続に配慮した求人を中心に紹介。製造業大手の手厚い制度を働き方の条件で絞り込みたい人に最適です。</p>
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
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Aさん（30代前半・家電制御→車載）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">家電メーカーの組み込み開発 / 年収450万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">車載Tier1の制御ソフト開発（CAN/機能安全）/ 年収640万円</p></div>
              </div>
              <p className="text-sm text-text-light">機電特化型エージェントでCAN通信とRTOSの実績を整理。需要の高い車載（SDV）分野に軸足を移し、年収190万円アップと育休復帰実績のある大手環境を同時に実現しました。</p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>Bさん（20代後半・未経験→IoT）</h3>
              <div className="grid gap-4 md:grid-cols-2 mb-4">
                <div className="rounded-lg p-3" style={{ backgroundColor: "#f0e7dd" }}><p className="text-xs font-bold text-text-light mb-1">転職前</p><p className="text-sm font-bold">電機メーカーの品質管理（開発未経験）/ 年収330万円</p></div>
                <div className="rounded-lg p-3" style={{ backgroundColor: "#efe3d8" }}><p className="text-xs font-bold mb-1" style={{ color: "#7c3a55" }}>転職後</p><p className="text-sm font-bold">IoT機器メーカーの組み込み開発（C/FreeRTOS）/ 年収420万円</p></div>
              </div>
              <p className="text-sm text-text-light">独学でCとRaspberry Piを学び、センサーデータをクラウドに送るIoT作品を公開。未経験可・研修ありの自社製品メーカーに転職し、産休育休実績のある環境で長く働ける基盤を得ました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 女性が働くリアル */}
      <section id="sec-women-real" className="py-10">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6">女性が組み込みエンジニアとして働くリアル</h2>
          <div className="space-y-4 text-text-light leading-relaxed">
            <p>
              ここまで制度やスキルの面から働きやすさを見てきましたが、実際に飛び込む前に知っておきたいのは「現場の空気感」です。組み込みの主戦場は自動車・家電・産業機器といった<strong>製造業</strong>で、Web業界とは文化がひと味違います。相性・両立・キャリア・注意点を、一般論として正直に整理します。なお、女性エンジニアの比率や年収の実数は<a href="/articles/data/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">女性エンジニアの実データ集</a>にまとめています。
            </p>
          </div>
          <div className="space-y-6 mt-6">
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>① 製造業文化との相性</h3>
              <p className="text-sm text-text-light leading-relaxed">
                メーカー系の開発現場は、設計レビューや品質ゲートを段階的に通していく<strong>プロセス重視・ドキュメント重視</strong>の文化が根付いています。スケジュールが長期で計画的なぶん、締切前の突発的な追い込みが常態化しにくく、「見通しを立てて着実に働きたい」タイプの人と相性が良い環境です。一方で、会議や手続きが多く意思決定が慎重な傾向はあり、Web系のスピード感を求める人には物足りない可能性もあります。また、職場の男女比は現場差が大きく、男性比率の高いチームが依然多いのも事実です。SIer的な多重下請け構造の現場も一部にあるため、商流は<a href="/articles/sier-industry/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">SIer業界の働き方ガイド</a>も参考に確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>② 産休・育休・時短との相性</h3>
              <p className="text-sm text-text-light leading-relaxed">
                長期プロジェクトが中心でマイルストーンが読みやすいため、<strong>産休前の引き継ぎ計画や復帰時期の調整が立てやすい</strong>のは組み込みの強みです。C/C++やRTOSの知識は陳腐化しにくく、ブランク後のキャッチアップ負荷も比較的小さめです。ただし、実機検証や量産立ち上げの時期は出社や稼働が集中しやすいため、時短で働くなら設計・実装・レビュー中心のポジションを選ぶのが現実的です。制度の有無だけでなく、時短勤務者が実際にどの工程を担当しているかまで確認しましょう。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#7c3a55" }}>③ 女性が積み上げやすいキャリアパス</h3>
              <p className="text-sm text-text-light leading-relaxed">
                車載（機能安全）・半導体・医療機器といった分野の専門特化、リーダー・PM、IoT・クラウド連携への拡張と、進路の選択肢は本文sec7の通り豊富です。専門性が高い職種ほど<strong>労働時間ではなく設計力・成果で評価されやすく</strong>、ライフイベントを挟んでも積み上げが消えにくいのが女性にとっての実利です。職種別の年収の目安は<a href="/articles/salary-by-job/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">職種別年収ガイド</a>、需要動向の実データは<a href="/articles/demand/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">エンジニアの需要・将来性</a>を参照してください。
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: "#d9c7b8" }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#c15f47" }}>④ 現実的な注意点（正直に）</h3>
              <ul className="text-sm text-text-light space-y-2 leading-relaxed">
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>女性エンジニアが少ない現場が依然多く、社内にロールモデルを見つけにくい場合がある</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>実機が必要な工程はリモートに制約があり、フルリモート求人はWeb系より少ない</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>工場・試験場への出張や、量産立ち上げ前・市場不具合対応時の繁忙がある現場も</span></li>
                <li className="flex items-start gap-2"><span style={{ color: "#c15f47" }} className="font-bold">&#9888;</span><span>会社により文化差が大きいため、女性エンジニアの在籍状況・育休復帰実績・リモート運用は面接やエージェント経由で個別に確認を</span></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 text-text-light leading-relaxed mt-6">
            <p className="text-sm">
              「自分の状況にどの働き方・エージェントが合うか」を整理したい方は<a href="/diagnosis/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">エージェント無料診断</a>で相性を確認できます。各社の比較は<a href="/ranking/" style={{ color: "#7c3a55" }} className="hover:underline font-bold">おすすめ転職エージェントランキング</a>をご覧ください。
            </p>
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
            <a href="/articles/career-path/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアのキャリアパス全体像</h3><p className="text-sm text-text-light">職種の全体像と進み方をまとめたガイド</p></a>
            <a href="/articles/backend/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>バックエンドエンジニア転職ガイド</h3><p className="text-sm text-text-light">サーバーサイド開発のキャリア</p></a>
            <a href="/articles/infrastructure/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>インフラエンジニア転職ガイド</h3><p className="text-sm text-text-light">クラウド時代の安定職種</p></a>
            <a href="/articles/salary/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>女性エンジニアの年収ガイド</h3><p className="text-sm text-text-light">平均年収と年収アップの方法</p></a>
            <a href="/articles/demand/" className="block rounded-xl border bg-white p-5 transition-shadow hover:shadow-md" style={{ borderColor: "#d9c7b8" }}><h3 className="font-bold mb-1" style={{ color: "#7c3a55" }}>エンジニアの需要・将来性</h3><p className="text-sm text-text-light">伸びる職種と市場動向</p></a>
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
