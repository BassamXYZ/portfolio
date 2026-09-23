---
title: "CNN From Scratch, Using Only NumPy"
url: "cnn-from-zero"
summary: "A convolutional neural network built from first principles -- forward pass, backprop, and all -- with no deep learning framework."
date: "2025-11-01T12:00:00+03:00"
featured: true
order: 3
role: "Personal project"
tags: ["Deep learning", "Mathematics"]
stack: ["Python", "NumPy"]
github: "https://github.com/BassamXYZ/cnn-from-zero"
image:
  url: "/images/cnn-from-zero.webp"
  alt: "Diagram of a convolutional neural network architecture"
---

## Problem

It's easy to call `model.fit()` in PyTorch without ever confronting what a
convolution, a backward pass, or a weight update actually are. Before relying
on frameworks for research work, I wanted to be certain I understood the
mechanics well enough to debug them when something goes wrong -- so I built a
CNN with nothing but NumPy: convolution and pooling layers, backpropagation
through them, and gradient descent, all written by hand.

## Approach

- Implemented convolution (with stride and padding), max pooling, ReLU, and a
  fully connected output layer as separate classes, each with its own manual
  forward and backward pass.
- Derived and implemented backpropagation through the convolution operation
  itself, which is the part most tutorials skip -- it required working out the
  gradient with respect to both the input and the kernel as a correlation
  operation.
- Trained the network on `[name the dataset, e.g. MNIST]` to validate that the
  from-scratch implementation actually learns, comparing training curves
  against an equivalent PyTorch model as a sanity check.

## Results

<!-- Replace with your actual numbers. -->

- Test accuracy on `[dataset]`: `[add %]`
- Training time per epoch (pure NumPy vs. PyTorch reference): `[add comparison]`

## What I'd improve next

- Vectorize the convolution backward pass further -- the current version is
  correct but not fast, which is an interesting constraint in itself.
- Add batch normalization to see the from-scratch effect on training
  stability.
