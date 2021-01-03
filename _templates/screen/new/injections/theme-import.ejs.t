---
inject: true
to: src/services/ThemeProvider.ts
after: // Screens Import
# skip_if: <%=name%>
---
import * as <%=name%> from '../theme/components/screens/<%=name%>'