<template>
  <button class="uppercase font-bold border-0 w-full tracking-wider">
    <slot></slot>
  </button>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
button {
  background: var(--color-1);
  border-radius: 10px;
  color: #fff;
  min-height: 51px;
  font-size: 17px;
  transition: background .2s ease;
  &:hover, &:active, &:focus {
    background: var(--color-1--hover);
  }
  @media (min-width: 998px){
    max-width: 246px;
  }
}
</style>
