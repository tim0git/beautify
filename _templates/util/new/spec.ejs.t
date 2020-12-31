---
to: src/utils/<%=name%>/<%=name%>.spec.js
---
import { <%=name%> } from './<%=name%>.util'

describe('<%=name%>', () => {
  it('Should...', () => {
    expect(<%=name%>(4)).toBe(4)
  })
})