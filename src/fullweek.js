/*jshint esversion: 6 */
import React, { Component } from 'react';
import agenda from './json/day1.json';
import agenda2 from './json/day2.json';
import agenda3 from './json/day3.json';
import agenda4 from './json/day4.json';
import agenda5 from './json/day5.json';

class day2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: " ",
		};
	}
  render() {
    return (
      <article className="row">
        <div className="col">	
		<table className="table">

		<tbody>
		<tr>
		<td valign="top">		
			<h2 className="border-bottom border-gray pb-2 mb-0">Sunday 3rd</h2>

        	<ul className="list-group list-group-flush">		
			{agenda.map((agendaDetail, index) => {
					return(
			            <li key={agenda[index].id} className={"list-group-item list-group-item-action"}>
							<div className="row">
								<div className="pl-0 pr-1 col-1 text-center mr-2">
									<span className={"badge badge-pill badge-" +agenda[index].category}>
									{agenda[index].category.split("").shift().toUpperCase()}
									</span>
								</div>
								<div className="col p-0 text-blue">
									<p>{agenda[index].eventTitle}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-1">
									
								</div>
								<div className="col p-0">
									<ul className="list-inline">
									  <li className="list-inline-item">{agenda[index].time}</li>
									  <li className="list-inline-item">{agenda[index].description}</li>
									  <li className="list-inline-item"><mark className="p-0">{agenda[index].location}</mark></li>
									</ul>
								</div>
							</div> 
			            </li>
					)
			})}
			</ul>
		</td>
		<td valign="top">
 			<h2 className="border-bottom border-gray pb-2 mb-0">Monday 4th</h2>
			<ul className="list-group list-group-flush">		
			{agenda2.map((agendaDetail, index) => {
					return(
			            <li key={agenda2[index].id} className={"list-group-item list-group-item-action"}>
							<div className="row">
								<div className="pl-0 pr-1 col-1 text-center mr-2">
									<span className={"badge badge-pill badge-" +agenda2[index].category}>
									{agenda2[index].category.split("").shift().toUpperCase()}
									</span>
								</div>
								<div className="col p-0 text-blue">
									<p>{agenda2[index].eventTitle}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-1">
									
								</div>
								<div className="col p-0">
									<ul className="list-inline">
									  <li className="list-inline-item">{agenda2[index].time}</li>
									  <li className="list-inline-item">{agenda2[index].description}</li>
									  <li className="list-inline-item"><mark className="p-0">{agenda2[index].location}</mark></li>
									</ul>
								</div>
							</div> 
			            </li>
					)
			})}
			</ul>
		</td>
		<td valign="top">
  			<h2 className="border-bottom border-gray pb-2 mb-0">Tuesday 5th</h2>
       		<ul className="list-group list-group-flush">		
			{agenda3.map((agendaDetail, index) => {
					return(
			            <li key={agenda3[index].id} className={"list-group-item list-group-item-action"}>
							<div className="row">
								<div className="pl-0 pr-1 col-2 text-center mr-2">
									<span className={"badge badge-pill badge-" +agenda3[index].category}>
									{agenda3[index].category.split("").shift().toUpperCase()}
									</span>
								</div>
								<div className="col p-0 text-blue">
									<p>{agenda3[index].eventTitle}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-1">
									
								</div>
								<div className="col p-0">
									<ul className="list-inline">
									  <li className="list-inline-item">{agenda3[index].time}</li>
									  <li className="list-inline-item">{agenda3[index].description}</li>
									  <li className="list-inline-item"><mark className="p-0">{agenda3[index].location}</mark></li>
									</ul>
								</div>
							</div> 
			            </li>
					)
			})}
			</ul>
		</td>		
		<td valign="top">
 			<h2 className="border-bottom border-gray pb-2 mb-0">Wednesday 6th</h2>
        	<ul className="list-group list-group-flush">		
			{agenda4.map((agendaDetail, index) => {
					return(
			            <li key={agenda4[index].id} className={"list-group-item list-group-item-action track-" +agenda4[index].track[0]}>
							<div className="row">
								<div className="pl-0 pr-1 col-1 text-center mr-2">
									<span className={"badge badge-pill badge-" +agenda4[index].category}>
									{agenda4[index].category.split("").shift().toUpperCase()}
									</span>
								</div>
								<div className="col p-0 text-blue">
									<p>{agenda4[index].eventTitle}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-1">
									
								</div>
								<div className="col p-0">
									<ul className="list-inline">
									  <li className="list-inline-item">{agenda4[index].time}</li>
									  <li className="list-inline-item">{agenda4[index].description}</li>
									  <li className="list-inline-item"><mark className="p-0">{agenda4[index].location}</mark></li>
									</ul>
								</div>
							</div> 
			            </li>
					)
			})}
			</ul>
		</td>
		<td valign="top">
 			<h2 className="border-bottom border-gray pb-2 mb-0">Thursday 7th</h2>
        	<ul className="list-group list-group-flush">		
			{agenda5.map((agendaDetail, index) => {
					return(
			            <li key={agenda5[index].id} className={"list-group-item list-group-item-action"}>
							<div className="row">
								<div className="pl-0 pr-1 col-2 text-center mr-2">
									<span className={"badge badge-pill badge-" +agenda5[index].category}>
									{agenda5[index].category.split("").shift().toUpperCase()}
									</span>
								</div>
								<div className="col p-0 text-blue">
									<p>{agenda5[index].eventTitle}</p>
								</div>
							</div>
							<div className="row">
								<div className="col-1">
									
								</div>
								<div className="col p-0">
									<ul className="list-inline">
									  <li className="list-inline-item">{agenda5[index].time}</li>
									  <li className="list-inline-item">{agenda5[index].description}</li>
									  <li className="list-inline-item"><mark className="p-0">{agenda5[index].location}</mark></li>
									</ul>
								</div>
							</div> 
			            </li>
					)
			})}
			</ul>
		</td>
	</tr>
	</tbody>
		</table>
        </div>
      </article>
		
    );
  }
}


export default day2;
