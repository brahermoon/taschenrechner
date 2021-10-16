import { createStore } from 'vuex'

export default createStore({
  state: {
    userinput: '',
    useroutput: '0',
    ans: '',
  },
  mutations: {
    SUBMIT_USER_INPUT(state, userinput) {
      state.userinput = userinput
    },
    UPDATE_USER_OUTPUT(state, useroutput) {
      state.useroutput = useroutput
    },
    UPDATE_USER_ANS(state, useroutput) {
      state.ans = useroutput
    },
  },
  actions: {
    computeOutput({ commit }) {
      const output = this.getters.calcualtedInput
      commit('UPDATE_USER_OUTPUT', output)
      commit('UPDATE_USER_ANS', output)
    },
  },
  getters: {
    /**
     *
     * @param state
     * @param getters
     * turns the inputString into an array without empty
     * spaces . adds an $ at the end of the array
     */
    arrayedInput: (state, getters) => {
      let anArray = Array.from(state.userinput)
      let cleaninput = anArray.filter((element) => {
        return element !== ' '
      })
      cleaninput.push('$')
      console.log(cleaninput)
      return cleaninput
    },
    calcualtedInput: (state, getters) => {
      console.log(getters.groupedNumbers)
      return eval(getters.groupedNumbers)
    },

    /**
     *
     * @param state
     * @param getters
     * groups all numbers with operators separated in an array
     *(will delete the $ at the end)
     */
    groupedNumbers: (state, getters) => {
      let numstack = ''
      let stackarray = []

      getters.arrayedInput.forEach((element) => {
        if (element === 'A') {
          stackarray.push(state.ans)
        } else {
          if (Number(element) || element == 0) {
            numstack += element
            console.log(numstack)
          } else {
            console.log(stackarray)
            stackarray.push(numstack)
            console.log(stackarray)
            console.log(numstack)
            numstack = ''
            console.log(numstack)
            if (element == '+' || '-' || '*' || '/') {
              numstack += element
              console.log(numstack)
              stackarray.push(numstack)
              numstack = ''
              console.log(numstack)
            }
          }
        }
      })
      stackarray.pop()
      stackarray = stackarray.join(' ')
      console.log(stackarray)
      return stackarray
    },
  },
})
