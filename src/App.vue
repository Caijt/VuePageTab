<template>
  <div id="app">
    <el-button @click="go('/a')">/a</el-button>
    <el-button @click="go('/b')">/b</el-button>
    <el-button @click="go('/c')">/c</el-button>
    <el-button @click="go('/d')">/d</el-button>
    <el-button @click="go('/a?v=123')">/a?v=123</el-button>
    <el-button @click="go('/b?v=123')">/b?v=123</el-button>
    <page-tabs :keep-alive-component-instance="keepAliveComponentInstance" />
    <div ref="keepAliveContainer">
      <keep-alive>
        <router-view :key="$route.fullPath" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import pageTabs from "./components/pageTabs.vue";
export default {
  name: "App",
  components: {
    pageTabs,
  },
  mounted() {
    if (this.$refs.keepAliveContainer) {
      this.keepAliveComponentInstance = this.$refs.keepAliveContainer.childNodes[0].__vue__;
    }
  },
  data() {
    return {
      keepAliveComponentInstance: null,
    };
  },
  methods: {
    go(path) {
      if (path != this.$route.fullPath) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
