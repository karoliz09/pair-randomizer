export const generatePairs = (config) => {
    let pairs = []
    const availableIdsPool = Object.keys(config)
    const namesSorted = sortByLeastSelectableOptions(Object.values(config));

    namesSorted.forEach((item) => {
        const pairId = pickRandomId(item.selected.filter((id) => availableIdsPool.indexOf(id) > -1))
        const pair = [item.id, pairId];
        pairs.push(pair);
        const pairIndex = availableIdsPool.indexOf(pairId)
        availableIdsPool.splice(pairIndex, 1);
        console.log(availableIdsPool)
        console.log([...pairs])
    })

    pairs.forEach((pair) => {
        console.log(`${config[pair[0]].name} dovanoja dovana ${config[pair[1]].name}`)
    })

    return pairs
}

function sortByLeastSelectableOptions(items) {
    const itemCountWithOptions = items.map(item => ({
      item,
      optionsCount: item.selected.length
    }));
  
    itemCountWithOptions.sort((a, b) => a.optionsCount - b.optionsCount);
  
    const sortedItems = itemCountWithOptions.map(itemData => itemData.item);
    return sortedItems;
  }

  function pickRandomId(array) {
    if (array.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }