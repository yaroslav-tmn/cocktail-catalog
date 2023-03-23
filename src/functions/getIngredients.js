function getIngredients(cocktailObj) {
  const result = [];

  for (const key in cocktailObj) {
    if (
      key.startsWith('strIngredient') &&
      typeof cocktailObj[key] === 'string'
    ) {
      result.push(cocktailObj[key]);
    }
  }

  return result;
}

export { getIngredients };
