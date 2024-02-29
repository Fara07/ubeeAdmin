<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      style="background: #1f2937"
      width="240"
      permanent
    >
      <v-list-item
        to="/dashboard"
        title="UbeeAdmin"
        style="background: #232e3e"
        height="64"
      >
      </v-list-item>

      <v-list>
        <v-list-item to="/masters" class="text-uppercase">
          <h1>Таблица мастеров</h1>
        </v-list-item>
        <v-list-item to="/customers" class="text-uppercase"
          ><h1>Таблица клиентов</h1>
        </v-list-item>
        <v-list-item to="/appointments" class="text-uppercase"
          ><h1>Таблица записей</h1>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="px-4">
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">Админ</v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="item.action"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main style="background: #ebeef2">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: true,
      items: [
        { title: "LogOut", route: "/login", action: "logout" },
        { title: "Settings" },
        { title: "Profile" },
      ],
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem();
      console.log(logout);
    },
  },
};
</script>
<style scoped>
.v-list-item {
  color: #7186a3;
}
.v-list-item h1 {
  line-height: 42px;
  font-size: 12px;
  margin-bottom: 0;
}
.v-layout {
  overflow: hidden;
}
</style>
