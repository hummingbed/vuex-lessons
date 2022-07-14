<template>
  <div class="hello">
    <h1>{{ $store.state.msg }}</h1>
        <h1>{{ $store.getters.fullName }}</h1>
  </div>

 

</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>