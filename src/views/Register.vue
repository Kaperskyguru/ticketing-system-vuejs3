<template>
  <div class="text-center banner p-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-custom p-5">
            <div class="container">
              <div class="pb-5">
                <div class="text-center pb-3">
                  <h5 class="authBtn">Register</h5>
                  <small class="authBtnInner">
                    Equipped with the cutting edge features that make a 21st
                    Century Ticketing Platform,
                  </small>
                  <hr />
                </div>

                <form @submit.prevent="register">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="name"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                    />
                    <span class="text-danger">
                      {{ nameError }}
                    </span>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                    />
                    <span class="text-danger">
                      {{ emailError }}
                    </span>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                    />
                    <span class="text-danger">
                      {{ passwordError }}
                    </span>
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="password_confirmation"
                      class="form-control"
                      placeholder="Confirm Password"
                      name="password_confirmation"
                    />
                    <span class="text-danger">
                      {{ password_confirmationError }}
                    </span>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block customBtn"
                  >
                    Signup
                  </button>
                </form>
              </div>
              <p>
                Already registered?
                <router-link to="/login">Login</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { useForm, useField } from "vee-validate";
import { object, string, ref as yupRef } from "yup";

export default {
  setup() {
    const schema = object({
      email: string().required().email(),
      password: string().required().min(8),
      password_confirmation: string().oneOf(
        [yupRef("password"), null],
        "Passwords must match"
      ),
      name: string().required(),
    });

    useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField("email");
    const {
      value: password_confirmation,
      errorMessage: password_confirmationError,
    } = useField("password_confirmation");
    const { value: password, errorMessage: passwordError } = useField(
      "password"
    );
    const { value: name, errorMessage: nameError } = useField("name");

    return {
      emailError,
      email,
      nameError,
      name,
      passwordError,
      password,
      password_confirmationError,
      password_confirmation,
    };
  },
};
</script>