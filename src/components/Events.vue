<template>
  <div class="row pb-5">
    <Event v-for="(event, i) in events" :key="i" :event="event" />
  </div>
</template>

<script>
import Event from "./Event.vue";
import { computed } from "vue";
import { mapState, useStore } from "vuex";
export default {
  name: "Events",
  components: { Event },

  setup() {
    const store = useStore();
    // console.log(store.state.events);
    return {
      events: computed(() => store.state.events),
    };
  },
};
</script>