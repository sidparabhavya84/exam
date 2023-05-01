import React from 'react';
import { Button } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  const Add = () => {
    navigate("/product");
  }
  return (
    <>
      <header className='header bg-dark p-3'>
        <div className='container'>
          <div className='row align-item-center'>
            <div className='logo col-5 text-white'>
              <h2>Exam</h2>
            </div>
            <nav className='col'>
              <ul className='list-unstyled d-flex justify-content-end m-0'>
                <li className='p-2'>
                  <NavLink to='/' className='text-decoration-none text-white fs-6 fw-1'>
                    Home
                  </NavLink>
                </li>
                <li className='p-2' >
                  <NavLink to='/product' className='text-decoration-none text-white fs-6 fw-1'>
                    Product
                  </NavLink>
                </li>
                <li className='p-2'>
                  <NavLink to='/' className='text-decoration-none text-white fs-6 fw-1'>
                    About
                  </NavLink>
                </li>

                <Button className='text-white border-rounded ms-2' onClick={() => { Add() }}>
                  <Cart />
                </Button>

              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header