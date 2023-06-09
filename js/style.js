const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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
    // Tính toán tỷ lệ vị trí con trỏ so với kích thước phần tử zoom
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
// Xử lý phần Pricing date option
const listDateOption = $$(".pricing-date-option");
listDateOption.forEach((item) => {
    item.addEventListener("click", () => {
        const isActive = $(".pricing-date-option.active");
        if (isActive) {
            isActive.classList.remove("active");
        }
        item.classList.add("active");
    });
});
// Xử lý phần Pricing Block hover
const listBlock = $$(".pricing-block");
listBlock.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        const cta = item.querySelector(".pricing-cta");
        cta.classList.add("active");
    });
    item.addEventListener("mouseleave", () => {
        const cta = item.querySelector(".pricing-cta.active");
        cta.classList.remove("active");
    });
});

// Xử lý phần slider Testimonial
const testimonials = {
    arr: [
        {
            img: "./img/testimonial-img-1.png",
            desc: `“It was very comforting to recieve a text and pics each day about our pets and how they were doing. It was also nice that my pets were in the comfortable environment of their own home and received playfull attention from our pet sitters as well. Thanks so much!”`,
            name: "Karla Deras",
        },
        {
            img: "./img/testimonial-img-2.png",
            desc: `"Receiving daily updates and pictures of our pets in the comfort of their own home was incredibly reassuring. It was clear that our pet sitters gave them playful and attentive care, and we couldn't be more grateful for their service."`,
            name: "Jane Austen",
        },
        {
            img: "./img/testimonial-img-3.png",
            desc: `"Knowing that our pets were in good hands and receiving personalized care in the familiar environment of their own home was a huge relief. The daily text updates and pictures were a thoughtful touch that we really appreciated."`,
            name: "Mark Twain",
        },
        {
            img: "./img/testimonial-img-4.png",
            desc: `"We were thrilled to receive daily updates and photos of our pets during our time away. It was obvious that our pet sitters took great care of them and made sure they felt comfortable and loved. Thank you so much for your excellent service!"`,
            name: "Gabriel García Márquez",
        },
    ],
    currentIndex: 0,
    updateSlider(index) {
        const img = $(".testimonial-pic-img");
        img.setAttribute("src", this.arr[index].img);
        const desc = $(".testimonial-info-desc");
        desc.innerText = this.arr[index].desc;
        const name = $(".testimonial-info-name");
        name.innerText = this.arr[index].name;
    },
    dotEvent(e) {
        const listDot = $$(".testimonial .dot");
        listDot.forEach((item, index) => {
            item.addEventListener("click", () => {
                const isDotActive = $(".testimonial .dot.active");
                if (isDotActive) {
                    isDotActive.classList.remove("active");
                }
                item.classList.add("active");
                this.updateSlider(index);
                this.currentIndex = index;
            });
            if (e === index) {
                const isDotActive = $(".testimonial .dot.active");
                if (isDotActive) {
                    isDotActive.classList.remove("active");
                }
                item.classList.add("active");
            }
        });
    },
    init() {
        const nextPage = $(".testimonial-btn-next");
        const prevPage = $(".testimonial-btn-prev");
        nextPage.addEventListener("click", () => {
            this.currentIndex = (this.currentIndex + 1) % this.arr.length;
            this.updateSlider(this.currentIndex);
            this.dotEvent(this.currentIndex);
        });
        prevPage.addEventListener("click", () => {
            this.currentIndex =
                (this.currentIndex - 1 + this.arr.length) % this.arr.length;
            this.updateSlider(this.currentIndex);
            this.dotEvent(this.currentIndex);
        });
        this.dotEvent();
    },
    handleEvent: function () {
        const listBtn = $$(".testimonial-btn");
        listBtn.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.classList.add("active");
            });
            item.addEventListener("mouseout", () => {
                item.classList.remove("active");
            });
        });
    },
};

testimonials.init();
testimonials.handleEvent();
