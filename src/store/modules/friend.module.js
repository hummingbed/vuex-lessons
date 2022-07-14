export const friendsModule = {
    state: {
        friends: []
    },
    getters: {},
    mutations: {
        addFriend(state, friend){
            state.friends =[
              friend,
              ...state.friends,
              // console.log(friend)
            ]
          },
          unFriend(state, friendIndex){
            state.friends.splice(friendIndex, 1)
          }
    },
    actions: {
        addFriendAction(context){
            context.commit("addFriend", Math.random().toString(36).substring(2,7))
          },
          unFriendAction(context, index){
            context.commit("unFriend", index)
          }
    }
}