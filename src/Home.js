import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image'
         src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
     
        <div className='home__row'>
          <Product
            id='123001'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover- "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          /> 
          <Product
            id='123100'
            title='Kenwood kMix Stand Mixer For Baking,Stylish Kitcher Mixer
            with K-beater,Dough Hook and Whisk,5 Litre Glass Bowl'
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX679_.jpg"
            rating={3}
          /> 
          
        </div>
        <div className='home__row'>
          <Product
            id='125450'
            title="Amazfit Bip Fitness Smartwatch, All-Day Heart Rate and Activity Tracking, Sleep Monitoring, Built-In GPS, 45-Day Battery Life, Bluetooth, Onyx Black"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61b7GRV385L._AC_SX679_.jpg   
            "
            rating={4}
          
          /> 
          
          <Product
            id='1231200'
            title='Amazon echo (3rd generatoin) | Smart speaker'
            price={139.0}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={3}
          
          /> 
          <Product
            id='1331100'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Silver (4th Generation) '
            price={550.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX522_.jpg"
            rating={4}
          /> 
        </div>
        <div className='home__row'>
          <Product
            id='1252450'
            title="Samsung LC49RG90SSUXEN 49'Curved LED Gaming Computer"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61ZJpy-wiwL._AC_SX679_.jpg   
            "
            rating={4}
          
          
          /> 
        </div>
     
     
     
      </div>
      
    </div>
  )
}

export default Home
