<template>
  <aside class="hidden w-64 sm:block">
    <div class="aside-logo h-[64px] py-2 px-4 flex justify-start items-center">
      <router-link to="/">
        <h1 class="text-white text-left">Ubee Admin</h1>
      </router-link>
    </div>

    <div>
      <router-link to="/">
        <p class="hover:bg-gray-700 px-4 py-3 hover: text-white uppercase mt-4">
          Главная страница
        </p>
        <p></p>
      </router-link>
    </div>
    <div>
      <router-link to="/users">
        <p class="hover:bg-gray-700 px-4 py-3 hover: text-white uppercase">
          Таблица мастеров
        </p>
      </router-link>
    </div>
    <div>
      <router-link to="/service">
        <p class="hover:bg-gray-700 px-4 py-3 hover: text-white uppercase">
          Таблица услуги
        </p>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {};
</script>
<style scoped>
.aside-logo {
  background: #232e3e;
}
aside {
  background: #1f2937;
}
</style>
