import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
document.querySelectorAll("[data-modal]").forEach((modal) => {
    modal.addEventListener("click", (e) => {
        e.preventDefault();

        Fancybox.show([
            {
                src: "#" + modal.dataset.modal,
            },
        ]);
    });
});