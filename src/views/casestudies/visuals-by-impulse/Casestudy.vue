<template>
<div>
	<div class="casestudy-hero" :style="{'background-image': 'url(' + require('./hero.jpg') + ')'}"></div>
	<div class="content">
		<div class="casestudy-title">Visuals by Impulse</div>
		<h3 class="casestudy-subtitle">Developing a design system for digital products.</h3>

		<div class="casestudy-content">
			<div class="casestudy-section">
				<h2 class="casestudy-section-title">Challenge</h2>
				<p class="p">Visuals by Impulse is home to hundreds of free and premium Twitch overlays, animated alerts, stream packages, resources and more. They offer custom design services for streamers/content creators who are truly looking to fine tune every aspect of their channel.</p>
				<p class="p">More products from Visuals by Impulse are emerging, and managing projects that are connected and are produced by the same brand gets very hectic when there are no guidelines in place. I was asked to tackle on this project to create a cohesive design system that will be used through most of Visual by Impulse's digital products, like their new portal that allows the team to communicate with clients more effciently and effectively.</p>
			</div>
			<div class="casestudy-section">
				<h2 class="casestudy-section-title">My Role</h2>
				<p class="p">I was originally a motion designer for Visuals by Impulse. After a few months, they became aware that I have skills in UI/UX design and general product design. I was given the task to start designing the new upcoming product they are wanting to develop: the portal.</p>
				<p class="p">I began gathering and researching the needs of Visuals by Impulse and determining what they need to take their company to the next level. For client work, the portal is the backbone of the entire process. It allows managers an team members to communicate with clients to come up with solutions for them. Designing a system for an app as large as the portal and eventually every future app developed by Visuals by Impulse was definitely a responsiblity I was prepared to take on.</p>
			</div>
			<div class="casestudy-section">
				<img src="./1.jpg" class="img">
				<h2 class="casestudy-section-title">Needs</h2>
				<p class="p">Features needed by the team were communicated effectively to me, so I could design the best experience for the team as possible. These features that needed to be developed were graphs for revenue statistics on the dashboard, a project management system, an invoicing system, and a user management system.</p>
			</div>
			<div class="casestudy-section">
				<img src="./2.jpg" class="img">
				<h2 class="casestudy-section-title">Solution</h2>
				<p class="p">After months of hard work, the portal is off the ground and currently in use by clients and the team. Updates are frequently being pushed to improve the app and introduce new features that are needed by the team to make their jobs easier.</p>
				<p class="p">You can view the live version of the app <a href="https://portal.visualsbyimpulse.com" target="_blank" class="a">here</a>.</p>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
.p {
	margin: 0 0 20px;
}

.p > .a {
	display: inline;
	font-weight: 600;
	font-size: 18px;
}

.img {
	width: 100%;
	height: auto;
	margin: 60px 0 40px;
}

@media only screen and (min-width: 640px) {
	.p > .a {
		font-size: 20px;
	}

	.img {
		width: 100%;
		height: auto;
		margin: 80px 0 60px;
	}
}
</style>


<style>
.casestudy-hero {
	width: 100%;
	height: 180px;
	margin: 40px 0 0;
	background-color: #1A1A1A;
}

.casestudy-title {
	font-size: 28px;
	font-weight: 600;
}

.casestudy-subtitle {
	margin: 5px 0 0;
}

.casestudy-content {
	margin: 40px 0 0;
}

.casestudy-section {
	width: 100%;
	height: auto;
	margin: 0 0 40px 0;
}

.casestudy-section-title {
	margin: 0 0 10px;
}

@media only screen and (min-width: 640px) {
	.casestudy-hero {
		height: 420px;
		margin: 60px 0 0;
		background-color: #1A1A1A;
	}

	.casestudy-content {
		margin: 60px 0 0;
	}

	.casestudy-title {
		font-size: 36px;
	}

	.casestudy-section {
		width: 100%;
		height: auto;
		margin: 0 0 60px 0;
	}
}
</style>
