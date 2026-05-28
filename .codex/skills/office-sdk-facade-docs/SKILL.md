---
name: office-sdk-facade-docs
description: Extend OfficeSDK root facade support and sync handwritten suite API docs in feat-headerbars. Use when Codex needs to add missing facade modules or methods, replace unknown with real types from iframe-sdk-signature definitions, keep sdk.getEditor() backward-compatibility in docs, or update docs-jsapi/suite and Apifox-source markdown for document, spread-sheet, and presentation.
---

# Office SDK Facade Docs

## Overview

Use this skill when working on `/Users/admin/workspace/project/feat-headerbars` tasks that span both:

- root facade implementation under `src/OfficeSDK*.ts`
- handwritten integration docs under `docs-jsapi/suite/*.md` and `doc/editor-facade-api.md`

Treat facade implementation and docs as one change. Do not update only one side unless the user explicitly asks for it.

## Core Files

- `src/OfficeSDK.facade.types.ts`: declare public root facade types first
- `src/OfficeSDK.facade.ts`: build and mount actual root facade modules
- `src/OfficeSDK.ts`: expose facade properties on `OfficeSDK`
- `src/editorFacade.contract.ts`: keep assertion types aligned with public facade
- `doc/editor-facade-api.md`: keep high-level facade overview aligned with implementation
- `docs-jsapi/suite/document.md`
- `docs-jsapi/suite/spread-sheet.md`
- `docs-jsapi/suite/presentation.md`

For legacy signatures, inspect:

- `src/types/Document.ts`
- `src/types/Spreadsheet.ts`
- `src/types/Presentation.ts`

## Workflow

### 1. Confirm real receiver support

Before adding a facade method, confirm whether the iframe side already accepts the corresponding method path.

- Search `src/OfficeSDK.facade.ts`, `src/editorFacade.contract.ts`, `doc/editor-facade-api.md`, and legacy `src/types/*.ts`
- If the old editor method already exists, prefer mapping the new facade to that real receiver path
- Do not document a method as supported if the iframe receiver does not actually handle it

Examples:

- docs legacy `showHistory()` can map to `history.show`
- docs legacy `showRevision()` can map to a document-specific `showRevision` receiver path if that is the real accepted call
- presentation `startRemoteLive()` may be exposed in facade type space but still unsupported by iframe receiver; keep it in limitations only

### 2. Add or fix public types first

Edit `src/OfficeSDK.facade.types.ts` before touching implementation.

- Add new facade interfaces when old methods have no root facade yet
- Replace `unknown` with the real parameter and return types from the legacy editor definitions
- Reuse project types instead of inventing looser placeholders
- If a method has suite-specific return differences, model the public type honestly

Common pattern:

```ts
export interface DiscussionFacade {
  show: () => Promise<void>
  hide: () => Promise<void>
}
```

Also update `OfficeSDKRootFacadeState` so the new module can be mounted.

### 3. Mount facade behavior

Edit `src/OfficeSDK.facade.ts`.

- Reuse existing helper patterns like `host.invokeEditorFacade(...)`
- Prefer small, explicit facade objects for methods that need custom receiver paths
- Use `host.createEditorFacadeModule(...)` when the module is mostly method-path passthrough
- If a suite needs a different receiver path than another suite, create a suite-specific facade object instead of over-generalizing

Examples:

- use a shared `presentationFacade` for sheet/presentation if receiver paths match
- use a `docsPresentationFacade` override when docs `quit` must call `endDemonstration`
- extend `DocsTOCsFacade` with custom `show()` / `hide()` if legacy docs methods still exist alongside structured TOC APIs

### 4. Expose properties on OfficeSDK

Edit `src/OfficeSDK.ts`.

- Add public property declarations for new facade modules
- Import the facade types you added
- Keep comments short and aligned with existing style
- Do not remove deprecated editor instance properties unless explicitly requested

### 5. Update contract assertions

Edit `src/editorFacade.contract.ts`.

- Add or adjust assertion coverage for the new public methods
- If return types differ from earlier assumptions, update the assertion instead of lying in the public types

This file is the fastest way to catch drift between `OfficeSDK.ts` and `OfficeSDK.facade.types.ts`.

### 6. Update handwritten docs

Edit only handwritten docs for this workflow:

- `docs-jsapi/suite/document.md`
- `docs-jsapi/suite/spread-sheet.md`
- `docs-jsapi/suite/presentation.md`
- optionally `doc/editor-facade-api.md` when the top-level facade matrix changed

Do not rerun typedoc for this workflow.

## Documentation Rules

### Keep both old and new entry styles

Do not replace old APIs outright in suite docs.

Each suite doc should preserve:

- old `sdk.getEditor()` compatibility mapping
- new root facade usage

Recommended structure:

- `方法列表`
- `facade 调用方式`
- `新旧兼容`
- `旧方法兼容`
- `新增 facade 方法`
- `类型定义`
- `注意事项`

### Preserve old methods, add new facade mappings

When an old method now has a root facade equivalent:

- keep the old method in `旧方法兼容`
- point it to the new root facade

Only say “not yet supported” when the receiver truly does not support it.

### Keep style aligned with existing suite docs

- Use Markdown that pastes cleanly into Apifox
- Keep examples on `const sdk = await connect(options)`
- Use optional chaining on suite-specific facade modules
- Put `PC only` and `co-1.8+` directly in method-list descriptions for new additions
- Keep architecture and branch background out of suite pages

### Define types used in docs

If a method signature introduces custom types in the docs:

- add a `相关类型` list under the method
- add anchorable type sections under `## 类型定义`
- make sure every linked type actually exists in the file

### Keep restrictions honest

At the bottom `注意事项`:

- list unsupported methods explicitly
- do not claim support for facade methods that only exist in type space

## Validation

Always run:

```bash
npx tsc -p /Users/admin/workspace/project/feat-headerbars/tsconfig.json --noEmit --pretty false
```

Then run focused grep checks:

```bash
rg -n "PC only|co-1.8\\+|旧方法兼容|相关类型|## 注意事项" docs-jsapi/suite/*.md
```

Use the checklist in `references/checklist.md` when the change is broader than one method.

## Guardrails

- Do not leave `unknown` in new facade-facing docs or types when a real project type exists
- Do not revert user changes in unrelated files
- Do not document unsupported iframe methods as supported
- Do not remove old `sdk.getEditor()` docs; add migration mapping instead
- Do not update generated `docs/` typedoc output as part of this skill unless the user explicitly asks
