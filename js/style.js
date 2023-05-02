function addZoomEffect() {
    const heroPic = document.querySelector(".hero-pic");
    const images = heroPic.querySelectorAll("img");

    images.forEach((image) => {
        image.addEventListener("mouseover", () => {
            image.classList.add("zoom-in");
        });

        image.addEventListener("mouseout", () => {
            image.classList.remove("zoom-in");
        });
    });
}
function load() {
    // Gọi hàm để thêm hiệu ứng zoom vào các ảnh.
    addZoomEffect();
}
load();

// const result = document.querySelector(".zoom-img");
// const images = document.querySelectorAll(
//     ".hero-pic img:not(.hero-img-wrap-3 img):not(.hero-img-sticky)"
// );
// const image = document.querySelector(".hero-img-1");
// console.log(image);
// // images.forEach((image) => {
// image.addEventListener("mousemove", (e) => {
//     let width = image.offsetWidth;
//     let height = image.offsetHeight;
//     let top = image.offsetTop;
//     let left = image.offsetLeft;
//     let mouseX = e.pageX - left;
//     let mouseY = e.pageY - top;
//     let percentX = (mouseX / width) * 100;
//     let percentY = (mouseY / height) * 100;
//     let src = e.target.getAttribute("src");
//     result.style.backgroundImage = `url("${src}")`;
//     result.style.backgroundPosition = `${percentX}% ${percentY}%`;
//     result.style.top = `${e.clientY}px`;
//     result.style.left = `${e.clientX}px`;
//     result.style.visibility = "visible";
// });
// image.addEventListener("mouseleave", () => {
//     result.style.visibility = "hidden";
// });
// // });

// // Làm hiệu ứng hover Features Info Row Item

const listItem = document.querySelectorAll(".features-info-row-item");
const featuresLine = document.querySelector(".features-info-row-line");

listItem.forEach((e) => {
    e.addEventListener("click", () => {
        const currentActive = document.querySelector(
            ".features-info-row-item.active"
        );
        if (currentActive) {
            currentActive.classList.remove("active");
        }

        e.classList.add("active");

        featuresLine.style.left = `${e.offsetLeft}px`;
        featuresLine.style.width = `${e.offsetWidth}px`;
    });
});
