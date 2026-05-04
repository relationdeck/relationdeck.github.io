import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "抽卡開話題，自然破冰",
    icon: "🃏",
    description: (
      <>
        從精選關係卡牌中隨機抽出一張，讓問題引導你們展開自然、真實的對話。
        不需要刻意準備，一張卡就能打破沉默，讓聊天變得輕鬆又有趣。
      </>
    ),
  },
  {
    title: "主題情境，關係更深入",
    icon: "💝",
    description: (
      <>
        個人反思、陌生人破冰、朋友聚會、曖昧約會、情侶深談、家庭時光、職場交流與下屬對話——
        每種關係都有量身打造的卡牌主題，讓每次對話都有方向、有深度。
      </>
    ),
  },
  {
    title: "收藏 × 筆記，留住美好",
    icon: "📓",
    description: (
      <>
        收藏打動你的卡牌，為每道問題記錄你的回答與感受，
        建立屬於你的關係日記。每一段對話，都是值得珍藏的故事。
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.glassCard}>
        <div className={styles.iconWrap}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

type ShowcaseItem = {
  gradient: string;
  placeholderIcon: string;
  title: string;
  description: string;
};

function ProductShowcase(): ReactNode {
  const features: ShowcaseItem[] = [
    {
      gradient:
        "linear-gradient(135deg, #fdf4f5 0%, #f5dde0 50%, #ecc4c8 100%)",
      placeholderIcon: "🃏",
      title: "與朋友輕鬆破冰",
      description:
        "聚會再也不怕沉默——一張卡就能打開話匣子，讓朋友之間多一些真實的笑聲與故事，每次相聚都更有意義",
    },
    {
      gradient:
        "linear-gradient(135deg, #f4f8f3 0%, #d8ecd4 50%, #c0dcb8 100%)",
      placeholderIcon: "💕",
      title: "與伴侶深度連結",
      description:
        "超越日常閒聊，探索彼此的夢想、恐懼與成長故事，讓愛情關係更深厚、更真實，每一天都更了解對方",
    },
    {
      gradient:
        "linear-gradient(135deg, #fdf8f0 0%, #f5e8cc 50%, #ead4a8 100%)",
      placeholderIcon: "👨‍👩‍👧",
      title: "家庭聚會更溫暖",
      description:
        "跨越世代的問題，讓家人之間多一些理解與笑聲，把珍貴的家庭對話時刻，變成難以忘懷的共同回憶",
    },
    {
      gradient:
        "linear-gradient(135deg, #f2f4f8 0%, #d4ddf0 50%, #baccde 100%)",
      placeholderIcon: "🤝",
      title: "職場建立信任感",
      description:
        "打破同事間的尷尬距離，讓下屬、夥伴之間建立更真實的信任與連結，促進團隊向心力與合作默契",
    },
    {
      gradient:
        "linear-gradient(135deg, #f8f4fc 0%, #ead8f4 50%, #d8c0ec 100%)",
      placeholderIcon: "📖",
      title: "收藏卡牌，記錄故事",
      description:
        "收藏打動你的每一張卡，記下你的回答與內心感受，打造屬於你的關係日記，隨時回顧那些美好的對話片刻",
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="ct-section-badge">使用情境</span>
          <Heading as="h2">適合所有關係與場合</Heading>
        </div>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={clsx(
              styles.showcaseRow,
              idx % 2 === 1 && styles.showcaseRowReverse,
            )}
          >
            <div className={styles.showcaseImageWrap}>
              <div
                className={styles.showcasePlaceholder}
                style={{ background: feature.gradient }}
              >
                {feature.placeholderIcon}
              </div>
            </div>
            <div className={styles.showcaseTextWrap}>
              <h3 className={styles.showcaseTitle}>{feature.title}</h3>
              <p className={styles.showcaseDesc}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresPreamble}>
            <span className="ct-section-badge">核心功能</span>
            <Heading as="h2">什麼是 RelationDeck 關係盒子？</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <ProductShowcase />
    </>
  );
}
