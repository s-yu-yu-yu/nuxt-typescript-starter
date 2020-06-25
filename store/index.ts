import { getterTree, mutationTree, actionTree, getAccessorType } from 'nuxt-typed-vuex';

export const state = () => ({
});

export type IRootState = ReturnType<typeof state>

export const getters = getterTree(state, {
});

// UPPER CASE
export const mutations = mutationTree(state, {
});

// camelCase
export const actions = actionTree({ state, getters, mutations }, {
});

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
});
