import { j as a } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const p = ({ label: o, ...l }) =>
  a.jsxs("label", {
    style: { display: "inline-flex", alignItems: "center", gap: 4 },
    children: [
      a.jsx("input", { "data-testid": "radio-button", type: "radio", ...l }),
      o && a.jsx("span", { children: o }),
    ],
  });
p.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "RadioButton",
  props: {
    label: { required: !1, tsType: { name: "string" }, description: "" },
  },
};
const g = { title: "Components/RadioButton", component: p, tags: ["autodocs"] },
  e = { args: { label: "Radio Option" } },
  t = { args: { label: "Checked Option", checked: !0 } };
var s, r, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    label: "Radio Option"
  }
}`,
      ...((n = (r = e.parameters) == null ? void 0 : r.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var d, i, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((d = t.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    label: "Checked Option",
    checked: true
  }
}`,
      ...((c = (i = t.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const h = ["Default", "Checked"];
export { t as Checked, e as Default, h as __namedExportsOrder, g as default };
