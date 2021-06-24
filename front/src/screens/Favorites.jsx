import React, { useEffect } from 'react'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';



import { useDispatch, useSelector } from 'react-redux';

import { listMyFavorites } from '../actions/FavoritesAction';


const Favorites = ({ history }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const favoriteListMy = useSelector((state) => state.favoriteListMy)
    const { loading: loadingFavorites, error: errorFavorites, products } = favoriteListMy;




    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(listMyFavorites())
        }
    }, [history, userInfo, dispatch])


    return (
        <ListGroup>
            {loadingFavorites ? <Loader /> : errorFavorites ? <Message variant="danger">{errorFavorites}</Message> : (
                <Card>
                    <ListGroup.Item>
                        <h5>Produtos Favoritos: </h5>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                {products.map(product => (
                                    <Row>
                                        <Col md={1}>
                                            <Image src={product.image} alt='Produto' fluid rounded />
                                        </Col>
                                        <Col>
                                            Nome: {product.name} <br />
                                            Preço: {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                        </Col>
                                    </Row>
                                ))}
                            </ListGroup.Item>
                        </ListGroup>
                    </ListGroup.Item>
                </Card>
            )}
        </ListGroup>
    )
}

export default Favorites