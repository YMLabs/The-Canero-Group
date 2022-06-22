import React from "react";

function PropertyNews() {
  return (
    <section className="property-news py-4">
      <h2 className="text-2xl font-bold">Latest Property News</h2>
      <div className="grid grid-cols-5 gap-2 mt-8">
        <div className="news">
          <img
            className="h-36 rounded-lg object-cover"
            src="./img/news-1.jpeg"
            alt=""
          />
          <a href="">
            <p className="font-semibold break-words">
              East Killara house sells for $5.32m thanks to feng shui
            </p>
          </a>
          <p className="text-neutral-500 text-sm">2 mins read</p>
        </div>

        <div className="news">
          <img
            className="h-36 rounded-lg object-cover"
            z
            src="./img/news-2.jpeg"
            alt=""
          />
          <a href="">
            <p className="font-semibold break-words">
              Rent crisis: Top 20 Qld suburbs for rental housing{" "}
            </p>
          </a>
          <p className="text-neutral-500 text-sm">2 mins read</p>
        </div>
        <div className="news">
          <img
            className="h-36 rounded-lg object-cover"
            z
            src="./img/news-3.jpeg"
            alt=""
          />
          <a href="">
            <p className="font-semibold break-words">
              Vacant block of land in Bella Vista sells for $2.83m{" "}
            </p>
          </a>
          <p className="text-neutral-500 text-sm">2 mins read</p>
        </div>
        <div className="news">
          <img
            className="h-36 rounded-lg object-cover"
            z
            src="./img/news-4.jpeg"
            alt=""
          />
          <a href="">
            <p className="font-semibold break-words">
              Auction fast track: how sellers are getting big prices
            </p>
          </a>
          <p className="text-neutral-500 text-sm">2 mins read</p>
        </div>
        <div className="news">
          <img
            className="h-36 rounded-lg object-cover"
            z
            src="./img/news-5.jpeg"
            alt=""
          />
          <a href="">
            <p className="font-semibold break-words">
              North Adelaide home: character at the front, party at the back{" "}
            </p>
          </a>
          <p className="text-neutral-500 text-sm">2 mins read</p>
        </div>
      </div>
    </section>
  );
}

export default PropertyNews;
