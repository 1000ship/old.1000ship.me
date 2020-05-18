import React from 'react'
import { Link } from 'framework7-react'

const ThumbnailDir = "/static/img/workspace/"
const VideoDir = "/static/video/"

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags} = props
        this.state = {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags}
        console.log( this.props )
    }

    render() {
        const {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags} = this.state
        return (
        <div className="work">
            <Link href={`${linkHref}`} external target="_blank">  
                {(
                    supportVideo
                    ? (<>
                        <video autoPlay loop muted poster={`${ThumbnailDir+imageName}`}
                            className="d-none d-md-block">
                            <source src={`${VideoDir+videoName}`} type="video/mp4"/>
                        </video>
                        <img className="d-block d-md-none" src={`${ThumbnailDir+imageName}`}/>
                    </>) : ( <img src={`${ThumbnailDir+imageName}`}/> )
                )}
            </Link>
            <div className="contents">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="date">{createdYear}</div>
                <div className="keyword">
                    {tags.map( tag => <div className="tag">{tag}</div> )}
                </div>
            </div>
        </div>
        )   
    }

}