---
title: 데이터 형식 레퍼런스
description: 유전체·전사체 분석에서 마주치는 핵심 파일 형식 빠른 참조 — RNA(발현) 트랙과 DNA(변이) 트랙.
---

개인 유전체·전사체 분석에서 자주 만나는 파일 형식 요약. [Sid의 사례](/start/case-sid/)를 따라 우리는 **발현량(RNA)** 부터 시작해 **변이(DNA)** 로 나아갑니다. 형식도 그 두 트랙으로 묶어 정리합니다.

## 공통 — 시퀀서의 원시 출력

### FASTQ

시퀀서가 내놓는 **원시 read** 와 품질 점수. RNA-seq·DNA 시퀀싱 모두 여기서 출발합니다. 4줄이 한 read.

```text
@SEQ_ID
GATTTGGGGTTCAAAGCAG
+
!''*((((***+))%%%++
```

### BAM / SAM

레퍼런스(게놈 또는 전사체)에 **정렬된 read**. SAM은 텍스트, BAM은 그 압축 바이너리. `samtools`로 다룹니다.

---

## RNA 트랙 — 발현량

### 유전자 발현 행렬 (expression matrix)

벌크 RNA-seq의 최종 산출물. **행=유전자, 열=샘플**, 값은 발현량.

```text
gene      tumor_01  tumor_02  normal_01
MDM2      842.1     93.4      88.0
TP53      210.5     198.2     205.7
```

| 단위 | 의미 |
| --- | --- |
| counts | 유전자에 정렬된 read 수 (원시) |
| CPM / TPM / FPKM | 라이브러리 크기·유전자 길이로 정규화한 값 (샘플 간 비교용) |

> 정량 도구: `featureCounts`, `Salmon`, `kallisto`. 정렬은 `STAR`, `HISAT2`.

### 싱글셀 (single-cell) 형식

세포 하나하나를 따로 읽으므로 **행렬이 거대하고 희소(sparse)** 합니다. 보통 *세포 × 유전자*.

| 형식 | 내용 |
| --- | --- |
| `.h5ad` (AnnData) | Python(`scanpy`) 표준. 행렬 + 세포/유전자 메타데이터를 한 파일에 |
| `.rds` (Seurat) | R 생태계 표준 객체 |
| 10x MatrixMarket | `matrix.mtx` + `barcodes.tsv` + `features.tsv` 3종 세트 |

> 도구: `scanpy`(Python), `Seurat`(R). Sid의 ①③ 치료와 T세포 19%→89% 분석이 이 데이터에서 나왔습니다.

---

## DNA 트랙 — 변이

### VCF (Variant Call Format)

레퍼런스 대비 **변이 목록**. 전장엑솜(WES)·전장유전체(WGS) 분석의 핵심 형식.

```text
#CHROM  POS      ID         REF  ALT  QUAL  FILTER  INFO
1       11856378 rs1801133  G    A    99    PASS    ...
```

`bcftools` 로 필터·조회·병합합니다.

### SNP 칩 raw (23andMe / 검사기관 txt)

탭 구분 텍스트. SNP 칩이 측정한 수십만 개 변이의 genotype. 검사기관이 돌려주는 가장 흔한 raw 데이터.

| 컬럼 | 의미 |
| --- | --- |
| rsid | dbSNP 변이 식별자 (`rs...`) |
| chromosome | 염색체 |
| position | 좌표 (특정 게놈 빌드 기준, 보통 GRCh37) |
| genotype | 두 대립유전자 (예: `AA`, `AG`) |

---

## 핵심 공개 데이터베이스

| DB | 용도 |
| --- | --- |
| GTEx | **정상 조직별 발현량 레퍼런스** (발현이 "높다/낮다"의 기준) |
| dbSNP | 변이 식별자·기본 정보 |
| ClinVar | 변이의 임상적 의미(병원성) |
| gnomAD | 집단 내 대립유전자 빈도 |
| SNPedia | 커뮤니티 표현형 해석 |

:::tip[게놈 빌드 주의]
좌표는 게놈 빌드(GRCh37/hg19 vs GRCh38/hg38)에 따라 다릅니다. 데이터를 합칠 때 빌드를 반드시 확인하세요.
:::
