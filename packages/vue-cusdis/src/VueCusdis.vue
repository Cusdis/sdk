<template>
  <div ref="cusdis"></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
// @ts-expect-error
import cusdis from 'cusdis';

interface CusdisOptions {
  host: string
  appId: string
  pageId: string
  pageTitle?: string
  pageUrl?: string
}

export default defineComponent({
  name: 'VueCusdis',
  props: {
    attrs: {
      type: Object as PropType<CusdisOptions>
    }
  },
  mounted() {
    console.log('mounted')
    new cusdis({
      target: this.$refs.cusdis,
      props: {
        attrs: this.attrs
      }
    })
  }
})
</script>

<style scoped>

</style>
