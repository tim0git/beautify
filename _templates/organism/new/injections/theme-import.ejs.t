---
inject: true
to: src/services/ThemeProvider.ts
after: // Organisms Import
# skip_if: <%=name%>
---
import * as <%=name%> from '../theme/components/organisms/<%=name%>'