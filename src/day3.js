/*jshint esversion: 6 */
import React, { Component } from 'react';
import agenda from './json/day3.json';

class day3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Enter drug name",
		};
	}
  render() {
    return (
      <article className="row">
        <div className="col">	
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
        </div>
      </article>
		
    );
  }
}

export default day3;
