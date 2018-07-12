<template>
<main id="tournament">
  <div class="routea">
    <Round :items="itemsA" title="LAST 16" className="round-1"/>
    <Round :items="qfA" title="QUARTER FINAL" className="round-2"/>
    <Round :items="sfA" title="SEMI FINAL" className="round-3"/>
  </div>
  <div class="final">
    <ul class="round">
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li data-v-f947c3a8="" class="game game-top winner"><img src="https://aqueous-spire-90124.herokuapp.com/icons/FRA.png" alt="FRA"> FRANCE
        <span data-v-f947c3a8="">1</span> </li>
    </ul>
    <ul class="round">
            <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer">&nbsp;</li>
      <li class="spacer title" v-bind:style="{marginLeft:'-22px',paddingBottom:'20px',textAlign:'left'}">FINAL</li>
      <li class="game game-top"><span v-bind:style="{float:'left',marginRight:'20px'}">0</span> CROATIA <img src="https://aqueous-spire-90124.herokuapp.com/icons/CRO.png" alt="CRO">
         </li>
    </ul>
    </ul>
  </div>
  <div class="routeb">
    <Round :items="itemsB" title="LAST 16" className="round-1"/>
    <Round :items="qfB" title="QUARTER FINAL" className="round-2"/>
    <Round :items="sfB" title="SEMI FINAL" className="round-3"/>
  </div>
</main>
</template>

<script>
import Round from './components/Round';
import {
  KO
} from './data/data';
export default {
  name: 'App',
  components: {
    Round
  },
  data() {
    return {
      itemsA: KO["routeA"]["last16"],
      qfA : KO["routeA"]["last8"],
      sfA : KO["routeA"]["last4"],
      itemsB: KO["routeB"]["last16"],
      qfB : KO["routeB"]["last8"],
      sfB : KO["routeB"]["last4"]
    }
  }
}
</script>

<style>

body {
  font-family: sans-serif;
  font-size: small;
  padding: 10px;
  line-height: 1.4em;
}

.final {
  display: -ms-flexbox;
  display: inline-flex;
  justify-content: end;
}

.routea , .routeb{
  display: -ms-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
  flex-direction: row;
}

.routeb {
  flex-direction: row-reverse;
}

.round.round-2,
.round.round-3 {
  -ms-flex-pack: start;
  justify-content: start;
}
.round.round-2 .game-spacer {
  min-height: 96px;
}
.round.round-3 .game-spacer {
  min-height: 208px;
}
.round.round-3 div:first-of-type {
  margin-top: 60px;
}
.round.round-2 div:first-of-type {
  margin-top: 20px;
}
.round.round-2 div {
  margin-top: 40px;
}
.round.round-3 div {
  margin-top: 120px;
}
.title {
  color: red;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.round  {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 170px;
  list-style: none;
  padding: 0;
}

.final .round {
  width: 150px;
}

.round .spacer {
  -ms-flex-positive: 1;
  flex-grow: 1;
}
.round .spacer:first-child,
.round .spacer:last-child{
  -ms-flex-positive: 0.5;
  flex-grow: 0.5;
}
.round .game-spacer {
  -ms-flex-positive: 1;
  flex-grow: 1;
}
li.game {
  padding-left: 20px;
}
li.game.winner {
  font-weight: 700;
}
li.game span {
  float: right;
  margin-right: 8px;
}
li.game-top {
  border-bottom: 1px solid #aaa;
}
.routea li.game-spacer {
  border-right: 1px solid #aaa;
  min-height: 40px;
}

.routeb li.game-spacer {
  border-left: 1px solid #aaa;
  min-height: 40px;
}

li.game-bottom {
  border-top: 1px solid #aaa;
}

img {
  width: 28px;
  margin-bottom: -2px;
}

.round-3 {
  width: 150px;
}

.round-2 {
  width: 175px;
}

.routea .round.round-3 {
  margin-right: -4px;
}

.routeb .round.round-3 {
  margin-left: -4px;
}

</style>
