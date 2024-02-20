<!-- <template>
  <div class="edit-header flex justify-center items-center">
    <div class="text-center">
      <div v-for="user in userList" :key="user.id">
        -
        <img
          class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          :src="user.avatar"
          alt=""
        />
      </div>

      <div>
        <h1>Редактирование пользователя</h1>
      </div>
      <div><p>John Parker</p></div>
      <div><button class="btn">Назад</button></div>
    </div>
  </div>

  <div class="flex justify-center items-center mt-3">
    <div class="edit-page bg-blue-700m flex justify-center items-center">
      <form @submit.prevent="submitForm" class="w-[475px]">
        <div class="mb-4">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-600"
            >Имя</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div class="mb-4">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-600"
            >Телефон</label
          >
          <input
            type="text"
            id="phone"
            v-model="form.phone"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div class="mb-4">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-600"
            >Адрес</label
          >
          <textarea
            id="address"
            v-model="form.address"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label
            for="avatar"
            class="block mb-2 text-sm font-medium text-gray-600"
            >Фотография</label
          >
          <input
            type="file"
            id="avatar"
            @change="uploadAvatar"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div class="mb-4">
          <label
            for="specialization"
            class="block mb-2 text-sm font-medium text-gray-600"
            >Специализация</label
          >
          <select
            id="specialization"
            v-model="form.specialization"
            class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="photographer">Фотограф</option>
          </select>
        </div>
        <button
          type="submit"
          class="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Сохранить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        address: "",
        avatar: null,
        specialization: "photographer",
      },
    };
  },

  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log(this.form);
    },
    uploadAvatar(event) {
      this.form.avatar = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.edit-header {
  height: 286px;
  background: #4b5563cc;
}
.edit-page {
  width: 1000px;
  height: 878px;
  background: #ffffff;
}
</style> -->

<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (value) => {
        if (value) return true;

        return "Name is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Name must be less than 10 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),
};
</script>
