/*jshint esversion: 6 */
import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';
import Week from './fullweek';

const Schedule = () => (
	<Router>
	  	<main className="">
	  		<Header/>

		    <div className="nav-scroller bg-info shadow-lg">
		      <nav className="nav nav-underline">
		        <DateLink activeOnlyWhenExact={true} to="/" label="Sunday 3rd" />
		        <DateLink activeOnlyWhenExact={true} to="day2" label="Monday 4th" />
		        <DateLink activeOnlyWhenExact={true} to="day3" label="Tuesday 5th" />
		        <DateLink activeOnlyWhenExact={true} to="day4" label="Wednesday 6th" />
		        <DateLink activeOnlyWhenExact={true} to="day5" label="Thursday 7th" />
		        <DateLink activeOnlyWhenExact={true} to="fullweek" label="Full Week" />
		      </nav>
		    </div>

		    <section className="container-fluid">
		      	<Route exact path="/" component={Day1section} />
		      	<Route exact path="/day2" component={Day2section} />
		      	<Route exact path="/day3" component={Day3section} />
		      	<Route exact path="/day4" component={Day4section} />
		      	<Route exact path="/day5" component={Day5section} />
		      	<Route exact path="/fullweek" component={Weeksection} />
	      	</section>
	    </main>
	</Router>
);
const DateLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (

        <Link className={match ? "nav-link text-white active" : "nav-link text-white"} to={to}>{label}</Link>

    )}
  />
);
const Day1section = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h2 className="mb-0 text-white lh-100">Day in view</h2>
			</div>
		</div>
		<h2 className="border-bottom border-gray pb-2 mb-0">Events - Sunday 3rd</h2>
		<Day1 />
	</section>
);
const Day2section = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h2 className="mb-0 text-white lh-100">Day in view</h2>
			</div>
		</div>
		<h2 className="border-bottom border-gray pb-2 mb-0">Events - Monday 4th</h2>
		<Day2 />
	</section>
);
const Day3section = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h2 className="mb-0 text-white lh-100">Day in view</h2>
			</div>
		</div>
		<h2 className="border-bottom border-gray pb-2 mb-0">Events - Tuesday 5th</h2>
		<Day3 />
	</section>
);
const Day4section = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h2 className="mb-0 text-white lh-100">Day in view  <mark className="ml-2 bg-white subhead-mark pt-3"><small>Track 1</small> </mark> <mark className=" ml-2 pt-3 subhead-mark2"><small>Track 2 </small></mark></h2>
			</div>
		</div>
		<h2 className="border-bottom border-gray pb-2 mb-0">Events - Wednesday 6th</h2>
		<Day4 />
	</section>
);
const Day5section = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h1 className="mb-0 text-white lh-100">Day in view</h1>
			</div>
		</div>
		<h2 className="border-bottom border-gray pb-2 mb-0">Events - Thursday 7th</h2>
		<Day5 />
	</section>
);
const Weeksection = () => (
	<section className="">
		<div className="d-flex align-items-center p-3 mt-5 shadow my-3 text-white-50 bg-primary rounded shadow-sm"><div className="lh-100">
				<h1 className="mb-0 text-white lh-100">Full week in view <mark className="ml-2 bg-white subhead-mark3 pt-3"><small>Track 1</small> </mark> <mark className="ml-2 pt-3 subhead-mark4"><small>Track 2 </small></mark></h1>
			</div>
		</div>
		<Week />
	</section>
);

export default Schedule;
