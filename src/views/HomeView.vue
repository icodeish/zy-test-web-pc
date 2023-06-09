<script setup>
import { useRouter } from "vue-router";
import { Histogram, ChatLineSquare } from "@element-plus/icons-vue";
import { reactive, ref, onMounted } from "vue";

const currentPath = ref("1-1");
onMounted(() => {
  console.log(1);
  console.log(currentPath.value);
  currentPath.value = localStorage.getItem("currentPath");
});
const arr = [
  {
    id: "1",
    name: "功能功能功能A",
    icon: ChatLineSquare,
    path: "",
    subMenu: [
      {
        id: "1-1",
        name: "功能A-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
  {
    id: "2",
    name: "功能B功能B",
    icon: Histogram,
    path: "",
    subMenu: [
      {
        id: "2-1",
        name: "功能B-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
  {
    id: "3",
    name: "功能功能C",
    icon: Histogram,
    path: "",
    subMenu: [
      {
        id: "3-1",
        name: "功能B-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
  {
    id: "4",
    name: "功能功能功能D",
    icon: Histogram,
    path: "",
    subMenu: [
      {
        id: "4-1",
        name: "功能B-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
  {
    id: "5",
    name: "功能功能E",
    icon: Histogram,
    path: "",
    subMenu: [
      {
        id: "5-1",
        name: "功能E-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
  {
    id: "6",
    name: "功能功能F",
    icon: Histogram,
    path: "",
    subMenu: [
      {
        id: "6-1",
        name: "功能F-功能1",
        icon: Histogram,
        path: "/container",
      },
    ],
  },
];
const menuList = reactive(arr);
const iconList = reactive([
  {
    id: 0,
    path: "../../static/index.png",
    name: "首页",
  },
  {
    id: 1,
    path: "../../static/download.png",
    name: "主数据",
  },
  {
    id: 2,
    path: "../../static/mange.png",
    name: "辖区管理",
  },
]);
</script>

<template>
  <el-container>
    <el-header>
      <div class="head">
        <div>
          <div>
            <img class="img" src="../assets/logo.png" alt="" />
          </div>
          <div class="conpanyname">上海正也医药有限公司</div>
        </div>
        <div class="menulayout">
          <div class="headmenu" v-for="item in iconList">
            <div class="menuimg">
              <img style="width: 30px" :src="item.path" />
            </div>
            <div class="menuname">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          active-text-color="#409EFF"
          router
          :default-active="currentPath"
          v-for="item in menuList"
          :key="item.id"
          background-color="#2A3139"
          text-color="#939393"
        >
          <el-sub-menu
            v-for="item2 in item.subMenu"
            :key="item2.id"
            :index="item2.id"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <el-menu-item @click="select(item2.id)" :index="item2.path + ''">{{
              item2.name
            }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.menulayout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headmenu {
  display: flex;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
}
.menuimg {
  width: 40px;
  height: 40px;
 background-color:#51565C;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}
.menuname{
  margin-left:10px;
  color:#929395;
}
.head {
  display: flex;
}
.el-card {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #2a3139;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
}
.el-aside {
  width: 200px;
  background-color: #2a3139;
}
.el-main {
  background-color: #F5F5F5;
  padding: 0;
}
.img {
  width: 150px;
  height: 30px;
}
.conpanyname {
  color: #929395;
  transform: scale(0.8);
}
</style>
