<template>
  <div class="container">
    <div class="jumbotron" style="background-color: #f5f5f5">
      <div class="container">
        <h1 class="slidein-slow">Hello, DoT</h1>
        <p class="slidein-fast">
          Hey, you look nice, Let's have fun together  :-D
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 t-center">
          <div class="thunbnail lower-margin">
            <img src="../assets/home/1.svg" style="height: 123px;"/>
            <div class="caption">
              <h3>成长记录</h3>
              <p>
                回望来时的路，每一步都有你的身影
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 t-center">
          <div class="thunbnail lower-margin">
            <img src="../assets/home/3.svg" style="height: 123px;"/>
            <div class="caption">
              <h3>信用令牌</h3>
              <p>
                我爱干净，我不随地大小便
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 t-center">
          <div class="thunbnail lower-margin">
            <img src="../assets/home/2.svg" style="height: 123px;"/>
            <div class="caption">
              <h3 class="text-align">全能社区</h3>
              <p>
                抚养，交流，成长，生活，全都有！
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>

</template>

<style>
.lower-margin {
  margin-bottom: 30px;
}

.t-center {
  text-align: center;
}

.slidein-slow {
  margin-left: -100px;
  animation: 3s forwards slidein;
}

.slidein-fast {
  margin-left: -100px;
  animation: 2s forwards slidein;
}



@keyframes slidein {
  form {
    margin-left: -100px;
  }

  to {
    margin-left: 0px;
  }
}
</style>
