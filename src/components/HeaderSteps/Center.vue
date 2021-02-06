<template>
    <div class="center">
        <div class="search">
            <input type="text" class="search-input" placeholder="Ara">
            <button class="search-icon-button">
                <svg class="search-icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g class="style-scope yt-icon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path></g></svg>
            </button>
        </div>
        <button class="voice-search-button">
            <svg fill="#606060" class="voice-search-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g class="style-scope yt-icon"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" class="style-scope yt-icon"></path></g></svg>
        </button>
    </div>
</template>

<script>
export default {
    name: "Center"
}
</script>

<style>
/* Center side styles */
.center {
    width: 46%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 30px);
    height: 100%;
}
.search-input {
    width: 85%;
    height: 32px;
    outline: none;
    color: var(--yt-searchbox-text-color);
    font-size: 16px;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    padding: 0 10px;

}
.search-icon-button {
    width: 65px;
    height: 32px;
    opacity: 0.6;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #CCCCCC;
}
.search-icon-button:hover {
    opacity: 0.8;
}
.search-icon {
    color: #333;
    width: 20px;
    height: 20px;
}
.voice-search-button{
    width: fit-content;
    height: 100%;
    border: none;
    background: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
}
.voice-search-svg {
    width: 24px;
    height: 24px;
}
</style>