<template>
    <div :class="{ big : isBig,  small : !isBig}" class="main-container">
        <slot />
    </div>
</template>

<script>
export default {
    name: "MainContainer",
    computed: {
        isBig() {
            return this.$store.state.isOpen
        }
    }
}
</script>

<style>
.main-container {
   
}
.big {
    width: calc(100% - 72px);
}
.small {
    width: calc(100% - 240px) !important;
}
</style>