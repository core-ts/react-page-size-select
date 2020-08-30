import * as React from 'react';

interface Props {
  id?: string;
  name?: string;
  pageSizes: number[];
  pageSize: number;
  onPageSizeChanged: any;
}

class PageSizeSelect extends React.Component<Props, any> {
  render() {
    var _a = this.props, pageSizes = _a.pageSizes, pageSize = _a.pageSize, onPageSizeChanged = _a.onPageSizeChanged;
    var pageSizeOptions = pageSizes.map(function(pgSize){ return (React.createElement("option", { key: pgSize, value: pgSize }, pgSize)); });
    return (React.createElement("select", { value: pageSize, onChange: onPageSizeChanged }, pageSizeOptions));
    /*
    const {id, name, pageSizes, pageSize, onPageSizeChanged} = this.props;
    const pageSizeOptions = pageSizes.map(pgSize => (
      <option key={pgSize} value={pgSize}>{pgSize}</option>)
    );
    return (
      <select id={id} name={name} value={pageSize} onChange={onPageSizeChanged}>
        {pageSizeOptions}
      </select>
    );
    */
  }
}

export default PageSizeSelect;
