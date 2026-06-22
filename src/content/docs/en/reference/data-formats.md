---
title: Data Formats Reference
description: A quick reference to the core file formats in genomic and transcriptomic analysis — the RNA (expression) track and the DNA (variant) track.
---

A summary of the file formats you'll meet most often in personal genomics and transcriptomics. Following [Sid's case](/start/case-sid/), we start from **expression (RNA)** and move toward **variants (DNA)**. The formats are grouped into those two tracks.

## Shared — the sequencer's raw output

### FASTQ

The **raw reads** a sequencer produces, with quality scores. Both RNA-seq and DNA sequencing start here. Four lines per read.

```text
@SEQ_ID
GATTTGGGGTTCAAAGCAG
+
!''*((((***+))%%%++
```

### BAM / SAM

Reads **aligned** to a reference (genome or transcriptome). SAM is text, BAM is its compressed binary form. Handled with `samtools`.

---

## RNA track — expression

### Gene expression matrix

The final output of bulk RNA-seq. **Rows = genes, columns = samples**, values are expression.

```text
gene      tumor_01  tumor_02  normal_01
MDM2      842.1     93.4      88.0
TP53      210.5     198.2     205.7
```

| Unit | Meaning |
| --- | --- |
| counts | Number of reads aligned to a gene (raw) |
| CPM / TPM / FPKM | Normalized by library size and gene length (for comparing across samples) |

> Quantification tools: `featureCounts`, `Salmon`, `kallisto`. Alignment: `STAR`, `HISAT2`.

### Single-cell formats

Because each cell is read separately, the matrix is **huge and sparse** — usually *cells × genes*.

| Format | Contents |
| --- | --- |
| `.h5ad` (AnnData) | The Python (`scanpy`) standard. Matrix plus cell/gene metadata in one file |
| `.rds` (Seurat) | The standard object in the R ecosystem |
| 10x MatrixMarket | A set of three: `matrix.mtx` + `barcodes.tsv` + `features.tsv` |

> Tools: `scanpy` (Python), `Seurat` (R). Sid's ①③ treatments and the 19%→89% T-cell analysis came from this data.

---

## DNA track — variants

### VCF (Variant Call Format)

A **list of variants** relative to a reference — the central format for whole-exome (WES) and whole-genome (WGS) analysis.

```text
#CHROM  POS      ID         REF  ALT  QUAL  FILTER  INFO
1       11856378 rs1801133  G    A    99    PASS    ...
```

Filter, query, and merge with `bcftools`.

### SNP-chip raw (23andMe / lab txt)

Tab-separated text. Genotypes for the hundreds of thousands of variants a SNP chip measures — the most common raw data a testing lab returns.

| Column | Meaning |
| --- | --- |
| rsid | dbSNP variant identifier (`rs...`) |
| chromosome | Chromosome |
| position | Coordinate (relative to a genome build, usually GRCh37) |
| genotype | The two alleles (e.g. `AA`, `AG`) |

---

## Key public databases

| DB | Use |
| --- | --- |
| GTEx | **Per-tissue normal expression reference** (the baseline for "high/low" expression) |
| dbSNP | Variant identifiers and basic info |
| ClinVar | Clinical significance (pathogenicity) |
| gnomAD | Allele frequency in populations |
| SNPedia | Community phenotype interpretation |

:::tip[Mind the genome build]
Coordinates differ by genome build (GRCh37/hg19 vs GRCh38/hg38). Always check the build before combining data.
:::
