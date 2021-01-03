---
inject: true
to: src/services/ThemeProvider.ts
after: const screens = {
skip_if: <%=name%>
---
<%=name%>,