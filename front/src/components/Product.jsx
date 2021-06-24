import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';


import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { createdFavorite } from '../actions/FavoritesAction';



const Product = ({ product }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const favoriteHandler = (product) => {
        dispatch(createdFavorite(
            product
        ))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Produto favoritado com sucesso!!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <Card className='my-3 p-3 rounded'>
            <Card.Img src={product.image} alt={product.name} variant='top' style={{ height: 150 }} />
            <Card.Body>
                <Card.Title as='h5'><strong>{product.name}</strong></Card.Title>
                <Card.Text as='h5'>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Card.Text>
                {userInfo ? (
                    <Button className='btn-block' variant="success" type='button' size="lg" block onClick={() => favoriteHandler(product)} >
                        Curtir <i class="fas fa-thumbs-up"></i>
                    </Button>
                ) : (
                    <Link to='/login'>
                        Faça login para favoritar os seus produtos!!
                    </Link>
                )}
            </Card.Body>
        </Card>
    )
}


export default Product