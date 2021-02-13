<template>
    <div class="container">
        <!-- <div class="content-up"></div> -->
        <div class="items-down">
            <template v-for="item in items">
                <div class="item">
                <div class="item-img">
                    <div class="thumbnail">
                        <img :src="item.videoImg" alt="">
                    </div>
                </div>
                <div class="item-detail">
                    <Avatar class="avatar" size="36" />
                    <div class="details">
                        <h3 class="title">{{ item.title }}</h3>
                        <div class="channel-informations">
                            <p class="channel-name">{{ item.channelName }}</p>
                            <p class="channel-info-date">{{ item.views }} görüntülenme {{ item.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
            </template>
        </div>
    </div>
</template>

<script>
import Avatar from '../components/Avatar'

export default {
    name: "Home",
    components: {
        Avatar
    },
    computed: {
        items() {
            return this.$store.state.videos
        }
    }
}
</script>

<style>
.container {
    width: 100%;
    height: calc(100vh - var(--headerHeight));

}
.items-down {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(240px, 1fr));
}
.item {
    /* width: 295px; */
    /* height: 240px; */
    position: relative;
    margin: 20px;
    /* border: 1px solid black; */
    cursor: pointer;
}
/* İmage */
.item-img {
    width: 100%;
    position: relative
}
.thumbnail {
    max-width: 100%;
    height: 165px;
    background: #E0E0E0;
}
.thumbnail > img {
    width: 100%;
    height: 100%;
}
/* Detail */
.item-detail {
    width: 100%;
    height: 73px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    /* border: 1px solid black; */
    padding-top: 7px;
    padding-left: -5;
}
.details {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding-left: 10px;

}
.title {
    font-size: 1.4rem;
    line-height: 2rem;
    max-height: 4rem;
}
.channel-name,
.channel-info-date {
    font-size: 14px;
    font-weight: 400;
    color: #928f8f;
}
.channel-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>