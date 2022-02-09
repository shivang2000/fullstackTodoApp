import React from 'react';
import styled from "styled-components";
import { logout, selectUser } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Header = () => {

    const user = useSelector(selectUser)
    const location = useLocation()
    const isLoginPage = location.pathname === '/login'
    const isRegisterpage = location.pathname === '/register'
    const isHomePage = location.pathname === '/'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        console.log('logging out')
        dispatch(logout())
        localStorage.removeItem('refresh-token')
        navigate('/login')  
    }

    const renderRigthSectionOfNavbar = () => {
        if (user && isHomePage) {
            return (
                <span>
                    <h2>
                        welcome, {user}
                        <input onClick={() => handleLogout()} type="button" value="logout" />
                    </h2>
                </span>
            )
        }
        if (isLoginPage) {
            return <h2>Dont Have Account? <Link to='/register'>Register</Link></h2>
        }
        if (isRegisterpage) {
            return <h2>Have Account? <Link to='/login'>Login</Link></h2>
        }
    }

    return (
        <HeaderConatiner>
            <HeaderItem>
                <h2>TODO App</h2>
            </HeaderItem>
            <HeaderItem>
                {renderRigthSectionOfNavbar()}
            </HeaderItem>
        </HeaderConatiner>
    )
}

export default Header;

const HeaderConatiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: .5rem;
`
const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    padding: auto
`