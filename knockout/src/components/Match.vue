<template>
<div>
  <li class="spacer">&nbsp;</li>
  <li class="game game-top" v-bind:class="{winner: winner() === home}">
    <img :src="getImgUrl(home)" :alt="home"> {{name(home)}}
    <span v-if="!havePenalties">{{homeScore}}</span>
    <span v-for="score in getArray(homeScore)">{{score}}</span>
  </li>
  <li class="game game-spacer">&nbsp;</li>
  <li class="game game-bottom" v-bind:class="{winner: winner() === away}">
    <img :src="getImgUrl(away)" :alt="away"> {{name(away)}}
    <span v-if="!havePenalties">{{awayScore}}</span>
    <span v-for="score in getArray(awayScore)">{{score}}</span>
  </li>
</div>
</template>
<script>
/* eslint-disable indent */
import {
  KO
} from '../data/data';
import {
  COUNTRIES
} from '../data/countries';
export default {
  name: 'Match',
  props: ['title', 'item'],
  data: function() {
    const keys = Object.keys(this._props.item);

    const homeScore = this._props.item[keys[1]];

    const awayScore = this._props.item[keys[2]];

    return {
      count: 0,
      home: keys[1],
      away: keys[2],
      homeScore: homeScore,
      awayScore: awayScore,
      havePenalties: typeof(homeScore) === 'object',

    }
  },
  methods: {
    winner() {
      if (typeof(this.homeScore) === 'number')
        return this.homeScore > this.awayScore ? this.home : this.away

      const homeTotal = this.homeScore.reduce((a, b) => a + b, 0);
      const awayTotal = this.awayScore.reduce((a, b) => a + b, 0);

      return homeTotal > awayTotal ? this.home : this.away;
    },

    getImgUrl(pic) {
      return `https://aqueous-spire-90124.herokuapp.com/icons/${pic}.png`;
    },
    getArray(arr) {
      if (!this.havePenalties) {
        return null;
      }

      let temp = [...arr];
      temp.reverse();
      return temp;
    },
    name(code) {
      return COUNTRIES[code].toUpperCase()
    },
  }
}
</script>

<style scoped>

li.game {
  padding-left: 20px;
}

li.game.winner {
  font-weight: bold;
}

li.game span {
  float: right;
  margin-right: 5px;
}

li.game-top {
  border-bottom: 1px solid #aaa;
}

li.game-spacer {
  border-right: 1px solid #aaa;
  min-height: 40px;
}

li.game-bottom {
  border-top: 1px solid #aaa;
}

img {
  width: 28px;
  margin-bottom: -2px;
}

</style>
