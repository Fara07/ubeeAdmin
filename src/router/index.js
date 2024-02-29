import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/components/Sidebar.vue"),

    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/dashboard/Home.vue"),
      },
      {
        path: "/masters",
        name: "master-list",
        component: () => import("@/views/dashboard/MasterList.vue"),
      },

      {
        path: "/customers",
        name: "customer-page",
        component: () => import("@/views/dashboard/CustomerList.vue"),
      },
      {
        path: "/appointments",
        name: "appointment-page",
        component: () => import("@/views/dashboard/Appointment.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = sessionStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  next();
});

export default router;
