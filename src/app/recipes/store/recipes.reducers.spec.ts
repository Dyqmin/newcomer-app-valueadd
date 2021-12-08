import { recipesReducer, initialState } from "./recipes.reducers";

describe('Recipes Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = recipesReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
