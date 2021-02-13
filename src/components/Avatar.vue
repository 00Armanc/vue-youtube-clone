<template>
    <figure>
        <img src="src/assets/avatar.png" :width="size" :height="size" style="border-radius: 50%;">
    </figure>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        // src: {
        //     type: String,
        //     require: true
        // },
        size: {
            type: Number,
            require: true
        }
    }
}
</script>