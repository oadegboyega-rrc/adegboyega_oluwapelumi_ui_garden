import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { main, module as _module } from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: _module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/types/index.d.ts", // <-- matches tsconfig.json declarationDir
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
