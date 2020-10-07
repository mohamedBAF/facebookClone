import React from 'react'
import Story from './Story'
import './StoryReel.css'
import logo from './pic.jpg'

function StoryReel() {
    return (
        <div className="storyreel">
            <Story 
            image="https://i.ytimg.com/vi/-eK_VfyLKmw/hqdefault.jpg"
             profileSrc={logo} 
             title="Hamma"/>
            <Story image="https://i.ytimg.com/vi/-eK_VfyLKmw/hqdefault.jpg"
             profileSrc={logo} 
             title="Hamma"/>
            <Story image="https://i.ytimg.com/vi/-eK_VfyLKmw/hqdefault.jpg"
             profileSrc={logo} 
             title="Hamma"/>
            <Story image="https://i.ytimg.com/vi/-eK_VfyLKmw/hqdefault.jpg"
             profileSrc={logo} 
             title="Hamma"/>
            <Story image="https://i.ytimg.com/vi/-eK_VfyLKmw/hqdefault.jpg"
             profileSrc={logo} 
             title="Hamma"/>
        </div>
    )
}

export default StoryReel
