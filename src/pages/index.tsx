import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Icon, { type IconName } from "@site/src/components/Icon";

import styles from "./index.module.css";

// Deck names and taglines mirror the app's content payload (decks.json).
const decks: { icon: IconName; name: string; en: string; tagline: string }[] = [
  { icon: "sprout", name: "個人反思", en: "Self Reflection", tagline: "一個人靜下來，用問題問自己。" },
  { icon: "snowflake", name: "陌生破冰", en: "Icebreaker", tagline: "初次見面，不再只是寒暄。" },
  { icon: "users", name: "朋友聚會", en: "Friends", tagline: "一道好問題，勝過三小時的閒聊。" },
  { icon: "coffee", name: "曖昧約會", en: "Dating", tagline: "讓一張卡替你開口，慢慢靠近彼此。" },
  { icon: "heart", name: "伴侶深談", en: "Couples", tagline: "不只聊日常，而是聊心裡。" },
  { icon: "house", name: "家庭時光", en: "Family", tagline: "少一點客套，多一點傾聽。" },
  { icon: "briefcase", name: "職場交流", en: "Workplace", tagline: "不只是合作，而是理解彼此。" },
  { icon: "messages", name: "下屬對話", en: "1-on-1", tagline: "不只是管理，而是建立信任。" },
];

const steps = [
  { title: "選一副牌", body: "依照今天坐在對面的人，選擇對應的關係情境。" },
  { title: "翻開，輪流回答", body: "點一下翻開卡片。同一輪不會抽到重複的題目，整副抽完再重新洗牌。" },
  { title: "記下想留住的話", body: "收藏想再聊的卡，或為這一題寫下筆記，標記是和誰聊的。" },
];

const levels = [
  { label: "輕鬆", deck: "曖昧約會", question: "你最近迷上什麼？" },
  { label: "深入", deck: "個人反思", question: "最近有什麼畫面，常常在你腦中重播？" },
  { label: "深度", deck: "家庭時光", question: "有沒有一件你希望我知道關於你的事？" },
];

