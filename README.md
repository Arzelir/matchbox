## Inspiration

When trying new sports, it can be challenging to meet new people and make teams. Many people trying new sports often try playing in community events or small tournaments, but may not have enough friends interested in participating or people who share their interest. By creating a way for people to register for events and match with teammates who share their interests, we aim to make it easier for new players to join games.

## What it does

Matchbox is a team-building app that lets people browse current sports events in their area and sign up for them. Users can also use our site to find people to join teams with by viewing their photos, names, and descriptions. This way, users can match with people who share their interests or skills. Users who do not have a team for the event are automatically available for matchmaking to join teams. Once they are matched with someone, they are no longer available for matchmaking.

## How we built it

We developed Matchbox as a full-stack web application using React for the frontend and creating custom components for the event listings, player profiles, and matchmaking pages. The backend was built with Vercel for serverless functions and Turbo for hosting the SQLite database. Our database included tables for Users, Events, Registrations, Teams, and TeamMember to determine who is available for events and for matchmaking. Our frontend interacted with the database via API endpoints that returned information about events, player profiles, and registrations.

## Challenges we ran into

The most challenging part of our development was working with a new environment and language for the project. Displaying database data on the React frontend was new to us, which made it the most challenging. Additionally, the hackathon theme was a concept we initially did not know how to implement with what we wanted our project to be. We had a hard time understanding the best way to build a sports-related website.

## Accomplishments that we're proud of

We are proud to have developed an end-to-end full-stack application ourselves, combining a modern React application with a cloud database and a serverless backend. We were able to implement dynamic pages for events, user profiles, event registration, and matchmaking, which updates player availability in real time. Most importantly, we developed a solution that solves a tangible problem for amateur athletes and sports clubs.

## What we learned

During the development of the project, we gained knowledge in designing relational databases, developing RESTful APIs, deploying full-stack applications, and coordinating communication between the frontend and backend.

## What's next for MatchBox: Event Team Builder

The following enhancements will be considered for future implementation: user authentication via secure password hashing, messaging between team members, automatic team member suggestions based on skill and sport preferences, organizer dashboards, invitations to team members, notifications, and event discovery based on location. Real-time updates, improvements to our matchmaking process using user preferences, and expansion into leagues, tournaments, and community teams are also in the works.
