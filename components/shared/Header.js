import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import '../../styles/main.scss'
import { Link as NextLink } from '../../routes'

class Header extends Component {
    render() {
        const { title, children } = this.props
        return (
            <Fragment>
                <h2 className='styledTitle'>{title}</h2>
                <h2 className='styledScss'>{title}</h2>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/portfolios'>
                    <a>Portfolio</a>
                </Link>
                <Link href='/blogs'>
                    <a>Blog</a>
                </Link>
                <Link href='/cv'>
                    <a>CV</a>
                </Link>
                <NextLink route='test' params={{ id: '1' }}>
                    Test1
                </NextLink>
                <NextLink route='/test/2'>Test2</NextLink>
                <style jsx>
                    {`
                        a {
                            text-decoration: none;
                            color: red;
                            font-size: 20px;
                        }
                        .styledTitle {
                            color: blue;
                        }
                    `}
                </style>
            </Fragment>
        )
    }
}
export default Header
