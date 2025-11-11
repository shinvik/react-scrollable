const isEqual = (
  prev: Record<string, unknown>,
  next: Record<string, unknown>,
) => {
  return Object.keys(prev).length === Object.keys(next).length
    && !Object.entries(prev).find(([key, value]) => value !== next[key])
}

export default isEqual;
