import React,{ Component } from 'react'
export default class Navigation extends Component {
    render(){
        return (
            <div className='task'>
                <nav>
                    <ul>
                        <a className='active' href='#home'>Home</a>
                        <a className='active'href='#news'>New</a>
                        <a className='active'href='#about'>About</a>
                        <a className='active' href='#contact'>Contact</a>
                    </ul>
                </nav>
            </div>
        )
    }
}