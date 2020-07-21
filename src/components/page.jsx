import React, { Component } from 'react'
import Profile from './profile'
import Repo from './repo'
import { Row, Col } from 'reactstrap'
class Page extends Component {
    render() {
        return (
            <div className="page-wrapper" style={{ width: "100%" }}>
                <div className="page-inner __max-width">
                    <Row>
                        <Col md="3">
                            <Profile />
                        </Col>
                        <Col md="9">
                            <Repo />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Page;
