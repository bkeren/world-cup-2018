<template>
  <div class="match">
    <div>
      <div class="flag">
        <img src="https://aqueous-spire-90124.herokuapp.com/icons/RUS.png">
      </div>
      <div class="name">
        RUSSIA
      </div>
      <div class="score">
        0
      </div>
    </div>
    <div>
      <div class="flag">
        <img src="https://aqueous-spire-90124.herokuapp.com/icons/SPA.png">
      </div>
      <div class="name">
        SPAIN
      </div>
      <div class="score">
        0
      </div>
    </div>
    <div>

    </div>
  </div>

</template>

<script>
  /* eslint-disable indent */

  export default {
    name: 'Match',
    data: function () {
     return {
        msg: 'Match'
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .match {
    width: 200px;
    border:1px solid black;
  }

  .flag, .name, .score {
    display: inline-block;
    vertical-align: middle;
  }

  .flag {
    width: 40px;
    padding-top:1px;
  }

  .score {
    padding-bottom: 3px;
    font-size: 18px;
  }

  .name {
    width: 130px;
    padding-bottom: 3px;
    font-size: 18px;
  }

  img {
    width: 32px;
  }


  .match::before {
    content: '';
    position: absolute;
    color: black;
    left: 50%;
    transform: translateX(-50%);
  }



</style>
