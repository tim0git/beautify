---
inject: true
to: src/services/ThemeProvider.ts
after: const molecules = {
skip_if: <%=name%>
---
<%=name%>,