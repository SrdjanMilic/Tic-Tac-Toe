<template>
  <div class="boards">
    <CreateBoard />
    <ListBoards />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateBoard from '@/components/CreateBoard.vue';
import ListBoards from '@/components/ListBoards.vue';

export default {
  name: 'Home',
  components: {
    CreateBoard,
    ListBoards
  }
};
</script>

<style scoped>

</style>
