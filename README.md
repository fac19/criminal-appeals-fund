# Criminal Appeals Fund
[![codecov](https://codecov.io/gh/fac19/criminal-appeals-fund/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/criminal-appeals-fund) :microscope:

![](https://travis-ci.org/fac19/criminal-appeals-fund.svg?branch=master&status=passed) :construction_worker_woman:

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f240a7b-1593-4f83-97d5-97b4d2618b9d/deploy-status)](https://app.netlify.com/sites/criminal-appeals-fund/deploys) :small_airplane:

## The team
- [Lizzy](https://github.com/lizzy-j) - DevOps / Developer 
- [Ina](https://github.com/itsina96) - Quality assurance / Developer
- [Campbell](https://github.com/CampbellDocherty) - Scrum master / Developer
- [Jack](https://github.com/jackherizsmith) - User Experience / Developer

## Contents
- [Our project](#our-project)
- [Tech stack](#tech-stack)
  - [API docs](#api-docs)
- [Learnings](#learnings)
- [What next](#what-next)

---

## Our project
This is a platform for barristers to access funding so they are able to appeal unsuccessful legal cases.

The best way to navigate this project once you've run `npm install` (and got our secret login details for Netlify  :shushing_face:) is to do the following:
- log in to Netlify with our account details
- `netlify login` from the terminal in the project root
- `netlify dev` will build and run a local server with the Netlify environment (i.e. where the Airtable secret key is  :shushing_face:)

We also have a [style guide](https://github.com/fac19/criminal-appeals-fund/issues/27).

---

## Tech stack

This site is built with React utilising the following libraries:
- react-router
- Material UI
- styled-components

It is deployed on Netlify and the build environment comprises
- ESLint, Prettier and Husky
- CodeCov and Travis
- Lambda functions

Data is stored on [Airtable](https://airtable.com/) and content on [Cloudinary](https://cloudinary.com/).

Our Airtable schema looks something like:

![airtable](https://i.imgur.com/mqMeR0z.png)

Where users are assigned IDs generated by Airtable, and which is stored with useContext and sent when uploading applications. Applications are automatically given a stage of 1, here are the stages:

**1	Upload**
Applicant uploads application

**2	Criteria met**
PO indicates application meets criteria

**3	Success**
PO agrees to fund application

**4	Invoice**
Applicant sends invoice

**5	Successful close**
PO arranges payment

**6	Unsuccessful close**
PO does not fund application

**7	Withdrawn**
Applicant withdraws application

---

![Airtable](https://i.imgur.com/qtz1Z81.png)

---

### API docs
[Here are some beautifully automated API docs](https://airtable.com/app7xH8ItDsTvcPhg/api/docs#curl/introduction) which you can't use because you don't know our secret :shushing_face:

---

## Learnings

- Airtable IDs are far too clever and their docs are sneaky
- Cloudinary allows access to uploaded PDFs on literally a case by case basis
- Lambda functions are helpful and stressful
- Context can make State available Anywhere
- Having two versions of Webpack regularly breaks everything 
- Material UI has a very narrow range usefulness over styled components (i.e. our beautiful stepper)

---

## What next

- Airtable UI for PO
- Finishing API routes to database
- Accessing PDFs
- Ensuring we/PO can update application stages
- Styling for finished MVP
- PO handover

---

## Contributors

Co-authored-by: itsina96 <itsina96@gmail.com> 

Co-authored-by: jackherizsmith <jackherizsmith@gmail.com> 

Co-authored-by: CampbellDocherty <campbellsofitsidocherty@gmail.com> 

Co-authored-by: lizzy-j <lizzyhj@hotmail.com> 

---
