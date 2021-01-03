---
inject: true
to: src/utils/index.ts
after: // injectcode
skip_if: <%=name%>
---
export * from './<%=name%>';