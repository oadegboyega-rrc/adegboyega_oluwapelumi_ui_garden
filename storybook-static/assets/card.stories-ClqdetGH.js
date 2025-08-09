import { j as s } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const i = ({ children: p, ...m }) =>
  s.jsx("div", {
    "data-testid": "card",
    style: {
      border: "1px solid #eee",
      borderRadius: 8,
      padding: 16,
      boxShadow: "0 2px 8px #eee",
    },
    ...m,
    children: p,
  });
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Card",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const u = { title: "Components/Card", component: i, tags: ["autodocs"] },
  e = { args: { children: "This is a card" } },
  r = {
    args: {
      children: s.jsxs("div", {
        children: [
          s.jsx("h3", { children: "Card Title" }),
          s.jsx("p", { children: "Card content goes here." }),
        ],
      }),
    },
  };
var a, t, o;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((a = e.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  args: {
    children: "This is a card"
  }
}`,
      ...((o = (t = e.parameters) == null ? void 0 : t.docs) == null
        ? void 0
        : o.source),
    },
  },
};
var d, n, c;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((d = r.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    children: <div>\r
        <h3>Card Title</h3>\r
        <p>Card content goes here.</p>\r
      </div>
  }
}`,
      ...((c = (n = r.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const x = ["Default", "WithCustomContent"];
export {
  e as Default,
  r as WithCustomContent,
  x as __namedExportsOrder,
  u as default,
};
