// Небольшой JS без бизнес-логики: плавная прокрутка к секции категорий
const categoryAnchor = document.querySelector('a[href="#categories"]');

if (categoryAnchor) {
  categoryAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" });
  });
}
