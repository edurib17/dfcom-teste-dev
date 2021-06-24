import React, { useState, useEffect } from 'react'

//Routes
import { Link } from 'react-router-dom';

//Components

import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';

//Redux
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { login } from '../actions/UserAction';

const Login = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const useLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = useLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])



    return (
        <FormContainer>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <aside className="col-sm-20 p-4 mt-5 container">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title mb-4 mt-1">Entrar</h4>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control"   required placeholder="Email" name="Email" type="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input className="form-control"  required  placeholder="******" name="senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <button type="submit" style={{ width: 120 }} className="btn btn-success m-3">Entrar</button>
                            </div>
                            Você ainda não tem uma conta?{' '}<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Crie uma nova conta aqui!!</Link>
                        </form>
                    </article>
                </div>
            </aside>
        </FormContainer>
    )
}

export default Login
