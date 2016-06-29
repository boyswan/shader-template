import { dom } from 'helpers/utils'

export const mouseMoveX$ = dom(document, 'mousemove').map(({ clientX }) => clientX)
export const mouseMoveY$ = dom(document, 'mousemove').map(({ clientY }) => clientY)
export const mouseDown$ = dom(document, 'mousedown').map(x => 1)
export const mouseUp$ = dom(document, 'mouseup').map(x => 0)
