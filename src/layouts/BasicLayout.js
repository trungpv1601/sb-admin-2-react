import React, { Component } from "react";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";

const menu = [
  {
    icon: "dashboard",
    label: " Dashboard",
    to: "/"
  },
  {
    icon: "sitemap",
    label: " Multi-Level Dropdown",
    content: [
      {
        icon: "bolt",
        label: " Second Level Item",
        to: "sub-menu"
      }
    ]
  },
  {
    icon: "external-link",
    label: " External Link",
    externalLink: true,
    to: "https://www.google.com"
  }
];

class BasicLayout extends Component {
  handleClassContainer = ({ itemId, visible, items }) => {
    let classContainer = "nav";
    if (itemId) {
      classContainer += " nav-second-level collapse";
    }
    return classContainer;
  };

  render() {
    return (
      <div id="wrapper">
        <Navbar fluid staticTop style={{ marginBottom: 0 }}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">SB Admin v2.0</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown
                eventKey={2}
                title={<i className="fa fa-tasks fa-fw" />}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown
                eventKey={3}
                title={<i className="fa fa-bell fa-fw" />}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavDropdown
                eventKey={4}
                title={<i className="fa fa-user fa-fw" />}
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-default sidebar" role="navigation">
            <MetisMenu
              className="sidebar-nav navbar-collapse"
              classNameContainer={this.handleClassContainer}
              classNameContainerVisible="in"
              content={menu}
              LinkComponent={RouterLink}
            />
          </div>
        </Navbar>

        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Dashboard</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-comments fa-5x" />
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">26</div>
                      <div>New Comments!</div>
                    </div>
                  </div>
                </div>
                <a href="/test">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                    <div className="clearfix" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-green">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-tasks fa-5x" />
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">12</div>
                      <div>New Tasks!</div>
                    </div>
                  </div>
                </div>
                <a href="/test">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                    <div className="clearfix" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-yellow">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-shopping-cart fa-5x" />
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">124</div>
                      <div>New Orders!</div>
                    </div>
                  </div>
                </div>
                <a href="/test">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                    <div className="clearfix" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-red">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-support fa-5x" />
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">13</div>
                      <div>Support Tickets!</div>
                    </div>
                  </div>
                </div>
                <a href="/test">
                  <div className="panel-footer">
                    <span className="pull-left">View Details</span>
                    <span className="pull-right">
                      <i className="fa fa-arrow-circle-right" />
                    </span>
                    <div className="clearfix" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
