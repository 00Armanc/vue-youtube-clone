<template>
    <div class="Header">
        <div class="Header-container">
            <Start />
            <Center />
            <End />
        </div>
    </div>
</template>  

<script>
import Start from './HeaderSteps/Start'
import Center from './HeaderSteps/Center'
import End from './HeaderSteps/End'

export default {
    name: "Header",
    components: {
        Start,
        Center,
        End
    }
}
</script>

<style>
/* Header styles */
.Header {
    width: 100%;
    height: var(--headerHeight);
    background: #FFFFFF;
    position: fixed;
    top: 0;
    z-index: 999;
}
.Header-container {
    margin: 0 auto;
    width: calc(100% - 19px);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>