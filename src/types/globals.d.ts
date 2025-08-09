// src/types/globals.d.ts
declare namespace NodeJS {
  interface Global {
    __STORYBOOK_MODULE_TEST__: boolean;
    __webpack_nonce__: string;
  }
}

declare const __STORYBOOK_MODULE_TEST__: boolean;
declare const __webpack_nonce__: string;