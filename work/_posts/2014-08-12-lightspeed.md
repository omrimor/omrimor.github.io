---
title: Lightspeed
desc: Sass service for creating and managing mobile ad campaigns
lead-image: [../images/lightspeed/lightspeed.png]
layout: post
---
<div class="images">
	<figure><img src="/images/lightspeed/main.png" alt="Lightspeed"></figure>
</div>

Lightspeed is a SaaS application for creating and managing mobile ad campaigns from a veriaty of services.
It is a one-stop app-promotion shop, giving all the control in the hands of the user.

The world of mobile advertising was new to me. I had no idea of the level of complexity involved in such a system
and the challenges ahead.

The service is still running in closed beta so i can't share all the screens I wished, but i promise to update once possible.

###Research

We had about two months of research. Studing the competitors, and familierizing ourselfs with how the eco-system works, from
how the servers are working to how the final ad is being served to the users. We had a lot of meetings with our own marketing teams
to understand their needs, pain points with existing solutions and observing them working hands on.

Lightspeed was designed to support creating "regular" campaings, along with RTB (Real Time Bidding) and social (Facebook, Twitter) campaigns.
One of the big challanges was creating a familiar experience as possible while being flexible enough to each platform needs.

The IA was laid out and structured, but we designed and optimized for a "context navigation" user flow. A user can look at a campaign performence dashboard, click on an entry they wish to further investigate and navigate away to different sections of the service seamlessly while still keeping the main navigation sidebar accessable at any page.

To somehow summerize the research phase, I created a glossary to help expand the team knowledge in the mobile marketing world and
help bring everybody involved on board.

<div class="images">
	<figure>
		<img src="/images/lightspeed/glossary.png" alt="Glossary webpage">
		<figcaption class="caption">Glossary webpage</figcaption>
	</figure>
</div>

###Dashboard

The main entry point of the service is the user's dashboard.
The challenge was to create a glence view of a user's current running campaigns and their performance while keeping the data easy
to consume with a clear visual hirerchey.

The solution we came up with was dividing the dashboard into clear sections. The top section showed the current level of hirerechy of the user's account - from the top level account to a single campaign, along with pre defined time frames, to produce clear KPI's that a user can quickly get a digest of
his status.

We came up with a "spotlight" section - user could see his/hers top ranking campaigns and creatives, giving him the ability to quickly act upon
specific "good" / "bad" campaigns and compare them agianst others.

<div class="images">
	<figure>
		<img src="/images/lightspeed/wireframes.png" alt="Wireframes examples">
		<figcaption class="caption">Wireframes examples</figcaption>
	</figure>
</div>

###Creating a campaign

One side of the service is consuming data - viewing reports and performance analyitics, the other side is creating new data - uploading
a new campaign to the service.

The amount of input needed to create a new campaign can be overwelming. Since one of the two main personas who use the service is not a marketing expert,
we needed to break down the wizard into logical sections, to keep the focus on small tasks, that will accumolate together for submission.

The wizard we created is made up of 6-7 sections, each one building on top of the previous one in a logical order: basic setup -> choosing the traffic sources -> uploading the creatives -> placing a bid for each campaign -> summary review & submission.

Each section was designed to be with the least amount of friction. The service has a learning algorithem that is used to populate certain parts of the
wizard based on previous campaigns and a collective suggestion engine from other users running similar campaigns in that category. The user is left with
adding a minimal amount of input, making it very easy and intuative to create a new campaign, or duplicating an existing one.

###Delight factor

Working in an agile team means being very communative and open with the PM's & DEV team. We had daily stand up meetings to make sure everybody's
on track and to ensure that the design was delivered on time and updates made to UX docs and design assets were synced and the whole team is refrensing
the right point.

To help with syncing the team, we created a repository of the UI & GUI assets. I've build 2 simple web pages with a simple JSON as a data base, which
I kept updating, so that each DEV working on a feature, could visit the URL, find the feature name and see all UI docs and graphic assets relevant to him.
It worked very well. All stackholders could always see the latest iteration and it helped reduce mis-communication and shorten delivery times.

<div class="images">
	<figure>
		<img src="/images/lightspeed/uilib.png" alt="UI library webpage">
		<figcaption class="caption">UI library webpage</figcaption>
	</figure>
</div>

###Closing
