import { createActionMaker, SingleAction } from "safe-redux-actions";

const makeAction = createActionMaker<typeof Actions>();

export const Actions = {
  add: (amount: number) => makeAction("add", amount),
  increase: () => makeAction("increase"),
  decrease: () => makeAction("decrease")
};

export type Action = SingleAction<typeof Actions>;