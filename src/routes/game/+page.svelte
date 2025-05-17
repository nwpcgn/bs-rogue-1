<script lang="ts">
	import type { PageData } from './$types.js'

	let { data }: { data: PageData } = $props()
</script>

<section class="nwp page">
	<section class="page-area shadow">
		<h1 class="display-2 mb-4">Page Layer</h1>
		<a class="btn btn-dark btn-lg" href="#/game">Start Game</a>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Button</h3>
		<nav class="d-flex flex-wrap gap-2 mb-2">
			<button type="button" class="btn btn-success">Success</button>
			<button type="button" class="btn btn-primary">Primary</button>
			<button type="button" class="btn btn-warning">Warning</button>
			<button type="button" class="btn btn-info">Info</button>
			<button type="button" class="btn btn-danger">Danger</button>
			<button type="button" class="btn btn-dark">Dark</button>
			<button type="button" class="btn btn-light">Light</button>
		</nav>
		<nav class="d-flex flex-wrap gap-2">
			<button type="button" class="btn btn-outline-success">Success</button>
			<button type="button" class="btn btn-outline-primary">Primary</button>
			<button type="button" class="btn btn-outline-warning">Warning</button>
			<button type="button" class="btn btn-outline-info">Info</button>
			<button type="button" class="btn btn-outline-danger">Danger</button>
			<button type="button" class="btn btn-outline-dark">Dark</button>
			<button type="button" class="btn btn-outline-light">Light</button>
		</nav>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Tabs</h3>
		<h3 class="mb-4"></h3>
		<div class="grid">
			<div class="g-col-12">
				<div>
					<nav>
						<div class="nav nav-tabs" id="nav-tab" role="tablist">
							<a
								class="nav-link active"
								id="nav-home-tab"
								data-bs-toggle="tab"
								href="#nav-home"
								role="tab"
								aria-controls="nav-home"
								aria-selected="true">Home</a>
							<a
								class="nav-link"
								id="nav-profile-tab"
								data-bs-toggle="tab"
								href="#nav-profile"
								role="tab"
								aria-controls="nav-profile"
								aria-selected="false">Profile</a>
							<a
								class="nav-link"
								id="nav-contact-tab"
								data-bs-toggle="tab"
								href="#nav-contact"
								role="tab"
								aria-controls="nav-contact"
								aria-selected="false">Contact</a>
						</div>
					</nav>
					<div class="tab-content" id="nav-tabContent">
						<div
							class="tab-pane fade show active"
							id="nav-home"
							role="tabpanel"
							aria-labelledby="nav-home-tab">
							<p>
								Et et consectetur ipsum labore excepteur est proident excepteur
								ad velit occaecat qui minim occaecat veniam. Fugiat veniam
								incididunt anim aliqua enim pariatur veniam sunt est aute sit
								dolor anim. Velit non irure adipisicing aliqua ullamco irure
								incididunt irure non esse consectetur nostrud minim non minim
								occaecat. Amet duis do nisi duis veniam non est eiusmod tempor
								incididunt tempor dolor ipsum in qui sit. Exercitation mollit
								sit culpa nisi culpa non adipisicing reprehenderit do dolore.
								Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
							</p>
							<nav class="d-flex flex-wrap gap-2">
								<button type="button" class="btn btn-outline-success"
									>Success</button>
								<button type="button" class="btn btn-outline-primary"
									>Primary</button>
								<button type="button" class="btn btn-outline-warning"
									>Warning</button>
								<button type="button" class="btn btn-outline-info">Info</button>
								<button type="button" class="btn btn-outline-danger"
									>Danger</button>
								<button type="button" class="btn btn-outline-dark">Dark</button>
								<button type="button" class="btn btn-outline-light"
									>Light</button>
							</nav>
						</div>
						<div
							class="tab-pane fade"
							id="nav-profile"
							role="tabpanel"
							aria-labelledby="nav-profile-tab">
							<p>
								Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim
								irure officia enim reprehenderit. Magna duis labore cillum sint
								adipisicing exercitation ipsum. Nostrud ut anim non exercitation
								velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint
								velit ullamco magna consequat voluptate minim amet aliquip ipsum
								aute laboris nisi. Labore labore veniam irure irure ipsum
								pariatur mollit magna in cupidatat dolore magna irure esse
								tempor ad mollit. Dolore commodo nulla minim amet ipsum officia
								consectetur amet ullamco voluptate nisi commodo ea sit eu.
							</p>
							<nav class="d-flex flex-wrap gap-2 mb-2">
								<button type="button" class="btn btn-success">Success</button>
								<button type="button" class="btn btn-primary">Primary</button>
								<button type="button" class="btn btn-warning">Warning</button>
								<button type="button" class="btn btn-info">Info</button>
								<button type="button" class="btn btn-danger">Danger</button>
								<button type="button" class="btn btn-dark">Dark</button>
								<button type="button" class="btn btn-light">Light</button>
							</nav>
						</div>
						<div
							class="tab-pane fade"
							id="nav-contact"
							role="tabpanel"
							aria-labelledby="nav-contact-tab">
							<p>
								Sint sit mollit irure quis est nostrud cillum consequat Lorem
								esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam
								Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
								cupidatat. Deserunt officia id Lorem nostrud aute id commodo
								elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud
								tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad
								irure in labore cillum elit enim. Consequat aliquip incididunt
								ipsum et minim laborum laborum laborum et cillum labore.
								Deserunt adipisicing cillum id nulla minim nostrud labore
								eiusmod et amet. Laboris consequat consequat commodo non ut non
								aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco
								reprehenderit irure ea ullamco Lorem aute nostrud magna.
							</p>
							<nav class="d-flex flex-wrap gap-2 mb-2">
								<button type="button" class="btn btn-success">Success</button>
								<button type="button" class="btn btn-primary">Primary</button>
								<button type="button" class="btn btn-warning">Warning</button>
								<button type="button" class="btn btn-info">Info</button>
								<button type="button" class="btn btn-danger">Danger</button>
								<button type="button" class="btn btn-dark">Dark</button>
								<button type="button" class="btn btn-light">Light</button>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Listen</h3>
		<div class="grid">
			<div class="g-col-6">
				<ul class="list-group">
					<li class="list-group-item">
						<input
							class="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..." />
						Cras justo odio
					</li>
					<li class="list-group-item">
						<input
							class="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..." />
						Dapibus ac facilisis in
					</li>
					<li class="list-group-item">
						<input
							class="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..." />
						Morbi leo risus
					</li>
					<li class="list-group-item">
						<input
							class="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..." />
						Porta ac consectetur ac
					</li>
					<li class="list-group-item">
						<input
							class="form-check-input me-1"
							type="checkbox"
							value=""
							aria-label="..." />
						Vestibulum at eros
					</li>
				</ul>
			</div>
			<div class="g-col-6">
				<div class="list-group">
					<a
						href="#"
						class="list-group-item list-group-item-action active"
						aria-current="true">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">List group item heading</h5>
							<small>3 days ago</small>
						</div>
						<p class="mb-1">
							Donec id elit non mi porta gravida at eget metus. Maecenas sed
							diam eget risus varius blandit.
						</p>
						<small>Donec id elit non mi porta.</small>
					</a>
					<a href="#" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">List group item heading</h5>
							<small class="text-muted">3 days ago</small>
						</div>
						<p class="mb-1">
							Donec id elit non mi porta gravida at eget metus. Maecenas sed
							diam eget risus varius blandit.
						</p>
						<small class="text-muted">Donec id elit non mi porta.</small>
					</a>
					<a href="#" class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">List group item heading</h5>
							<small class="text-muted">3 days ago</small>
						</div>
						<p class="mb-1">
							Donec id elit non mi porta gravida at eget metus. Maecenas sed
							diam eget risus varius blandit.
						</p>
						<small class="text-muted">Donec id elit non mi porta.</small>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Accordion</h3>
		<div class="accordion" id="accordionExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne">
						Accordion Item #1
					</button>
				</h2>
				<div
					id="collapseOne"
					class="accordion-collapse collapse show"
					aria-labelledby="headingOne"
					data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the first item's accordion body.</strong> It is
						hidden by default, until the collapse plugin adds the appropriate
						classes that we use to style each element. These classes control the
						overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or
						overriding our default variables. It's also worth noting that just
						about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit
						overflow.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo">
						Accordion Item #2
					</button>
				</h2>
				<div
					id="collapseTwo"
					class="accordion-collapse collapse"
					aria-labelledby="headingTwo"
					data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the second item's accordion body.</strong> It is
						hidden by default, until the collapse plugin adds the appropriate
						classes that we use to style each element. These classes control the
						overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or
						overriding our default variables. It's also worth noting that just
						about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit
						overflow.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button
						class="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree">
						Accordion Item #3
					</button>
				</h2>
				<div
					id="collapseThree"
					class="accordion-collapse collapse"
					aria-labelledby="headingThree"
					data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<strong>This is the third item's accordion body.</strong> It is
						hidden by default, until the collapse plugin adds the appropriate
						classes that we use to style each element. These classes control the
						overall appearance, as well as the showing and hiding via CSS
						transitions. You can modify any of this with custom CSS or
						overriding our default variables. It's also worth noting that just
						about any HTML can go within the
						<code>.accordion-body</code>, though the transition does limit
						overflow.
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Alerts</h3>
		<div class="alert alert-secondary" role="alert">
			A simple secondary alert with <a href="#" class="alert-link"
				>an example link</a
			>. Give it a click if you like.
		</div>
		<div class="alert alert-warning" role="alert">
			A simple warning alert with <a href="#" class="alert-link"
				>an example link</a
			>. Give it a click if you like.
		</div>
		<div class="alert alert-danger" role="alert">
			A simple danger alert with <a href="#" class="alert-link"
				>an example link</a
			>. Give it a click if you like.
		</div>
		<div class="alert alert-success" role="alert">
			<h4 class="alert-heading">Well done!</h4>
			<p>
				Aww yeah, you successfully read this important alert message. This
				example text is going to run a bit longer so that you can see how
				spacing within an alert works with this kind of content.
			</p>
			<hr />
			<p class="mb-0">
				Whenever you need to, be sure to use margin utilities to keep things
				nice and tidy.
			</p>
		</div>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Form 1</h3>
		<form class="row g-3">
			<div class="col-md-6">
				<label for="inputEmail4" class="form-label">Email</label>
				<input type="email" class="form-control" id="inputEmail4" />
			</div>
			<div class="col-md-6">
				<label for="inputPassword4" class="form-label">Password</label>
				<input type="password" class="form-control" id="inputPassword4" />
			</div>
			<div class="col-12">
				<label for="inputAddress" class="form-label">Address</label>
				<input
					type="text"
					class="form-control"
					id="inputAddress"
					placeholder="1234 Main St" />
			</div>
			<div class="col-12">
				<label for="inputAddress2" class="form-label">Address 2</label>
				<input
					type="text"
					class="form-control"
					id="inputAddress2"
					placeholder="Apartment, studio, or floor" />
			</div>
			<div class="col-md-6">
				<label for="inputCity" class="form-label">City</label>
				<input type="text" class="form-control" id="inputCity" />
			</div>
			<div class="col-md-4">
				<label for="inputState" class="form-label">State</label>
				<select id="inputState" class="form-select">
					<option selected>Choose...</option>
					<option>...</option>
				</select>
			</div>
			<div class="col-md-2">
				<label for="inputZip" class="form-label">Zip</label>
				<input type="text" class="form-control" id="inputZip" />
			</div>
			<div class="col-12">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" id="gridCheck" />
					<label class="form-check-label" for="gridCheck"> Check me out </label>
				</div>
			</div>
			<div class="col-12">
				<button type="submit" class="btn btn-primary">Sign in</button>
			</div>
		</form>
	</section>
	<section class="page-area shadow">
		<h3 class="mb-4">Form 2</h3>
		<form>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label"
					>Email address</label>
				<input
					type="email"
					class="form-control"
					id="exampleFormControlInput1"
					placeholder="name@example.com" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlSelect1">Example select</label>
				<select
					id="exampleFormControlSelect1"
					class="form-select"
					aria-label="Default select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlSelect2">Example multiple select</label>
				<select
					class="form-select"
					id="exampleFormControlSelect2"
					multiple
					aria-label="multiple select example">
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
					<option value="4">Four</option>
				</select>
			</div>
			<div class="mb-3">
				<label for="formFile" class="form-label"
					>Default file input example</label>
				<input class="form-control" type="file" id="formFile" />
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label"
					>Example textarea</label>
				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
				></textarea>
			</div>
		</form>
	</section>
</section>
