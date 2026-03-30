# Overview

ArchitecturalBuildPlanner is a rule-driven building design engine that runs entirely in the browser.

The system is built around three core ideas:

1. Assemblies over geometry
   A wall is not a mesh. It is a composition of studs, plates, sheets, fasteners, and finishes.

2. Rules over hardcoded logic
   Construction behavior is defined through JSON rule packs that describe spacing, sizing, attachment patterns, and layout strategies.

3. One model, many projections
   2D plans, 3D views, sections, and material takeoffs all derive from the same semantic model.

## Problem

Most lightweight tools are either:

- geometry-first (easy to draw, hard to reason about materials)
- BIM-heavy (powerful but inaccessible and slow for small projects)

We want something in between that remains expressive but approachable.

## Solution

A browser-based engine that:

- interprets rule JSON into a semantic model
- generates geometry projections for visualization
- produces deterministic material takeoffs
- can later evaluate rule packs for validation and compliance

## Initial focus

The first milestone is a wall system that can:

- calculate framing layouts based on spacing
- calculate drywall coverage and fastener counts
- visualize both 2D and 3D representations

This establishes the pattern that all other assemblies will follow.
