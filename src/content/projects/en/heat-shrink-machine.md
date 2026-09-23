---
title: "Heat Shrink Packaging Machine"
url: "heat-shrink-machine"
summary: "PLC-controlled automation for a heat shrink wrapping machine, from sensor wiring to the control logic."
date: "2024-06-01T12:00:00+03:00"
featured: false
order: 10
role: "Mechatronics project"
tags: ["Industrial automation", "PLC"]
stack: ["PLC", "Ladder logic", "Sensors & actuators"]
demo: "https://docs.google.com/document/d/1jDxXjj-PbdqNyx0p_79KL1HUkZ_bMn-X/edit?usp=sharing&ouid=114402589686738479550&rtpof=true&sd=true"
image:
  url: "/images/heat-shrink-machine.webp"
  alt: "Heat shrink packaging machine"
---

## Problem

Manual heat-shrink wrapping is slow and inconsistent: cycle timing that
depends on an operator's judgment produces uneven seals and wasted film.
The goal was to automate the wrap-seal-shrink cycle with a PLC so timing and
sequencing are repeatable regardless of who's running the line.

## Approach

- Mapped the mechanical cycle (feed, seal, shrink, eject) to a PLC ladder
  logic sequence, with sensor interlocks so a stage can't start until the
  previous one has physically completed.
- Selected and wired the sensors and actuators needed to make each stage
  detectable rather than time-based where possible, reducing sensitivity to
  material variation.

Full write-up and diagrams are in the linked document below.

## What I'd improve next

- Add a simple HMI for cycle-time and fault monitoring instead of relying on
  PLC status lights.
