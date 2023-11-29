//路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import Community from "../components/community/community.vue"
import InCircle from "../components/community/inCircle.vue"
import Player from "../components/record/player.vue"

const routers = [
    {
        path: '/player',
        name: "player",
        component: Player,
    },
    {
        path: '/community',
        name: "community",
        component: Community,
    },
    {
        path: '/inCircle',
        name: "inCircle",
        component: InCircle,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routers,
});

export default router;