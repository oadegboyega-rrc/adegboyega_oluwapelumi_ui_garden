import { j as d } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const i = ({ children: p, ...m }) =>
  d.jsx("span", { "data-testid": "text", ...m, children: p });
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Text",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const u = { title: "Components/Text", component: i, tags: ["autodocs"] },
  e = { args: { children: "This is a text component" } },
  t = { args: { children: d.jsx("b", { children: "Bold Text" }) } };
var s, r, o;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    children: "This is a text component"
  }
}`,
      ...((o = (r = e.parameters) == null ? void 0 : r.docs) == null
        ? void 0
        : o.source),
    },
  },
};
var a, n, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((a = t.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    children: <b>Bold Text</b>
  }
}`,
      ...((c = (n = t.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const h = ["Default", "Bold"];
export { t as Bold, e as Default, h as __namedExportsOrder, u as default };