const features: { icon: IconName; title: string; body: string }[] = [
  { icon: "bookmark", title: "收藏", body: "收藏想再聊的卡片，下次直接從收藏開始。" },
  { icon: "pen", title: "筆記", body: "一張卡可以有多則筆記。同一題三個人回答，就記成三則，各自標記對象。" },
  { icon: "user", title: "對話者", body: "為常聊天的人建立名單，每個人的頁面會整理你們聊過的所有筆記。" },
  { icon: "calendar", title: "紀錄", body: "連續天數與對話月曆，回頭查看哪一天聊了哪幾題。" },
  { icon: "bell", title: "每日提醒", body: "設定時間與主題，每天收到一道問題，點開通知就能直接聊。" },
  { icon: "globe", title: "中英雙語", body: "介面與題目皆提供繁體中文與英文，可在設定中隨時切換。" },
];

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>對話卡牌 App · iOS / Android</p>
          <Heading as="h1" className={styles.heroTitle}>
            抽一張卡，
            <br />
            開啟一段真實對話，
            <br />
            建立深度連結
          </Heading>
          <p className={styles.heroLead}>
            RelationDeck 關係盒子收錄 8 種關係情境、120
            道由淺入深的問題。把手機放在桌上，翻開一張，輪流回答，讓問題替你們開場。
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} to="#download">
              下載 App
            </Link>
            <Link className={styles.buttonText} to="/blog">
              閱讀文章
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.cardBack}>
            <Icon name="heart" size={26} />
          </div>
          <div className={styles.cardFront}>
            <span className={styles.cardMeta}>伴侶深談 · 深度</span>
            <p className={styles.cardQuestion}>
              有沒有什麼話
              <br />
              你一直想對我說，
              <br />
              但都沒有說出口？
            </p>
            <span className={styles.cardBrand}>RelationDeck</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Facts(): ReactNode {
  const facts = [
    { value: "8", label: "種關係情境" },
    { value: "120", label: "張對話卡" },
    { value: "3", label: "層對話深度" },
    { value: "0", label: "需要註冊的帳號" },
  ];
  return (
    <div className={styles.facts}>
      <div className={`container ${styles.factsInner}`}>
        {facts.map((f) => (
          <div key={f.label} className={styles.fact}>
            <span className={styles.factValue}>{f.value}</span>
            <span className={styles.factLabel}>{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  title,
  lead,
  id,
}: {
  title: string;
  lead?: string;
  id?: string;
}): ReactNode {
  return (
    <div className={styles.sectionHead}>
      <Heading as="h2" id={id}>
        {title}
      </Heading>
      {lead && <p>{lead}</p>}
    </div>
  );
}

function Decks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          title="八副牌，對應生活裡的八種關係"
          lead="每副 15 張，從暖場的小問題，到平常不太會問出口的那一題。"
        />
        <ul className={styles.deckGrid}>
          {decks.map((d, i) => (
            <li key={d.en} className={styles.deck}>
              <span className={i % 2 === 0 ? styles.iconRose : styles.iconSage}>
                <Icon name={d.icon} size={22} />
              </span>
              <h3 className={styles.deckName}>
                {d.name}
                <span className={styles.deckEn}>{d.en}</span>
              </h3>
              <p className={styles.deckTagline}>{d.tagline}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks(): ReactNode {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionHead title="使用方式" lead="不需要事先準備，打開就能開始。" />
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Levels(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          title="三個層次，循序漸進"
          lead="每張卡都標示深度。可以從輕鬆的題目開始，氣氛對了再往下聊。"
        />
        <div className={styles.levels}>
          {levels.map((l, i) => (
            <figure key={l.label} className={styles.level}>
              <figcaption className={styles.levelHead}>
                <span className={styles.levelDots}>
                  {[0, 1, 2].map((n) => (
                    <span key={n} className={n <= i ? styles.dotOn : styles.dot} />
                  ))}
                </span>
                {l.label}
              </figcaption>
              <blockquote className={styles.levelQuestion}>{l.question}</blockquote>
              <span className={styles.levelDeck}>{l.deck}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features(): ReactNode {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionHead
          title="聊過的內容，都留得下來"
          lead="抽卡之外，App 也幫你整理每一段對話。"
        />
        <ul className={styles.featureGrid}>
          {features.map((f) => (
            <li key={f.title} className={styles.feature}>
              <span className={styles.iconRose}>
                <Icon name={f.icon} size={20} />
              </span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Privacy(): ReactNode {
  return (
    <section className={styles.privacy}>
      <div className={`container ${styles.privacyInner}`}>
        <span className={styles.privacyIcon}>
          <Icon name="lock" size={24} />
        </span>
        <div>
          <Heading as="h2">你的對話，只存在你的手機裡</Heading>
          <p>
            RelationDeck 不需要註冊帳號，收藏、筆記與對話紀錄都只儲存在你的裝置上，預設不會上傳到任何伺服器。沒有網路的時候，所有卡牌也照常可用。
          </p>
        </div>
      </div>
    </section>
  );
}

function Download(): ReactNode {
  return (
    <section className={`${styles.section} ${styles.download}`}>
      <div className="container">
        <SectionHead
          id="download"
          title="即將上架 App Store 與 Google Play"
          lead="訂閱電子報，上架當天會通知你。也歡迎加入 Facebook 社群，提供題目與使用回饋。"
        />
        <div className={styles.stores}>
          <span className={styles.store}>
            <Icon name="smartphone" size={18} />
            App Store
            <em>即將上架</em>
          </span>
          <span className={styles.store}>
            <Icon name="smartphone" size={18} />
            Google Play
            <em>即將上架</em>
          </span>
        </div>
        <iframe
          className={styles.newsletter}
          src="https://relationdeck.substack.com/embed"
          title="訂閱 RelationDeck 電子報"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="抽一張卡，開啟真實對話、建立深度連結"
      description="RelationDeck 關係盒子是一款對話卡牌 App。8 種關係情境、120 道由淺入深的問題，陪你和朋友、伴侶、家人與同事開啟真實對話、建立深度連結。支援筆記、對話紀錄與每日提醒，資料預設只存在你的裝置上。"
    >
      <Hero />
      <Facts />
      <main>
        <Decks />
        <HowItWorks />
        <Levels />
        <Features />
        <Privacy />
        <Download />
      </main>
    </Layout>
  );
}
