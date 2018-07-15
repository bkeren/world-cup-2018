<template>
<main id="tournament">
  <Route className="routea" :last16="itemsA" :last8="qfA" :last4="sfA" />
  <Final/>
  <Route className="routeb" :last16="itemsB" :last8="qfB" :last4="sfB" />
</main>
</template>

<script>
import Final from './components/Final';
import Route from './components/Route';
import {
  KO
} from './data/data';
export default {
  name: 'App',
  components: {
    Final,
    Route
  },
  data() {
    return {
      itemsA: KO["routeA"]["last16"],
      qfA: KO["routeA"]["last8"],
      sfA: KO["routeA"]["last4"],
      itemsB: KO["routeB"]["last16"],
      qfB: KO["routeB"]["last8"],
      sfB: KO["routeB"]["last4"]
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


</style>
