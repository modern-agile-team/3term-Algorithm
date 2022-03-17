function solution(participants, completions) {
  let obj = {};
  for (let participant of participants) {
    participant in obj ? (obj[participant] += 1) : (obj[participant] = 1);
  }

  for (let completion of completions) {
    if (completion in obj) {
      obj[completion] -= 1;
    }
  }

  for (let participant in obj) {
    if (obj[participant]) {
      return participant;
    }
  }
}
