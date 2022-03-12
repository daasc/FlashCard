<template>
  <div class="container">
    <card-flash></card-flash>
  </div>
</template>
<script>
import CardFlash from '~/components/CardFlash.vue'
export default {
  name: 'IndexPage',
  components: { CardFlash },
  created() {
    this.$store.commit('flash/START')
  },
}
</script>
<style lang="scss">
body {
  background: url(https://a-static.mlcdn.com.br/1500x1500/papel-de-parede-laboratorio-quimica-atamos-dna-autocolante-lrp/lojariopreto/7839845040/d8bf668c260fd18fa22ab98d675b53d4.jpg);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}
</style>
