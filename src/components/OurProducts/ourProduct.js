import React from 'react'
import './ourproduct.css'
import OurProductImg from '../../assets/Images/OurProduct.jpg'

const OurProduct = () => {
    return (
        <div className='ourproduct-container'>
            <div className='ourproduct-content'>
                <h3 className='title-ourproduct'>Fit-for-purpose financing</h3>
                <p className='desc-ourproduct'>We’re focusing on debt products, because we believe they’re a better fit for the moderate growth, cash-flow positive businesses that we’re targeting. We are also pioneering an evergreen fund structure to better fit the time horizon and financing needs of our portfolio companies.</p>
                <a href='/' className='btn-ourproduct'>
                    <button>Our Products</button>
                </a>
            </div>
            <img src={OurProductImg} alt='img' />
        </div>
    )
}

export default OurProduct