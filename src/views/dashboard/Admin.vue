<template>
  <div class="text-center banner">
    <div class="container p-5">
      <div class="p-5">
        <h1>Admin DashBoard</h1>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row pb-5">
        <div class="col-md-4">
          <!-- <counter title="Total Events" :value="insights.totalEvents"></counter> -->
          <br />
        </div>

        <div class="col-md-4">
          <!-- <counter
            title="Joined Events"
            :value="insights.totalEventJoined"
          ></counter> -->
        </div>
        <br />
        <div class="col-md-4">
          <!-- <counter
            title="Upcoming Events"
            :value="insights.totalUpcomingEvents"
          ></counter> -->
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="container pt-5">
        <h5 class="pb-5">All Events</h5>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <EventTable :events="events.data" :isAdmin="true" />
            </div>
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
  name: "Admin",
  components: { EventTable, Counter },

  setup() {
    const store = useStore();
    const events = computed(() => store.state.events);

    console.log(events);
    return { events };
  },
};
</script>

<style lang="css" scoped></style>