import { helper } from '@ember/component/helper';

export function eq(params/*, hash*/) {
  const a = params[0]
  const b = params[1]
  const aKeys = Object.getOwnPropertyNames(a)
  const bKeys = Object.getOwnPropertyNames(b)
  if (aKeys.length !== bKeys.length) {
    return
  }
  return aKeys.every(key => a[key] === b[key])
}

export default helper(eq);
