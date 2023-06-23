# goods_market 

## Tech Stacks
- Nest.js Framework
- DBeaver
- Graphql 
- Docker
- TypeORM

## Project Sturucture 

```
src
├── apis // 인증/인가
│   ├── auth 
│   ├── boardLists
│   ├── boards
│   ├── orderPayments
│   ├── orderRefunds
│   ├── orders
│   ├── productImages
│   ├── products // 상품 도메인
│   │   └── dto
│   ├── productsCategories
│   ├── productsDiscount
│   │   └── dto
│   ├── reviews
│   ├── users  // 유저 도메인
│   │   └── dto
│   └──  usersAddress   
├── common // 공통 컴포넌트
│   ├── auth 
│   │   ├── gql(AuthAccessGuard, AuthRefreshGuard) 
│   │   └── jwt(google, kakao, naver, access, refresh)
│   ├── filter
│   ├── graphql
│   └──  type
├── app.module.ts
├── main.ts
├── dockerFile // 설정 관련(DB, ORM, ...)
└── docker-compose.yaml
```
## ERD 
<img width="1284" alt="image" src="https://github.com/hyo-dingding/project_goods_market/assets/107694757/4c5a08b7-9928-449c-b0fa-fd8ef97edf9e">

<img width="1168" alt="image" src="https://github.com/hyo-dingding/project_goods_market/assets/107694757/bc3f7067-e2fc-431d-8386-1b40d56cdaf2">
