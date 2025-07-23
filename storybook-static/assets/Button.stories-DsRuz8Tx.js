import { j as m } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const c = ({ text: i, disabled: r, ...p }) =>
  m.jsx("button", {
    "data-testid": "Button",
    disabled: r,
    style: { color: r ? "#999" : "#000" },
    ...p,
    children: i,
  });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Button",
  props: {
    text: { required: !0, tsType: { name: "string" }, description: "" },
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
  },
};
const g = { title: "Components/Button", component: c, tags: ["autodocs"] },
  t = { args: { text: "Button" } },
  e = { args: { text: "Button", disabled: !0 } };
var s, o, a;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((s = t.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    text: "Button"
  }
}`,
      ...((a = (o = t.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : a.source),
    },
  },
};
var n, d, u;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((n = e.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    text: "Button",
    disabled: true
  }
}`,
      ...((u = (d = e.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : u.source),
    },
  },
};
const B = ["Default", "Disabled"];
export { t as Default, e as Disabled, B as __namedExportsOrder, g as default };
