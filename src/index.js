/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import { browserTree } from "./trees/browser-tree.mjs";
import { nodesHierarchy } from "./trees/nodes-hierarchy.mjs";
import { renderTree } from "./render-elements/render-tree.mjs";
import { renderArray } from "./render-elements/render-array.mjs";

function flattenArray(array) {
  let result = [];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      result = [...result, ...flattenArray(item.children)];
    } else {
      result = [...result, item.label];
    }
  });

  return result;
}

function renderPage() {
  const browserTreeList = renderTree([browserTree]);
  const nodesHierarchyList = renderTree([nodesHierarchy]);

  const rootDiv = document.getElementById("root");
  if (browserTreeList !== null) rootDiv.append(browserTreeList);
  if (nodesHierarchyList !== null) rootDiv.append(nodesHierarchyList);

  const flatArray = flattenArray([nodesHierarchy]);
  rootDiv.append(renderArray(flatArray));
}

export { renderPage };
