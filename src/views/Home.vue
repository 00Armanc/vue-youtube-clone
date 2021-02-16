<template>
    <div class="video-container" :class="{ sideSmall : active}">
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
                        <div class="menu">
                            <svg fill="#606060" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g></svg>
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
        },
        active() {
            return this.$store.state.isOpen
        }
    }
}
</script>

<style>
.sideSmall {
    margin-left: var(--smallSidebar) !important;
}
.video-container {
    width: 100%;
    height: calc(100% - var(--headerHeight));
    border: 1px solid black;
    margin-left: var(--largeSidebar);
}
.items-down {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(240px, 1fr));
}
.item {
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
.item:hover .menu {
    visibility: visible;
}
.menu {
    width: 30px;
    height: 40px;
    visibility: hidden;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.menu::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    background: #c0b6b6;
    opacity: 0.5;
    border-radius: 50%;
    transition: .1s;
}
.menu:active::before {
    width: 35px;
    height: 35px;
}
</style>