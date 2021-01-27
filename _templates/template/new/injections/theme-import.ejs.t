---
inject: true
to: src/services/ThemeProvider.ts
after: // Templates Import
# skip_if: <%=name%>
---
import * as <%=name%> from '../theme/components/templates/<%=name%>'