import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook to detect whether the component is hydrated on the client.
 * Built with React's recommended `useSyncExternalStore` to avoid SSR hydration mismatches.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // Client snapshot
    () => false  // Server snapshot
  );
}
