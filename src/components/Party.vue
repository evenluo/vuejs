<template lang="html">
  <div class="container">
    <canvas id="canvas" width="300" height="400">

    </canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    var canvas = document.getElementById('canvas')
    var ctx = null
    if (canvas.getContext) {
      ctx = canvas.getContext('2d')
      var image = new Image()
      image.src = 'http://manhattan.oss-cn-shanghai.aliyuncs.com/slogan.png'
      image.onload = function () {
        ctx.drawImage(image, 50, 50, 100, 20)
      }
    } else {

    }
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">

.btn-center {
  display: inherit;
  margin: 10px auto;
}

</style>
