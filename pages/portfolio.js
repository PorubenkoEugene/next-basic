import React, { Component, Fragment } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'

class Portfolio extends Component {
    static async getInitialProps({ query }) {
        const postId = query.id
        let post = {}
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${postId}`
            )
            post = response.data
        } catch (e) {
            console.log(e)
        }
        return { post }
    }

    render() {
        // const { id } = this.props.router.query
        const {
            post: { id, title, body },
        } = this.props
        return (
            <BaseLayout>
                <h1>{title}</h1>
                <h2>{id}</h2>
                <p>{body}</p>
            </BaseLayout>
        )
    }
}
export default withRouter(Portfolio)
