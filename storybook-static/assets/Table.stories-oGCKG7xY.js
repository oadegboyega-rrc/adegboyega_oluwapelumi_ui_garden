import { j as e } from "./jsx-runtime-Dl-HaM7H.js";
import "./iframe-D4KGjs-o.js";
const c = ({ children: a, ...t }) =>
  e.jsx("table", { "data-testid": "table", ...t, children: a });
c.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "Table",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const i = ({ children: a, ...t }) =>
  e.jsx("thead", { "data-testid": "table-header", ...t, children: a });
i.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableHeader",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const o = ({ children: a, ...t }) =>
  e.jsx("tr", { "data-testid": "table-row", ...t, children: a });
o.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableRow",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const d = ({ children: a, ...t }) =>
  e.jsx("td", { "data-testid": "table-cell", ...t, children: a });
d.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableCell",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const p = ({ children: a, ...t }) =>
  e.jsx("tfoot", { "data-testid": "table-footer", ...t, children: a });
p.__docgenInfo = {
  description: "",
  methods: [],
  displayName: "TableFooter",
  props: {
    children: {
      required: !1,
      tsType: { name: "ReactReactNode", raw: "React.ReactNode" },
      description: "",
    },
  },
};
const R = { title: "Components/Table", component: c, tags: ["autodocs"] },
  r = {
    args: {
      children: e.jsxs(e.Fragment, {
        children: [
          e.jsx(i, {
            children: e.jsx(o, { children: e.jsx(d, { children: "Header" }) }),
          }),
          e.jsx("tbody", {
            children: e.jsx(o, { children: e.jsx(d, { children: "Body" }) }),
          }),
          e.jsx(p, {
            children: e.jsx(o, { children: e.jsx(d, { children: "Footer" }) }),
          }),
        ],
      }),
    },
  };
var l, s, n;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((l = r.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    children: <>\r
        <TableHeader>\r
          <TableRow>\r
            <TableCell>Header</TableCell>\r
          </TableRow>\r
        </TableHeader>\r
        <tbody>\r
          <TableRow>\r
            <TableCell>Body</TableCell>\r
          </TableRow>\r
        </tbody>\r
        <TableFooter>\r
          <TableRow>\r
            <TableCell>Footer</TableCell>\r
          </TableRow>\r
        </TableFooter>\r
      </>
  }
}`,
      ...((n = (s = r.parameters) == null ? void 0 : s.docs) == null
        ? void 0
        : n.source),
    },
  },
};
const m = ["Default"];
export { r as Default, m as __namedExportsOrder, R as default };
