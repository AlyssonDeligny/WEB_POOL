export function objectsDeeplyEqual(cmp1, cmp2) {
  for (const propertie in cmp1) {
    if (typeof cmp1[propertie] === "object") {
      if (objectsDeeplyEqual(cmp1[propertie], cmp2[propertie]) === false) {
        return false;
      }
    } else if (cmp1[propertie] !== cmp2[propertie]) {
      return false;
    }
  }
  for (const propertie in cmp2) {
    if (typeof cmp2[propertie] === "object") {
      if (objectsDeeplyEqual(cmp2[propertie], cmp2[propertie]) === false) {
        return false;
      }
    } else if (cmp1[propertie] !== cmp2[propertie]) {
      return false;
    }
  }
  return true;
}
