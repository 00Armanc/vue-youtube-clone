<template>
    <div class="Sections">
        <router-link to="Home" tag="div" class="section home">
            <button>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g></svg>
                <span>Ana Sayfa</span>
            </button>
        </router-link>
        <router-link to="Trends" tag="div" class="section trends">
            <button>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path></g></svg>
                <span>Trendler</span>
            </button>
        </router-link>
        <router-link to="Subscriptions" tag="div" class="section subscriptions">
            <button>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path></g></svg>
                <span>Abonelikler</span>
            </button>
        </router-link>
        <router-link to="Library" tag="div" class="section library">
            <button>
                <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g ><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>
                <span>Kitaplık</span>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Sections"
}
</script>

<style>

.Sections {
    height: calc(100% - 56px);
    width: 72px;
    position: fixed;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #FFFFFF;
}
.Sections > div {
    display: inline-block;
}
.section.router-link-active button{
    fill: red;
    color: red;
}
.Sections > div > button {
    width: 72px;
    height: 73.6px;
    color: var(--yt-spec-brand-icon-inactive);
    outline: none;
    border: none;
    background: none;
    fill: var(--yt-spec-brand-icon-inactive);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0 14px;
}
.Sections > div:hover {
    border-radius: 2px;
    background: #e9e7e7;
}
.Sections > div > button > svg {
    width: 24px;
}
.Sections > div > button > span {
    white-space: nowrap;
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    white-space: nowrap;
    font-family: Roboto, Arial, sans-serif, Roboto, Arial, sans-serif;
}
</style>