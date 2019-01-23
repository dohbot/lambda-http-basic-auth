# http basic auth

## TL;DR

- S3를 static web으로 공개할 때,
- https + http basic auth를 적용
- 최소한의 임의 접근 방지

## Prerequisite

- 도메인을 소유해야함.
- AWS 계정이 있어야함.

## Install

1. S3 생성
   - `index.htm`을 s3에 업로드.
2. `http-basic-auth.js`를 이용해서 lambda 생성
3. Certification Manager로 도메인의 인증서 생성.
4. CloudFront distribution 생성.
   - origin에 s3 경로 설정.
   - index 경로로 s3의 `index.htm` 설정
   - CloudFront Event: Viewer Request 에 lambda 설정
   - 인증서 설정.

## To Do

- user, password 를 코드에서 분리
- install script 생성
