function setQuery(value) {
  return {
    type: "set",
    payload: value,
  };
}

export { setQuery };
