const GLOBAL_CSS = `
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  height: 100%;
}

body {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background-color: hsl(220, 24%, 6%);
  color: hsl(220, 15%, 96%);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  overflow-x: hidden;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(92, 124, 250, 0.1) 0, rgba(92, 124, 250, 0) 35%),
    radial-gradient(circle at 85% 80%, rgba(84, 201, 255, 0.1) 0, rgba(84, 201, 255, 0) 35%);
}

#root {
  min-height: 100vh;
}

a {
  color: inherit;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(220, 24%, 6%);
}

::-webkit-scrollbar-thumb {
  background: hsl(220, 20%, 10%);
  border-radius: 9999px;
  border: 2px solid hsl(220, 24%, 6%);
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(226, 90%, 65%);
}

::selection {
  background-color: rgba(92, 124, 250, 0.2);
  color: hsl(226, 90%, 65%);
}

@media (prefers-color-scheme: light) {
  body {
    background-color: hsl(220, 20%, 97%);
    color: hsl(220, 25%, 12%);
    background-image:
      radial-gradient(circle at 10% 20%, rgba(26, 54, 219, 0.08) 0, rgba(26, 54, 219, 0) 35%),
      radial-gradient(circle at 85% 80%, rgba(84, 201, 255, 0.08) 0, rgba(84, 201, 255, 0) 35%);
  }

  ::-webkit-scrollbar-track {
    background: hsl(220, 20%, 97%);
  }

  ::-webkit-scrollbar-thumb {
    background: hsl(220, 20%, 93%);
    border-color: hsl(220, 20%, 97%);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: hsl(226, 85%, 48%);
  }

  ::selection {
    background-color: rgba(26, 54, 219, 0.2);
    color: hsl(226, 85%, 48%);
  }
}
`;

export default function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />;
}
