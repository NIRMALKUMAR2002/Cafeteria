import React from 'react';
import "../../Components/Menu/menus.css";
// import approute from '../../Routes/approute';

const menu = () => {
    // approute.use(approute.json());
    // const btnCart = document.querySelector('#cart-icon');
    // const cart = document.querySelector('.cart');
    // const btnClose = document.querySelector('.cart-remove');
    // btnCart.addEventListener('click',()=>{
    //   cart.classList.add('cart-active');
    // });

    return (

        <div className="project1">
            <div className="innerproject">
                <div className="container">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>

                    <div className="cartcount">
                        <span>0</span>
                    </div>

                    <div className="row" id="first">
                        <div className="col">
                            <h5>Day</h5>
                        </div>

                        <div className="col">
                            <h5>Breakfast</h5>
                        </div>

                        <div className="col">
                            <h5 id="lunch">Lunch</h5>
                        </div>

                        <div className="col" >
                            <h5 id="es">Evening Snacks</h5>
                        </div>

                    </div>



                    {/* second row */}

                    <div className="row" id="second">


                        <div className="col">
                            <h5>Monday</h5>
                        </div>

                        <div className="col">
                            <h5>Dosa</h5>
                        </div>

                        <div className="col">
                            <h5>Mini Meals</h5>
                        </div>

                        <div className="col" >
                            <h5 id="dv">Dal Vada</h5>
                        </div>

                    </div>


                    {/* Third row */}
                    <div className="row" id="Third">


                        <div className="col">
                            <h5>Tuesday</h5>
                        </div>

                        <div className="col">
                            <h5>Idly with sambar&chutney</h5>
                        </div>

                        <div className="col">
                            <h5>Poori with Potato</h5>
                        </div>

                        <div className="col" >
                            <h5 id="mv">Medu Vada</h5>
                        </div>

                    </div>



                    {/* Fourth row */}
                    <div className="row" id="Fourth">


                        <div className="col">
                            <h5>Wednesday</h5>
                        </div>

                        <div className="col">
                            <h5>Pongal with sambar&chutney</h5>
                        </div>

                        <div className="col">
                            <h5>Palak Chappathi</h5>
                        </div>

                        <div className="col" >
                            <h5 id="gn">Groundnut</h5>
                        </div>

                    </div>

                    {/* Fifth row  */}
                    <div className="row" id="Fifth">


                        <div className="col">
                            <h5>Thursday</h5>
                        </div>

                        <div className="col">
                            <h5>Veg Salad</h5>
                        </div>

                        <div className="col">
                            <h5>Masala poori</h5>
                        </div>

                        <div className="col" >
                            <h5 id="gp">Green pees</h5>
                        </div>

                    </div>



                    {/* Sixth row  */}
                    <div className="row" id="Sixth">


                        <div className="col">
                            <h5>Friday</h5>
                        </div>

                        <div className="col">
                            <h5>Medu vada</h5>
                        </div>

                        <div className="col">
                            <h5>Meals</h5>
                        </div>

                        <div className="col" >
                            <h5 id="sandwich">sandwich</h5>
                        </div>

                    </div>



                    <div className="cart cart-active">
                        <div className="cart-box">
                            <h4>Cart Items</h4>
                            <div className="cart-food-title">Dosa</div>

                            <div className="price-box">
                                <div className="cart-price">Rs.50</div>
                                <div className="cart-amt">Rs.50</div>
                            </div>

                            <div className="cart-quantity">

                                <input type="number" class="cart-quantity" />
                                <button id="btn-buy" >Place order</button>
                            </div>



                            <div className="cart-icon">
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                            </div>

                            <div className="cart-remove">

                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            {/* </div>    */}

            {/* ------------------------------------------------------------------------------------------------------------------------- */}
            <div className="formobile">
                <div className="container">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                    </svg>
                    <div className="cartcount">
                        <span>0</span>
                    </div>
                    <div className="row" id="formobile">
                        <div className="col">
                            <h4>MENU</h4>
                        </div>
                    </div>

                    <div className="row" id="first">
                        <div className="col">
                            <h5>Day</h5>
                        </div>

                        <div className="col">
                            <h5>Breakfast</h5>
                        </div>

                        <div className="col">
                            <h5 id="lunch">Lunch</h5>
                        </div>

                        <div className="col" >
                            <h5 id="es">Evening Snacks</h5>
                        </div>
                    </div>

                    {/* second row */}

                    <div className="row" id="second">

                        <div className="col" id="day">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    DAY
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">SUNDAY</a></li>
                                    <li><a class="dropdown-item" href="#">MONDAY</a></li>
                                    <li><a class="dropdown-item" href="#">TUESDAY</a></li>
                                    <li><a class="dropdown-item" href="#">WEDNESDAY</a></li>
                                    <li><a class="dropdown-item" href="#">THURSDAY</a></li>
                                    <li><a class="dropdown-item" href="#">FRIDAY</a></li>
                                    <li><a class="dropdown-item" href="#">SATURDAY</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col" id="Breakfast">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Breakfast
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item"href="#">Masal Vada</a></li>
                                    <li><a class="dropdown-item" href="#">Medu vada</a></li>
                                    <li><a class="dropdown-item" href="#">Butter Milk</a></li>
                                    <li><a class="dropdown-item" href="#">Lassi</a></li>
                                    <li><a class="dropdown-item" href="#">Sanwish</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="col" id="Lunch" >
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Lunch
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                    <li><a class="dropdown-item" href="#">Mini Meals-Limited</a></li>
                                    <li><a class="dropdown-item" href="#">Mini Meals-UnLimited</a></li>
                                    <li><a class="dropdown-item" href="#">Meals-Limited</a></li>
                                    <li><a class="dropdown-item" href="#">Meals-UnLimited</a></li>
                                    <li><a class="dropdown-item" href="#">Poori with potato-Limited</a></li>
                                    <li><a class="dropdown-item" href="#">Poori with potato-UnLimited</a></li>
                                    <li><a class="dropdown-item" href="#">Palak Chappathi-Limited</a></li>
                                    <li><a class="dropdown-item" href="#">Palak Chappathi-unLimited</a></li>
                                    <li><a class="dropdown-item" href="#">Masal Poori-Limited</a></li>
                                    <li><a class="dropdown-item" href="#">Masal Poori-UnLimited</a></li>

                                </ul>
                            </div>
                        </div>


                        <div className="col" id="EveningSnacks">

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Evening Snacks
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Groundnut salad</a></li>
                                    <li><a class="dropdown-item" href="#">Veg salad</a></li>
                                    <li><a class="dropdown-item" href="#">Green Pees</a></li>
                                    <li><a class="dropdown-item" href="#">Sanwish</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}
export default menu
