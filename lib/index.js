"use strict";
var __extends=(this && this.__extends) || (function(){
  var extendStatics = function(d, b){
    extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function(d, b){ d.__proto__ = b; }) ||
      function(d, b){ for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };
  return function(d, b){
    extendStatics(d, b);
    function __(){ this.constructor = d; }
    d.prototype = b === null ? Object.create(b):(__.prototype = b.prototype, new __());
  };
})();
import * as React from 'react';
var PageSizeSelect = /** @class */ (function(_super){
  __extends(PageSizeSelect, _super);
  function PageSizeSelect(){
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PageSizeSelect.prototype.render = function(){
    var _a = this.props, pageSizes = _a.pageSizes, pageSize = _a.pageSize, onPageSizeChanged = _a.onPageSizeChanged;
    var pageSizeOptions = pageSizes.map(function(pgSize){ return (React.createElement("option", { key: pgSize, value: pgSize }, pgSize)); });
    return (React.createElement("select", { value: pageSize, onChange: onPageSizeChanged }, pageSizeOptions));
  };
  return PageSizeSelect;
}(React.Component));
export default PageSizeSelect;
