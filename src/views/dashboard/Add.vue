<template>
  <div class="text-center banner p-3">
    <div class="container p-5">
      <div class="row p-5">
        <div class="col-md-12">
          <div class="card card-custom">
            <div class="container p-5">
              <div class="p-5">
                <div class="text-center pb-3">
                  <h5 class="authBtn">{{ status }}</h5>
                  <small class="authBtnInner"
                    >Create and sell your events around the world in
                    seconds.</small
                  >
                  <hr />
                </div>

                <form @submit.prevent="submit">
                  <div class="form-group">
                    <input
                      type="text"
                      name="title"
                      v-model="title"
                      class="form-control"
                      placeholder="Title"
                    />
                    <span class="text-danger">{{ titleError }}</span>
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="description"
                      type="text"
                      size="20"
                      name="description"
                      class="form-control"
                      placeholder="Description"
                    ></textarea>
                    <span class="text-danger">{{ descriptionError }}</span>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="price"
                      type="number"
                      min="0"
                      name="price"
                      class="form-control"
                      placeholder="Ticket Price"
                    />
                    <span class="text-danger">{{ priceError }}</span>
                  </div>
                  <div class="form-group">
                    <input
                      type="date"
                      v-model="date"
                      class="form-control"
                      placeholder="Event Date"
                      name="date"
                    />
                    <span class="text-danger">{{ dateError }}</span>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block customBtn"
                  >
                    Save Events
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useForm, useField } from "vee-validate";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { object, string, date, number } from "yup";

export default {
  name: "Add",

  setup() {
    const store = useStore();
    const router = useRouter();

    const event = ref({});
    const updating = ref(false);
    // const eventObj = ref({});

    const schema = object({
      title: string(),
      description: string(),
      price: number(),
      date: date(),
    });

    useForm({
      validationSchema: schema,
    });

    const { value: title, errorMessage: titleError } = useField("title");
    const { value: description, errorMessage: descriptionError } = useField(
      "description"
    );
    const { value: price, errorMessage: priceError } = useField("price");
    const { value: date, errorMessage: dateError } = useField("date");

    const status = computed(() =>
      updating ? "Update Event" : "Create New Event"
    );

    const updateEvent = async () => {
      const data = [];
      data.id = event.id;
      data.payload = event;
      try {
        await store.dispatch("updateEvent", data);
        return router.push(-1);
      } catch (error) {
        console.log(error);
      }
    };

    const createEvent = async () => {
      try {
        await store.dispatch("createEvent", this.event);
        return router.push(-1);
      } catch (error) {
        console.log(error);
      }
    };

    const submit = async () => {
      if (updating) {
        updateEvent();
      } else {
        createEvent();
      }
    };

    onBeforeRouteEnter((to, from, next) => {
      if (to.query.event) {
        next((vm) => {
          vm.updating = true;
          vm.event = store.getters.getEvent(to.query.event);
        });
      }
    });
    onBeforeRouteUpdate((to, from, next) => {
      this.event = {};
      if (to.query.event) {
        this.updating = true;
        this.event = store.getters.getEvent(to.query.event);
      }
      next();
    });

    return {
      submit,
      title,
      status,
      titleError,
      description,
      descriptionError,
      price,
      priceError,
      date,
      dateError,
    };
  },
};
</script>

<style lang="css" scoped></style>