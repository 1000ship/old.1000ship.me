import React from 'react'
import { Link } from 'framework7-react'

const getRootPath = () => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return "/"
    } else {
        // return "https://1000ship.github.io/1000ship.me/"
        return "http://1000sh.ipdisk.co.kr:8000/list/HDD1/1000sh-disk/_page/"
    }
}
let RootDir = getRootPath()
const ThumbnailDir = `${RootDir}static/img/workspace/`
const VideoDir = `${RootDir}static/video/`

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags} = props
        this.state = {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags}
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
                        <img className="lazy lazy-fade-in d-block d-md-none" src={`${ThumbnailDir+imageName}`}/>
                    </>) : ( <img src={`${ThumbnailDir+imageName}`} className="lazy lazy-fade-in"/> )
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