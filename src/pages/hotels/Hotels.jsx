import React from "react";
import "./Hotels.css";
import { Star } from "../../components/svg/Icons";

const Hotels = () => {
  const handleRedirect = () => {
    window.open(
      "https://www.expedia.com/Hotels?locale=en_US&siteid=1&semcid=US.B.GOOGLE.BT-c-EN.HOTEL&semdtl=a118255096947.b1140212825805.g1kwd-44236933.e1c.m1Cj0KCQjw84anBhCtARIsAISI-xf7oHZEjc_0JUDnR5PMVoNTFjV18IqlwPrTBhsboIHl86hjZBGnmHMaAsqEEALw_wcB.r1ef8e0ce40a81e678f176f6a82631526e21006d3855c1d6f13568c5db536829e9.c1qHyqXpYVls_6yaMOyjqIXg.j19031140.k1.d1624926830979.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gclid=Cj0KCQjw84anBhCtARIsAISI-xf7oHZEjc_0JUDnR5PMVoNTFjV18IqlwPrTBhsboIHl86hjZBGnmHMaAsqEEALw_wcB"
    );
  };

  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src="img/hotel1.jpg" alt="Photo 1" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src="img/hotel1.jpg" alt="Photo 2" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src="img/hotel1.jpg" alt="Photo 3" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars"></div>

        <div className="overview__location">
          <Star /> <Star /> <Star />
          <Star /> <Star />
          &nbsp; &nbsp;
          <p className="btn-inline">Albuferia</p>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.7</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Experience the ultimate coastal getaway at Las Palmas Hotel. Just
            steps away from the beach, our family-friendly haven offers a
            seamless blend of relaxation and convenience. Start your day with a
            complimentary breakfast before embarking on adventures, all made
            effortless with free airport shuttle service.
          </p>
          <p className="paragraph">
            Stay connected with free WiFi, enjoy year-round comfort with
            AC/heating, and feel at home with pet-friendly accommodations. Our
            multilingual staff ensures a warm welcome for everyone. Discover a
            beachside retreat perfect for families, where cherished moments are
            crafted against the backdrop of sun, sand, and sea.
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommend this hotel
            </p>
            <div className="recommend__friends">
              <img
                src="img/friend-1.jfif"
                alt="Friend 1"
                className="recommend__photo"
              />
              <img
                src="img/friend-2.jpg"
                alt="Friend 2"
                className="recommend__photo"
              />
              <img
                src="img/friend-3.jpg"
                alt="Friend 3"
                className="recommend__photo"
              />
              <img
                src="img/friend-4.jpg"
                alt="Friend 4"
                className="recommend__photo"
              />
            </div>
          </div>
        </div>
        <figure className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Our stay at Las Palmas Hotel was incredible. The beachside
              location provided a stunning backdrop, and the free airport
              shuttle made travel hassle-free. The room's amenities, including
              AC, heating, and free WiFi, ensured a comfortable stay. Our pet
              was warmly welcomed, and the multilingual staff made us feel at
              ease. Ideal for families looking for a memorable beach retreat.
            </blockquote>
            <figcaption className="review__user">
              <img
                src="img/review1.jpg"
                alt="User 1"
                className="review__photo"
              />
              <div className="review__user-box">
                <p className="review__user-name">Nick Smith</p>
                <p className="review__user-date">Feb 23rd, 2022</p>
              </div>
              <div className="review__rating">7.8</div>
              <Star />
            </figcaption>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              Las Palmas Hotel surpassed expectations. The beach access was a
              dream, and the included breakfast was delicious. The room's
              comfort with AC/heating was impressive. Pet-friendly policy and
              accommodating staff added to the experience. A must-visit for
              families craving beachside tranquility.
            </blockquote>
            <figcaption className="review__user">
              <img
                src="img/review.jpeg"
                alt="User 2"
                className="review__photo"
              />
              <div className="review__user-box">
                <p className="review__user-name">Mary Thomas</p>
                <p className="review__user-date">Aug 15th, 2023</p>
              </div>
              <div className="review__rating">9.3</div>
              <Star />
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all <span>&rarr;</span>
          </button>
        </figure>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn" onClick={handleRedirect}>
          <span className="btn__visible">Book now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default Hotels;
