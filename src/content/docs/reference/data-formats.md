---
title: 데이터 형식 레퍼런스
description: 유전체 분석에서 마주치는 핵심 파일 형식 빠른 참조.
---

개인 유전체 분석에서 자주 만나는 파일 형식 요약.

## SNP 칩 raw (23andMe / 검사기관 txt)

탭 구분 텍스트. SNP 칩이 측정한 수십만 개 변이의 genotype.

| 컬럼 | 의미 |
| --- | --- |
| rsid | dbSNP 변이 식별자 (`rs...`) |
| chromosome | 염색체 |
| position | 좌표 (특정 게놈 빌드 기준, 보통 GRCh37) |
| genotype | 두 대립유전자 (예: `AA`, `AG`) |

## FASTQ

시퀀서가 내놓는 **원시 read** 와 품질 점수. 4줄이 한 read.

```text
@SEQ_ID
GATTTGGGGTTCAAAGCAG
+
!''*((((***+))%%%++
```

## BAM / SAM

레퍼런스 게놈에 **정렬된 read**. SAM은 텍스트, BAM은 그 압축 바이너리. `samtools`로 다룹니다.

## VCF (Variant Call Format)

레퍼런스 대비 **변이 목록**. 개인 유전체 분석의 핵심 형식.

```text
#CHROM  POS     ID         REF  ALT  QUAL  FILTER  INFO
1       11856378 rs1801133 G    A    99    PASS    ...
```

`bcftools` 로 필터·조회·병합합니다.

## 핵심 공개 데이터베이스

| DB | 용도 |
| --- | --- |
| dbSNP | 변이 식별자·기본 정보 |
| ClinVar | 변이의 임상적 의미(병원성) |
| gnomAD | 집단 내 대립유전자 빈도 |
| SNPedia | 커뮤니티 표현형 해석 |

:::tip[게놈 빌드 주의]
좌표는 게놈 빌드(GRCh37/hg19 vs GRCh38/hg38)에 따라 다릅니다. 데이터를 합칠 때 빌드를 반드시 확인하세요.
:::
