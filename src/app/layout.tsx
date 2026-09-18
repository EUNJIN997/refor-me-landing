import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const notoSansKr = localFont({
  src: [
    { path: "../fonts/noto-sans-kr-regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/noto-sans-kr-medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/noto-sans-kr-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Re:ForMe | 나를 위한 감각의 전환",
  description: "마음을 편하게 이야기하고, 놓친 감정과 현실을 함께 돌아보는 Re:ForMe. 나를 위한 감각 도구를 만나보세요.",
  openGraph: {
    title: "Re:ForMe | 나를 위한 감각의 전환",
    description: "마음을 꺼내는 순간, 나를 다시 만나요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}
