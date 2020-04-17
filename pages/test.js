import React, { Component, Fragment } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

class Portfolio extends Component {
    static async getInitialProps({ query }) {
        const testId = query.id
        return { testId }
    }

    render() {
        const { testId } = this.props
        return (
            <BaseLayout>
                <h1>A am a Test page with id {testId}</h1>
            </BaseLayout>
        )
    }
}
export default withRouter(Portfolio)
