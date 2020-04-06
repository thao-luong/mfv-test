import { Component, OnInit } from '@angular/core';
import * as ReactDOM from 'react-dom';
import { Model, ColumnChart } from '@gooddata/react-components';
import * as React from 'react';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import {
  totalSalesIdentifier,
  locationStateDisplayFormIdentifier,
  locationStateAttributeCaliforniaUri,
  monthDateIdentifier,
  monthDateIdentifierJanuary,
  projectId,
} from "../../../utils/fixtures";

export interface ColumnChartProps {
  projectId: any;
  measures: any[];
  viewBy?: any;
  startBy?: any;
  filters?: any[];
  sortBy?: any[];
  config?: any;
}

@Component({
  selector: 'app-dynamic-sorting',
  template: `<div style ="height:800px"><div class="dynamic-sorting-options" [id]="sortDomID"></div>
             <div class="sort-column-chart" [id]="rootDomID"></div><div>`,
})

export class DynamicSortingComponent implements OnInit {
  sortDomID: string;
  rootDomID: string;
  measures = [Model.measure(totalSalesIdentifier).localIdentifier(totalSalesIdentifier)];
  attribute = Model.attribute(monthDateIdentifier).localIdentifier(monthDateIdentifier);
  stackBy = Model.attribute(locationStateDisplayFormIdentifier).localIdentifier(locationStateDisplayFormIdentifier);

  state = {
    sortOption: undefined,
    direction: "asc",
  };

  onSortOptionChange = sortOption => () => {
    this.state = {
      sortOption: sortOption,
      direction: this.state.direction,

    };
    this.render();
  };

  onDirectionChange = direction => () => {
    this.state = {
      direction: direction,
      sortOption: this.state.sortOption,
    };
    this.render()
  };

  getOrderLabel = dir =>
    ({
      desc: "descending",
      asc: "ascending",
    }[dir]);

  protected getSortDomNode() {
    const node = document.getElementById(this.sortDomID);
    invariant(node, `Node sortDomID not found!`);
    return node;
  }

  protected getRootDomID() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node rootDomID not found!`);
    return node;
  }

  render() {
    const { direction } = this.state;
    const sortOptions = [
      {
        key: "default",
        label: "Default sorting",
        overrideDirection: "asc",
        description: () =>
          "By default, the chart is sorted by the date attribute dir ascending order",
        sortBy: () => [],
      },
      {
        key: "state",
        label: "State",
        description: dir =>
          `The column stacks (states) are sorted alphabetically by the label of the state attribute in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [Model.attributeSortItem(locationStateDisplayFormIdentifier, dir)],
      },
      {
        key: "date",
        label: "Date attribute",
        description: dir =>
          `The columns (date) are sorted by the value of the date attribute in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [Model.attributeSortItem(monthDateIdentifier, dir)],
      },
      {
        key: "sum-of-column",
        label: "Date attribute by sum of the column",
        description: dir =>
          `The columns (date) are sorted by the sum of the Total Sales stacks in each column in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [Model.attributeSortItem(monthDateIdentifier, dir).aggregation("sum")],
      },
      {
        key: "sum-of-stacks",
        label: "State attribute by sum of individual stacks",
        description: dir =>
          `The stacks (state) are sorted by the sum of the Total Sales stacks across all columns in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [
          Model.attributeSortItem(locationStateDisplayFormIdentifier, dir).aggregation("sum"),
        ],
      },
      {
        key: "state-element",
        label: "Measure of California",
        description: dir =>
          `The columns (date) are sorted by the value of the Total Sales of California stack in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [
          Model.measureSortItem(totalSalesIdentifier, dir).attributeLocators({
            attributeIdentifier: locationStateDisplayFormIdentifier,
            element: locationStateAttributeCaliforniaUri,
          }),
        ],
      },
      {
        key: "date-element",
        label: "Measure of January",
        description: dir =>
          `The column stacks (states) are sorted by the value of Total Sales in the January column in ${this.getOrderLabel(
            dir,
          )} order.`,
        sortBy: dir => [
          Model.measureSortItem(totalSalesIdentifier, dir).attributeLocators({
            attributeIdentifier: monthDateIdentifier,
            element: monthDateIdentifierJanuary,
          }),
        ],
      },
      {
        key: "multi",
        label: "Multi-sort",
        overrideDirection: "niether",
        description: () =>
          "You can combine multiple sortItems together, even mix different directions.",
        sortBy: () => [
          Model.measureSortItem(totalSalesIdentifier, "asc").attributeLocators({
            attributeIdentifier: locationStateDisplayFormIdentifier,
            element: locationStateAttributeCaliforniaUri,
          }),
          Model.measureSortItem(totalSalesIdentifier, "desc").attributeLocators({
            attributeIdentifier: monthDateIdentifier,
            element: monthDateIdentifierJanuary,
          }),
        ],
      },
    ];

    const { sortOption = sortOptions[0] } = this.state;

    const isAsc = sortOption.overrideDirection
      ? sortOption.overrideDirection === "asc"
      : direction === "asc";
    const isDesc = sortOption.overrideDirection
      ? sortOption.overrideDirection === "desc"
      : direction === "desc";

    ReactDOM.render(React.createElement("div", {
      className: "s-dynamic-sorting"
    }, React.createElement("style", {
      jsx: "true"
    }, `
                          .sorting-options {
                              margin: -10px -10px 10px -10px;
                              display: flex;
                              flex-wrap: wrap;
                          }
      
                          .sorting-option {
                              margin: 5px 10px;
                          }
      
                          .sorting-label {
                              margin: 5px 10px;
                              padding: 6px 0;
                          }
                      `), React.createElement("div", {
      className: "sorting-options"
    }, React.createElement("span", {
      className: "sorting-label"
    }, "Sort by"), sortOptions.map(sortOptionItem => {
      return React.createElement("button", {
        key: sortOptionItem.key,
        className: `sorting-option gd-button gd-button-secondary s-${sortOptionItem.key} ${sortOption.key === sortOptionItem.key ? " is-active" : ""}`,
        onClick: this.onSortOptionChange(sortOptionItem)
      }, sortOptionItem.label);
    })), React.createElement("div", {
      className: "sorting-options"
    }, React.createElement("span", {
      className: "sorting-label"
    }, "Direction"), React.createElement("button", {
      className: `sorting-option gd-button gd-button-secondary s-ascending${isAsc ? " is-active" : ""}`,
      onClick: this.onDirectionChange("asc")
    }, "Ascending"), React.createElement("button", {
      className: `sorting-option gd-button gd-button-secondary s-descending${isDesc ? " is-active" : ""}`,
      onClick: this.onDirectionChange("desc")
    }, "Descending")), React.createElement("p", null, sortOption.description(direction)), React.createElement("hr", {
      className: "separator"
    })), this.getSortDomNode());
    
    React.createElement("div", {
      className: "s-dynamic-sorting-chart"
    }, ReactDOM.render(React.createElement(ColumnChart, {
      projectId: projectId,
      measures: this.measures,
      viewBy: this.attribute,
      stackBy: this.stackBy,
      sortBy: sortOption.sortBy(direction)
    }), this.getRootDomID()));
  }

  ngOnInit() {
    this.rootDomID = uuid.v4();
    this.sortDomID = uuid.v4();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    //ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
