<template>
  <div>
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./components/Header.vue";
import { useStore } from "vuex";

export default {
  components: {
    MyHeader,
  },

  setup() {
    const store = useStore();
    const dispatchEvents = () => store.dispatch("getEvents");
    dispatchEvents();
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>