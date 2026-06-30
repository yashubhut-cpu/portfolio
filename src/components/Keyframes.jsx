import { useEffect } from "react";

const KEYFRAMES = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulseNeon {
  0%, 100% { box-shadow: 0 0 15px rgba(92, 124, 250, 0.4); }
  50% { box-shadow: 0 0 25px rgba(92, 124, 250, 0.7); }
}

@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes loadProgress {
  from { width: 0%; }
}

@media (prefers-color-scheme: light) {
  @keyframes pulseNeon {
    0%, 100% { box-shadow: 0 0 15px rgba(26, 54, 219, 0.4); }
    50% { box-shadow: 0 0 25px rgba(26, 54, 219, 0.7); }
  }
}
`;

export default function Keyframes() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
}
