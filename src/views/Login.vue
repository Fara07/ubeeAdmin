<!-- <template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full">
      <div>
        <button
          class="w-full flex justify-center py-3 px-4 border border-gray-300 font-medium rounded-md text-gray-900 bg-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            class="h-6 w-6 mr-2"
          >
            <g>
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </g>
          </svg>
          Sign in with Google
        </button>
      </div>

      <div class="flex items-center justify-center space-x-2 my-4">
        <span class="h-px w-full bg-gray-300"></span>
        <span class="px-2 text-gray-500">or</span>
        <span class="h-px w-full bg-gray-300"></span>
      </div>

      <form
        class="space-y-4"
        @submit.prevent="$router.push({ name: 'dashboard' })"
      >
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            class="w-full py-4 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Email address"
            required=""
          />
        </div>

        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            class="w-full py-4 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            placeholder="Password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-0 border-gray-300 rounded cursor-pointer"
            />
            <label
              for="remember-me"
              class="ml-2 block text-sm text-gray-900 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-4 px-6 border border-transparent font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>

      <div class="mt-2 text-sm text-gray-600">
        Not registered yet?
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
          >Create an account</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script> -->

<!-- <template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto"
      ><form>
        <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          :counter="10"
          label="Name"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="state.email"
          :error-messages="v$.email.$errors.map((e) => e.$message)"
          label="E-mail"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
          variant="outlined"
        ></v-text-field>

        <v-select
          v-model="state.select"
          :items="items"
          :error-messages="v$.select.$errors.map((e) => e.$message)"
          label="Item"
          required
          @change="v$.select.$touch"
          @blur="v$.select.$touch"
          variant="outlined"
        ></v-select>

        <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map((e) => e.$message)"
          label="Do you agree?"
          required
          @change="v$.checkbox.$touch"
          @blur="v$.checkbox.$touch"
        ></v-checkbox>

        <v-btn class="me-4 btn btn-primary" @click="v$.$validate">
          submit
        </v-btn>
        <v-btn class="btn btn-danger" @click="clear"> clear </v-btn>
      </form></v-sheet
    >
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const initialState = {
  name: "",
  email: "",
  select: null,
  checkbox: null,
};

const state = reactive({
  ...initialState,
});

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const rules = {
  name: { required },
  email: { required, email },
  select: { required },
  items: { required },
  checkbox: { required },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script> -->

<!-- <template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field
          variant="outlined"
          v-model="username"
          label="User Name"
          required
        ></v-text-field>

        <v-text-field
          variant="outlined"
          v-model="password"
          label="password"
          type="password"
          required
        ></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Your login logic here
    },
  },
};
</script> -->

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <div class="d-flex justify-content-center align-items-center my-4">
        <svg
          width="150"
          height="150"
          viewBox="0 0 140 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M108.327 18.0022H108.284V18.0307L98.104 24.4705V67.3974H108.284V104.146C108.3 109.736 107.696 115.31 106.485 120.767C105.368 125.731 103.502 130.168 100.936 133.956C98.4878 137.571 95.2854 140.391 91.1443 142.578C87.058 144.739 81.6579 145.835 75.0931 145.835C68.5282 145.835 63.1303 144.739 59.0418 142.578C54.9029 140.385 51.7027 137.573 49.2505 133.954C46.693 130.179 44.8286 125.731 43.71 120.765C42.4995 115.308 41.8963 109.735 41.9114 104.146V49.6814C41.9102 41.2786 38.5714 33.2203 32.6293 27.279C26.6872 21.3377 18.6284 18 10.2256 18L0 24.4683V67.3974H10.2256V113.239C10.2256 122.232 11.3706 130.912 13.6298 139.007C15.9657 147.395 19.7471 154.903 24.8687 161.321C30.0802 167.851 38.1387 171.195 45.2826 176.949C50.2858 180.98 53.1679 183.404 75.1128 182.684C86.6303 182.305 96.6717 180.754 104.943 176.949C113.278 173.112 120.148 167.851 125.355 161.314C130.47 154.901 134.253 147.395 136.596 138.999C138.855 130.883 140 122.215 140 113.231V49.6814C139.999 41.281 136.662 33.225 130.722 27.2844C124.783 21.3439 116.728 18.0051 108.327 18.0022Z"
            fill="url(#paint0_linear_516_298705)"
          />
          <path
            d="M98.0689 24.4683V110.616C98.0829 116.205 97.4775 121.779 96.2637 127.235C95.1473 132.199 93.2807 136.636 90.7144 140.424C88.271 144.039 85.0774 146.86 80.9297 149.042C76.8434 151.203 71.4411 152.297 64.8784 152.297C58.3158 152.297 52.9135 151.2 48.825 149.04C44.6882 146.847 41.4859 144.035 39.0358 140.415C36.4696 136.63 34.603 132.192 33.4844 127.227C32.2747 121.771 31.6723 116.198 31.688 110.609V56.1562C31.688 51.9949 30.8683 47.8743 29.2759 44.0298C27.6834 40.1852 25.3493 36.692 22.4068 33.7495C19.4643 30.807 15.971 28.4728 12.1265 26.8804C8.2819 25.2879 4.16132 24.4683 0 24.4683V113.231C0 122.223 1.14715 130.903 3.40634 138.999C5.74231 147.386 9.52372 154.894 14.6431 161.312C19.8568 167.853 26.7243 173.112 35.057 176.949C43.3195 180.754 53.3543 182.684 64.8872 182.684C76.4201 182.684 86.4439 180.754 94.7174 176.949C103.052 173.112 109.92 167.85 115.129 161.314C120.244 154.901 124.025 147.395 126.368 138.999C128.659 130.602 129.799 121.934 129.757 113.231V56.1562C129.757 47.7521 126.418 39.6921 120.476 33.7495C114.533 27.8068 106.473 24.4683 98.0689 24.4683Z"
            fill="url(#paint1_linear_516_298705)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_516_298705"
              x1="27.5625"
              y1="26.3229"
              x2="141.336"
              y2="92.1094"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AA3699" />
              <stop offset="1" stop-color="#1F4BE6" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_516_298705"
              x1="25.5461"
              y1="32.4581"
              x2="132.82"
              y2="92.3449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#CC5FBC" />
              <stop offset="1" stop-color="#6D8AEF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <v-form fast-fail @submit.prevent="submit">
        <v-text-field
          variant="outlined"
          v-model="username"
          label="User Name"
          required
        ></v-text-field>

        <v-text-field
          variant="outlined"
          v-model="password"
          label="password"
          type="password"
          required
        ></v-text-field>

        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
import { ref } from "vue";

import router from "../router";
import axios from "axios";

export default {
  setup() {
    const username = ref("");
    const password = ref("");

    const submit = () => {
      axios
        .post("https://api.ubee.pro/Administrator/Login", {
          userName: username.value,
          password: password.value,
        })
        .then((response) => {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          router.push("/dashboard");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return {
      username,
      password,
      submit,
    };
  },
};
</script>
