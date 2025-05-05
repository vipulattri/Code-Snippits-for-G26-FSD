import React, { useRef } from 'react';
import './CategorySection.css';
import data from '../Data.json';

function CategorySection() {
  const popular = data.popularA;
  const trending = data.TrendingA;

  const scrollRef = useRef();

  const scroll = direction => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="category-section">
      <div className="section popular">
        <h2>New Arrivals & Bestsellers</h2>
        <div className="scroll-controls">
          <button onClick={() => scroll('left')} className="scroll-btn">
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
          <div className="card-row scrollable" ref={scrollRef}>
            {popular.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.img} alt={item.cat} />
                <p>{item.cat}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scroll('right')} className="scroll-btn">
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="section trending">
        <h2>Trending Categories</h2>
        <div className="card-row">
          {trending.map((item, index) => {
            const discount = Math.round(((item.cut - item.price) / item.cut) * 100);
            return (
              <div className="card" key={index}>
                <img src={item.img} alt={`Trending ${index}`} />
                <div className="price-block">
                  <span className="price">₹{item.price}</span>
                  <span className="cut">₹{item.cut}</span>
                  <span className="off">({discount}% OFF)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
