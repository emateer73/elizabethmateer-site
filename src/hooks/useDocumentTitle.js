import { useEffect } from 'react';

// Sets the browser tab title for a page (SPA client-side).
// Static crawler/share metadata lives in index.html.
export default function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
