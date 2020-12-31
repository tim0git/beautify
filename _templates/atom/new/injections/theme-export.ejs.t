---
inject: true
to: src/services/ThemeProvider.ts
after: const atoms = {
skip_if: <%=name%>
---
<%=name%>,