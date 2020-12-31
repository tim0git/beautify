---
inject: true
to: src/services/ThemeProvider.ts
after: // Molecules Import
# skip_if: <%=name%>
---
import * as <%=name%> from '../theme/components/molecules/<%=name%>'