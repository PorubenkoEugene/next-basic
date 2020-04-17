import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import Link from 'next/link'
import { Link as NextLink } from '../routes'
import axios from 'axios'

class Portfolios extends Component {
    static async getInitialProps() {
        let posts = []
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            )
            posts = response.data.slice(0, 10)
            return { posts }
        } catch (e) {
            console.log(e)
        }
    }

    renderPosts(posts) {
        return posts.map(({ id, title }, idx) => (
            <li key={idx}>
                <Link as={`/portfolio/${id}`} href={`/portfolio?id=${id}`}>
                    <a>{title}</a>
                </Link>
            </li>
        ))
    }

    renderPosts2(posts) {
        return posts.map(({ id, title }, idx) => (
            <li key={idx}>
                <NextLink route={`/portfolio/${id}`}>
                    <a>{title}</a>
                </NextLink>
            </li>
        ))
    }

    render() {
        const { posts } = this.props
        return (
            <BaseLayout>
                <h1>A am a Portfolios page</h1>
                <ul>{this.renderPosts(posts)}</ul>
                <ul>{this.renderPosts2(posts)}</ul>
            </BaseLayout>
        )
    }
}
export default Portfolios
