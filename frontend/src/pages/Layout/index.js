import React from 'react'

import '../../assets/styles/main.css'

import { ReactComponent as imgFaceOnze } from '../../assets/images/faces/face11.jpg'

const Layout = () => {
	return (
		<div>
			<div className="container-scroller">
				{/* partial:partials/_sidebar.html */}
				<nav className="sidebar sidebar-offcanvas" id="sidebar">
					<div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
						<a className="sidebar-brand brand-logo" href="index.html">
							<img src="assets/images/logo.svg" alt="logo" />
						</a>
						<a className="sidebar-brand brand-logo-mini" href="index.html">
							<img src="assets/images/logo-mini.svg" alt="logo" />
						</a>
					</div>
					<ul className="nav">
						<li className="nav-item profile">
							<div className="profile-desc">
								<div className="profile-pic">
									<div className="count-indicator">
										<img
											className="img-xs rounded-circle "
											src="assets/images/faces/face15.jpg"
											alt=""
										/>
										<span className="count bg-success" />
									</div>
									<div className="profile-name">
										<h5 className="mb-0 font-weight-normal">Henry Klein</h5>
										<span>Gold Member</span>
									</div>
								</div>
								<button id="profile-dropdown" data-toggle="dropdown">
									<i className="mdi mdi-dots-vertical" />
								</button>
								<div
									className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
									aria-labelledby="profile-dropdown"
								>
									<button className="dropdown-item preview-item">
										<div className="preview-thumbnail">
											<div className="preview-icon bg-dark rounded-circle">
												<i className="mdi mdi-settings text-primary" />
											</div>
										</div>
										<div className="preview-item-content">
											<p className="preview-subject ellipsis mb-1 text-small">
												Account settings
											</p>
										</div>
									</button>
									<div className="dropdown-divider" />
									<button className="dropdown-item preview-item">
										<div className="preview-thumbnail">
											<div className="preview-icon bg-dark rounded-circle">
												<i className="mdi mdi-onepassword  text-info" />
											</div>
										</div>
										<div className="preview-item-content">
											<p className="preview-subject ellipsis mb-1 text-small">
												Change Password
											</p>
										</div>
									</button>
									<div className="dropdown-divider" />
									<button className="dropdown-item preview-item">
										<div className="preview-thumbnail">
											<div className="preview-icon bg-dark rounded-circle">
												<i className="mdi mdi-calendar-today text-success" />
											</div>
										</div>
										<div className="preview-item-content">
											<p className="preview-subject ellipsis mb-1 text-small">
												To-do list
											</p>
										</div>
									</button>
								</div>
							</div>
						</li>
						<li className="nav-item nav-category">
							<span className="nav-link">Navigation</span>
						</li>
						<li className="nav-item menu-items">
							<a className="nav-link" href="index.html">
								<span className="menu-icon">
									<i className="mdi mdi-speedometer" />
								</span>
								<span className="menu-title">Dashboard</span>
							</a>
						</li>
						<li className="nav-item menu-items">
							<a
								className="nav-link"
								data-toggle="collapse"
								href="#ui-basic"
								aria-expanded="false"
								aria-controls="ui-basic"
							>
								<span className="menu-icon">
									<i className="mdi mdi-laptop" />
								</span>
								<span className="menu-title">Basic UI Elements</span>
								<i className="menu-arrow" />
							</a>
							<div className="collapse" id="ui-basic">
								<ul className="nav flex-column sub-menu">
									<li className="nav-item">
										{' '}
										<a
											className="nav-link"
											href="pages/ui-features/buttons.html"
										>
											Buttons
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a
											className="nav-link"
											href="pages/ui-features/dropdowns.html"
										>
											Dropdowns
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a
											className="nav-link"
											href="pages/ui-features/typography.html"
										>
											Typography
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item menu-items">
							<a className="nav-link" href="pages/forms/basic_elements.html">
								<span className="menu-icon">
									<i className="mdi mdi-playlist-play" />
								</span>
								<span className="menu-title">Form Elements</span>
							</a>
						</li>
						<li className="nav-item menu-items">
							<a className="nav-link" href="pages/tables/basic-table.html">
								<span className="menu-icon">
									<i className="mdi mdi-table-large" />
								</span>
								<span className="menu-title">Tables</span>
							</a>
						</li>
						<li className="nav-item menu-items">
							<a className="nav-link" href="pages/charts/chartjs.html">
								<span className="menu-icon">
									<i className="mdi mdi-chart-bar" />
								</span>
								<span className="menu-title">Charts</span>
							</a>
						</li>
						<li className="nav-item menu-items">
							<a className="nav-link" href="pages/icons/mdi.html">
								<span className="menu-icon">
									<i className="mdi mdi-contacts" />
								</span>
								<span className="menu-title">Icons</span>
							</a>
						</li>
						<li className="nav-item menu-items">
							<a
								className="nav-link"
								data-toggle="collapse"
								href="#auth"
								aria-expanded="false"
								aria-controls="auth"
							>
								<span className="menu-icon">
									<i className="mdi mdi-security" />
								</span>
								<span className="menu-title">User Pages</span>
								<i className="menu-arrow" />
							</a>
							<div className="collapse" id="auth">
								<ul className="nav flex-column sub-menu">
									<li className="nav-item">
										{' '}
										<a
											className="nav-link"
											href="pages/samples/blank-page.html"
										>
											{' '}
											Blank Page{' '}
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a className="nav-link" href="pages/samples/error-404.html">
											{' '}
											404{' '}
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a className="nav-link" href="pages/samples/error-500.html">
											{' '}
											500{' '}
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a className="nav-link" href="pages/samples/login.html">
											{' '}
											Login{' '}
										</a>
									</li>
									<li className="nav-item">
										{' '}
										<a className="nav-link" href="pages/samples/register.html">
											{' '}
											Register{' '}
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li className="nav-item menu-items">
							<a
								className="nav-link"
								href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html"
							>
								<span className="menu-icon">
									<i className="mdi mdi-file-document-box" />
								</span>
								<span className="menu-title">Documentation</span>
							</a>
						</li>
					</ul>
				</nav>
				{/* partial */}
				<div className="container-fluid page-body-wrapper">
					{/* partial:partials/_navbar.html */}
					<nav className="navbar p-0 fixed-top d-flex flex-row">
						<div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
							<a className="navbar-brand brand-logo-mini" href="index.html">
								<img src="assets/images/logo-mini.svg" alt="logo" />
							</a>
						</div>
						<div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
							<button
								className="navbar-toggler navbar-toggler align-self-center"
								type="button"
								data-toggle="minimize"
							>
								<span className="mdi mdi-menu" />
							</button>
							<ul className="navbar-nav w-100">
								<li className="nav-item w-100">
									<form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
										<input
											type="text"
											className="form-control"
											placeholder="Search products"
										/>
									</form>
								</li>
							</ul>

							<button
								className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
								type="button"
								data-toggle="offcanvas"
							>
								<span className="mdi mdi-format-line-spacing" />
							</button>
						</div>
					</nav>
					{/* partial */}
					<div className="main-panel">
						<div className="content-wrapper">
							<div className="row">
								<div className="col-12 grid-margin stretch-card">
									<div className="card corona-gradient-card">
										<div className="card-body py-0 px-0 px-sm-3">
											<div className="row align-items-center">
												<div className="col-4 col-sm-3 col-xl-2">
													<img
														src="assets/images/dashboard/Group126@2x.png"
														className="gradient-corona-img img-fluid"
														alt=""
													/>
												</div>
												<div className="col-5 col-sm-7 col-xl-8 p-0">
													<h4 className="mb-1 mb-sm-0">
														voce sabia que essa conta vence hoje?
													</h4>
													<p className="mb-0 font-weight-normal d-none d-sm-block">
														clique aqui para ver mais informacoes desse boleto.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-3 col-sm-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-9">
													<div className="d-flex align-items-center align-self-start">
														<h3 className="mb-0">$12.34</h3>
														<p className="text-success ml-2 mb-0 font-weight-medium">
															+3.5%
														</p>
													</div>
												</div>
												<div className="col-3">
													<div className="icon icon-box-success ">
														<span className="mdi mdi-arrow-top-right icon-item" />
													</div>
												</div>
											</div>
											<h6 className="text-muted font-weight-normal">
												Potential growth
											</h6>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-9">
													<div className="d-flex align-items-center align-self-start">
														<h3 className="mb-0">$17.34</h3>
														<p className="text-success ml-2 mb-0 font-weight-medium">
															+11%
														</p>
													</div>
												</div>
												<div className="col-3">
													<div className="icon icon-box-success">
														<span className="mdi mdi-arrow-top-right icon-item" />
													</div>
												</div>
											</div>
											<h6 className="text-muted font-weight-normal">
												Revenue current
											</h6>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-9">
													<div className="d-flex align-items-center align-self-start">
														<h3 className="mb-0">$12.34</h3>
														<p className="text-danger ml-2 mb-0 font-weight-medium">
															-2.4%
														</p>
													</div>
												</div>
												<div className="col-3">
													<div className="icon icon-box-danger">
														<span className="mdi mdi-arrow-bottom-left icon-item" />
													</div>
												</div>
											</div>
											<h6 className="text-muted font-weight-normal">
												Daily Income
											</h6>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-9">
													<div className="d-flex align-items-center align-self-start">
														<h3 className="mb-0">$31.53</h3>
														<p className="text-success ml-2 mb-0 font-weight-medium">
															+3.5%
														</p>
													</div>
												</div>
												<div className="col-3">
													<div className="icon icon-box-success ">
														<span className="mdi mdi-arrow-top-right icon-item" />
													</div>
												</div>
											</div>
											<h6 className="text-muted font-weight-normal">
												Expense current
											</h6>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Transaction History</h4>
											<canvas
												id="transaction-history"
												className="transaction-chart"
											/>
											<div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
												<div className="text-md-center text-xl-left">
													<h6 className="mb-1">Transfer to Paypal</h6>
													<p className="text-muted mb-0">
														07 Jan 2019, 09:12AM
													</p>
												</div>
												<div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
													<h6 className="font-weight-bold mb-0">$236</h6>
												</div>
											</div>
											<div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
												<div className="text-md-center text-xl-left">
													<h6 className="mb-1">Tranfer to Stripe</h6>
													<p className="text-muted mb-0">
														07 Jan 2019, 09:12AM
													</p>
												</div>
												<div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
													<h6 className="font-weight-bold mb-0">$593</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-8 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="d-flex flex-row justify-content-between">
												<h4 className="card-title mb-1">Contas em Aberto</h4>
												<p className="text-muted mb-1">Your data status</p>
											</div>
											<div className="row">
												<div className="col-12">
													<div className="preview-list">
														<div className="preview-item border-bottom">
															<div className="preview-thumbnail">
																<div className="preview-icon bg-primary">
																	<i className="mdi mdi-file-document" />
																</div>
															</div>
															<div className="preview-item-content d-sm-flex flex-grow">
																<div className="flex-grow">
																	<h6 className="preview-subject">Boleto 1</h6>
																	<p className="text-muted mb-0">
																		Vencimento 10/10/1994
																	</p>
																</div>
																<div className="mr-auto text-sm-right pt-2 pt-sm-0">
																	<p className="text-muted">updated at </p>
																	<p className="text-muted mb-0">
																		15 minutes ago
																	</p>
																</div>
															</div>
														</div>

														<div className="preview-item border-bottom">
															<div className="preview-thumbnail">
																<div className="preview-icon bg-danger">
																	<i className="mdi mdi-file-document" />
																</div>
															</div>
															<div className="preview-item-content d-sm-flex flex-grow">
																<div className="flex-grow">
																	<h6 className="preview-subject">Boleto 2</h6>
																	<p className="text-muted mb-0">
																		Vencimento 08/10/1994
																	</p>
																</div>
																<div className="mr-auto text-sm-right pt-2 pt-sm-0">
																	<p className="text-muted">updated at</p>
																	<p className="text-muted mb-0">12 days ago</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-4 grid-margin">
									<div className="card">
										<div className="card-body">
											<h5>Revenue</h5>
											<div className="row">
												<div className="col-8 col-sm-12 col-xl-8 my-auto">
													<div className="d-flex d-sm-block d-md-flex align-items-center">
														<h2 className="mb-0">$32123</h2>
														<p className="text-success ml-2 mb-0 font-weight-medium">
															+3.5%
														</p>
													</div>
													<h6 className="text-muted font-weight-normal">
														11.38% Since last month
													</h6>
												</div>
												<div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
													<i className="icon-lg mdi mdi-codepen text-primary ml-auto" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4 grid-margin">
									<div className="card">
										<div className="card-body">
											<h5>Sales</h5>
											<div className="row">
												<div className="col-8 col-sm-12 col-xl-8 my-auto">
													<div className="d-flex d-sm-block d-md-flex align-items-center">
														<h2 className="mb-0">$45850</h2>
														<p className="text-success ml-2 mb-0 font-weight-medium">
															+8.3%
														</p>
													</div>
													<h6 className="text-muted font-weight-normal">
														{' '}
														9.61% Since last month
													</h6>
												</div>
												<div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
													<i className="icon-lg mdi mdi-wallet-travel text-danger ml-auto" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-4 grid-margin">
									<div className="card">
										<div className="card-body">
											<h5>Purchase</h5>
											<div className="row">
												<div className="col-8 col-sm-12 col-xl-8 my-auto">
													<div className="d-flex d-sm-block d-md-flex align-items-center">
														<h2 className="mb-0">$2039</h2>
														<p className="text-danger ml-2 mb-0 font-weight-medium">
															-2.1%{' '}
														</p>
													</div>
													<h6 className="text-muted font-weight-normal">
														2.27% Since last month
													</h6>
												</div>
												<div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
													<i className="icon-lg mdi mdi-monitor text-success ml-auto" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row ">
								<div className="col-12 grid-margin">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Order Status</h4>
											<div className="table-responsive">
												<table className="table">
													<thead>
														<tr>
															<th>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</th>
															<th> Client Name </th>
															<th> Order No </th>
															<th> Product Cost </th>
															<th> Project </th>
															<th> Payment Mode </th>
															<th> Start Date </th>
															<th> Payment Status </th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</td>
															<td>
																<img
																	src="assets/images/faces/face1.jpg"
																	alt="Face"
																/>
																<span className="pl-2">Henry Klein</span>
															</td>
															<td> 02312 </td>
															<td> $14,500 </td>
															<td> Dashboard </td>
															<td> Credit card </td>
															<td> 04 Dec 2019 </td>
															<td>
																<div className="badge badge-outline-success">
																	Approved
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</td>
															<td>
																<img
																	src="assets/images/faces/face2.jpg"
																	alt="Face"
																/>
																<span className="pl-2">Estella Bryan</span>
															</td>
															<td> 02312 </td>
															<td> $14,500 </td>
															<td> Website </td>
															<td> Cash on delivered </td>
															<td> 04 Dec 2019 </td>
															<td>
																<div className="badge badge-outline-warning">
																	Pending
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</td>
															<td>
																<img
																	src="assets/images/faces/face5.jpg"
																	alt="Face"
																/>
																<span className="pl-2">Lucy Abbott</span>
															</td>
															<td> 02312 </td>
															<td> $14,500 </td>
															<td> App design </td>
															<td> Credit card </td>
															<td> 04 Dec 2019 </td>
															<td>
																<div className="badge badge-outline-danger">
																	Rejected
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</td>
															<td>
																<img
																	src="assets/images/faces/face3.jpg"
																	alt="Face"
																/>
																<span className="pl-2">Peter Gill</span>
															</td>
															<td> 02312 </td>
															<td> $14,500 </td>
															<td> Development </td>
															<td> Online Payment </td>
															<td> 04 Dec 2019 </td>
															<td>
																<div className="badge badge-outline-success">
																	Approved
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check form-check-muted m-0">
																	<label className="form-check-label">
																		<input
																			type="checkbox"
																			className="form-check-input"
																		/>
																	</label>
																</div>
															</td>
															<td>
																<img
																	src="assets/images/faces/face4.jpg"
																	alt="Face"
																/>
																<span className="pl-2">Sallie Reyes</span>
															</td>
															<td> 02312 </td>
															<td> $14,500 </td>
															<td> Website </td>
															<td> Credit card </td>
															<td> 04 Dec 2019 </td>
															<td>
																<div className="badge badge-outline-success">
																	Approved
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 col-xl-4 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<div className="d-flex flex-row justify-content-between">
												<h4 className="card-title">Messages</h4>
												<p className="text-muted mb-1 small">View all</p>
											</div>
											<div className="preview-list">
												<div className="preview-item border-bottom">
													<div className="preview-thumbnail">
														<img
															src="assets/images/faces/face6.jpg"
															alt="Face"
															className="rounded-circle"
														/>
													</div>
													<div className="preview-item-content d-flex flex-grow">
														<div className="flex-grow">
															<div className="d-flex d-md-block d-xl-flex justify-content-between">
																<h6 className="preview-subject">Leonard</h6>
																<p className="text-muted text-small">
																	5 minutes ago
																</p>
															</div>
															<p className="text-muted">
																Well, it seems to be working now.
															</p>
														</div>
													</div>
												</div>
												<div className="preview-item border-bottom">
													<div className="preview-thumbnail">
														<img
															src="assets/images/faces/face8.jpg"
															alt="Face"
															className="rounded-circle"
														/>
													</div>
													<div className="preview-item-content d-flex flex-grow">
														<div className="flex-grow">
															<div className="d-flex d-md-block d-xl-flex justify-content-between">
																<h6 className="preview-subject">
																	Luella Mills
																</h6>
																<p className="text-muted text-small">
																	10 Minutes Ago
																</p>
															</div>
															<p className="text-muted">
																Well, it seems to be working now.
															</p>
														</div>
													</div>
												</div>
												<div className="preview-item border-bottom">
													<div className="preview-thumbnail">
														<img
															src="assets/images/faces/face9.jpg"
															alt="Face"
															className="rounded-circle"
														/>
													</div>
													<div className="preview-item-content d-flex flex-grow">
														<div className="flex-grow">
															<div className="d-flex d-md-block d-xl-flex justify-content-between">
																<h6 className="preview-subject">Ethel Kelly</h6>
																<p className="text-muted text-small">
																	2 Hours Ago
																</p>
															</div>
															<p className="text-muted">
																Please review the tickets
															</p>
														</div>
													</div>
												</div>
												<div className="preview-item border-bottom">
													<div className="preview-thumbnail">
														<img
															src={imgFaceOnze}
															alt="Face"
															className="rounded-circle"
														/>
													</div>
													<div className="preview-item-content d-flex flex-grow">
														<div className="flex-grow">
															<div className="d-flex d-md-block d-xl-flex justify-content-between">
																<h6 className="preview-subject">Herman May</h6>
																<p className="text-muted text-small">
																	4 Hours Ago
																</p>
															</div>
															<p className="text-muted">
																Thanks a lot. It was easy to fix it .
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-xl-4 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Portfolio Slide</h4>
											<div
												className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel"
												id="owl-carousel-basic"
											>
												<div className="item">
													<img
														src="assets/images/dashboard/Rectangle.jpg"
														alt=""
													/>
												</div>
												<div className="item">
													<img src="assets/images/dashboard/Img_5.jpg" alt="" />
												</div>
												<div className="item">
													<img src="assets/images/dashboard/img_6.jpg" alt="" />
												</div>
											</div>
											<div className="d-flex py-4">
												<div className="preview-list w-100">
													<div className="preview-item p-0">
														<div className="preview-thumbnail">
															<img
																src="assets/images/faces/face12.jpg"
																className="rounded-circle"
																alt=""
															/>
														</div>
														<div className="preview-item-content d-flex flex-grow">
															<div className="flex-grow">
																<div className="d-flex d-md-block d-xl-flex justify-content-between">
																	<h6 className="preview-subject">
																		CeeCee Bass
																	</h6>
																	<p className="text-muted text-small">
																		4 Hours Ago
																	</p>
																</div>
																<p className="text-muted">
																	Well, it seems to be working now.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
											<p className="text-muted">
												Well, it seems to be working now.{' '}
											</p>
											<div className="progress progress-md portfolio-progress">
												<div
													className="progress-bar bg-success"
													role="progressbar"
													style={{ width: '50%' }}
													aria-valuenow={25}
													aria-valuemin={0}
													aria-valuemax={100}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-xl-4 grid-margin stretch-card">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">To do list</h4>
											<div className="add-items d-flex">
												<input
													type="text"
													className="form-control todo-list-input"
													placeholder="enter task.."
												/>
												<button className="add btn btn-primary todo-list-add-btn">
													Add
												</button>
											</div>
											<div className="list-wrapper">
												<ul className="d-flex flex-column-reverse text-white todo-list todo-list-custom">
													<li>
														<div className="form-check form-check-primary">
															<label className="form-check-label">
																<input className="checkbox" type="checkbox" />{' '}
																Create invoice{' '}
															</label>
														</div>
														<i className="remove mdi mdi-close-box" />
													</li>
													<li>
														<div className="form-check form-check-primary">
															<label className="form-check-label">
																<input className="checkbox" type="checkbox" />{' '}
																Meeting with Alita{' '}
															</label>
														</div>
														<i className="remove mdi mdi-close-box" />
													</li>
													<li className="completed">
														<div className="form-check form-check-primary">
															<label className="form-check-label">
																<input
																	className="checkbox"
																	type="checkbox"
																	defaultChecked
																/>{' '}
																Prepare for presentation{' '}
															</label>
														</div>
														<i className="remove mdi mdi-close-box" />
													</li>
													<li>
														<div className="form-check form-check-primary">
															<label className="form-check-label">
																<input className="checkbox" type="checkbox" />{' '}
																Plan weekend outing{' '}
															</label>
														</div>
														<i className="remove mdi mdi-close-box" />
													</li>
													<li>
														<div className="form-check form-check-primary">
															<label className="form-check-label">
																<input className="checkbox" type="checkbox" />{' '}
																Pick up kids from school{' '}
															</label>
														</div>
														<i className="remove mdi mdi-close-box" />
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Visitors by Countries</h4>
											<div className="row">
												<div className="col-md-5">
													<div className="table-responsive">
														<table className="table">
															<tbody>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-us" />
																	</td>
																	<td>USA</td>
																	<td className="text-right"> 1500 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		56.10%{' '}
																	</td>
																</tr>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-de" />
																	</td>
																	<td>Germany</td>
																	<td className="text-right"> 800 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		33.25%{' '}
																	</td>
																</tr>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-au" />
																	</td>
																	<td>Australia</td>
																	<td className="text-right"> 760 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		15.45%{' '}
																	</td>
																</tr>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-gb" />
																	</td>
																	<td>United Kingdom</td>
																	<td className="text-right"> 450 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		25.00%{' '}
																	</td>
																</tr>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-ro" />
																	</td>
																	<td>Romania</td>
																	<td className="text-right"> 620 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		10.25%{' '}
																	</td>
																</tr>
																<tr>
																	<td>
																		<i className="flag-icon flag-icon-br" />
																	</td>
																	<td>Brasil</td>
																	<td className="text-right"> 230 </td>
																	<td className="text-right font-weight-medium">
																		{' '}
																		75.00%{' '}
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div className="col-md-7">
													<div id="audience-map" className="vector-map" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* content-wrapper ends */}
						{/* partial:partials/_footer.html */}
						<footer className="footer">
							<div className="d-sm-flex justify-content-center justify-content-sm-between">
								<span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
									Copyright © 2019 BootstrapDash. All rights reserved.
								</span>
								<span className="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
									Hand-crafted &amp; made with{' '}
									<i className="mdi mdi-heart text-danger" />
								</span>
							</div>
						</footer>
						{/* partial */}
					</div>
					{/* main-panel ends */}
				</div>
				{/* page-body-wrapper ends */}
			</div>
			{/* container-scroller */}
			{/* plugins:js */}
			{/* endinject */}
			{/* Plugin js for this page */}
			{/* End plugin js for this page */}
			{/* inject:js */}
			{/* endinject */}
			{/* Custom js for this page */}
			{/* End custom js for this page */}
		</div>
	)
}

export default Layout
