---
title: Introduction
description: A developer who lost a family member to blood cancer, building a handbook to be ready next time. What HomeGenomics is and who it's for.
---

A few years ago, I lost a family member to blood cancer. I wanted to do something — anything — and searched everywhere for answers, but there was nothing I could actually do. Watching them have no choice but to rely on standard care alone was devastating. The sense that there had to be *something more*, and that I couldn't do any of it, stayed with me for a long time.

In time, I came across [the case of Sid Sijbrandij](/start/case-sid/). The co-founder of GitLab took his own rare cancer apart as data — the way a developer debugs a bug — designed his own treatments, and made the entire process public. In that case, I saw the outline of the "something I could do" that I had never managed to find back then.

Genomic analysis is hard, and turning it into something that actually helps treatment is, honestly, far more likely to fail than to succeed. It may, in the end, never amount to real help for anyone. But it still isn't something we can simply choose not to do. So we decided to study Sid's case together, write it up, and share it openly. HomeGenomics is that record. Korea has no shortage of founders and developers who are good at solving hard problems, and our goal is to help them grow a little more comfortable with this field.

This handbook isn't put together by me alone — it's compiled by a study group of people working in bioinformatics, pharmacy, and computer science. With backgrounds this different — and the territory itself largely uncharted — gaps and mistakes are possible.

## What HomeGenomics is

HomeGenomics is a handbook that helps **developers analyze their own and their family's genomic data** themselves. You don't need a biology degree — if you can write code, you can start.

## Who it's for

- People who received raw genetic test data and want to look beyond the summary report
- People who want to understand and prepare for conditions that run in the family, using data
- Programmers who are new to bioinformatics
- Anyone curious about how precision medicine actually plays out, through a real case

## What you'll learn

Since all of Sid's treatments started from sequencing, we start from the **most intuitive data first** and work outward.

1. **Reading expression (bulk RNA-seq)** — *how much* a gene is switched on. The most intuitive starting point (Sid's MDM2 case)
2. **Cell by cell (single-cell RNA-seq)** — which cells are doing what (the source of that 19%→89% T-cell number)
3. **Finding variants (WES / WGS)** — reading the mutations written into DNA
4. **Data → target → treatment** — finding what a signal means with public DBs, and using it at family scale

For each kind of data, we cover **what it means → how it's made → how to analyze it → what treatment it leads to**, with real examples from Sid's case.

## Before you start

This handbook assumes some comfort with the command line and Python. You'll want:

- A macOS / Linux terminal (WSL recommended on Windows)
- Python 3.11+ (`pandas`, later `scanpy`, etc.)
- Data to follow along with — your own/family raw test data, or the real patient data Sid published ([osteosarc.com](https://osteosarc.com), ~25TB)

Next: [Why analyze it yourself](/en/start/why/)

:::tip[Found something wrong?]
This is an open document written partly by non-experts, so errors are possible. If you spot something wrong, please send a **Pull Request** to the [GitHub repository](https://github.com/homegenomics/homegenomics.github.io). Even the smallest fix is welcome.
:::

:::caution[Not medical advice]
This is for education and learning. Consult a qualified professional for health decisions.
:::
