import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to={'/'}> HOME </Link> </li>
                    <li> <Link to={'/first'}> FIRST </Link> </li>
                    <li> <Link to={'/second'}> SECOND </Link> </li>
                </ul>
            </div>
        )
    }
}