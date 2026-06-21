---
title: First Analysis — Opening Raw Data
description: The shortest hands-on — take a 23andMe raw file and look up a single variant.
---

Start small. Pick one variant from your lab's raw data and find out what it means.

## 1. Download your raw data

Most labs (23andMe and others) let you download raw data. It's usually tab-separated text:

```text
# rsid    chromosome  position   genotype
rs4988235 2           136608646  AA
rs1801133 1           11856378   GG
```

Each line is one SNP: an `rsid` (variant identifier), its position, and your `genotype` (two alleles).

## 2. Look up one variant

`rs4988235` is a well-known variant linked to lactase persistence. Pull your genotype with Python:

```python
import pandas as pd

df = pd.read_csv(
    "genome.txt", sep="\t", comment="#",
    names=["rsid", "chrom", "pos", "genotype"],
)

row = df[df.rsid == "rs4988235"]
print(row)
```

## 3. Find its meaning

Look the `rsid` up in public databases:

- **dbSNP** — <https://www.ncbi.nlm.nih.gov/snp/rs4988235>
- **ClinVar** — clinical significance (pathogenic or not)
- **SNPedia** — community-curated phenotype notes

For `rs4988235`, `AA` is associated with lactase persistence (digesting milk into adulthood), while `GG` leans toward lactose intolerance.

## Next steps

- Build a pipeline that processes many variants at once
- Handle richer formats like VCF / whole-genome data
- Compare family members' data to find shared variants

:::note
This walkthrough assumes SNP-chip data. Whole-genome data (WGS) uses the VCF format and tools like `bcftools` — covered in the reference.
:::
