import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/profile'
import axios from 'axios'
import { Input } from 'reactstrap'
import { FaBalanceScale } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

class Repo extends Component {
    state = {
        data: null,
        error: false
    }
    componentDidMount() {
        // this.props.onGetProfile()
        this.getRepos('supreetsingh247')
    }
    getRepos = async (user) => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)

            this.setState({
                data: data.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at)
                }), error: false, backup: data
            })
            console.log(data)
        } catch (e) {
            this.setState({ error: true })
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        // this.search()
    }
    search = (e) => {
        this.setState({ data: this.state.backup.filter(({ name }) => name.includes(e.target.value)) })
    }
    render() {
        const { data } = this.state
        return (
            <div className="repo-container">
                <form onSubmit={this.onSubmit}>
                    <Input placeholder="Find a repository..." onChange={this.search} />
                    <div className="buttons">
                        <button>Type: All</button>
                        <button>Language: All</button>
                    </div>
                </form>
                <div className="repo-inner">
                    {
                        data && data.map((item, i) => {
                            return <MiniRepo key={item.id} {...item} i={i} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const MiniRepo = (props) => {
    const { name, fork, description, updated_at, language, license, stargazers_count, i, html_url } = props
    const getColor = (language) => {
        switch (language) {
            case "HTML":
                return "#e34c26"
            case "JavaScript":
                return "#f1e05a"
            case "CSS":
                return "#563d7c"
            default: return "#fff"
        }
    }
    return (
        <div className="mini-repo --fadeInUp" style={{ animationDelay: `${i / 5}s` }}>
            <div className="left">
                <a href={html_url} target="_blank"><h3 className="name" style={{ color: "#0366d6", fontWeight: "bold", fontSize: "20px" }}>{name}</h3></a>
                <p className="desc">{description}</p>
                <div className="others">
                    <p className="lang">
                        <div className="ball" style={{ background: getColor(language) }}></div>
                        {language}
                    </p>
                    <p className="star">{}</p>
                    {
                        license && <p className="license">
                            <FaBalanceScale />
                            {license.name}
                        </p>
                    }
                </div>
            </div>
            <div className="right">
                {/* <p className="repo-name">{}</p> */}
                <button>< AiOutlineStar /> Star</button>
                <div className="line"></div>
            </div>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Repo)