import React, { Component } from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'

import { withRouter } from 'next/router'

class Portfolio extends Component {
    render() {
        const { id } = this.props.router.query
        return (
            <BaseLayout>
                <h1>A am a Portfolio page</h1>
                <h2>{id}</h2>
            </BaseLayout>
        )
    }
}
export default withRouter(Portfolio)
