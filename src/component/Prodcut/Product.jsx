import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getProductsAsync } from '../../Service/action/Product.action';


function Product() {

    // const navigate = useNavigate();
    const { Products } = useSelector(state => state.productReducer);

    const dispatch = useDispatch();

    const get = () => {
        dispatch(getProductsAsync())
    }

    useEffect(() => {
        get()
    }, [])
    return (
        <>
            <section className='p-3 mb-5'>
                <div className="container ">
                    <div className="row ">
                        <div className="section-title text-dark mb-2 mt-4" data-aos="fade-up">
                            <h2>Product</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        {
                            Products.map((pro) => {
                                return (
                                    <>
                                        <div className='col-3 mb-4 mt-4'>
                                            <Card style={{ width: '20rem' }} >
                                                <Card.Img variant="top" src={pro.img} style={{ height: '300px', width: 'auto' }} className='p-2 back' />
                                                <Card.Body>
                                                    <Card.Title>{pro.title}</Card.Title>
                                                    <Card.Text>
                                                        {pro.price}&#8377;
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {pro.details} 
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {pro.stock}
                                                    </Card.Text>
                                                    <Button variant='success'>Add to cart</Button><br />
                                                    <br />
                                                    <Button variant='info'>View Product</Button>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                    </>
                                )

                            })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}

export default Product