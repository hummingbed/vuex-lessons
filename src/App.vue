<template>
  <HelloWorld msg=""/>
  {{$store.state.msg}}

   <ul>
    <li v-for="friend in $store.state.friendsModule.friends" :key="friend" >
      {{friend}} &nbsp;  <button v-on:click="$store.dispatch('unFriendAction')" >delete</button>
    </li>
     <button v-on:click="$store.dispatch('addFriendAction')" >click</button>
  </ul>

 
</template>

<script>
// import {friendsModule} from './store/modules/friend.module'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style: none;
}
</style>
