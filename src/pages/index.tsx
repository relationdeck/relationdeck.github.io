import { useState, type ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Icon, { type IconName } from "@site/src/components/Icon";

import styles from "./index.module.css";

// 牌組名稱、標語與範例題目跟 App 的內容（decks.json）一致，英文版也取自同一份。
function useDecks(): { icon: IconName; name: string; en: string; tagline: string }[] {
  return [
    { icon: "sprout", name: translate({ id: "homepage.deck.reflection.name", message: "個人反思" }), en: "Self Reflection", tagline: translate({ id: "homepage.deck.reflection.tagline", message: "一個人靜下來，用問題問自己。" }) },
    { icon: "snowflake", name: translate({ id: "homepage.deck.stranger.name", message: "陌生破冰" }), en: "Icebreaker", tagline: translate({ id: "homepage.deck.stranger.tagline", message: "初次見面，不再只是寒暄。" }) },
    { icon: "users", name: translate({ id: "homepage.deck.friend.name", message: "朋友聚會" }), en: "Friends", tagline: translate({ id: "homepage.deck.friend.tagline", message: "一道好問題，勝過三小時的閒聊。" }) },
    { icon: "coffee", name: translate({ id: "homepage.deck.dating.name", message: "曖昧約會" }), en: "Dating", tagline: translate({ id: "homepage.deck.dating.tagline", message: "不知道說什麼才好？讓一張卡替你開口。" }) },
    { icon: "heart", name: translate({ id: "homepage.deck.partner.name", message: "伴侶深談" }), en: "Couples", tagline: translate({ id: "homepage.deck.partner.tagline", message: "不只聊日常，而是聊心裡。" }) },
    { icon: "sofa", name: translate({ id: "homepage.deck.household.name", message: "共同生活" }), en: "Life Together", tagline: translate({ id: "homepage.deck.household.tagline", message: "相愛容易，一起過日子要靠談。" }) },
    { icon: "house", name: translate({ id: "homepage.deck.family.name", message: "子女對談" }), en: "Talk to Parents", tagline: translate({ id: "homepage.deck.family.tagline", message: "少一點客套，多一點傾聽。" }) },
    { icon: "baby", name: translate({ id: "homepage.deck.parenting.name", message: "父母對談" }), en: "Talk to Kids", tagline: translate({ id: "homepage.deck.parenting.tagline", message: "不只問「今天乖不乖」。" }) },
    { icon: "toyBrick", name: translate({ id: "homepage.deck.sibling.name", message: "手足對談" }), en: "Siblings", tagline: translate({ id: "homepage.deck.sibling.tagline", message: "同一個家長大，卻有不同的記憶。" }) },
    { icon: "briefcase", name: translate({ id: "homepage.deck.colleague.name", message: "職場交流" }), en: "Workplace", tagline: translate({ id: "homepage.deck.colleague.tagline", message: "不只是合作，而是理解彼此。" }) },
    { icon: "graduationCap", name: translate({ id: "homepage.deck.upward.name", message: "向上對談" }), en: "Managing Up", tagline: translate({ id: "homepage.deck.upward.tagline", message: "不只是報告，而是了解帶領你的人。" }) },
    { icon: "messages", name: translate({ id: "homepage.deck.subordinate.name", message: "下屬對話" }), en: "1-on-1", tagline: translate({ id: "homepage.deck.subordinate.tagline", message: "不只是管理，而是建立信任。" }) },
  ];
}

function useSteps(): { title: string; body: string }[] {
  return [
    {
      title: translate({ id: "homepage.steps.pick.title", message: "選一副牌" }),
      body: translate({ id: "homepage.steps.pick.body", message: "依照今天坐在對面的人，選擇對應的關係情境。" }),
    },
    {
      title: translate({ id: "homepage.steps.flip.title", message: "翻開，輪流回答" }),
      body: translate({ id: "homepage.steps.flip.body", message: "點一下翻開卡片，左滑換下一張、右滑回上一張。同一輪不會重複，整副抽完再重新洗牌。" }),
    },
    {
      title: translate({ id: "homepage.steps.keep.title", message: "記下想留住的話" }),
      body: translate({ id: "homepage.steps.keep.body", message: "把想再聊的卡加入收藏，或為這一題寫下筆記，標記是和誰聊的。" }),
    },
  ];
}

function useLevels(): { label: string; deck: string; question: string }[] {
  return [
    {
      label: translate({ id: "homepage.levels.light", message: "輕鬆" }),
      deck: translate({ id: "homepage.deck.dating.name", message: "曖昧約會" }),
      question: translate({ id: "homepage.levels.light.question", message: "你最近迷上什麼？" }),
    },
    {
      label: translate({ id: "homepage.levels.deeper", message: "深入" }),
      deck: translate({ id: "homepage.deck.reflection.name", message: "個人反思" }),
      question: translate({ id: "homepage.levels.deeper.question", message: "最近有什麼畫面，常常在你腦中重播？" }),
    },
    {
      label: translate({ id: "homepage.levels.deep", message: "深度" }),
      deck: translate({ id: "homepage.deck.family.name", message: "子女對談" }),
      question: translate({ id: "homepage.levels.deep.question", message: "有沒有一件你希望我知道關於你的事？" }),
    },
  ];
}

function useFeatures(): { icon: IconName; title: string; body: string }[] {
  return [
    {
      icon: "bookmark",
      title: translate({ id: "homepage.features.favorites.title", message: "收藏" }),
      body: translate({ id: "homepage.features.favorites.body", message: "點書籤收藏想再聊的卡片，下次直接從收藏開始。" }),
    },
    {
      icon: "pen",
      title: translate({ id: "homepage.features.notes.title", message: "筆記" }),
      body: translate({ id: "homepage.features.notes.body", message: "一張卡可以有多則筆記。同一題三個人回答，就記成三則，各自標記對象。" }),
    },
    {
      icon: "user",
      title: translate({ id: "homepage.features.partners.title", message: "對話者" }),
      body: translate({ id: "homepage.features.partners.body", message: "為常聊天的人建立名單，每個人的頁面會整理你們聊過的所有筆記。" }),
    },
    {
      icon: "compass",
      title: translate({ id: "homepage.features.review.title", message: "回顧" }),
      body: translate({ id: "homepage.features.review.body", message: "整理近 30 天的對話：最常聊哪種關係、多半聊多深、哪些人好一陣子沒聊了。只描述，不打分數。" }),
    },
    {
      icon: "calendar",
      title: translate({ id: "homepage.features.streak.title", message: "連續天數與月曆" }),
      body: translate({ id: "homepage.features.streak.body", message: "記錄連續聊了幾天，也能從月曆回頭查看哪一天聊了哪幾題。" }),
    },
    {
      icon: "bell",
      title: translate({ id: "homepage.features.reminder.title", message: "每日提醒" }),
      body: translate({ id: "homepage.features.reminder.body", message: "設定時間與主題，每天收到一道問題，點開通知就能直接聊。" }),
    },
  ];
}

// 首頁主視覺可以翻的範例卡：12 副牌各一題，取自 App 的 decks.json（括號內是卡片 id），
// 英文版也用同一份的英文題目。深度各 4 題，排序讓同一領域（感情、家庭、職場…）
// 不會連著出現。第一張的「\n」是手排的斷行，其餘交給瀏覽器排。
function useSampleCards(): { meta: string; question: string }[] {
  const level = {
    light: translate({ id: "homepage.levels.light", message: "輕鬆" }),
    deeper: translate({ id: "homepage.levels.deeper", message: "深入" }),
    deep: translate({ id: "homepage.levels.deep", message: "深度" }),
  };
  const deck = {
    reflection: translate({ id: "homepage.deck.reflection.name", message: "個人反思" }),
    stranger: translate({ id: "homepage.deck.stranger.name", message: "陌生破冰" }),
    friend: translate({ id: "homepage.deck.friend.name", message: "朋友聚會" }),
    dating: translate({ id: "homepage.deck.dating.name", message: "曖昧約會" }),
    partner: translate({ id: "homepage.deck.partner.name", message: "伴侶深談" }),
    household: translate({ id: "homepage.deck.household.name", message: "共同生活" }),
    family: translate({ id: "homepage.deck.family.name", message: "子女對談" }),
    parenting: translate({ id: "homepage.deck.parenting.name", message: "父母對談" }),
    sibling: translate({ id: "homepage.deck.sibling.name", message: "手足對談" }),
    colleague: translate({ id: "homepage.deck.colleague.name", message: "職場交流" }),
    upward: translate({ id: "homepage.deck.upward.name", message: "向上對談" }),
    subordinate: translate({ id: "homepage.deck.subordinate.name", message: "下屬對話" }),
  };
  return [
    {
      meta: `${deck.partner} · ${level.deep}`,
      question: translate({ id: "homepage.hero.sample.partner_02", message: "有沒有什麼話\n你一直想對我說，\n但都沒有說出口？" }),
    },
    {
      meta: `${deck.stranger} · ${level.light}`,
      question: translate({ id: "homepage.hero.sample.stranger_07", message: "你有沒有一個「只要一提到就興奮」的話題？" }),
    },
    {
      meta: `${deck.family} · ${level.deep}`,
      question: translate({ id: "homepage.hero.sample.family_05", message: "有沒有一件你希望我知道關於你的事？" }),
    },
    {
      meta: `${deck.colleague} · ${level.light}`,
      question: translate({ id: "homepage.hero.sample.colleague_19", message: "你辦公桌上有沒有什麼有故事的東西？" }),
    },
    {
      meta: `${deck.friend} · ${level.deeper}`,
      question: translate({ id: "homepage.hero.sample.friend_05", message: "如果可以對五年前的自己說一句話，你會說什麼？" }),
    },
    {
      meta: `${deck.household} · ${level.deeper}`,
      question: translate({ id: "homepage.hero.sample.household_06", message: "你覺得我們現在的家務分配公平嗎？" }),
    },
    {
      meta: `${deck.subordinate} · ${level.deep}`,
      question: translate({ id: "homepage.hero.sample.subordinate_11", message: "有沒有什麼事是你不確定是否可以和我說的？" }),
    },
    {
      meta: `${deck.sibling} · ${level.light}`,
      question: translate({ id: "homepage.hero.sample.sibling_17", message: "你覺得我們誰比較常被罵？" }),
    },
    {
      meta: `${deck.reflection} · ${level.deep}`,
      question: translate({ id: "homepage.hero.sample.reflection_13", message: "你最怕別人看見你的哪一面？" }),
    },
    {
      meta: `${deck.dating} · ${level.light}`,
      question: translate({ id: "homepage.hero.sample.dating_01", message: "你最近迷上什麼？" }),
    },
    {
      meta: `${deck.upward} · ${level.deeper}`,
      question: translate({ id: "homepage.hero.sample.upward_10", message: "你遇過最好的主管，做對了什麼？" }),
    },
    {
      meta: `${deck.parenting} · ${level.deeper}`,
      question: translate({ id: "homepage.hero.sample.parenting_11", message: "當你遇到困難的時候，你希望我怎麼幫你？" }),
    },
  ];
}

/**
 * 主視覺的卡片：點一下就翻面，換成下一道題，跟 App 裡翻卡的手感一樣。
 * 卡片有正反兩面，每次只換「背對觀眾」那一面的題目，再轉半圈，
 * 所以轉到一半時不會看到字突然跳掉。偏好減少動態效果時直接換題，不轉。
 */
function HeroCard(): ReactNode {
  const cards = useSampleCards();
  // faces[0] 是 A 面的卡片索引，faces[1] 是 B 面的；turns 是轉了幾個半圈。
  const [faces, setFaces] = useState<[number, number]>([0, 1]);
  const [turns, setTurns] = useState(0);
  const showingB = turns % 2 === 1;
  const current = faces[showingB ? 1 : 0];

  const drawNext = () => {
    const next = (current + 1) % cards.length;
    setFaces(showingB ? [next, faces[1]] : [faces[0], next]);
    setTurns((t) => t + 1);
  };

  const face = (side: 0 | 1) => {
    const card = cards[faces[side]];
    const hidden = (side === 1) !== showingB;
    return (
      <span
        className={side === 0 ? styles.cardFace : `${styles.cardFace} ${styles.cardFaceB}`}
        aria-hidden={hidden}
      >
        <span className={styles.cardMeta}>{card.meta}</span>
        <span className={styles.cardQuestion}>{card.question}</span>
        <span className={styles.cardBrand}>RelationDeck</span>
      </span>
    );
  };

  return (
    <div className={styles.heroStage}>
      <div className={styles.heroVisual}>
        <div className={styles.cardBack} aria-hidden="true">
          <Icon name="heart" size={26} />
        </div>
        <button
          type="button"
          className={styles.cardFront}
          onClick={drawNext}
          aria-label={translate({ id: "homepage.hero.card.ariaLabel", message: "換一張卡" })}
          aria-describedby="hero-card-question"
        >
          <span
            className={styles.cardInner}
            style={{ transform: `rotateY(${turns * 180}deg)` }}
          >
            {face(0)}
            {face(1)}
          </span>
        </button>
        <span id="hero-card-question" className={styles.srOnly} aria-live="polite">
          {`${cards[current].meta} ${cards[current].question}`}
        </span>
      </div>
      <p className={styles.cardHint}>
        <Translate id="homepage.hero.card.hint">點一下卡片，換一題</Translate>
      </p>
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>
            <Translate id="homepage.hero.eyebrow">對話卡牌 App · iOS / Android</Translate>
          </p>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate id="homepage.hero.titleLine1">抽一張卡，</Translate>
            <br />
            <Translate id="homepage.hero.titleLine2">開啟一段真實對話，</Translate>
            <br />
            <Translate id="homepage.hero.titleLine3">建立深度連結</Translate>
          </Heading>
          <p className={styles.heroLead}>
            <Translate id="homepage.hero.lead">
              RelationDeck 關係盒子收錄 12 種關係情境、360 道由淺入深的問題。把手機放在桌上，翻開一張，輪流回答，讓問題替你們開場。
            </Translate>
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.buttonPrimary} to="#download">
              <Translate id="homepage.hero.download">下載 App</Translate>
            </Link>
            <Link className={styles.buttonText} to="/blog">
              <Translate id="homepage.hero.readBlog">閱讀文章</Translate>
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
        <HeroCard />
      </div>
    </header>
  );
}

