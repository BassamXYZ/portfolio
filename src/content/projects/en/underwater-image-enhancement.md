---
title: "Underwater Image Enhancement"
url: "underwater-image-enhancement"
summary: "A from-scratch implementation of a research paper for restoring color and contrast in underwater images."
date: "2026-04-01T12:00:00+03:00"
featured: true
order: 2
role: "Research paper implementation"
tags: ["Computer vision", "Deep learning", "Image restoration"]
stack: ["Python", "PyTorch", "OpenCV", "NumPy"]
github: "https://github.com/BassamXYZ/md-net-underwater-image-enhancement"
paper: ""
image:
  url: "/images/md-net-underwater-image-enhancement.webp"
  alt: "Underwater image before and after enhancement, side by side"
metrics:
  - label: "PSNR"
    value: "[add dB]"
  - label: "SSIM"
    value: "[add score]"
  - label: "UIQM"
    value: "[add score]"
---

## Problem

Light attenuates unevenly underwater: red wavelengths disappear first, so raw
footage from an underwater vehicle or diver camera comes out blue-green,
low-contrast, and hazy. That's a real problem for any perception system --
object detection and SLAM trained on normal images both degrade badly on
untouched underwater frames. The goal here was to reproduce a published
underwater image enhancement network from its paper, rather than use an
off-the-shelf tool, to understand exactly why it works.

<!--
  Name the paper here, e.g.:
  Implementation of "[Paper title]" ([venue, year]).
-->

## Approach

- **Dataset** -- trained and evaluated on `[name the dataset, e.g. UIEB / EUVP]`,
  with paired raw/reference images.
- **Architecture** -- reimplemented the paper's network in PyTorch from the
  written description and equations rather than the authors' released code
  (if any), which is where most of the debugging time went: matching loss
  terms, normalization choices, and training schedule closely enough to
  reproduce their reported numbers.
- **Evaluation** -- compared enhanced outputs against ground truth using the
  same metrics as the paper (PSNR, SSIM) plus a no-reference underwater
  quality metric (UIQM), so the results are directly comparable.

## Results

My reproduction versus the paper's reported numbers:

| Metric | Paper | My implementation |
| --- | --- | --- |
| PSNR | `[paper value]` | `[your value]` |
| SSIM | `[paper value]` | `[your value]` |
| UIQM | `[paper value]` | `[your value]` |

<!-- A before/after slider or grid of sample outputs belongs right here. -->

## What I'd improve next

- Test generalization on footage from a different camera/water type than the
  training data was collected in.
- Measure the effect of enhancement on a downstream task (e.g. object
  detection mAP on enhanced vs. raw frames) rather than image quality alone --
  that's the number that actually matters for a robot.
