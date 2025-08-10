import type { Preview } from "@storybook/react-vite";

// Declare global Storybook variables
declare global {
  interface Window {
    __STORYBOOK_MODULE_TEST__: boolean;
    __webpack_nonce__: string;
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Initialize global variables
if (typeof window !== "undefined") {
  window.__STORYBOOK_MODULE_TEST__ = true;
  window.__webpack_nonce__ = "";
}

export default preview;
