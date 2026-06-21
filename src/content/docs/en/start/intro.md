---
title: Introduction
description: What HomeGenomics is, who it's for, and how to start.
---

HomeGenomics is a handbook that helps **developers analyze their own and their family's genomic data** themselves. You don't need a biology degree — if you can write code, you can start.

## Who it's for

- People who received raw genetic test data and want to look beyond the summary report
- People who want to understand and prepare for conditions that run in the family, using data
- Programmers who are new to bioinformatics

## What you'll learn

1. **Data formats** — what VCF, FASTQ, and 23andMe/lab raw files each contain
2. **Toolchain** — standard tools like `bcftools`, `samtools`, and Python (`pysam`, `pandas`)
3. **Interpretation** — finding what a variant means using public DBs (ClinVar, gnomAD, dbSNP)
4. **Family-scale analysis** — tracking variants relatives share and using them for protection

## Before you start

This handbook assumes some comfort with the command line and Python. You'll want:

- A macOS / Linux terminal (WSL recommended on Windows)
- Python 3.11+
- Your own or a family member's raw test data (or follow along with public samples)

Next: [Why analyze it yourself](/en/start/why/)

:::caution[Not medical advice]
This is for education and learning. Consult a qualified professional for health decisions.
:::
