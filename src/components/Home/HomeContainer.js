import React from 'react'
import Home_Profile from './Home_Profile'
import Home_Timeline from './Home_Timeline'

export default class extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <>
                <Home_Profile/>
                <Home_Timeline/>
            </>
        )
    }
}