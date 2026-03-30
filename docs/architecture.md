# Architecture

## High-level

The system is composed of three primary layers:

### 1. Domain Model

Pure JavaScript objects representing assemblies.

Examples:
- WallAssembly
- Stud
- Plate
- DrywallSheet
- Fastener

These objects contain no rendering logic.

### 2. Rule Engine

Consumes JSON rule packs and produces a resolved model.

Responsibilities:
- apply spacing rules
- calculate counts and quantities
- determine layout strategies
- eventually validate constraints

### 3. Projection Layer

Transforms the semantic model into views:

- 2D SVG drawings
- 3D scene (Three.js)
- tabular material schedules

## Data Flow

User Input -> Rule Selection -> Domain Model -> Rule Engine -> Resolved Model -> Projections

## Rule Packs

Rule packs are JSON files that describe construction behavior.

Example fields:

- studSpacingInches
- plateCount
- drywallSheetWidth
- drywallSheetHeight
- screwsPerStud
- screwsPerSheet

These packs are fully overrideable and versionable.

## Extensibility

New assemblies follow the same pattern:

- define schema
- define rule pack
- implement interpreter
- add projection support

## Future

- Web Workers for heavy calculations
- WASM geometry kernel for precision operations
- IFC export pipeline
- Validation engine for code packs
