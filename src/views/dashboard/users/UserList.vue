<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">User List</h2>

    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700"
        >Главная</router-link
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
      >
        <path
          d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
          fill="#CCD4DE"
        />
      </svg>
      <span class="text-gray-600">Таблица пользователей</span>
    </div>
  </div>

  <div class="p-4 mt-8 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="flex justify-end">
        <div class="me-2">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              id="search"
              name="search"
              type="search"
              class="w-full py-2 text-sm text-gray-900 rounded-md pl-10 border border-gray-300 focus:outline-none focus:ring-gray-500 focus:ring-gray-500 focus:z-10"
              placeholder="Search user"
            />
          </div>
        </div>
        <div>
          <div>
            <button
              class="flex items-center bg-green-500 p-2 text-white rounded text-sm hover:bg-green-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>

              Создать запись
            </button>
          </div>
        </div>
      </div>
      <!-- Table header -->
      <table class="w-full mt-2 text-gray-500">
        <thead class="border-b">
          <tr>
            <th class="text-left text-gray-600 uppercase">Id</th>
            <th class="text-left text-gray-600 uppercase">Имя</th>
            <th class="text-left text-gray-600 uppercase">Рейтинг</th>
            <th class="text-left text-gray-600 uppercase">Данные</th>
            <th class="text-left text-gray-600 uppercase">Адресс</th>
            <th class="text-left text-gray-600 uppercase">Опыт работы</th>
            <th class="text-left text-gray-600 uppercase">Дата регистрации</th>
            <th class="text-right text-gray-600 uppercase">Дата обновления</th>
          </tr>
        </thead>
        <!-- Table body -->
        <tbody class="divide-y divide-gray-200">
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>

            <td class="flex items-center py-4">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                :src="user.avatar"
                alt=""
              />
              <div class="px-4">
                <div>
                  <a href="#" class="text-gray-600 font-bolder">{{
                    user.name
                  }}</a>
                </div>
                <div class="font-bold text-sm">
                  {{ user.role }}
                </div>
              </div>
            </td>

            <td class="mx-4">{{ user.rate }}</td>

            <td class="flex items-center">
              <div class="px-4">
                <div>
                  <a href="#" class="text-gray-600 font-bolder">{{
                    user.name
                  }}</a>
                </div>
                <div class="font-bold text-sm">
                  {{ user.role }}
                </div>
              </div>
            </td>

            <td>{{ user.adress }}</td>

            <td>{{ user.experience }}</td>

            <td class="px-4">{{ user.registrationDate }}</td>
            <td class="px-4">{{ user.updateDate }}</td>
            <td class="px-8">
              <div>
                <img src="@/assets/icons/pajamas_settings.png" alt="" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import userList from "@/data/users/userList.json";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  setup() {
    const selectAll = ref(false);

    return {
      userList,
      selectAll,
    };
  },
};
</script>
