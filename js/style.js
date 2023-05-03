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

// Làm hiệu ứng zoom ảnh tại Section Services
const img = document.querySelector(".services-item-pic > img");
const result = document.querySelector(".result");
img.addEventListener("mousemove", (e) => {
    result.style.opacity = 1;
    result.style.left = `${e.clientX}px`;
    result.style.top = `${e.clientY}px`;
    let offsetX, offsetY;
    // if (e.offsetX) {
    // Nếu dùng chuột để zoom
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    // } else {
    //     // Nếu sử dụng touch để zoom
    //     offsetX = e.touches[0].pageX;
    //     offsetY = e.touches[0].pageY;
    // }
    // Tính toán tỷ lệ vị trí con trỏ so với kích thước phần tử zoomer
    let x = (offsetX / e.currentTarget.offsetWidth) * 100;
    let y = (offsetY / e.currentTarget.offsetHeight) * 100;
    // Thiết lập vị trí background của phần tử zoom để có hiệu ứng zoom
    let src = e.target.getAttribute("src");
    result.style.backgroundImage = `url("${src}")`;
    result.style.backgroundPosition = x + "% " + y + "%";
});
img.addEventListener("mouseleave", () => {
    result.style.opacity = 0;
});
