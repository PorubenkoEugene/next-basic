import React, { Component, Fragment } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
import axios from 'axios'

class Index extends SuperComponent {
    constructor(props) {
        super(props)
        console.log(this.someVariable)
        this.state = {
            title: 'I am index',
        }
    }

    componentDidMount() {
        console.log('DidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didUpdate')
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldUpdate')
    //
    //     return nextState.title!==this.state.title&&true
    // }

    componentWillUnmount() {
        console.log('willUnmount')
    }

    render() {
        console.log('render')
        return (
            <BaseLayout>
                <h1>A am index page</h1>
                <h2>{this.state.title}</h2>
                <button
                    onClick={() => this.setState({ title: 'I am NOT index' })}
                >
                    Change title
                </button>
            </BaseLayout>
        )
    }
}
export default Index
