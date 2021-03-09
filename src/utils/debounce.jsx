export const DEFAULT_DEBOUNCE_TIMEOUT = 5000;

export default function debounce(func, wait = DEFAULT_DEBOUNCE_TIMEOUT) {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return (...args) => {
    cleanup();
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
