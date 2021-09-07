const list = [
  {
    informationProvider: "",
    operationNumber: "36",
    requester: "だれだれさん",
    solutionNumber: "",
  },
  {
    informationProvider: "シモンさん",
    operationNumber: "38",
    requester: "イソッチ署長",
    solutionNumber: "40",
  },
  {
    informationProvider: "僕",
    operationNumber: "42",
    requester: "ほげ",
    solutionNumber: "",
  },
  {
    informationProvider: "シモンさん2",
    operationNumber: "33",
    requester: "イソッチ署長2",
    solutionNumber: "42",
  },
];

list.sort((a, b) => {
  if (a.solutionNumber === "" && b.solutionNumber !== "") return -1;
  if (a.solutionNumber !== "" && b.solutionNumber === "") return 1;

  if (a.solutionNumber === "" && b.solutionNumber === "") {
    if (a.operationNumber > b.operationNumber) return -1;
    if (a.operationNumber < b.operationNumber) return 1;
  }

  if (a.solutionNumber !== "" && b.solutionNumber !== "") {
    if (a.operationNumber > b.operationNumber) return -1;
    if (a.operationNumber < b.operationNumber) return 1;
  }

  return 0;
});

console.log(list);
