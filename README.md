# ArchitecturalBuildPlanner

ArchitecturalBuildPlanner is a browser-native building planning sandbox for rule-driven assemblies such as walls, floors, joists, roofs, and foundations.

The goal is to make building systems feel programmable without forcing the user to become a CAD operator first. Instead of drawing anonymous lines and surfaces, the app works with parameterized assemblies backed by JSON rules. A wall is not just a rectangle. It is framing, sheathing, drywall, fasteners, spacing, sheet logic, and eventually code-aware constraints.

## Current direction

The first demo focuses on one of the most useful slices of the product: a rule-driven wall planner.

It currently demonstrates:

- JSON-based rule packs for wall framing and finish assumptions
- Parameterized wall inputs such as length, height, stud spacing, drywall orientation, and plate count
- Live material takeoff calculations for studs, plates, drywall sheets, framing screws, and drywall screws
- A synchronized 2D wall elevation view
- A synchronized lightweight 3D view rendered in the browser
- Project export to JSON so the same design can later flow into richer engines and file formats

## Product vision

ArchitecturalBuildPlanner is intended to grow into a browser-based architectural and construction planning platform where:

- assemblies are defined declaratively in JSON
- a rules engine interprets those definitions into geometry, quantities, and validation results
- 2D plans, 3D views, section cuts, and exploded views all derive from the same semantic model
- common building templates and code packs ship with the app but remain fully overrideable
- open formats such as JSON, SVG, DXF, glTF, and IFC become first-class exports

## Repository layout

```text
/
|-- index.html
|-- styles.css
|-- app.js
|-- data/
|   `-- rules/
|       `-- wall-framing.default.json
`-- docs/
    |-- overview.md
    |-- architecture.md
    `-- roadmap.md
```

## GitHub Pages

This repo is intentionally scaffolded as a static site so it can be hosted directly from GitHub Pages.

Recommended Pages settings:

- Branch: `main`
- Folder: `/ (root)`

Once Pages is enabled, the demo entrypoint is `index.html`.

## Near-term roadmap

1. Harden the wall model so openings, corner strategies, jack/king studs, and waste factors are supported.
2. Generalize the engine so floors, joists, rafters, and foundations can use the same rule-driven pipeline.
3. Add a validation layer that can run rule packs representing code assumptions and project constraints.
4. Add richer exports such as SVG drawings, DXF linework, and glTF scenes.

## Long-term shape

This project should become a semantic building authoring tool rather than just a visualization toy. The browser UI is the shell. The rules JSON and the interpreter are the heart of the system.
