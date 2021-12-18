"use strict";
Object.defineProperty(exports,"__esModule",{value:true});varReact=require("react");exports.pageSizes=[12,24,60,100,120,180,300,600];
function PageSizeSelect(p) {
  var g = p.sizes;
  var s = (!g || g.length === 0 ? exports.pageSizes : g);
  var opts = s.map(function (pgSize) { return React.createElement('option', { key: pgSize, value: pgSize }, pgSize); });
  return React.createElement('select', { id: p.id, name: p.name, value: p.size, onChange: p.onChange }, opts);
}
exports.PageSizeSelect = PageSizeSelect;
exports.default = PageSizeSelect;
