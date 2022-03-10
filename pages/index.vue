<template>
  <div>
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
