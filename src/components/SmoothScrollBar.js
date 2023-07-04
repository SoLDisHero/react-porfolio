import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Scrollbar from 'react-smooth-scrollbar';
// this is for smooth scroll and for beggining points of the page. to set them to the top if we click on different button
export default function SmoothScrollBar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0);
  }, [pathname]);
  return (
    <Scrollbar ref={ref} damping=".09">
      {children}
    </Scrollbar>
  );
}
