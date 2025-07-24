import type { Preview } from "@storybook/react-vite";
declare global {
    interface Window {
        __STORYBOOK_MODULE_TEST__: boolean;
        __webpack_nonce__: string;
    }
}
declare const preview: Preview;
export default preview;
