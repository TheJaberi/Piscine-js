function blockChain(data, prev = { index: 0, hash: "0" }) {
  const index = prev.index + 1;
  const stringifiedData = JSON.stringify(data);
  const hashInput = `${index}${prev.hash}${stringifiedData}`;
  const hash = hashCode(hashInput);

  const block = {
    index: index,
    hash: hash,
    data: data,
    prev: prev,
    chain: function (newData) {
      return blockChain(newData, block);
    },
  };

  return block;
}
