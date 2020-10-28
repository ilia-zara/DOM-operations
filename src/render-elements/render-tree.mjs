function renderTree(tree) {
  if (tree.length !== 0);

  const ulElement = document.createElement("ul");

  tree.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = element.label;
    ulElement.append(liElement);

    const subTree = renderTree(element.children);
    if (subTree !== null);
    ulElement.append(subTree);
  });

  return ulElement;
}

export { renderTree };
