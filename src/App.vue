<template>
  <Header></Header>
  <Tab></Tab>
  <router-view></router-view>
</template>


<script>
import Header from '@/layouts/header/header'
import Tab from '@/layouts/tab/tab'

export default {
  components: {
    Header,
    Tab,
  },
}
</script>

