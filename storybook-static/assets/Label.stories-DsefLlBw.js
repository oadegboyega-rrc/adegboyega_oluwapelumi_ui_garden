import { j as m } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const l = ({ text: c, disabled: i, ...p }) =>
  m.jsx("label", {
    "data-testid": "label",
    style: { color: i ? "#999" : "#000" },
    ...p,
    children: c,
  });
l.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Label",
  props: {
    text: { required: !0, tsType: { name: "string" }, description: "" },
    disabled: { required: !1, tsType: { name: "boolean" }, description: "" },
  },
};
const x = { title: "Components/Label", component: l, tags: ["autodocs"] },
  e = { args: { text: "Label" } },
  a = { args: { text: "Label", disabled: !0 } };
var s, t, r;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    text: "Label"
  }
}`,
      ...((r = (t = e.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : r.source),
    },
  },
};
var o, n, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((o = a.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    text: "Label",
    disabled: true
  }
}`,
      ...((d = (n = a.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : d.source),
    },
  },
};
const g = ["Default", "Disabled"];
export { e as Default, a as Disabled, g as __namedExportsOrder, x as default };
