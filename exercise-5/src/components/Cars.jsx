export default function Car({ car }) {
    return (
        <article class="card_ui">
            <div class="car_header">
                <div class="car_header_status">
                    <a href="#" class="status_rating">
                        <i class="fas fa-star status_rating_star"></i>
                        <span>{car.rating_star}</span>
                        <span class="status_rating_number_comments">({car.rating_comment_number})</span>
                    </a>
                    <div class={"status_disponibility " + car.disponibility_availability}>
                        <span>{car.disponibility_status}</span>
                    </div>
                </div>
                <div>
                    <button class="button_like">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="car_body">
                <div class="car_body_img_container">
                    <a href="#" class="car_img_content_link">
                        <figure class="car_img_content">
                            <img src={car.image.src} alt={car.image.alt}/>
                        </figure>
                    </a>
                </div>
                <div>
                    <p class="car_name">{car.name}</p>
                    <div class="car_price_container">
                        <a href="#" class="car_model_link">
                            <h2 class="car_model" title={car.title}>{car.title}</h2>
                        </a>
                        <p class="car_price">{car.price} <span class="car_price_time">/hora</span></p>
                    </div>
                </div>
            </div>
            <div class="car_footer">
                <ul class="car_list_characteristics">
                    <li>
                        <i class="fas fa-sliders-h"></i>
                        <span title="Manual">Manual</span>
                    </li>
                    <li>
                        <i class="fas fa-tachometer-alt"></i>
                        <span title="Kilometraje ilimitado">Kilometraje ilimitado</span>
                    </li>
                    <li>
                        <i class="fas fa-user"></i>
                        <span title="5">5</span>
                    </li>
                </ul>
            </div>
        </article>
    );
  }
  