<template>
  <div id="app">
    <Navigator></Navigator>
    <div style="margin-top: 44px;">
			<router-view></router-view>
    </div>
	</div>
</template>

<script>
import Navigator from './components/Navigator'

export default {
  components: {
    Navigator
  }
}
</script>

<style>
body {
	background-color: #ffffff;
	height: auto;
}

ul {
	margin-top: 10px;
}
</style>
