import { j as r } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const c = ({ options: u, ...m }) =>
  r.jsx("select", {
    "data-testid": "dropdown",
    ...m,
    children: u.map((a) =>
      r.jsx("option", { value: a.value, children: a.label }, a.value),
    ),
  });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Dropdown",
  props: {
    options: {
      required: !0,
      tsType: {
        name: "Array",
        elements: [{ name: "DropdownOption" }],
        raw: "DropdownOption[]",
      },
      description: "",
    },
  },
};
const g = { title: "Components/Dropdown", component: c, tags: ["autodocs"] },
  i = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
  e = { args: { options: i } },
  o = { args: { options: i, defaultValue: "2" } };
var t, s, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((t = e.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: `{
  args: {
    options
  }
}`,
      ...((n = (s = e.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var p, l, d;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((p = o.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    options,
    defaultValue: "2"
  }
}`,
      ...((d = (l = o.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : d.source),
    },
  },
};
const w = ["Default", "WithDefaultValue"];
export {
  e as Default,
  o as WithDefaultValue,
  w as __namedExportsOrder,
  g as default,
};
