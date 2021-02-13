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
    /* border: 1px solid black; */
    width: calc(100% - 240px);
    height: auto;
    position: fixed;
    top: 56px;
    right: 0; 
    overflow: auto;
}
.big {
    width: calc(100% - 72px);
}
.small {
    width: calc(100% - 240px) !important;
}
</style>