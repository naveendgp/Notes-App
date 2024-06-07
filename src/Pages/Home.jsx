import React from 'react'
import Topnav from '../Components/TopNavigation/Topnav'
import Sidenav from '../Components/SideNavigation/Sidenav'
import CardCarousel from '../Components/Carousel/Carousel'
import ProductCard from '../Components/ProductsCard/ProductCard'
import { List } from '../Components/Carousel/carouselList'

const Home = () => {
  return (
    <section>
      <Topnav />

      <div style={{ display: "flex" }}>
        <div>
          <Sidenav />
        </div>

        <div className="main">
          <CardCarousel cards={List} interval={2000} />
          <div className="prodGrid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home