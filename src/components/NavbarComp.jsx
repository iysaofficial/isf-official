import React, { useEffect } from 'react';
import $ from 'jquery';

import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // jquery for toggle dropdown menus
        $(document).ready(function(){
            // toggle sub-menus
            $(".sub-btn").click(function(){
                $(this).next(".sub-menu").slideToggle();
            });
            // toggle more-menus
            $(".more-btn").click(function(){
                $(this).next(".more-menu").slideToggle();
            });
        });
        

        // javascript for the responsive navigation menu
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () =>{
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () =>{
            menu.classList.remove("active");
        });
    }, []);
    
    return(
        <>
        <header>
            <a href="/"><img className='logo-nav' src="./assets/images/logo/ISF 2025.png" alt="" /></a>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><a href="/">Home</a></li>
                    <li className='menu-item'><a href="/AboutPage">About</a></li>
                    <li className='menu-item'><a href="#category-section">Competition</a></li>
                    {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
                    <li className='menu-item'><a href="https://drive.google.com/file/d/1IyjNGCUDfeQyYlZb-ENDtLev6yKumzDo/view?usp=sharing" target='_blank'>Guide Book</a></li>
                    <li className='menu-item'><a href="#contact">Contact</a></li>
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Media Coverage <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1jkpeD9EN2kWu059MDmriUHgqil_P31xT/view" target='_blank'>Press Release 2023</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1NdOFy48a5igVT5h2umhzqrDZujjNRDW1/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">List of Winner <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1fguKg3dnfY3YTBwxsyx-3xq3l4VIlNta/view" target='_blank'>IYEO 2023</a></li>

                            <li className='sub-item'><a href="https://drive.google.com/file/d/1sGsY3t1dof3KP3lKsG6_8yi1dxJX16bX/view?usp=sharing" target='_blank'>IYEO Online 2024</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1hwFR1-YX7f_efQkwEUNyw5ulR796DHIQ/view?usp=sharing" target='_blank'>IYEO Offline 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        {/* <a className='sub-btn' href="/ListOfWinnerAllPage">List of Winner </a> */}
                        {/* <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1fguKg3dnfY3YTBwxsyx-3xq3l4VIlNta/view" target='_blank'>IYEO 2023</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">IYEO 2024 <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="https://drive.google.com/file/d/1sGsY3t1dof3KP3lKsG6_8yi1dxJX16bX/view?usp=sharing">IYEO Online 2024</a></li>
                                    <li className='more-item'><a href="https://drive.google.com/file/d/1hwFR1-YX7f_efQkwEUNyw5ulR796DHIQ/view?usp=sharing">IYEO Offline 2024</a></li>
                                </ul>
                            </li>
                        </ul> */}
                    </li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Curation <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1XiQPYXktmf47cO6g1sZ9HfprPE6A-5Ok" target='_blank'>Curation 2023</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1uGmebygjQMWTht5b4JgNTJ4VokQ9wOdr?usp=sharing" target='_blank'>Curation 2024</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Certificate Supervisor <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor 2023</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1DALx9JV69oAaMEqJMP0dUoHjiQtGEiEP?usp=sharing" target='_blank'>Certificate Supervisor 2024</a></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Gallery <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1oZ-cr_-NdV8Gd2pUVLnrGCT9jYA0gz2v?usp=sharing" target='_blank'>2023</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1JROGpOT_Ow7kHwwfcr7tOs8eR0RdgDW0?usp=sharing " target='_blank'>2024</a></li>
                        </ul>
                    </li> */}
                    
                    
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp