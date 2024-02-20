import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/components/Sidebar.vue"),

    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/dashboard/Home.vue"),
      },
      {
        path: "masters",
        name: "master-list",
        component: () => import("@/views/dashboard/MasterList.vue"),
      },
      {
        path: "edit",
        name: "edit-list",
        component: () => import("@/views/dashboard/EditPage.vue"),
      },
      {
        path: "service",
        name: "service-page",
        component: () => import("@/views/dashboard/ServicePage.vue"),
      },
      {
        path: "goods",
        name: "goods-page",
        component: () => import("@/views/dashboard/Goods.vue"),
      },
      {
        path: "review",
        name: "review-page",
        component: () => import("@/views/dashboard/Review.vue"),
      },
      {
        path: "users",
        name: "user-page",
        component: () => import("@/views/dashboard/UserList.vue"),
      },
      {
        path: "appointments",
        name: "appointment-page",
        component: () => import("@/views/dashboard/Appointment.vue"),
      },
      {
        path: "specializations",
        name: "specialization-page",
        component: () => import("@/views/dashboard/Specialization.vue"),
      },

      {
        path: "settings",
        name: "settings-page",
        component: () => import("@/views/dashboard/Settings.vue"),
      },
      {
        path: "reports",
        name: "reports-page",
        component: () => import("@/views/dashboard/Report.vue"),
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
