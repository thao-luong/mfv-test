import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Visualization, HeaderPredicateFactory } from '@gooddata/react-components';
import { 
  projectId, 
  bulletChartVisualizationByUri,
  grossProfitIdentifier,
  } from "../../../utils/fixtures";

const primaryMeasure ='3ec0f8f9164944e0965e7d293c55917d';
const targetMeasure ='a749bc0288d045d197f1aac4567ccce1';
const comparativeMeasure ='b7092cf1ead347869adcf34d82d4a191';

interface VisualizationBulletChartByUriProps {
  projectId: any;
  uri: any;
  experimentalVisExecution?: boolean;
  config?: any;
  drillableItems?: any[];
  onFiredDrillEvent?: any;
}

@Component({
  selector: 'app-visualization-bullet-chart-by-uri',
  template: '<div class="visualization-bullet-chart-by-uri" style="height:400px" [id]="rootDomID"></div>',
})

export class VisualizationBulletChartByUriComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  public rootDomID: string;
  experimentalVisExecution:false;  
  config = {
    colorMapping: [
      {
        predicate: headerItem => {
          return headerItem.measureHeaderItem
            ? headerItem.measureHeaderItem &&
            headerItem.measureHeaderItem.localIdentifier === primaryMeasure
            : false;
        },
        color: {
          type: "rgb",
          value: {
            r: 253,
            g: 4,
            b: 249,
          },
        },
      },
      {
        predicate: headerItem => {
          return headerItem.measureHeaderItem
            ? headerItem.measureHeaderItem &&
            headerItem.measureHeaderItem.localIdentifier === targetMeasure
            : false;
        },
        color: {
          type: "rgb",
          value: {
            r: 255,
            g: 154,
            b: 0,
          },
        },
      },
      {
        predicate: headerItem => {
          return headerItem.measureHeaderItem
            ? headerItem.measureHeaderItem &&
            headerItem.measureHeaderItem.localIdentifier === comparativeMeasure
            : false;
        },
        color: {
          type: "rgb",
          value: {
            r: 227,
            g: 246,
            b: 249,
          },
        },
      },
    ],    dataLabels: {
      visible: false,
    },
    legend: {
      enabled: true,
      position: 'top',
    },
    separators: {
      thousand: ',',
      decimal: '.'
    },
  }

  onDrill = drillEvent => {
    console.log(
      "onFiredDrillEvent",
      drillEvent,
      JSON.stringify(drillEvent.drillContext.intersection, null, 2),
    );
    return true;
  };

  renderDrillValue() {
    let drillEvent;
    if (!drillEvent) {
      return null;
    }
  };

  drillableItems = [
    HeaderPredicateFactory.identifierMatch(grossProfitIdentifier),
  ];

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  protected getProps(): VisualizationBulletChartByUriProps {
    {
      return {
        projectId: projectId,
        uri: bulletChartVisualizationByUri,
        config: this.config,
        drillableItems: this.drillableItems,
        onFiredDrillEvent: this.onDrill
      };
    }
  }
  
  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected render() {
    if (this.isMounted()) {
      ReactDOM.render(React.createElement(Visualization, this.getProps()), this.getRootDomNode());
    }
  }

  ngOnInit() {
    this.rootDomID = uuid.v1();
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
