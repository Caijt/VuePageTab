<template>
  <div>A:{{ $route.fullPath }}<el-input v-model="value" /></div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>