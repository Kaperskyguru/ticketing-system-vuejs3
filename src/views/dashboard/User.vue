<template>
  <div class="text-center banner">
    <div class="container p-5">
      <div class="p-5">
        <h1>User DashBoard</h1>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row pb-5">
        <div class="col-md-6">
          <counter title="Total Events" :value="10"></counter>
          <br />
        </div>

        <div class="col-md-6">
          <counter title="Total Amount Spent" :value="10" symbol="$"></counter>
        </div>
        <br />
      </div>
    </div>
    <br /><br />

    <div class="container pt-5 pb-5">
      <h5 class="pb-5">All Events</h5>
      <div class="row pb-5">
        <div class="col-md-12">
          <div class="card">
            <event-table :events="userevents" :isAdmin="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "../../components/Counter.vue";
import EventTable from "../../components/EventTable.vue";
import { mapState, useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "User",
  components: { Counter, EventTable },

  setup() {
    const store = useStore();

    const getUserEvents = () =>
      store.dispatch("getUserEvents", store.state.user.id);
    const userevents = computed(() => store.state.userevents);

    getUserEvents();

    return {
      getUserEvents,
      userevents,
    };
  },
};
</script>

<style lang="sass" scoped></style>