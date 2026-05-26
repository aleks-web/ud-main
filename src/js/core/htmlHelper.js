import themeConfig from './../../../tailwind.config.mjs';

document.addEventListener("DOMContentLoaded", function() {
    if (import.meta.env.DEV) {
        insertHtml();
        initJs();
    }
});

function insertHtml() {
    const htmlConatiner = document.createElement('div');
    const html = `
        <div class="dev-helper fixed flex items-center gap-2 bottom-0 right-6 bg-blue-200 px-2 py-1 rounded-t-lg cursor-pointer">
            <div>Dev helper</div>
            <div class="dev-helper-screens rounded-md leading-6 overflow-hidden text-[12px] px-2 bg-blue-400 text-white">
                <span class="flex sm:hidden">none</span>
                <span class="hidden sm:flex md:hidden">sm</span>
                <span class="hidden md:flex lg:hidden">md</span>
                <span class="hidden lg:flex xl:hidden">lg</span>
                <span class="hidden xl:flex 2xl:hidden">xl</span>
                <span class="hidden 2xl:flex">2xl</span>
            </div>
        </div>
    `;
    htmlConatiner.innerHTML = html;
    document.body.append(htmlConatiner);
}

function initJs() {
    const devHelper = document.querySelector('.dev-helper');
    devHelper.addEventListener('click',  e => {
        console.log(e);
    });
    devHelper.style.zIndex = findHighestZIndex() + 1;
}