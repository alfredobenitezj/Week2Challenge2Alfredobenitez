let strictEquals = (valueA, valueB) => {
  if (object.is(valueA, NaN)) {
    return object.is(valueB, NaN);
  } else if (object.is(valueA, 0)) {
    return object.is(valueB, 0);
  } else {
    return object.is(valueA, valueB);
  }
};
