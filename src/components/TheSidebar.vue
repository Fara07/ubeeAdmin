<template>
  <div class="relative flex min-h-screen">
    <!-- sidebar -->
    <div class="w-52">
      <div
        class="flex justify-start items-center h-[64px]"
        style="background: #232e3e"
      >
        <router-link to="/">
          <h1 class="text-white text-left px-2.5">Ubee</h1>
        </router-link>
      </div>

      <div class="menu h-full" style="background: #1f2937">
        <router-link to="/">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Главная страница
          </p>
        </router-link>

        <router-link to="/masters">
          <p
            class="hover:bg-gray-700 px-2 py-2.5 text-sm uppercase"
            style="color: #7186a3"
          >
            Таблица мастеров
          </p>
        </router-link>

        <router-link to="/service">
          <p
            class="hover:bg-gray-700 text-sm px-2.5 py-2 uppercase"
            style="color: #7186a3"
          >
            Таблица услуги
          </p>
        </router-link>

        <router-link to="/goods">
          <p
            class="hover:bg-gray-700 text-sm fond-normal px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Таблица товаров
          </p>
        </router-link>

        <router-link to="/review">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Таблица отзывов
          </p>
        </router-link>

        <router-link to="/appointments">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Таблица записей
          </p>
        </router-link>

        <router-link to="/specializations">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase whitespace-nowrap"
            style="color: #7186a3"
          >
            Таблица специализаций
          </p>
        </router-link>

        <router-link to="/settings">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Настройки
          </p>
        </router-link>

        <router-link to="/reports">
          <p
            class="hover:bg-gray-700 text-sm px-2 py-2.5 uppercase"
            style="color: #7186a3"
          >
            Отчёты
          </p>
        </router-link>
      </div>
    </div>

    <!-- main content -->
    <div class="flex-1">
      <!-- header -->
      <div
        class="h-[64px] flex justify-end items-center px-8"
        style="background: #ffffff"
      >
        <button class="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <Menu as="div" class="relative">
          <MenuButton
            class="flex items-center justify-between space-x-2 py-3 px-2 text-sm w-[163px] h-[40px] rounded-lg"
            style="background: #ebeef2"
          >
            <div>
              <img
                class="h-[28px] w-[28px] inline-block"
                src="@/assets/images/Elipse.png"
                alt=""
              />
              <span class="ps-2">Админ</span>
            </div>

            <div>
              <img src="@/assets/icons/vniz.svg" alt="" />
            </div>
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-200' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-200' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
              </div>
              <MenuItem v-slot="{ active }">
                <router-link
                  :to="{ name: 'login' }"
                  :class="[
                    active ? 'bg-gray-200' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  ]"
                  >Sign out</router-link
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <!-- content -->
      <div class="h-full" style="background: #ebeef2">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
};
</script>
<style scoped></style>
