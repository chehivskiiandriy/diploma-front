const sortSelectValues = field => (a, b) => {
  const nameA = a[field].toLowerCase();
  const nameB = b[field].toLowerCase();

  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  return 0;
};

export default sortSelectValues;
