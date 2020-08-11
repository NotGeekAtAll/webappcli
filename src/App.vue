<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  line-height: 1.6;
  font-size: 14PX;
  font-family: -apple-system-font, 'Helvetica Neue', sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

a img {
  border: 0;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
