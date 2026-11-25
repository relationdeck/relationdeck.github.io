import type { ComponentProps, ReactNode } from "react";

/**
 * Docusaurus 內建的語言圖示是「文A」翻譯符號；換成地球，大家一看就知道是
 * 切換語言。右上角的語言選單與 footer 的語言下拉選單都用這一個。
 * 路徑取自 Lucide 的 Globe（ISC license），與 src/components/Icon 同一套筆觸。
 */
export default function IconLanguage({
  width = 20,
  height = 20,
  ...props
}: ComponentProps<"svg">): ReactNode {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
