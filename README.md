# Re:ForMe 랜딩 페이지

Re:ForMe는 복잡한 마음을 편하게 이야기하고, 대화 속 감정과 현실의 어려움을 함께 돌아본 뒤 개인에게 맞는 감각 도구를 제안하는 서비스 콘셉트입니다. 이 저장소는 코드잇 스프린트 미션 5를 위한 소개 페이지입니다. 실제 대화 기능과 데이터 연동은 아직 포함하지 않습니다.

## 페이지 기획

- 주요 사용자: 마음은 복잡하지만 무엇부터 말해야 할지 모르거나, 이야기한 뒤에도 다음 행동이 막막한 사람
- 문제 → 해결 → 기대효과: 감정을 정리하기 어려움 → 자유로운 대화와 돌아보기, 감각 도구의 흐름 → 자신의 마음을 알아차리고 일상에서 돌봄을 시작할 계기
- 핵심 행동: **서비스 미리보기**를 눌러 Figma 시안에서 가져온 첫 홈 화면을 확인하기
- 섹션 순서: 히어로 → 문제 공감 → 이용 흐름 및 기능 → 기대효과 → 최종 CTA

## 기술 스택

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4, shadcn/ui (Button, Card)
- Noto Sans KR 로컬 폰트

## 실행 방법

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다. 배포 전 확인에는 `npm run lint`와 `npm run build`를 사용합니다.

## 구현한 인터랙션

- 모바일 메뉴 열기·닫기 및 메뉴 선택 시 자동 닫기
- 메뉴와 CTA를 통한 섹션 스크롤 이동
- 키보드 포커스 표시와 움직임 줄이기 설정 대응

## 공유와 품질 점검

- 페이지 제목·설명·Open Graph 이미지(1200×630)·Twitter 카드 메타데이터 설정
- Lighthouse 모바일 점검 후 글꼴을 WOFF2로 압축하고 버튼·보조 문구·단계 번호의 명도 대비 개선
- 수정된 로컬 프로덕션 빌드 점수: 성능 75, 접근성 100, 권장사항 100, SEO 100 (측정 환경에 따라 달라질 수 있음)
- `prefers-reduced-motion`을 고려한 부드러운 섹션 스크롤과 버튼 반응

## 디자인 출처

[미션 4 Figma 파일](https://www.figma.com/design/QmteRU5R1QhuKLhJJlqHcu/?node-id=0-1)의 스플래시, 온보딩, 첫 홈 화면을 참고했습니다. 해당 파일은 모바일 앱 시안이므로 색상, 타이포그래피, 로고와 화면 미리보기를 가져와 랜딩 페이지용 구성으로 확장했습니다. `public/figma`의 로고와 홈 화면 이미지는 Figma에서 내보낸 원본 자산입니다.

## 배포

[https://refor-me-landing.vercel.app](https://refor-me-landing.vercel.app)

멘토 리뷰 전에는 `feature/mission-5-landing` 브랜치를 Vercel Production에 연결해 PR의 구현 화면을 배포합니다. PR이 `main`으로 머지되면 Vercel의 Production Branch를 `main`으로 변경할 수 있습니다.
