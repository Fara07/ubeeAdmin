import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),

    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/dashboard/Home.vue"),
      },
      {
        path: "users",
        name: "user-list",
        component: () => import("@/views/dashboard/users/UserList.vue"),
      },
      {
        path: "edit",
        name: "edit-list",
        component: () => import("@/views/dashboard/modal/EditPage.vue"),
      },
      {
        path: "service",
        name: "service-page",
        component: () => import("@/views/dashboard/service/ServicePage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
