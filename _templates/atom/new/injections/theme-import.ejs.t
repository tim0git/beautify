---
inject: true
to: src/services/ThemeProvider.ts
after:// Atoms import
skip_if: <%=name%>
---
import * as _<%=name%> from '../theme/components/atoms/<%=name%>'