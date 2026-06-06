import getMenu from "./api.js";
import { uiElements, renderLoader, renderMenuCard, renderNotFound, renderDetailPage } from "./ui.js";

//ekran yuklendigide
document.addEventListener("DOMContentLoaded", async () => {

    const menuData = await getMenu()
    console.log(menuData)

    if (window.location.pathname.includes("/index.html")) {
        renderLoader()
        renderMenuCard(menuData)


        //kategori tiklama takibi
        uiElements.categoryButtons.forEach((button) => {

            button.addEventListener("click", () => {

                const selectedCategory = button.id

                const filteredMenu = menuData.filter(
                    (item) => item.category == selectedCategory
                )

                if (selectedCategory == "all") {
                    console.log("all tiklandi: ", menuData)

                    renderMenuCard(menuData)
                } else {
                    renderMenuCard(filteredMenu)
                }
            })
        })

    } else {

        const params = new URLSearchParams(window.location.search)
        console.log(params.get("id"))

        const itemId = +params.get("id")

        const product = menuData.find((item) => item.id == itemId)

        if (!product) {

            renderNotFound()
        } else {
            //id var
            renderDetailPage(product)
        }
    }

})