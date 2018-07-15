<template>
  <div :class="{[className] : true}">
    <Round :items="last16" title="LAST 16" className="round-1"/>
    <Round :items="last8" title="QUARTER FINAL" className="round-2"/>
    <Round :items="last4" title="SEMI FINAL" className="round-3"/>
  </div>

</template>


<script>

import Round from './Round';

export default {
  name: 'Route',
  props: ['className' , 'last16' , 'last8' , 'last4'],
  components: {
    Round,
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
.routea,
.routeb {
  display: -ms-flexbox;
  display: inline-flex;
  -ms-flex-direction: row;
  flex-direction: row;
}

.routeb {
  flex-direction: row-reverse;
}


.routea .round.round-3 {
  margin-right: -4px;
}

.routeb .round.round-3 {
  margin-left: -4px;
}

.routea li.game-spacer {
  border-right: 1px solid #aaa;
  min-height: 40px;
}

.routeb li.game-spacer {
  border-left: 1px solid #aaa;
  min-height: 40px;
}
</style>
