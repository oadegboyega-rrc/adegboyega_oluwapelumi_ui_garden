import { j as f } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const l = ({
  src: u,
  alt: p = "Hero Image",
  height: a = "auto",
  width: r = "100%",
  style: d,
  ...g
}) =>
  f.jsx("img", {
    "data-testid": "hero-image",
    src: u,
    alt: p,
    height: a,
    width: r,
    style: { display: "block", width: r, height: a, objectFit: "cover", ...d },
    ...g,
  });
l.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "HeroImage",
  props: {
    src: { required: !0, tsType: { name: "string" }, description: "" },
    alt: {
      required: !1,
      tsType: { name: "string" },
      description: "",
      defaultValue: { value: '"Hero Image"', computed: !1 },
    },
    height: {
      required: !1,
      tsType: {
        name: "union",
        raw: "string | number",
        elements: [{ name: "string" }, { name: "number" }],
      },
      description: "",
      defaultValue: { value: '"auto"', computed: !1 },
    },
    width: {
      required: !1,
      tsType: {
        name: "union",
        raw: "string | number",
        elements: [{ name: "string" }, { name: "number" }],
      },
      description: "",
      defaultValue: { value: '"100%"', computed: !1 },
    },
  },
};
const H = { title: "Components/HeroImage", component: l, tags: ["autodocs"] },
  e = {
    args: { src: "https://via.placeholder.com/800x300", alt: "Default Hero" },
  },
  t = {
    args: {
      src: "https://via.placeholder.com/400x200",
      alt: "Custom Size Hero",
      width: 400,
      height: 200,
    },
  };
var s, o, n;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((s = e.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    src: "https://via.placeholder.com/800x300",
    alt: "Default Hero"
  }
}`,
      ...((n = (o = e.parameters) == null ? void 0 : o.docs) == null
        ? void 0
        : n.source),
    },
  },
};
var m, i, c;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((m = t.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    src: "https://via.placeholder.com/400x200",
    alt: "Custom Size Hero",
    width: 400,
    height: 200
  }
}`,
      ...((c = (i = t.parameters) == null ? void 0 : i.docs) == null
        ? void 0
        : c.source),
    },
  },
};
const v = ["Default", "CustomSize"];
export {
  t as CustomSize,
  e as Default,
  v as __namedExportsOrder,
  H as default,
};
