---
inject: true
to: src/services/ThemeProvider.ts
after: const organisms = {
skip_if: <%=name%>
---
<%=name%>,