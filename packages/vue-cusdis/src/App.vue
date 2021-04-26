<template>
  <vue-cusdis :attrs="attrs" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import VueCusdis from "./VueCusdis.vue"

export default defineComponent({
  name: 'App',
  components: { VueCusdis },
  data() {
    return {
      attrs: {
        appId: "ad9ce296-a85f-4e15-9130-379ffb47f6bd",
        host: "https://cusdis.com",
        pageId: "test",
      }
    }
  }
})
</script>

<style lang="css" scoped>

</style>
