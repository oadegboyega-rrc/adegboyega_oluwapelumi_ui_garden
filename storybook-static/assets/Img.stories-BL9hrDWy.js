import { j as d } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const n = ({ src: p, alt: l = "image", ...i }) =>
  d.jsx("img", { "data-testid": "img", src: p, alt: l, ...i });
n.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Img",
  props: {
    src: { required: !0, tsType: { name: "string" }, description: "" },
    alt: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '"image"', computed: !1 },
    },
  },
};
const h = { title: "Components/Img", component: n, tags: ["autodocs"] },
  t = { args: { src: "https://via.placeholder.com/150", alt: "Default Img" } },
  e = {
    args: { src: "https://via.placeholder.com/200", alt: "Custom Alt Text" },
  };
var s, a, r;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((s = t.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Default Img"
  }
}`,
      ...((r = (a = t.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : r.source),
    },
  },
};
var o, m, c;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    src: "https://via.placeholder.com/200",
    alt: "Custom Alt Text"
  }
}`,
      ...((c = (m = e.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const f = ["Default", "WithCustomAlt"];
export {
  t as Default,
  e as WithCustomAlt,
  f as __namedExportsOrder,
  h as default,
};
