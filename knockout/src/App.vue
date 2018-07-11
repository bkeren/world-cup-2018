<template>
<main id="tournament">
  <Round :items="items" title="LAST 16" className="round-1"/>
  <Round :items="qf" title="QUARTER FINAL" className="round-2"/>
  <Round :items="sf" title="SEMI FINAL" className="round-3"/>
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
      items: KO["last16"],
      qf : KO["last8"],
      sf : KO["last4"]
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

main{
  display:flex;
  flex-direction:row;
}

.round.round-2,
.round.round-3 {
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
</style>
