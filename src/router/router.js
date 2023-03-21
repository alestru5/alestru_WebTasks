import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import TasksPage from "@/pages/TasksPage.vue";
import BoardPage from "@/pages/BoardPage.vue";
import ChatPage from "@/pages/ChatPage.vue";
import CreatorPage from "@/pages/CreatorPage.vue";
import LoginPage from "@/pages/LoginPage.vue";



const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/board',
    component: BoardPage
  },
  {
    path: '/chat',
    component: ChatPage
  },
  {
    path: '/creator',
    component: CreatorPage
  },
  {
    path: '/login',
    component: LoginPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
