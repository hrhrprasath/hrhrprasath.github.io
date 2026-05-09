---
layout: post.ejs
title: Oxidized-GPT
date: 2024-03-15
tags: project
---
# [Oxidized-GPT: Zero-Dependency Rust Implementation](https://github.com/hrhrprasath/Oxidized-GPT)

A compact, educational GPT implementation written in Rust using only the standard library. This project is a Rust port of [microGPT](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95) by Andrej Karpathy, demonstrating a full stack: custom RNG, a minimal autodiff engine, a transformer forward+backward pass, Adam optimizer, training loop, and CPU inference — all without external crates.

## Credits

This implementation is based on Andrej Karpathy's [microGPT blog post](https://karpathy.github.io/2026/02/12/microgpt/), which presents a minimal, educational GPT implementation in Python. Oxidized-GPT faithfully translates the core concepts to Rust while maintaining zero external dependencies (standard library only).

This workspace uses the canonical Rust layout (`Cargo.toml` + `src/main.rs`).

## Key points

- Zero external dependencies (std only)
- Autodiff graph with basic ops (Add, Mul, Pow, Exp, Log, ReLU)
- Higher-level operations built from primitives (matmul, softmax, cross-entropy)
- Transformer with RMSNorm, multi-head attention, and residuals
- Parameter tracking to extract gradients and ADAM optimizer
- CPU-only inference with autoregressive generation
