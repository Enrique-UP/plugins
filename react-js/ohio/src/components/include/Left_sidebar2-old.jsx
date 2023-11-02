import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import { render } from 'react-dom';

class Left_sidebar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { a: false,b: false,c: false,d: false}
        // this.handleCheck = this.handleCheck.bind(this);
    }
      
    // handleCheck(e,ind){
    //     // console.log(e.target);
    //     this.setState({
    //         checked: {...this.state.checked,ind:}
    //     })
    // }
    render(){
        return(
            <>
                <div className="accordion_new">
                    <p className="head">Filter Courses</p>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <span className="accordion_head">Type</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <label className="container_area">
                                <input type="checkbox" name="1" checked="checked" value="1" checked={this.state.a?true:false} onChange={e=>this.setState({a:e.target.checked})} />
                                <span className="checkmark"  >Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" onChange={e=>this.setState({b:e.target.checked})} value="2" name="2" checked={this.state.b?true:false}/>
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" checked={this.state.c?true:false} onChange={e=>this.setState({c:e.target.checked})} value="3" name="3" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" checked={this.state.d?true:false} onChange={e=>this.setState({d:e.target.checked})} value="4" name="4" />
                                <span className="checkmark">Lorem</span>
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <span className="accordion_head">College</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <label className="container_area">
                                <input type="checkbox" checked="checked" checked={this.state.checked} onChange={this.handleCheck} />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <span className="accordion_head">Qualifications</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <label className="container_area">
                                <input type="checkbox" checked="checked" checked={this.state.checked} onChange={this.handleCheck} />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <span className="accordion_head">School or Department</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <label className="container_area">
                                <input type="checkbox" checked="checked" checked={this.state.checked} onChange={this.handleCheck} />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <span className="accordion_head">Teaching Experience</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <label className="container_area">
                                <input type="checkbox" checked="checked" checked={this.state.checked} onChange={this.handleCheck} />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem</span>
                                </label>
                                <label className="container_area">
                                <input type="checkbox" />
                                <span className="checkmark">Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</span>
                                </label>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>{/*--programs_accordion--*/}
            </>
        )
    }
}

export default Left_sidebar2;