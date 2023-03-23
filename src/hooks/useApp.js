import { useContext } from 'react';
import { AppContext } from '../app/context/AppContext';

export function useApi() {
  const { API } = useContext(AppContext);
  return { API };
}

export function useDisplayOptions() {
  const { display, setDisplay } = useContext(AppContext);
  return { display, setDisplay };
}

export function useSinglePage() {
  const { isSingle, setIsSingle } = useContext(AppContext);
  return { isSingle, setIsSingle };
}