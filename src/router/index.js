import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/register/index.vue"),
  },
  {
    path: "/care",
    component: () => import("@/care-layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/care-worker/home/index.vue"),
      },
      {
        path: "manage",
        component: () => import("@/views/care-worker/manage/index.vue"),
      },
      {
        path: "day-task-every",
        component: () => import("@/views/care-worker/day-task/index.vue"),
      },
      {
        path: "day-task-spec",
        component: () => import("@/views/care-worker/day-task/index.vue"),
      },
      {
        path: "day-task-update",
        component: () => import("@/views/care-worker/day-task/update.vue"),
      },
      {
        path: "leave",
        component: () => import("@/views/care-worker/leave/index.vue"),
      },
      {
        path: "setting",
        component: () => import("@/views/care-worker/setting/index.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/admin-layout/index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/admin-worker/home/index.vue"),
      },
      {
        path: "care-manage",
        component: () => import("@/views/admin-worker/care-manage/index.vue"),
      },
      {
        path: "care-manage-update",
        component: () => import("@/views/admin-worker/care-manage/update.vue"),
      },
      {
        path: "older-manage",
        component: () => import("@/views/admin-worker/older-manage/index.vue"),
      },
      {
        path: "sickbed-manage",
        component: () =>
          import("@/views/admin-worker/sickbed-manage/index.vue"),
      },
      {
        path: "sickroom-manage",
        component: () =>
          import("@/views/admin-worker/sickroom-manage/index.vue"),
      },
      {
        path: "nursing-manage",
        component: () =>
          import("@/views/admin-worker/nursing-manage/index.vue"),
      },
      {
        path: "leave",
        component: () => import("@/views/admin-worker/leave/index.vue"),
      },
      {
        path: "setting",
        component: () => import("@/views/admin-worker/setting/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/register") {
    next();
  } else {
    if (store.state.userInfo.phone !== "") {
      if (to.path === "/") {
        if (store.state.userInfo.role === "admin") {
          next("/admin");
        } else {
          next("/care");
        }
      } else {
        next();
      }
    } else {
      next("/login");
    }
  }
});

export default router;
