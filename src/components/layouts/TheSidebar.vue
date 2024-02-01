<template>
  <aside class="hidden w-64 sm:block">
    <div class="aside-logo py-2 px-4 flex justify-start items-center">
      <router-link to="/" class="text-white text-left">
        Ubee Admin
      </router-link>
    </div>

    <div>
      <router-link to="/">
        <p class="hover:bg-gray-700 px-4 py-2 hover: text-white">
          Главная страница
        </p>
      </router-link>
    </div>
    <div>
      <router-link to="/users">
        <p class="hover:bg-gray-700 px-4 py-2 hover: text-white">
          Таблица мастеров
        </p>
      </router-link>
    </div>
  </aside>
</template>

<script></script>
<style scoped>
.aside-logo {
  height: 64px;
  background: #232e3e;
}
aside {
  background: #1f2937;
}
</style>
