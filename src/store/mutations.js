export default {
  // stateの値はmutationでのみ変える
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
}