<template>
    <div class="sidebar">
        <div class="step-one">
            <div class="step-one-first">
                <router-link to="Home" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path></g></svg>
                    <p>Ana Sayfa</p>
                </router-link>
                <router-link to="Trends" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path></g></svg>
                    <p>Trendler</p>
                </router-link>
                <router-link to="Subscriptions"  tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path></g></svg>
                    <p>Abonelikler</p>
                </router-link>
            </div>
            <div class="step-one-second">
                <router-link to="/" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path></g></svg>
                    <p>Kitaplık</p>
                </router-link>
                <router-link to="-" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path></g></svg>
                    <p>Geçmiş</p>
                </router-link>
                <router-link to="/" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path><path d="M10.2 9v6.5l5-3.2-5-3.2z"></path></g></svg>
                    <p>Videolarınız</p>
                </router-link>
                <router-link to="/" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                    <p>Daha sonra izle</p>
                </router-link>
                <router-link to="/" tag="button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M3.75 18.75h3v-9h-3v9zm16.5-8.25c0-.83-.68-1.5-1.5-1.5h-4.73l.7-3.43.03-.24c0-.3-.13-.6-.33-.8l-.8-.78L8.7 8.7c-.3.26-.45.64-.45 1.05v7.5c0 .82.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.9l2.27-5.3c.06-.18.1-.36.1-.55v-1.5z"></path></g></svg>
                    <p>Beğendiğin videolar</p>
                </router-link>
            </div>
        </div>
        <div class="step-two">
            <h3>Abonelikler</h3>
            <div class="subscriptions-user">
                <div class="user user-one">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-two">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-three">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-four">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-five">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-six">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
                <div class="user user-seven">
                    <img src="src/assets/logo.png" alt="User profile">
                    <p>User Name</p>
                    <span>.</span>
                </div>
            </div>
        </div>
        <div class="step-three">
            <h3>youtube'dan daha fazla içerik</h3>
            <div class="step-three-first">
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" ><g><path fill-rule="nonzero" d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"></path></g></svg>
                    <p>Youtube Premium</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g fill-rule="evenodd"><path d="M22,13V8l-5-3l-5,3l0,0L7,5L2,8v5l10,6L22,13z M9,11H7v2H6v-2H4v-1h2V8h1v2h2V11z M15,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S15.55,13,15,13z M18,11c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S18.55,11,18,11z"></path></g></svg>
                    <p>Oyun</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                    <p>Canlı</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M6.85 7.76V6.18H1v2.88c0 2.35 1.9 4.26 4.26 4.26h1.59v-1.59H5.4a2.81 2.81 0 01-2.81-2.8V7.75h4.26zM17.15 7.76V6.18H23v2.88c0 2.35-1.9 4.26-4.26 4.26h-1.59v-1.59h1.45a2.81 2.81 0 002.81-2.8V7.75h-4.26z"></path><path d="M12 17.29a6.87 6.87 0 01-6.87-6.87V3h13.74v7.42c0 3.8-3.07 6.87-6.87 6.87z"></path><path d="M12 17.29V3h6.87v7.42c0 3.8-3.07 6.87-6.87 6.87zM12 17.29l4.13 2.38H7.88L12 17.3zM16.13 19.67H7.88v2.38h8.25v-2.38z"></path></g></svg>
                    <p>Spor</p>
                </button>
            </div>
            <div class="step-three-second">
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
                    <p>Ayarlar</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g></svg>
                    <p>İçerik bildirme geçmişi</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g></svg>
                    <p>Yardım</p>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g></svg>
                    <p>Geri bildirim gönder</p>
                </button>
            </div>
            <div class="step-three-third">
                <div class="first-links">
                    <router-link to="/" tag="a">Hakkında</router-link>
                    <router-link to="/" tag="a">Basın</router-link>
                    <router-link to="/" tag="a">Telif Hakkı</router-link>
                    <router-link to="/" tag="a">Bize Ulaşın</router-link>
                    <router-link to="/" tag="a">İçerik Üreticiler</router-link>
                    <router-link to="/" tag="a">Reklam Verme</router-link>
                    <router-link to="/" tag="a">Geliştiriciler</router-link>
                </div>
                <div class="second-links">
                    <router-link to="/" tag="a">Şartlar</router-link>
                    <router-link to="/" tag="a">Gizlilik</router-link>
                    <router-link to="/" tag="a">Politika ve Güvenlik</router-link>
                    <router-link to="/" tag="a">Youtube Nasıl Çalışıyor</router-link>
                    <router-link to="/" tag="a">Yeni özellikleri deneyin</router-link>
                </div>
                <div class="third-copyright">
                    <div>&copy; 2021 VueTube LLC</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoreSections"
}
</script>

