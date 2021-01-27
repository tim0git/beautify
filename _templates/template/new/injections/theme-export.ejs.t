---
inject: true
to: src/services/ThemeProvider.ts
after: const templates = {
skip_if: <%=name%>
---
<%=name%>,