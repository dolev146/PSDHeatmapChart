import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { DynamicPsdHeatMap } from "./DynamicPsdHeatMap";

/**
 * Dynamic PSD heat map. Visualize PSD data by either: 1) incremental data(row by row), 2) whole data
 * @method
 * @param {string}  xDirection   - "ltr" means left to right, "rtl" means right to left. If not provided, default is "ltr"
 * @param {boolean} showLegend   - Flag whether showing legend bar.
 * @param {object}  widgetSize   - Hooked state data. Store canvas size in pixel: {width: 200, height: 551}
 * @param {integer} saturation   - Pixel saturation. Percentage of maximum pixel value to saturate pixel.
 * @param {object}  viewPort     - Hooked state data. Store view port data, example: {freqRange: [0,12], depthRange: [10,-1]}
 * @param {object}  newSiteData  - Hooked state data. When new site data comes, outter logic encode data into this parameter.
                                   Example: {depth: 9.8,stride: 0.3, startFreq: 3, psd: [1,2,3,5,...]}
 * @param {object}  allSitesData - Hooked state data. When recovering the whole app, outter logic requests the whole trajectory 
                                   data and set this hook. 
                                   Example: {siteDepth: [9.8, 9.0, 8.7,...], stride: 0.3, startFreq: 3, psd: [1,2,3,5,...]}.
 */

function App() {
  const xDirection = "rtl";
  const showLegend = true;
  const widgetSize = { width: 200, height: 551 };
  const saturation = 0.8;
  const viewPort = { freqRange: [0, 12], depthRange: [10, -1] };
  const newSiteData = {
    depth: 9.8,
    stride: 0.3,
    startFreq: 3,
    psd: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
  };
  const allSitesData = {
    siteDepth: [
      9.8, 9.0, 8.7, 8.4, 8.1, 7.8, 7.5, 7.2, 6.9, 6.6, 6.3, 6.0, 5.7,
    ],
    stride: 0.3,
    startFreq: 3,
    psd: [
      1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3,
      5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11,
    ],
  };
  return (
    <>
      <DynamicPsdHeatMap
        xDirection={xDirection}
        showLegend={showLegend}
        widgetSize={widgetSize}
        saturation={saturation}
        viewPort={viewPort}
        newSiteData={newSiteData}
        allSitesData={allSitesData}
      />
    </>
  );
}

export default App;
