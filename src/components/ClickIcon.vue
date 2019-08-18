<template>
  <i class="material-icons" @click="$emit('click')"><slot></slot></i>
</template>

<style lang="scss" scoped>
i {
  cursor: pointer;
}
</style>
