import { useEffect } from 'react';

function useKeyboardShortcuts(shortcuts, deps = []) {
  useEffect(() => {
    function handleKey(event) {
      if (shortcuts[event.key]) {
        shortcuts[event.key](event);
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, deps); // eslint-disable-line
}

export default useKeyboardShortcuts;
