export function retryPromise<T>(fn: () => Promise<T>, retries: number, delay: number): Promise<T> {
  return fn().catch((error) => {
    if (retries <= 0) throw error;
    return new Promise((resolve) => setTimeout(resolve, delay)).then(() => retryPromise(fn, retries - 1, delay));
  });
}