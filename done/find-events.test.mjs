import { expect, test } from "vitest";

const input = [
  { name: "A vs B", result: "1-0" },
  { name: "C vs D", result: "1-4" },
  { name: "E vs F", result: "4-4" },
];

const output = {
  moreGoals: { name: "E vs F", result: "4-4" },
  biggestWin: { name: "C vs D", result: "1-4" },
};

test("findEvents", () => {
  expect(findEvents(input)).toEqual(output);
});

function findEvents(events) {
  let moreGoals, biggestWin;

  for (const event of events) {
    const [goals1, goals2] = event.result.split("-").map(Number);
    const totalGoals = goals1 + goals2;
    const goalDifference = Math.abs(goals1 - goals2);

    if (totalGoals > 0 && (!moreGoals || totalGoals > moreGoals.totalGoals)) {
      moreGoals = { ...event, totalGoals };
    }

    if (
      goals1 !== goals2 &&
      (!biggestWin || goalDifference > biggestWin.goalDifference)
    ) {
      biggestWin = { ...event, goalDifference };
    }
  }

  return {
    moreGoals: moreGoals && { name: moreGoals.name, result: moreGoals.result },
    biggestWin: biggestWin && {
      name: biggestWin.name,
      result: biggestWin.result,
    },
  };
}
