import React from 'react'
import { Link } from 'framework7-react'
import styled from 'styled-components'
import { rootApi } from '../api'

let RootDir = rootApi.getRootPath()
const ThumbnailDir = `${RootDir}static/img/workspace/`
const VideoDir = `${RootDir}static/video/`
const TechIconDir = `${RootDir}static/tech-icons/`
const TechIconList = ["air", "android", "flash", "framework7", "ios", "java", "javascript", "nodejs", "python", "rails", "react", "ruby", "swift"]

const Video = styled.video`
    object-fit: cover;
`

const TechIconContainer = styled.div`
    margin: 3px;
`
const TechIcon = styled.div`
    width: 24px;
    height: 24px;
    background: url(${props => `${TechIconDir}${props.icon}.png`});
    background-size: cover;
    background-position: center center;
    margin-right: 5px;
    display: inline-block;
`

export default class extends React.Component {
    constructor(props) {
        super(props)
        const {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags, techIcons} = props
        this.state = {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags, techIcons}
    }

    render() {
        const {linkHref, imageName, supportVideo, videoName, title, description, createdYear, tags, techIcons} = this.state
        return (
        <div className="work">
            <Link href={`${linkHref}`} external target="_blank">  
                {(
                    supportVideo
                    ? (<>
                        <Video autoPlay loop muted poster={`${ThumbnailDir+imageName}`}
                            className="d-none d-md-block">
                            <source src={`${VideoDir+videoName}`} type="video/mp4"/>
                        </Video>
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
                <TechIconContainer>
                    {techIcons && techIcons.filter( techIcon => TechIconList.includes(techIcon) )
                        .map( (techIcon, i) => <TechIcon key={i} icon={techIcon}/> )}
                </TechIconContainer>
            </div>
        </div>
        )   
    }

}