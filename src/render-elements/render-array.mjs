function renderArray(array) {
  if (array.length !== 0);

  const olElement1 = document.createElement("ol");

  array.forEach((elem) => {
    const liElement1 = document.createElement("li");
    liElement1.innerHTML = elem;
    olElement1.append(liElement1);
  });

  return olElement1;
}

export { renderArray };
