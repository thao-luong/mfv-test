import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { ColumnChart, Model, MeasureValueFilterDropdown, PivotTable } from '@gooddata/react-components';
import classNames from "classnames";

import { projectId, locationNameDisplayFormIdentifier, franchisedSalesIdentifier, monthDateIdentifier } 
from '../../../utils/fixtures';

export interface PivotTableBucketProps {
  projectId: any;
  measures?: any[];
  rows?: any[];
  columns?: any[];
  totals?: any[];
  filters?: any[];
  sortBy?: any[];
  config?: any
}

export interface MeasureValueFilterDropdownProps {
  projectId: any;
  filter: any;
  onApply: any;
  onCancel: any;
  anchorEl: any;
  usePercentage?: boolean;
  warningMessage?: string;
}

const DropdownButton = ({ isActive, measureTitle, onClick }) => {
  const className = classNames("gd-mvf-dropdown-button", "s-mvf-dropdown-button", "gd-button", "gd-button-secondary", "button-dropdown", "icon-right",
    {
      "icon-navigateup": isActive,
      "icon-navigatedown": !isActive
    });
  return React.createElement("button", {
    className: className,
    onClick: onClick,
  }, measureTitle);
};

export interface DropdownButton {
  isActive: boolean;
  measureTitle: any;
  onClick: any;
}

@Component({
  selector: 'app-measure-value-filter-percent-dropdown',
  templateUrl: './measure-value-filter-percent-dropdown.component.html',
  styleUrls: ['./measure-value-filter-percent-dropdown.component.css']
})

export class MeasureValueFilterPercentDropdownComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  buttonIDPercentDropdownn: any;
  tableRoomDataPercentDropdown: any;
  rootDomIDPercentDropdown: any;
  ref: React.RefObject<any>;
  displayDropdown: boolean;
  filters: any[];
  filterValue: any;
  franchisedSales = Model.measure(franchisedSalesIdentifier).localIdentifier('franchisedSalesIdentifier').format('#,##0').title("Franchised Sales in %").ratio();
  defaultMeasureValueFilter = Model.measureValueFilter('franchisedSalesIdentifier');
  locationResort = Model.attribute(locationNameDisplayFormIdentifier);
  monthDateIdentifier = Model.attribute(monthDateIdentifier)
  config = {
    stackMeasuresToPercent: true
  }

  state = {
    displayDropdown: false,
    filters: [this.defaultMeasureValueFilter],
  };

  onApply = filter => {
    this.filters = [filter];
    this.filterValue = filter;
    this.state = {
      displayDropdown: !this.state.displayDropdown,
      filters: [this.defaultMeasureValueFilter]
    }
    this.render();
  };

  onCancel = () => {
    this.displayDropdown = false;
    this.state = {
      displayDropdown: !this.state.displayDropdown,
      filters: [this.defaultMeasureValueFilter]
    }
    this.renderFilterValue();
  };

  toggleDropdown = () => {
    this.state = {
      displayDropdown: !this.state.displayDropdown,
      filters: [this.defaultMeasureValueFilter]
    }
    this.render();
  };

  //----------Get Element---------
  protected getButtonNode() {
    const node = document.getElementById(this.buttonIDPercentDropdownn);
    invariant(node, `Node '${this.buttonIDPercentDropdownn} not found!`);
    return node;
  }

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomIDPercentDropdown);
    invariant(node, `Node '${this.rootDomIDPercentDropdown} not found!`);
    return node;
  }

  protected getTableDataNode() {
    const node = document.getElementById(this.tableRoomDataPercentDropdown);
    invariant(node, `Node tableRoomData not found!`);
    return node;
  }

  //---------------Get Component-------------
  protected getMeasureValueProps(): MeasureValueFilterDropdownProps {
    //const { filters } = this.state;
    return {
      anchorEl: this.getButtonNode().getElementsByTagName('button')[0],
      projectId: projectId,
      filter: this.filterValue ? this.filterValue : this.defaultMeasureValueFilter,
      onApply: this.onApply,
      onCancel: this.onCancel,
      warningMessage: "The filter uses actual measure values, not percentage.",
    };
  }

  protected getDropdownButtons(): DropdownButton {
    const { displayDropdown } = this.state;
    return {
      isActive: displayDropdown,
      measureTitle: "Measure",
      onClick: this.toggleDropdown,
    };
  }

  protected getPivotTableProps(): PivotTableBucketProps {
    return {
      projectId: projectId,
      measures: [this.franchisedSales],
      rows: [this.locationResort],
      filters: this.filters,
    };
  }

  //--------------Rendering----------------------
  protected render() {
    this.renderButton();
    this.renderFilterValue();
    this.renderPivotTable();
  }

  public renderButton() {
    ReactDOM.render(React.createElement(DropdownButton, this.getDropdownButtons()), this.getButtonNode());
  }

  public renderFilterValue() {
    const { displayDropdown } = this.state;
    if (displayDropdown) {
      ReactDOM.render(React.createElement(MeasureValueFilterDropdown, this.getMeasureValueProps()), this.getRootDomNode());
    }
    else {
      ReactDOM.unmountComponentAtNode(this.getRootDomNode())
    }
  }

  public renderPivotTable() {
    ReactDOM.render(React.createElement(PivotTable, this.getPivotTableProps()), this.getTableDataNode());
  }

  ngOnInit() {
    this.rootDomIDPercentDropdown = uuid.v4();
    this.tableRoomDataPercentDropdown = uuid.v4();
    this.buttonIDPercentDropdownn = uuid.v4();
    this.ref = React.createRef();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    this.render();
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    //ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}