function Facts(): ReactNode {
  const facts = [
    { value: "12", label: translate({ id: "homepage.facts.decks", message: "種關係情境" }) },
    { value: "360", label: translate({ id: "homepage.facts.cards", message: "張對話卡" }) },
    { value: "3", label: translate({ id: "homepage.facts.levels", message: "層對話深度" }) },
    { value: "2", label: translate({ id: "homepage.facts.languages", message: "種語言（中文／英文）" }) },
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
  const decks = useDecks();
  const { i18n } = useDocusaurusContext();
  // 英文版的牌名本身就是英文，不必再在旁邊補一次英文名。
  const showEn = i18n.currentLocale !== "en";
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          title={translate({ id: "homepage.decks.title", message: "十二副牌，對應生活裡的十二種關係" })}
          lead={translate({ id: "homepage.decks.lead", message: "從自己、朋友、伴侶到家人與職場，每副 30 張，從暖場的小問題，到平常不太會問出口的那一題。" })}
        />
        <ul className={styles.deckGrid}>
          {decks.map((d, i) => (
            <li key={d.en} className={styles.deck}>
              <span className={i % 2 === 0 ? styles.iconRose : styles.iconSage}>
                <Icon name={d.icon} size={22} />
              </span>
              <h3 className={styles.deckName}>
                {d.name}
                {showEn && <span className={styles.deckEn}>{d.en}</span>}
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
  const steps = useSteps();
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionHead
          title={translate({ id: "homepage.steps.title", message: "使用方式" })}
          lead={translate({ id: "homepage.steps.lead", message: "不需要事先準備，打開就能開始。" })}
        />
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
  const levels = useLevels();
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHead
          title={translate({ id: "homepage.levels.title", message: "三個層次，循序漸進" })}
          lead={translate({ id: "homepage.levels.lead", message: "每張卡都標示深度。發牌時會先出輕鬆的題目，再慢慢進到深入與深度，不必自己挑。" })}
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
  const features = useFeatures();
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <SectionHead
          title={translate({ id: "homepage.features.title", message: "聊過的內容，都留得下來" })}
          lead={translate({ id: "homepage.features.lead", message: "抽卡之外，App 也幫你整理每一段對話。" })}
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
          <Heading as="h2">
            <Translate id="homepage.privacy.title">你的對話，只存在你的手機裡</Translate>
          </Heading>
          <p>
            <Translate id="homepage.privacy.body">
              RelationDeck 不需要註冊帳號，收藏、筆記與對話紀錄都只儲存在你的裝置上，預設不會上傳到任何伺服器。沒有網路的時候，所有卡牌也照常可用。
            </Translate>
          </p>
        </div>
      </div>
    </section>
  );
}

function Newsletter(): ReactNode {
  const newsletterPoints = [
    translate({ id: "homepage.newsletter.point.android", message: "Android 版上架當天，第一時間通知你" }),
    translate({ id: "homepage.newsletter.point.articles", message: "新文章與對話主題，寄到你的信箱" }),
    translate({ id: "homepage.newsletter.point.free", message: "完全免費，隨時可以取消訂閱" }),
  ];
  return (
    <section
      id="newsletter"
      className={`${styles.section} ${styles.sectionAlt}`}
    >
      <div className={`container ${styles.newsletterInner}`}>
        <div>
          <span className={styles.newsletterIcon}>
            <Icon name="mail" size={22} />
          </span>
          <Heading as="h2">
            <Translate id="homepage.newsletter.title">免費訂閱電子報</Translate>
          </Heading>
          <p className={styles.newsletterLead}>
            <Translate id="homepage.newsletter.lead">
              留下 email，就能收到 RelationDeck 的最新消息。
            </Translate>
          </p>
          <ul className={styles.newsletterPoints}>
            {newsletterPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <iframe
          className={styles.newsletter}
          src="https://relationdeck.substack.com/embed"
          title={translate({ id: "homepage.newsletter.iframeTitle", message: "訂閱 RelationDeck 電子報" })}
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </section>
  );
}

const APP_STORE_TW =
  "https://apps.apple.com/tw/app/relationdeck-%E9%97%9C%E4%BF%82%E7%9B%92%E5%AD%90/id6804240926";
const APP_STORE_US =
  "https://apps.apple.com/us/app/relationdeck-%E9%97%9C%E4%BF%82%E7%9B%92%E5%AD%90/id6804240926";

function Download(): ReactNode {
  const { i18n } = useDocusaurusContext();
  // 依語系只放一個 App Store 連結：中文版連台灣區，英文版連美國區。
  const appStoreUrl = i18n.currentLocale === "en" ? APP_STORE_US : APP_STORE_TW;
  return (
    <section className={`${styles.section} ${styles.download}`}>
      <div className="container">
        <SectionHead
          id="download"
          title={translate({ id: "homepage.download.title", message: "App Store 已上架" })}
          lead={translate({
            id: "homepage.download.lead",
            message:
              "iPhone 現在就能下載，App 內可切換繁體中文與英文。Android 版即將上架 Google Play，上架當天會透過電子報通知訂閱者。",
          })}
        />
        <div className={styles.stores}>
          <Link className={`${styles.store} ${styles.storeLink}`} href={appStoreUrl}>
            <Icon name="smartphone" size={18} />
            App Store
          </Link>
          <span className={styles.store}>
            <Icon name="smartphone" size={18} />
            Google Play
            <em>
              <Translate id="homepage.download.comingSoon">即將上架</Translate>
            </em>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({ id: "homepage.meta.title", message: "抽一張卡，開啟真實對話、建立深度連結" })}
      description={translate({
        id: "homepage.meta.description",
        message:
          "RelationDeck 關係盒子是一款對話卡牌 App。12 種關係情境、360 道由淺入深的問題，陪你和朋友、伴侶、父母、孩子、手足與同事開啟真實對話、建立深度連結。支援筆記、對話回顧與每日提醒，資料預設只存在你的裝置上。",
      })}
    >
      <Hero />
      <Facts />
      <main>
        <Decks />
        <HowItWorks />
        <Levels />
        <Features />
        <Privacy />
        <Newsletter />
        <Download />
      </main>
    </Layout>
  );
}
