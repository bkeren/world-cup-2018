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


/*
 *  General Styles
*/

</style>
