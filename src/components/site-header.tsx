"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { label: "서비스 소개", href: "#why" },
  { label: "이용 방법", href: "#how-it-works" },
  { label: "시안 보기", href: "#preview" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return <header className="sticky top-0 z-50 border-b border-[#edf0f7] bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
      <a href="#top" className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground" aria-label="Re:ForMe 페이지 맨 위로"><span className="flex size-9 items-center justify-center rounded-xl bg-[#f2f5ff]"><Image src="/figma/logo.svg" alt="" width={21} height={21} /></span>Re:ForMe</a>
      <nav aria-label="주 메뉴" className="hidden items-center gap-8 md:flex">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-[#647086] transition-colors hover:text-primary">{link.label}</a>)}</nav>
      <a href="#cta" className="rf-button rf-button-primary hidden !min-h-10 !px-5 !text-sm md:inline-flex">시작하기</a>
      <Button type="button" variant="outline" className="md:hidden" aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "닫기" : "메뉴"}</Button>
    </div>
    {menuOpen && <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t border-[#edf0f7] bg-white px-6 py-5 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-4">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="py-1 text-base font-medium text-foreground">{link.label}</a>)}<a href="#cta" onClick={() => setMenuOpen(false)} className="rf-button rf-button-primary mt-2">시작하기</a></div></nav>}
  </header>;
}
