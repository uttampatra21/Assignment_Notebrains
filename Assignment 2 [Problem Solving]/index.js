const findDistinctIntegers = (...inputs) => {
  console.log(inputs);
  const allNumbers = inputs.flat();

  console.log(allNumbers);

  const result = allNumbers.filter(
    (num) => allNumbers.indexOf(num) === allNumbers.lastIndexOf(num)
  );

  return result;
};

const result = findDistinctIntegers([1, 2, 3], [2, 8, 4], [3, 4, 5]);
console.log(result);
