# Facade + Docs Checklist

## Implementation

- Confirm real receiver path or legacy editor method exists
- Add public type to `src/OfficeSDK.facade.types.ts`
- Add module to `OfficeSDKRootFacadeState`
- Mount behavior in `src/OfficeSDK.facade.ts`
- Expose property in `src/OfficeSDK.ts`
- Update `src/editorFacade.contract.ts`

## Document sync

- Update suite method list
- Keep `facade 调用方式`
- Keep `新旧兼容`
- Keep `旧方法兼容`
- Add new facade method sections
- Add `相关类型` links
- Add or update bottom `注意事项`

## Compatibility wording

- If old and new both work: keep old entry and point to new facade
- If root facade exists but receiver path differs by suite: document suite-specific behavior
- If receiver support is missing: mention only in limitations, not in supported method body

## Required checks

- `npx tsc -p /Users/admin/workspace/project/feat-headerbars/tsconfig.json --noEmit --pretty false`
- `rg -n "未新增对应 facade|继续使用旧方法" docs-jsapi/suite/*.md`
- `rg -n "PC only|co-1.8\\+|相关类型|## 注意事项" docs-jsapi/suite/*.md`
