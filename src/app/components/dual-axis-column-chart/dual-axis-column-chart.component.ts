import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { ColumnChart, Model } from "@gooddata/react-components";
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import "@gooddata/react-components/styles/css/main.css";
import {
  totalSalesIdentifier,
  totalCostsIdentifier,
  locationStateDisplayFormIdentifier,
  projectId,
} from "../../../utils/fixtures";

interface DualAxisProps {
  projectId: string;
  measures: any;
  viewBy: any;
  onLoadingChanged?: any;
  config: any;
  onError?: any
}

@Component({
  selector: 'app-dual-axis-column-chart',
  template: '<div style="height: 300px" [id]="rootDomID"></div>'
})

export class DualAxisColumnChartComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;
  totalCostsLocalIdentifier = "totalCosts";
  totalSalesLocalIdentifier = "totalSales";
  totalCosts = Model.measure(totalCostsIdentifier).format("#,##0")
    .alias("$ Total Costs")
    .localIdentifier(this.totalCostsLocalIdentifier);
  totalSales = Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales");
  localState = Model.attribute(locationStateDisplayFormIdentifier);
  config = {
    secondary_yaxis: {
      visible: true,
      labelsEnabled: true,
      rotation: "auto",
      min: "-75000000",
      max: "75000000",
      measures: this.totalCosts,
    },
    yaxis: {
      visible: true,
      labelsEnabled: true,
      rotation: "auto",
      min: "-75000000",
      max: "75000000",
      measures: this.totalSales,
    },
  };

  onLoadingChanged(...params) {
    // eslint-disable-next-line no-console
    return console.log("ColumnChartExample onLoadingChanged", ...params);
  }

  onError(...params) {
    // eslint-disable-next-line no-console
    return console.log("ColumnChartExample onError", ...params);
  }

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): DualAxisProps {
    return {
      projectId: projectId,
      measures: [this.totalCosts, this.totalSales],
      viewBy: this.localState,
      config: this.config,
      onLoadingChanged: this.onLoadingChanged,
      onError: this.onError
    }
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(ColumnChart, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v4();
  }

  ngOnChanges() {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }

}
