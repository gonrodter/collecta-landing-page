import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { captureAttributionFromUrl } from "@/lib/attribution";

const AttributionCapture = () => {
  const location = useLocation();

  useEffect(() => {
    captureAttributionFromUrl();
  }, [location.pathname, location.search]);

  return null;
};

export default AttributionCapture;
