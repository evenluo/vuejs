<template lang="html">
  <header>
    <div class="content">
      <nav>
        <ul>
          <li><router-link :to="{ name: 'home' }">DoT</router-link></li>
          <li><router-link :to="{ name: 'join' }">加入我们</router-link></li>
          <li><router-link :to="{ name: 'about'}">关于</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
header {
  padding: 0px;
  margin: 0px;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgb(229, 229, 229);
  height: 44px;
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 1000;

  .content {
    margin: 0 auto;
    max-width: 1100px;
  }

  nav {
    ul {
      list-style: none;
      float: left;
      li {
        float: left;
        padding: 0 15px;
        font-weight: bold;
        a {
          color: black;
          text-decoration: none;
          &:hover {
            color: #4078c0;
            text-decoration: none;
          }
          &.active {
            color: #4078c0;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
