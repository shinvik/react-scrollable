import type { CSSProperties } from 'react';
import type { StylesOrFnType } from '../types';

function makeStyle(fnOrString: StylesOrFnType | undefined): CSSProperties | undefined;
function makeStyle<Payload>(fnOrString: StylesOrFnType<Payload> | undefined, payload: Payload): CSSProperties | undefined;
function makeStyle<Payload>(
  fnOrString: StylesOrFnType<Payload> | undefined,
  payload?: Payload,
) {
  return typeof fnOrString === 'function'
    ? fnOrString(payload!)
    : fnOrString
}

export default makeStyle;
