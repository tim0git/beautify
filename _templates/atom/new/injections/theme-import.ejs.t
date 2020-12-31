---
inject: true
to: src/services/ThemeProvider.ts
after: // Atoms Import
# skip_if: <%=name%>
---
import * as <%=name%> from '../theme/components/atoms/<%=name%>'