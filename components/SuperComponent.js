import React, {Component,Fragment} from 'react';
import Link from "next/link";
import BaseLayout from "./layouts/BaseLayout";

class SuperComponent extends Component {
    constructor() {
        super();
        this.someVariable='Just some variable';
        console.log('constructor superComponent');
    }
    alertName(title){
        alert(title);
    }
    render() {
        return;
    }
}
export default SuperComponent;