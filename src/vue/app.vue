<template>
  <main>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <p>It's a new Vue.js app!</p>
  </main>
</template>

<style lang='scss'>
* {
  box-sizing: border-box;
}

body {
  background: #eee;
  font-family: sans-serif;
}

main {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      title: 'Vue App',
    };
  },
};
</script>
