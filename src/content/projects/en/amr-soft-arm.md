---
title: "Autonomous Mobile Robot with a Soft Manipulator Arm"
url: "amr-soft-arm"
summary: "A mobile robot that localizes itself with ArUco markers and manipulates objects with a compliant soft arm, built on ROS2."
date: "2026-06-01T12:00:00+03:00"
featured: true
order: 1
role: "Graduation project"
tags: ["Robotics", "ROS2", "Localization", "Soft robotics"]
stack: ["ROS2", "Gazebo", "Python", "OpenCV", "ArUco", "C++"]
github: "https://github.com/BassamXYZ/amr-soft-arm"
image:
  url: "/images/amr-soft-arm-placeholder.svg"
  alt: "AMR with a soft manipulator arm navigating toward a marked object"
---

## Problem

Rigid grippers are precise but punishing: a small localization error becomes a
collision or a dropped object, especially on a mobile base that isn't perfectly
still when it arrives. This graduation project set out to combine a wheeled AMR
with a **soft, compliant arm**, so that positioning error is absorbed by the arm
rather than by the object -- while still needing accurate enough localization to
know where to reach.

## Approach

The system is split into three ROS2 subsystems that talk over standard
topics/actions rather than one monolithic node:

- **Perception & localization** -- an onboard camera detects ArUco markers on the
  target and the docking station. Marker pose estimation (OpenCV `solvePnP`)
  feeds a filter that fuses vision with odometry, so the robot has a usable pose
  estimate even when a marker briefly leaves the frame.
- **Navigation** -- the AMR uses ROS2's navigation stack (costmaps + a local
  planner) to drive from its current pose to a pose offset from the target
  marker, then hands off to a short vision-servoed final approach for the last
  centimeters, where dead-reckoning error matters most.
- **Manipulation** -- the soft arm's compliance is what makes the last step
  forgiving: instead of solving for a millimeter-perfect end pose, the
  controller only needs to get "close enough," and the arm's own flexibility
  handles the rest during contact.

<!-- Add an architecture diagram of the ROS2 node/topic graph here. -->

## Results

<!-- Replace with your actual measured numbers before publishing. -->

- Localization error at the final approach: `[add measured cm error]`
- Successful grasp/placement rate over `[N]` trials: `[add %]`
- End-to-end task time (dock to placement): `[add seconds]`

## What I'd improve next

- Replace the marker-based localization with a learned pose estimator so the
  robot isn't dependent on fiducials in the environment.
- Add closed-loop force feedback from the soft arm instead of relying purely on
  its passive compliance.

## Media

<!--
  Add a short clip or GIF here (Gazebo run + a real hardware run side by side
  works best). This is the single highest-impact addition to this page.
-->
