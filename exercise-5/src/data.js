/* Your data here */
import fortFocus from "./assets/ford_focus.png";
import nissanSentra from "./assets/nissan_sentra.png";
import kiaForte from "./assets/kia_forte.png";

export const CARS = [
    {
        rating_star: 4.7,
        rating_comment_number: "109",
        disponibility_status: "Disponible",
        disponibility_availability: "status_available",
        image: {
            src: fortFocus,
            alt: "Ford Focus"
        },
        name: "FORD",
        title: "FOCUS",
        price: "$500.00"
    },
    {
        rating_star: "4.6",
        rating_comment_number: "58",
        disponibility_status: "Disponible",
        disponibility_availability: "status_available",
        image: {
            src: nissanSentra,
            alt: "Nissan Sentra"
        },
        name: "NISSAN",
        title: "SENTRA",
        price: "$420.00"
    },
    {
        rating_star: "4.5",
        rating_comment_number: "77",
        disponibility_status: "No Disponible",
        disponibility_availability: "status_not_available",
        image: {
            src: kiaForte,
            alt: "KIA Forte"
        },
        name: "KIA",
        title: "FORTE",
        price: "$600.00"
    }
];