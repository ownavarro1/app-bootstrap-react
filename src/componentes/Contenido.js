import React from 'react'
import { Footer } from './Footer.js';
import { Search } from './Search.js';
export const Contenido = () => {
  return (
    <div id="wrapper">
    {/* <!---- Page Wrapper --> */}
          {/* <!---- Sidebar --> */}
              <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  
              {/* <!---- Sidebar - Brand --> */}
              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                  <div className="sidebar-brand-icon rotate-n-15">
                      <i className="fas fa-laugh-wink"></i>
                  </div>
                  <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
              </a>
  
              {/* <!---- Divider --> */}
              <hr className="sidebar-divider my-0"/>
  
              {/* <!---- Nav Item - Dashboard --> */}
              <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                      <i className="fas fa-fw fa-tachometer-alt"></i>
                      <span>Dashboard</span></a>
              </li>
  
              {/* <!---- Divider --> */}
              <hr className="sidebar-divider"/>
  
              {/* <!---- Heading --> */}
              <div className="sidebar-heading">
                  Interface
              </div>
  
              {/* <!---- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                      aria-expanded="true" aria-controls="collapseTwo">
                      <i className="fas fa-fw fa-cog"></i>
                      <span>Components</span>
                  </a>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                          <h6 className="collapse-header">Custom Components:</h6>
                          <a className="collapse-item" href="buttons.html">Buttons</a>
                          <a className="collapse-item" href="cards.html">Cards</a>
                      </div>
                  </div>
              </li>
  
              {/* <!---- Nav Item - Utilities Collapse Menu --> */}
              <li className="nav-item">
                  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                      aria-expanded="true" aria-controls="collapseUtilities">
                      <i className="fas fa-fw fa-wrench"></i>
                      <span>Utilities</span>
                  </a>
                  <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                      data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                          <h6 className="collapse-header">Custom Utilities:</h6>
                          <a className="collapse-item" href="utilities-color.html">Colors</a>
                          <a className="collapse-item" href="utilities-border.html">Borders</a>
                          <a className="collapse-item" href="utilities-animation.html">Animations</a>
                          <a className="collapse-item" href="utilities-other.html">Other</a>
                      </div>
                  </div>
              </li>
  
              {/* <!---- Divider --> */}
              <hr className="sidebar-divider"/>
  
              {/* <!---- Heading --> */}
              <div className="sidebar-heading">
                  Addons
              </div>
  
              {/* <!---- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                  <a className="nav-link collapsed" href="https://www.thoughtco.com/" data-toggle="collapse" data-target="#collapsePages"
                      aria-expanded="true" aria-controls="collapsePages">
                      <i className="fas fa-fw fa-folder"></i>
                      <span>Pages</span>
                  </a>
                  <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                      <div className="bg-white py-2 collapse-inner rounded">
                          <h6 className="collapse-header">Login Screens:</h6>
                          <a className="collapse-item" href="login.html">Login</a>
                          <a className="collapse-item" href="register.html">Register</a>
                          <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                          <div className="collapse-divider"></div>
                          <h6 className="collapse-header">Other Pages:</h6>
                          <a className="collapse-item" href="404.html">404 Page</a>
                          <a className="collapse-item" href="blank.html">Blank Page</a>
                      </div>
                  </div>
              </li>
  
              {/* <!---- Nav Item - Charts --> */}
              <li className="nav-item">
                  <a className="nav-link" href="charts.html">
                      <i className="fas fa-fw fa-chart-area"></i>
                      <span>Charts</span></a>
              </li>
  
              {/* <!---- Nav Item - Tables --> */}
              <li className="nav-item">
                  <a className="nav-link" href="tables.html">
                      <i className="fas fa-fw fa-table"></i>
                      <span>Tables</span></a>
              </li>
  
              {/* <!---- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block"/>
  
              {/* <!---- Sidebar Toggler (Sidebar) --> */}
              <div className="text-center d-none d-md-inline">
                  <button className="rounded-circle border-0" id="sidebarToggle"></button>
              </div>
  
              {/* <!---- Sidebar Message --> */}
              <div className="sidebar-card d-none d-lg-flex">
                  <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                  <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                  <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
              </div>
  
          </ul>
          {/* <!---- End of Sidebar --> */}
  
          {/* <!---- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
  
              {/* <!---- Main Content --> */}
              <div id="content">
                 <Search />
                  
                  {/* <!---- Begin Page Content --> */}
                  <div className="container-fluid">
  
                      {/* <!---- Page Heading --> */}
                      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                  className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                      </div>
  
                      {/* <!---- Content Row --> */}
                      <div className="row">
  
                          {/* <!---- Earnings (Monthly) Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-primary shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                  Earnings (Monthly)</div>
                                              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                          </div>
                                          <div className="col-auto">
                                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          {/* <!---- Earnings (Monthly) Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-success shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                  Earnings (Annual)</div>
                                              <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                          </div>
                                          <div className="col-auto">
                                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          {/* <!---- Earnings (Monthly) Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-info shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                              </div>
                                              <div className="row no-gutters align-items-center">
                                                  <div className="col-auto">
                                                      <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                  </div>
                                                  <div className="col">
                                                      <div className="progress progress-sm mr-2">
                                                          <div className="progress-bar bg-info" role="progressbar"
                                                              style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                                                              aria-valuemax="100"></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="col-auto">
                                              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          {/* <!---- Pending Requests Card Example --> */}
                          <div className="col-xl-3 col-md-6 mb-4">
                              <div className="card border-left-warning shadow h-100 py-2">
                                  <div className="card-body">
                                      <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                  Pending Requests</div>
                                              <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                          </div>
                                          <div className="col-auto">
                                              <i className="fas fa-comments fa-2x text-gray-300"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      {/* <!---- Content Row --> */}
  
                      <div className="row">
  
                          {/* <!---- Area Chart --> */}
                          <div className="col-xl-8 col-lg-7">
                              <div className="card shadow mb-4">
                                  {/* <!---- Card Header - Dropdown --> */}
                                  <div
                                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                      <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                      <div className="dropdown no-arrow">
                                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                              aria-labelledby="dropdownMenuLink">
                                              <div className="dropdown-header">Dropdown Header:</div>
                                              <a className="dropdown-item" href="#">Action</a>
                                              <a className="dropdown-item" href="#">Another action</a>
                                              <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                          </div>
                                      </div>
                                  </div>
                                  {/* <!---- Card Body --> */}
                                  <div className="card-body">
                                      <div className="chart-area">
                                          <canvas id="myAreaChart"></canvas>
                                      </div>
                                  </div>
                              </div>
                          </div>
  
                          {/* <!---- Pie Chart --> */}
                          <div className="col-xl-4 col-lg-5">
                              <div className="card shadow mb-4">
                                  {/* <!---- Card Header - Dropdown --> */}
                                  <div
                                      className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                      <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                                      <div className="dropdown no-arrow">
                                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                              aria-labelledby="dropdownMenuLink">
                                              <div className="dropdown-header">Dropdown Header:</div>
                                              <a className="dropdown-item" href="#">Action</a>
                                              <a className="dropdown-item" href="#">Another action</a>
                                              <div className="dropdown-divider"></div>
                                              <a className="dropdown-item" href="#">Something else here</a>
                                          </div>
                                      </div>
                                  </div>
                                  {/* <!---- Card Body --> */}
                                  <div className="card-body">
                                      <div className="chart-pie pt-4 pb-2">
                                          <canvas id="myPieChart"></canvas>
                                      </div>
                                      <div className="mt-4 text-center small">
                                          <span className="mr-2">
                                              <i className="fas fa-circle text-primary"></i> Direct
                                          </span>
                                          <span className="mr-2">
                                              <i className="fas fa-circle text-success"></i> Social
                                          </span>
                                          <span className="mr-2">
                                              <i className="fas fa-circle text-info"></i> Referral
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      {/* <!---- Content Row --> */}
                      <div className="row">
  
                          {/* <!---- Content Column --> */}
                          <div className="col-lg-6 mb-4">
  
                              
  
                              {/* <!---- Color System --> */}
                              <div className="row">
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-primary text-white shadow">
                                          <div className="card-body">
                                              Primary
                                              <div className="text-white-50 small">#4e73df</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-success text-white shadow">
                                          <div className="card-body">
                                              Success
                                              <div className="text-white-50 small">#1cc88a</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-info text-white shadow">
                                          <div className="card-body">
                                              Info
                                              <div className="text-white-50 small">#36b9cc</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-warning text-white shadow">
                                          <div className="card-body">
                                              Warning
                                              <div className="text-white-50 small">#f6c23e</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-danger text-white shadow">
                                          <div className="card-body">
                                              Danger
                                              <div className="text-white-50 small">#e74a3b</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-secondary text-white shadow">
                                          <div className="card-body">
                                              Secondary
                                              <div className="text-white-50 small">#858796</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-light text-black shadow">
                                          <div className="card-body">
                                              Light
                                              <div className="text-black-50 small">#f8f9fc</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6 mb-4">
                                      <div className="card bg-dark text-white shadow">
                                          <div className="card-body">
                                              Dark
                                              <div className="text-white-50 small">#5a5c69</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                          </div>
  
                          <div className="col-lg-6 mb-4">
  
                          
  
  
                          </div>
                      </div>
  
                  </div>
                  {/* <!---- /.container-fluid --> */}
  
              </div>
              {/* <!---- End of Main Content --> */}
          <Footer />
  
          </div>
          {/* <!---- End of Content Wrapper --> */}
   {/* <!---- End of Page Wrapper --> */}
      </div>
  )
}
