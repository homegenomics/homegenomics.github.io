---
title: 첫 분석 — raw 데이터 열어보기
description: 23andMe raw 파일을 받아 변이 하나를 직접 조회하는 가장 짧은 실습.
---

가장 작은 실습부터. 검사기관 raw 데이터에서 변이 하나를 골라 의미를 찾아봅니다.

## 1. raw 데이터 내려받기

23andMe·국내 검사기관 대부분은 raw 데이터 다운로드를 제공합니다. 보통 다음과 같은 탭 구분 텍스트입니다:

```text
# rsid    chromosome  position   genotype
rs4988235 2           136608646  AA
rs1801133 1           11856378   GG
```

각 줄은 SNP 하나입니다: `rsid`(변이 식별자), 위치, 그리고 당신의 `genotype`(두 대립유전자).

## 2. 한 변이 조회하기

`rs4988235`는 유당 분해 지속성(lactase persistence)과 관련된 잘 알려진 변이입니다. Python으로 본인 genotype을 뽑아봅시다:

```python
import pandas as pd

df = pd.read_csv(
    "genome.txt", sep="\t", comment="#",
    names=["rsid", "chrom", "pos", "genotype"],
)

row = df[df.rsid == "rs4988235"]
print(row)
```

## 3. 의미 찾기

`rsid`를 공개 DB에서 조회해 의미를 확인합니다:

- **dbSNP** — <https://www.ncbi.nlm.nih.gov/snp/rs4988235>
- **ClinVar** — 임상적 의미(병원성 여부)
- **SNPedia** — 커뮤니티가 정리한 표현형 해석

예를 들어 `rs4988235`에서 `AA`는 유당 분해 지속성(성인기에도 우유 소화 가능)과, `GG`는 유당 불내성 경향과 연관됩니다.

## 다음 단계

- 여러 변이를 한 번에 처리하는 파이프라인 만들기
- VCF/WGS 등 더 풍부한 데이터 형식 다루기
- 가족 구성원 데이터를 비교해 공유 변이 찾기

:::note
이 실습은 SNP 칩 데이터를 가정합니다. 전장유전체(WGS)는 VCF 형식과 `bcftools` 같은 도구가 필요합니다 — 레퍼런스에서 다룹니다.
:::
