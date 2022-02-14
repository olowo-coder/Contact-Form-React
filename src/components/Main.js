import React from "react";
import { useState } from "react";
import './Main.css';
import { Button, Modal, Form, Card, Row, Col, ListGroup, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMap, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'


function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div class="container">
        <div class="content contact-list">
          <div class="card card-default">
            <div class="card-header align-items-center px-3 px-md-5">
              <h2>Contacts</h2>
              <Button variant="primary" onClick={handleShow}>
                {" "}
                Add Contact
              </Button>
            </div>
            Check 

            <Card style={{ width: "20rem" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="mr-3 img-fluid rounded"
                      alt="Avatar Image"
                    />
                  </Col>
                  <Col sm={7}>
                    {/* <Card.Title className="mt-0 mb-2 text-dark">Card Title</Card.Title> */}
                    <Card.Text>
                        {/* <ListGroup as="ul">
                        <ListGroup.Item className="d-flex">Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup> */}
                        <h5 className="mt-0 mb-2 text-dark">Emma Smith</h5>
                              <Row>
                                  <Col>
                                  <FontAwesomeIcon icon={faMap} />
                                  <span> Nulla vel metus 15/178</span>

                                  </Col>
                                    
                              </Row>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span>exmaple@email.com</span>

                            <FontAwesomeIcon icon={faPhone} />
                            <span>(123) 888 777 632</span>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div class="card-body px-3 px-md-5">
              <div class="row">
                <div class="col-lg-6 col-xl-4 col-md-6 col-sm-12">
                  <div class="card card-default p-4">
                    <a
                      href="javascript:0"
                      class="media text-secondary"
                      data-toggle="modal"
                      data-target="#modal-contact"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        class="mr-3 img-fluid rounded"
                        alt="Avatar Image"
                      />
                      <div class="media-body">
                        <h5 class="mt-0 mb-2 text-dark">Emma Smith</h5>
                        <ul class="list-unstyled text-smoke text-smoke">
                          <li class="d-flex">
                            <i class="mdi mdi-map mr-1"></i>
                            <span>Nulla vel metus 15/178</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-email mr-1"></i>
                            <span>exmaple@email.com</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-phone mr-1"></i>
                            <span>(123) 888 777 632</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-4 col-md-6 col-sm-12">
                  <div class="card card-default p-4">
                    <a
                      href="javascript:0"
                      class="media text-secondary"
                      data-toggle="modal"
                      data-target="#modal-contact"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        class="mr-3 img-fluid rounded"
                        alt="Avatar Image"
                      />

                      <div class="media-body">
                        <h5 class="mt-0 mb-2 text-dark">Emma Smith</h5>
                        <ul class="list-unstyled text-smoke">
                          <li class="d-flex">
                            <i class="mdi mdi-map mr-1"></i>
                            <span>Nulla vel metus 15/178</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-email mr-1"></i>
                            <span>exmaple@email.com</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-phone mr-1"></i>
                            <span>(123) 888 777 632</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="col-lg-6 col-xl-4 col-md-6 col-sm-12">
                  <div class="card card-default p-4">
                    <a
                      href="javascript:0"
                      class="media text-secondary"
                      data-toggle="modal"
                      data-target="#modal-contact"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                        class="mr-3 img-fluid rounded"
                        alt="Avatar Image"
                      />

                      <div class="media-body">
                        <h5 class="mt-0 mb-2 text-dark">Emma Smith</h5>
                        <ul class="list-unstyled text-smoke">
                          <li class="d-flex">
                            <i class="mdi mdi-map mr-1"></i>
                            <span>Nulla vel metus 15/178</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-email mr-1"></i>
                            <span>exmaple@email.com</span>
                          </li>
                          <li class="d-flex">
                            <i class="mdi mdi-phone mr-1"></i>
                            <span>(123) 888 777 632</span>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="modal-contact"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div class="modal-content">
                <div class="modal-header justify-content-end border-bottom-0">
                  <button
                    type="button"
                    class="btn-edit-icon"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="mdi mdi-pencil"></i>
                  </button>

                  <div class="dropdown">
                    <button
                      class="btn-dots-icon"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="mdi mdi-dots-vertical"></i>
                    </button>

                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="javascript:void(0)">
                        Action
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Another action
                      </a>
                      <a class="dropdown-item" href="javascript:void(0)">
                        Something else here
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="btn-close-icon"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="mdi mdi-close"></i>
                  </button>
                </div>

                <div class="modal-body pt-0">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <div class="profile-content-left px-4">
                        <div class="card text-center px-0 border-0">
                          <div class="card-img mx-auto">
                            <img
                              class="rounded-circle"
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt="user image"
                            />
                          </div>

                          <div class="card-body">
                            <h4 class="py-2">Albrecht Straub</h4>
                            <p>Albrecht.straub@gmail.com</p>
                            <a
                              class="btn btn-primary btn-pill btn-lg my-4"
                              href="javascript:void(0)"
                            >
                              Follow
                            </a>
                          </div>
                        </div>

                        <div class="d-flex justify-content-between">
                          <div class="text-center pb-4">
                            <h6 class="pb-2">1503</h6>
                            <p>Friends</p>
                          </div>

                          <div class="text-center pb-4">
                            <h6 class="pb-2">2905</h6>
                            <p>Followers</p>
                          </div>

                          <div class="text-center pb-4">
                            <h6 class="pb-2">1200</h6>
                            <p>Following</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="contact-info px-4">
                        <h4 class="mb-1">Contact Details</h4>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Email address
                        </p>
                        <p>Albrecht.straub@gmail.com</p>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Phone Number
                        </p>
                        <p>+99 9539 2641 31</p>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Birthday
                        </p>
                        <p>Nov 15, 1990</p>
                        <p class="text-dark font-weight-medium pt-4 mb-2">
                          Event
                        </p>
                        <p>Lorem, ipsum dolor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="px-4" closeButton>
              <Modal.Title>
                <div>
                  <h5>Create New Contact</h5>
                </div>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="row mb-3" controlId="formBasicEmail">
                  <label className="col-sm-4 col-lg-2">User Image</label>
                  <div className="col-sm-8 col-lg-10">
                    <div className="custom-file mb-1">
                      <Form.Control type="file" className="custom-file-input" />
                    </div>
                  </div>
                </Form.Group>

                <div className="row mb-3">
                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="email" placeholder="First name" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="email" placeholder="Last name" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col-lg-6"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="email" placeholder="User name" />
                  </Form.Group>

                  <Form.Group className="col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <InputGroup className="mb-2">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control type="email" placeholder="Email Address" />
                        </InputGroup>
                  </Form.Group>

                  <Form.Group className="col-lg-6" controlId="formBasicEmail">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="text" value="01-10-1993" />
                  </Form.Group>

                  <Form.Group
                    className="col-lg-6 mb-4"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Event</Form.Label>
                    <Form.Control type="text" value="Some value for event" />
                  </Form.Group>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Contact
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Main;
