import Scrollable from './scrollable';
import LazyScrollable from './lazy-scrollable';

export type {
  ClassNamesType,
  ClassNameStringOrFnType,
  ClassNameStringOrFnReturnType,
  StylesType,
  StylesOrFnType,
  ScrollableStateType,
  ScrollablePayloadType,
} from './types';
export type { ScrollablePropsType } from './scrollable';
export type { LazyScrollablePropsType } from './lazy-scrollable';

export {
  Scrollable,
  LazyScrollable,
}

export default Object.assign(Scrollable, {
  Lazy: LazyScrollable,
});