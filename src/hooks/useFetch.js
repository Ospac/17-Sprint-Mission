import { useEffect, useRef, useState } from 'react';

export default function useFetch({
  asyncFunction,
  deps = [],
  immediate = false,
}) {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const asyncFnRef = useRef(asyncFunction);
  useEffect(() => {
    asyncFnRef.current = asyncFunction;
  }, [asyncFunction]);

  const refetchRef = useRef(null);
  if (refetchRef.current === null) {
    refetchRef.current = async () => {
      setState((prev) => ({ ...prev, error: null, loading: true }));
      try {
        const response = await asyncFnRef.current();
        setState((prev) => ({ ...prev, loading: false, data: response }));
      } catch (error) {
        setState({ data: null, loading: false, error });
      }
    };
  }

  useEffect(() => {
    if (immediate) refetchRef.current();
  }, [immediate, ...deps]);

  return { ...state, refetch: refetchRef };
}
export function useQuery({ queryFn, deps = [] }) {
  return useFetch({
    asyncFunction: queryFn,
    immediate: true,
    deps,
  });
}

export function useMutation({ mutationFn, deps = [] }) {
  return useFetch({
    asyncFunction: mutationFn,
    immediate: false,
    deps,
  });
}
