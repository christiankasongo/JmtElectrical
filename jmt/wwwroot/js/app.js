const splash = document.querySelector('.app-splash-screen');
let loadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart) / 1000;

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, loadTime)
});


function BlazorScrollToId(id) {
        const element = document.getElementById(id);
        if (element instanceof HTMLElement) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        }
    }