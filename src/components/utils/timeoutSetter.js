export const timeoutSetter = (callback, duration) => {
  setTimeout(() => {
    callback();
  }, duration);
};
