# AGENTS.md

OTKRyu의 개인 블로그. Eleventy 3 로 마크다운을 정적 HTML 로 빌드해서 GitHub Pages 로 호스팅한다.
README.md 는 블로그 소개글이므로 사용법이나 프로젝트 설명을 적지 않는다.

## 명령어

- `npm install`: 의존성 설치 (Node 버전은 `.nvmrc`)
- `npm run dev`: 로컬 미리보기, http://localhost:8080 (저장하면 자동 재빌드)
- `npm run build`: `_site/` 에 정적 사이트 생성

## 글 쓰기

`posts/<id>.md` 를 추가하면 `/posts/<id>/` 페이지가 생긴다. 파일 이름이 곧 주소이므로 한 번 공개한 글의 파일명은 바꾸지 않는다.

```yaml
---
title: "글 제목"
description: "한 줄 요약. 검색 결과와 링크 미리보기에 쓰인다"
date: "2026-01-16"
tags:
  - opensearch
  - error
relatedPost: "revisit" # 선택. 다른 글의 파일명(확장자 제외)
---
```

목록, 태그 페이지, 홈의 최근 글은 frontmatter 를 기준으로 자동 반영된다.
글 본문은 작성자가 직접 쓴다. AI 는 포맷(제목 레벨, 목록, 코드 블록, 줄바꿈 등) 외에는 본문의 문장과 내용을 수정하지 않는다.
본문에는 `# 제목` 을 쓰지 않는다. 제목은 레이아웃이 `title` 로 출력하므로 본문 최상위 제목은 `##` 부터 쓴다.
태그는 새로 만들기 전에 기존 태그(`/tags/`)를 먼저 확인해서 비슷한 태그가 늘어나지 않게 한다.

## 구조

- `eleventy.config.js`: 컬렉션(`posts`, `tagList`), 필터, 빌드 대상 설정
- `_includes/`: 레이아웃 (`base.njk` 공통 틀, `post.njk` 글 페이지, `post-list.njk` 글 목록 조각)
- `_data/site.json`: 사이트 이름, URL
- `posts/posts.11tydata.js`: 글 공통 레이아웃과 주소 규칙
- `index.njk`, `posts.njk`, `tags.njk`, `tag.njk`, `about.md`, `404.md`: 각 페이지
- `style.css`: 전체 스타일 (프레임워크 없음, 다크 모드는 OS 설정을 따름)
- `public/`: 사이트 루트로 그대로 복사되는 정적 파일
- `scripts/deploy.js`: 로컬 빌드 후 `gh-pages` 브랜치로 배포

루트에 새 `.md` 파일을 두면 페이지로 빌드되므로, 페이지가 아닌 문서는 `eleventy.config.js` 의 ignores 에 추가한다.

## 배포

GitHub Actions 는 쓰지 않는다. 로컬에서 빌드한 결과물만 올린다.

- `npm run deploy`: `_site/` 를 새로 빌드해서 `gh-pages` 브랜치로 강제 push (`scripts/deploy.js`)
- `npm run deploy -- --dry-run`: 빌드와 배포 커밋까지만 하고 push 는 하지 않음
- `gh-pages` 브랜치는 매번 커밋 하나로 덮어쓰므로 이력이 남지 않는다. 소스 이력은 `master` 에 있다.
- 저장소 Settings → Pages 의 Source 는 "Deploy from a branch", 브랜치 `gh-pages`, 폴더 `/ (root)`.
- 배포와 별개로 소스 변경은 `master` 에 커밋, push 한다.

## 유지보수 원칙

- 의존성은 `@11ty/eleventy` 하나만 두고, 버전은 고정한다.
- CSS 프레임워크, 클라이언트 JS 는 추가하지 않는다.
