<template>
  <div class="text-center banner">
    <div class="container p-5">
      <div class="p-5">
        <h1>Welcome to Ticketing System</h1>
        <p>
          Find events around you, register for free event, buy tickets, sell
          tickets online and promote your event worldwide.
        </p>
      </div>
    </div>
    <div class="container pb-5">
      <Events />
    </div>
  </div>
</template>


<script>
import Events from "../components/Events.vue";
export default {
  components: {
    Events,
  },
};
</script>