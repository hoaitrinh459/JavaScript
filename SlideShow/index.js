var images = [];
function image(link, name) {
    this.link = link;
    this.name = name;
}

images.push(new image("./images/1.jpg", "Ảnh cổ trang Minh Nguyệt"));
images.push(new image("./images/2.jpg", "Cổng chào"));
images.push(new image("./images/3.jpg", "Trăng"));
images.push(new image("./images/4.jpg", "Nhà"));
images.push(new image("./images/5.jpg", "Kẻ cắp mặt trăng"));
var count = 0;
function Show() {
    var show = document.getElementById("id");
    show.src = images[count].link;
    document.getElementById("label").textContent = images[count].name;
    count++;
}
setInterval(function () { Show() }, 1000);
