function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}
