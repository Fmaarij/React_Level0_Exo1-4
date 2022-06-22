import React, { Component } from 'react'

export default class Nav extends Component {  
    render() {
        return (
            <div>
                <nav className='nav-bar navbar-expand bg-dark '>
                    <ul className='nav nav-stacked d-flex justify-content-between '>
                        <li className='nav-item '>
                            <a href="#" >HOME</a>
                            </li>
                            <li className='nav-item'>
                            <a href="#" >PHOTOS</a>
                            </li>
                            <li className='nav-item'>
                            <a href="#" ><i class="fa-solid fa-car"></i></a>
                            </li>
                            <li className='nav-item'>
                            <a href="#" ><i class="fa-solid fa-car-burst"></i></a>
                            </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
 