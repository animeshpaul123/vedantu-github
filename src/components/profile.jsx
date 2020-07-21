import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/profile'
import { IoMdPeople } from 'react-icons/io'
import { GrLocation } from 'react-icons/gr'
import { RiBuildingLine } from 'react-icons/ri'

class Profile extends Component {
    componentDidMount() {
        this.props.onGetProfile()
    }
    render() {
        const { data } = this.props
        const { name, login, bio, avatar_url, location, followers, following, company } = data || {}
        return data && <div className="profile-container">
            <div className="name-image">
                <div className="img-wrapper">
                    <img src={avatar_url} alt="avatar_url" />
                </div>
                <div className="name">
                    <h1>{name}</h1>
                    <p>{login}</p>
                </div>
            </div>
            {
                bio && <p className="bio">{bio}</p>
            }
            <div className="buttons">
                <button>Follow</button>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="popularity">
                <div className="followers">
                    <span className="icon"><IoMdPeople /></span>
                    <span className="count">{followers}</span>
                        followers
                    </div>
                <div className="following">
                    <span className="icon"></span>
                    <span className="count">{following}</span>
                        followers
                    </div>
            </div>
            <div className="other-info">
                <div className="company">
                    <span className="icon"><RiBuildingLine /></span>
                    {company}
                </div>
                <div className="location">
                    <span className="icon"><GrLocation /></span>
                    {location}
                </div>
            </div>
        </div>
    }
}
const mapStateToProps = state => {
    return {
        data: state.deflt.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetProfile: () => dispatch(getProfile())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)