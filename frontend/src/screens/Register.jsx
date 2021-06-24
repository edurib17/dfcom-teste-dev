import React, { useState, useEffect } from 'react'

//Routes
import { Link } from 'react-router-dom';

//Components

import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';


import { register } from '../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';




const Register = ({ location, history }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [message, setMessage] = useState(null);
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(name, email, password))
    }

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])



    return (
        <FormContainer>
            <aside className="col-sm-20 p-4 mt-5 container">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Registrar</h4>
                        {message && <Message variant='danger'>{message}</Message>}
                        {error && <Message variant='danger'>{error}</Message>}
                        {loading && <Loader />}
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>Nome</label>
                                <input className="form-control" placeholder="Nome" name="name" type="Name" required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" name="Email" type="Email" />
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" name="senha" type="password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block m-3">Registrar</button>
                            </div>
                            Você já tem uma conta?{' '}<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Acessar sua conta!!</Link>
                        </form>
                    </article>
                </div>
            </aside>
        </FormContainer>
    )
}

export default Register