<style scoped>
/* ScrollBar Styles */
.sidebar::-webkit-scrollbar-track{
    background-color: inherit;
}
.sidebar::-webkit-scrollbar{
	width: 7px;
	background-color: #F5F5F5;
}
.sidebar::-webkit-scrollbar-thumb{
    background-color: inherit;
}
.sidebar:hover::-webkit-scrollbar-thumb {
	background-color: rgb(201, 203, 204);
}
.sidebar {
    position: fixed;
    left: 0;
    top: var(--headerHeight);
    height: calc(100% - var(--headerHeight));
    
    width: 240px;
    background: #FFFFFF;
    overflow-y: auto;
}
/* Step One */
.step-one {
    width: var(--largeSidebar);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
.step-one-first {
    border-bottom: 1px solid rgb(230, 224, 224);
    padding: 12px 0;
}
.step-one-first  button.router-link-active {
    fill: red;
    background: rgb(230, 228, 227);
    font-weight: bold;
}
.step-one-second {
    border-bottom: 1px solid rgb(230, 224, 224);
    padding: 12px 0;
}
button {
    border: none;
    outline: none;
    background: none;
    width: 240px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 29px;
    color: rgb(3, 3, 3);
    margin-top: -4px;
}
button:hover {
    background: rgb(236, 236, 236);
}
button > svg {
    fill: #606060;
    width: 24px;
    height: 24px;
    margin-right: 24px;
}
button > p {
    font-size: 14px;
    font-weight: 500;
}

/* Step Two */
.step-two > h3 {
    width: var(--largeSidebar);
    color: #606060;
    font-size: 14px;
    padding: 15px 24px;
    text-align: left;
    font-family: Roboto, Arial, sans-serif, Roboto, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: normal;
}
.subscriptions-user {
    border-bottom: 1px solid rgb(230, 224, 224);
    padding-bottom: 7px;
}
.user {
    width: 240px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
    cursor: pointer;
}
.user:hover {
    background: rgb(236, 236, 236);
}
.user img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.user p {
    font-size: 14px;
    font-weight: 500;
    margin-left: -35px;
}
.user span {
    border-radius: 50px;
    background: rgb(6, 95, 212);
    width: 4px;
    height: 4px;
    font-size: 0;
}

/* Step Three */
.step-three {
    width: var(--largenSidebar);
}
.step-three > h3 {
    color: #606060;
    font-size: 14px;
    padding: 15px 24px;
    text-align: left;
    font-family: Roboto, Arial, sans-serif, Roboto, Arial, sans-serif;
    text-transform: uppercase;
    font-weight: normal;
}
.step-three-first {
    border-bottom: 1px solid rgb(230, 224, 224);
    padding-bottom: 7px;
}
.step-three-second {
    border-bottom: 1px solid rgb(230, 224, 224);
    padding-bottom: 7px;
    padding-top: 7px;
}
.step-three p {
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.8rem;
}
.step-three-third {
    width: 100%;
    text-align: center;
}
.first-links,
.second-links {
    width: 240px;
    height: 70px;
    padding: 12px 24px 0 24px;
    text-align: left;
    margin-top: 10px;
}
.third-copyright {
    width: 240px;
    height: 40px;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-left: 20px;
}
.first-links > a, 
.second-links > a {
    text-decoration: none;
    color: #606060;
    font-size: 13px;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    line-height: 18px;
    margin-right: 8px;
}
.third-copyright > div {
    text-decoration: none;
    color: rgb(144, 144, 144);
    font-size: 13px;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    line-height: 18px;
    margin-right: 8px;
}
</style>