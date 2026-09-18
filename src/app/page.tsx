import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";

const steps = [
  ["01", "마음을 말로 꺼내기", "잘 정리된 문장이 아니어도 괜찮아요. 지금 마음에 걸리는 일을 편하게 이야기하며 시작해요."],
  ["02", "놓친 마음과 현실 살피기", "대화 속 감정과 실제로 어려웠던 상황을 함께 돌아보며 나에게 필요한 방향을 찾아요."],
  ["03", "나만의 감각 도구 만나기", "첫 대화를 마치면 나에게 맞는 감각 도구를 만나고, 일상에서 마음을 돌보는 작은 계기를 만들어요."],
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-2xl text-center">
    <p className="mb-4 text-sm font-bold tracking-[0.18em] text-primary uppercase">{eyebrow}</p>
    <h2 className="text-balance text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
    <p className="mt-5 text-pretty text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
  </div>;
}

function Hero() {
  return <section id="top" className="relative overflow-hidden bg-[#f8f9fe]" aria-labelledby="hero-title">
    <div className="pointer-events-none absolute -top-24 right-[-12rem] size-[34rem] rounded-full bg-[#e8ebff] blur-3xl" />
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:px-10 lg:pt-24 lg:pb-28">
      <div className="relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dce2ff] bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm"><span className="size-2 rounded-full bg-primary" />나를 위한 감각의 전환</div>
        <h1 id="hero-title" className="max-w-[14ch] text-[clamp(2.75rem,4.2vw,3.6rem)] leading-[1.2] font-bold tracking-[-0.055em] text-foreground">마음을 꺼내는 순간,<br /><span className="text-primary">나를 다시 만나요.</span></h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-[#657084] sm:text-xl sm:leading-9">말만 들어주는 대화가 아니에요. 충분히 이야기하면 내가 놓치고 있던 마음과 현실적으로 어려웠던 점을 함께 정리해요.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a className="rf-button rf-button-primary" href="#preview">서비스 미리보기 <span aria-hidden="true">↗</span></a><a className="rf-button rf-button-secondary" href="#how-it-works">어떻게 시작하나요?</a></div>
        <p className="mt-5 text-sm text-[#59687a]">Re:ForMe는 현재 서비스 시안을 바탕으로 준비 중입니다.</p>
      </div>
      <div className="relative mx-auto w-full max-w-[410px] scroll-mt-24 lg:mr-0" id="preview">
        <div className="absolute inset-x-8 top-10 bottom-8 rounded-full bg-[#cbd3ff] blur-[72px]" />
        <div className="relative mx-auto w-[min(100%,295px)] overflow-hidden rounded-[38px] border-[9px] border-[#20294c] bg-white shadow-[0_35px_80px_-30px_rgba(50,50,93,0.42)]"><Image src="/figma/home.png" width={393} height={852} priority alt="Re:ForMe 앱 첫 홈 화면. 마음에 걸리는 일을 입력하고 첫 대화를 시작하는 화면" className="block h-auto w-full" /></div>
        <div className="absolute right-[-2px] bottom-[17%] max-w-[190px] rounded-2xl border border-[#e8ebf5] bg-white/95 px-5 py-4 text-sm leading-6 font-medium text-foreground shadow-xl sm:right-[-22px]">첫 대화가 끝나면,<br />나만의 감각 도구가 나타나요.</div>
      </div>
    </div>
  </section>;
}

function Problem() {
  const problems = [["말문이 막힐 때", "지금 느끼는 감정에 이름을 붙이기조차 어려워요."], ["이야기가 흩어질 때", "충분히 말했는데도 중요한 마음이 남아 있어요."], ["다음이 막막할 때", "정리한 마음을 일상에서 어떻게 돌볼지 고민돼요."]];
  return <section id="why" className="scroll-mt-20 px-6 py-24 sm:py-32 lg:px-10"><div className="mx-auto max-w-7xl">
    <SectionTitle eyebrow="The problem" title="마음이 복잡할 때, 어디서부터 말해야 할까요?" description="내 감정을 설명하기 어렵고, 이야기한 뒤에도 무엇이 힘들었는지 선명해지지 않을 때가 있어요." />
    <div className="mt-14 grid gap-5 md:grid-cols-3">{problems.map(([title, text]) => <Card key={title} className="border-[#e9edf5] bg-[#fbfcff] py-8 shadow-none"><CardContent className="px-7"><span className="mb-6 block size-2 rounded-full bg-primary" /><h3 className="text-xl font-bold text-foreground">{title}</h3><p className="mt-3 text-base leading-7 text-muted-foreground">{text}</p></CardContent></Card>)}</div>
  </div></section>;
}

function HowItWorks() {
  return <section id="how-it-works" className="scroll-mt-20 bg-[#f8f9fe] px-6 py-24 sm:py-32 lg:px-10"><div className="mx-auto max-w-7xl">
    <SectionTitle eyebrow="How it works" title="대화에서 시작해, 나를 위한 도구로" description="Re:ForMe는 마음을 이야기하고 돌아보는 흐름을 통해 자신을 돌볼 작은 출발점을 제안합니다." />
    <div className="mt-16 grid gap-6 lg:grid-cols-3">{steps.map(([number, title, text]) => <Card key={number} className="rounded-[28px] border-white bg-white py-8 shadow-[0_16px_40px_-25px_rgba(50,50,93,0.18)]"><CardContent className="px-8"><span className="text-4xl font-bold tracking-tight text-[#4d61d2]">{number}</span><h3 className="mt-9 text-xl font-bold text-foreground">{title}</h3><p className="mt-4 text-base leading-8 text-muted-foreground">{text}</p></CardContent></Card>)}</div>
  </div></section>;
}

function Benefits() {
  return <section className="px-6 py-24 sm:py-32 lg:px-10"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-24">
    <div className="relative flex min-h-[370px] items-center justify-center overflow-hidden rounded-[36px] bg-[#edf0ff] p-8 sm:min-h-[440px]"><div className="absolute size-[300px] rounded-full border border-dashed border-[#b7c1fb] sm:size-[360px]" /><div className="absolute size-[230px] rounded-full bg-white/60 sm:size-[280px]" /><div className="relative flex size-[170px] items-center justify-center rounded-full bg-white text-center shadow-[0_24px_55px_-20px_rgba(94,114,228,0.26)] sm:size-[210px]"><div><Image src="/figma/logo.svg" alt="" width={38} height={38} className="mx-auto mb-4" /><span className="text-xl font-bold text-foreground">Re:ForMe</span></div></div><span className="absolute top-[20%] right-[18%] size-4 rounded-full bg-[#b9c7ff]" /><span className="absolute bottom-[21%] left-[16%] size-3 rounded-full bg-[#9aa8f1]" /></div>
    <div><p className="mb-4 text-sm font-bold tracking-[0.18em] text-primary uppercase">For you</p><h2 className="text-balance text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">내 마음을 알아차리는 시간이,<br />일상을 바꿀 작은 시작이 되도록</h2><p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">바쁜 하루 속에서 잠시 멈춰 마음을 들여다보세요. 대화의 기록과 감각 도구를 통해 내게 필요한 돌봄을 더 쉽게 떠올릴 수 있어요.</p><div className="mt-9 space-y-4 text-base font-medium text-foreground"><p className="flex items-start gap-3"><span className="rf-check">✓</span> 부담 없이 시작하는 대화</p><p className="flex items-start gap-3"><span className="rf-check">✓</span> 감정과 상황을 함께 돌아보는 흐름</p><p className="flex items-start gap-3"><span className="rf-check">✓</span> 나에게 맞는 감각 도구를 향한 첫걸음</p></div></div>
  </div></section>;
}

function FinalCta() {
  return <section id="cta" className="scroll-mt-20 px-6 pb-24 sm:pb-32 lg:px-10"><div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#32325d] px-7 py-16 text-center text-white sm:px-12 sm:py-20"><p className="text-sm font-bold tracking-[0.18em] text-[#bfc7ff] uppercase">Start with a conversation</p><h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl leading-tight font-bold sm:text-5xl">오늘의 마음을 위한 작은 자리,<br className="hidden sm:block" /> 여기서부터 시작해요.</h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#d9def5]">Re:ForMe가 제안하는 첫 화면과 대화의 흐름을 살펴보세요.</p><a className="rf-button mt-9 bg-white text-[#32325d] hover:bg-[#eef0ff]" href="#preview">첫 화면 다시 보기 <span aria-hidden="true">↑</span></a></div></section>;
}

export default function Home() {
  return <><SiteHeader /><main><Hero /><Problem /><HowItWorks /><Benefits /><FinalCta /></main><footer className="border-t border-[#edf0f7] px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 text-sm text-[#59687a] sm:flex-row sm:items-center"><p className="font-bold text-foreground">Re:ForMe</p><p>나를 위한 감각의 전환</p><p>© {new Date().getFullYear()} Re:ForMe</p></div></footer></>;
}
