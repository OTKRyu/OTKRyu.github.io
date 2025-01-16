---
title: "Nexus go repo"
date: "2023-04-17"
tags:
  - nexus
  - go
  - authentication
---

# nexus go repo

회사에서 넥서스를 registry로 쓰고 있는데,
마침 go도 nexus에 추가해달라는 요청을 받고 찾다보니,
다른 언어와는 달리 go는 nexus 관련 문서가 생각보다 없어서 작성하게 되었다.

## nexus

registry 오픈소스이다.
기업용과 오픈소스로 구분되어 있으며,
오픈소스로도 꽤나 많은 기능을 제공하기 때문에,
사내에서 private registry가 필요하다면 한 번 고려해볼만 하다.

자세한 내용은 링크를 참조 (https://www.sonatype.com/products/nexus-repository)

## how to set go repo in nexus

기본적인 설정방법은 go repo 또한 다른 repo와 다르지 않다.
다만 차이점이 있다면, go의 경우 아직 private repo를 제공하지 않기 때문에,
의미 있게 쓸 수 있는건 proxy repo 정도이고,
여러 proxy를 쓰는 게 아닌 이상 group은 별 의미가 없다고 생각된다.

설정 순서는 아래와 같다.

1. admin 권한으로 로그인
2. go repo 생성(proxy)
3. go repo 이름 및 proxy 주소 설정

   - 다른 리포와 다른 점이라고 한다면, 다른 리포들은 기본적으로 쓰이는 repo가 https://registry.npmjs.org/등으로 명시되어 있는 반면, go는 기본적으로 쓰이는 리포가 적혀있지 않다.
   - go 공식 repo를 쓰고 싶다면 https://proxy.golang.org를 기재하면 된다.

4. 위 설정을 마친 뒤 nexus에 접근가능한 곳에서 GOPROXY 환경변수를 nexus주소로 변경

   - `go env` 명령어를 통해 go에서 참조하는 환경변수 확인 가능
   - `export GOPROXY=nexus-address`로 환경변수 변경 가능

5. `go get`를 이용하여 원하는 의존성 다운로드

## go

세팅 방법 자체는 다른 언어와 다를 것 없지만 go와 관련된 몇 가지 주의사항이 있어 추가로 기재한다.

- go는 패키지 매니저가 없다. 언어에 내장되어 있다. 따라서 다른 패키지 매니정에서 제공하는 지원을 받을 수 없을 수도 있다.
  - 사실 패키지 관리를 언어 자체로도 잘 한다면 크게 문제될 일이 아니다마는, nexus와 같은 private registry를 쓰는데에는 보안의 문제도 있기 때문에 auth 기능이 없다면 사용에 제약이 있을 수 있다.
  - 실제로 필자의 경우 auth 기능을 사용해야지만 nexus 로그에 언제 누가 어떤 패키지를 받아갔는지 로그가 남기 때문에, 기존 정책대로는 go repo를 사용할 수 없었다.
- go는 초기에 패키지를 주소 기반으로 받아왔다. https://github.com/~ 으로 시작한다면 실제로 주소를 인식하고 git 프로토콜을 이용해 소스코드를 받아왔다.
  - 현재는 원본에서 소스코드를 받아오는 것에 단점 때문에 module 등을 도입하여 변경되었지만, 위와 같은 방식으로 운영되었기 때문에 의존성을 import 할 때 실제 주소처럼 쓰이는 것이다.
  - module 등을 도입하면서 위와 같은 상황에서 벗어나기 위해 proxy.golang.org 같은 곳에서 소스코드를 버전별로 분류해 저장하고 있지만, 권한 없이도 받아올 수 있는 public repo만 가능하다. private repo의 경우 proxy.golang.org에서 찾을 수 없다.
  - proxy.golang.org에서 찾을 수 없는 소스는 직접 주소에 요청을 하게 되는데, 이를 이용하여 private repo에 접근할 수 있는 계정을 동봉하여 요청을 보내면, 의존성을 가져올 수 있게 된다. .netrc 와 같은 방법을 통해서 할 수 있다.

# 참조

https://help.sonatype.com/repomanager3/nexus-repository-administration/formats/go-repositories