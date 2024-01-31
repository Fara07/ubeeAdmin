<template>
  <aside class="hidden w-64 bg-gray-800 sm:block">
    <div
      class="py-2 px-4 text-2xl text-left tracking-widest bg-gray-900 border-b-2 border-gray-800 mb-8"
    >
      <router-link to="/" class="text-white text-left">
        <h1>Ubee Admin</h1>
      </router-link>
    </div>
    <div>
      <router-link to="/" class="py-3 hover:bg-gray-700 px-4">
        <a href="">Главная страница</a>
      </router-link>
    </div>

    <router-link to="/users" class="py-3 hover:bg-gray-700 px-4">
      <a href="">Таблица мастеров</a>
    </router-link>
  </aside>
</template>

<script></script>
<style scoped>
a {
  color: white;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 350%;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
