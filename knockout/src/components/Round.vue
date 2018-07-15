<template>
<ul :class="{'round' : true , [className] : true}">
  <li class="title">{{title}}</li>
  <Match v-for="item in items" v-bind:key="item.id" v-bind:item="item"></Match>
</ul>
</template>

<script>
import Match from './Match';

export default {
  name: 'Round',
  components: {
    Match
  },
  props: ['items', 'title', 'className'],
  data() {
    return {
      msg: ''
    }
  }
}
</script>


<style>

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

.round {
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
.round .spacer:last-child {
  -ms-flex-positive: 0.5;
  flex-grow: 0.5;
}

.round .game-spacer {
  -ms-flex-positive: 1;
  flex-grow: 1;
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

.title {
  color: red;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
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

li.game-bottom {
  border-top: 1px solid #aaa;
}

</style>
