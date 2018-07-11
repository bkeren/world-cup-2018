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

.title {
  color: red;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

}

.round {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  list-style: none;
  padding: 0;
}

.round .spacer {
  flex-grow: 1;
}

.round .spacer:first-child,
.round .spacer:last-child {
  flex-grow: .5;
}

.round .game-spacer {
  flex-grow: 1;
}

/*
 *  General Styles
*/

</style>
