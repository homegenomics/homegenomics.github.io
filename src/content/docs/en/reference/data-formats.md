---
title: Data Formats Reference
description: A quick reference to the core file formats in genomic analysis.
---

A summary of the file formats you'll meet most often in personal genomics.

## SNP-chip raw (23andMe / lab txt)

Tab-separated text. Genotypes for the hundreds of thousands of variants a SNP chip measures.

| Column | Meaning |
| --- | --- |
| rsid | dbSNP variant identifier (`rs...`) |
| chromosome | Chromosome |
| position | Coordinate (relative to a genome build, usually GRCh37) |
| genotype | The two alleles (e.g. `AA`, `AG`) |

## FASTQ

The **raw reads** a sequencer produces, with quality scores. Four lines per read.

```text
@SEQ_ID
GATTTGGGGTTCAAAGCAG
+
!''*((((***+))%%%++
```

## BAM / SAM

Reads **aligned** to a reference genome. SAM is text, BAM is its compressed binary form. Handled with `samtools`.

## VCF (Variant Call Format)

A **list of variants** relative to a reference — the central format in personal genomics.

```text
#CHROM  POS     ID         REF  ALT  QUAL  FILTER  INFO
1       11856378 rs1801133 G    A    99    PASS    ...
```

Filter, query, and merge with `bcftools`.

## Key public databases

| DB | Use |
| --- | --- |
| dbSNP | Variant identifiers and basic info |
| ClinVar | Clinical significance (pathogenicity) |
| gnomAD | Allele frequency in populations |
| SNPedia | Community phenotype interpretation |

:::tip[Mind the genome build]
Coordinates differ by genome build (GRCh37/hg19 vs GRCh38/hg38). Always check the build before combining data.
:::
