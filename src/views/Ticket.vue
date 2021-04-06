<template>
  <div class="text-center banner p-3 pb-5">
    <div class="container pb-5">
      <div class="row pb-5">
        <div class="col-md-8 col-12 pb-5">
          <div class="card card-custom p-5">
            <h5 class="authBtn">{{ event.title }}</h5>
            <hr />

            <div class="container">
              <small class="authBtnInner pb-3">{{ event.description }}</small>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-12">
          <div class="card card-custom p-5">
            <h5 class="authBtn">Event Ticket</h5>
            <hr />
            <span>Event Date:</span>
            <small class="authBtnInner pb-3">
              {{ event.date }}
            </small>
            <hr />
            <span>Event Price:</span>
            <small class="authBtnInner pb-3">${{ event.ticket_price }}</small>
            <router-link to="/" class="btn btn-primary customBtn"
              >Buy Ticket</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "Ticket",

  setup() {
    const store = useStore();
    const route = useRoute();
    const event = computed(() => store.getters.getEvent(route.params.id));

    return { event };
  },
};
</script>