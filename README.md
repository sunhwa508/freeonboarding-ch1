# [Assignment 1] 하얀마인드 과제

![화면 기록 2021-07-27 오후 1 28 22](https://user-images.githubusercontent.com/61695175/127095507-a8631d27-8841-47ff-9ea9-17d3746b12bd.gif)

## 설치 및 시작하는 법

이 프로젝트는 Create React App으로 생성되었습니다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 실행 가능한 스크립트

#### `npm run start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000 입니다.

#### `npm run build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.
(cra 기본설정)

## 코드 가이드 라인

> 코드 스타일의 일관성을 유지하기 위해 eslint 기반의 airbnb 규칙을 사용합니다.

> 또한 prettier 플러그인을 사용하여 스타일을 관리합니다.

## 과제 구현 목록

- [x] 인피니트 스크롤 (infinite scroll)
- [x] 스켈레톤 UI (loading loader)

## 프로젝트 구조

- public react 기본 배포 공간으로 배포되는 웹 서버 root
- src 실제 소스 코드

#### src 디렉토리 구성

- components 컴포넌트 구성요소
- style 전체 영역에 제공되는 stylesheet

## 배포

Netlify 무료배포 사이트를 아용하였습니다.

> https://festive-galileo-65abe1.netlify.app/

## Reference

[MDN Web Doc (MutationObserver)](https://developer.mozilla.org/ko/docs/Web/API/MutationObserver#mutationobserverinit)
<br/>
[MDN Web Doc (IntersectionObserver)](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)
<br/>
[useCallback, node](https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae)
