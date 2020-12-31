---
inject: true
to: src/utils/index.js
after: // injectcode
skip_if: <%=name%>
---
export * from './<%=name%>'