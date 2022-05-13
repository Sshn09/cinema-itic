document.addEventListener("DOMContentLoaded", e => {
    console.log(navigator.userAgent);
    let el, modal, closed, open_modal, closed_all;
    el = document.querySelectorAll(".list_img li");
    modal = document.querySelector(".modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale img");

    /* property elements */
    open_modal = function () {
        console.log(this.dataset);
        /* les variables */
        let image = this.dataset.image;
        let title = this.dataset.title;
        let desc = this.dataset.description;
        let dates = this.dataset.dates;
        let genre = this.dataset.types;
        let duree = this.dataset.times;
        let links = this.dataset.link;

        modal.classList.add("modale-active");
        document.querySelector(".modale img").setAttribute("src", image);
        document.querySelector(".modale .desc h3").innerText = title;
        document.querySelector(".modale .desc p").innerHTML = `<strong>Déscription : </strong>${desc}`;
        document.querySelector(".modale .desc time").innerHTML = `<strong>Sortie : </strong>${dates}`;
        document.querySelector(".modale .desc time").setAttribute("datetime", dates);
        document.querySelector(".modale .desc .genre").innerHTML = `<strong>Genre : </strong>${genre}`;
        document.querySelector(".modale .desc .duree").innerHTML = `<strong>Duree : </strong>${duree}`;
        document.querySelector(".modale .desc .duree").setAttribute("datetime", duree);
        document.querySelector(".modale .desc .duree").setAttribute("datetime", duree);
        document.querySelector("figure .vplus").setAttribute("href",links);

    };
    for (rows of el) {
        rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
        modal.classList.remove("modale-active");
    });
});