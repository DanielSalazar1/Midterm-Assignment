import React, { Component } from 'react';
import './App.css';
import { LOGIN_PAGE_ID, DETAILS_PAGE_ID, UPDATE_PAGE_ID, CREATE_PAGE_ID } from "./constants";
import TreeDAO from './treeDAO';


export default class ListView extends Component {
    constructor(props) {
      super(props);
      const dao = new TreeDAO();
      const treesArr = dao.getTreeList();

      this.state= {
        trees: treesArr,
      }
      this.onDetailsClick = this.onDetailsClick.bind(this);
      this.onLogOutClick = this.onLogOutClick.bind(this);
      this.onCreateClick = this.onCreateClick.bind(this);
      this.onUpdateClick = this.onUpdateClick.bind(this);
    }
    onLogOutClick(event) {
      event.preventDefault();
      this.props.onChangePage(LOGIN_PAGE_ID);
    }
    onDetailsClick(event, slug) {
      event.preventDefault();
      this.props.onChangePage(DETAILS_PAGE_ID, slug)
    }
    onCreateClick(event, slug){
      event.preventDefault();
      this.props.onChangePage(CREATE_PAGE_ID, slug)
    }
    onUpdateClick(event, slug) {
      event.preventDefault();
      this.props.onChangePage(UPDATE_PAGE_ID)
    }
    render() {
      const trees = this.state.trees;
      console.log(trees)
      return(
        <div>
            <h1>List of trees</h1>
            <table className="section1">
              <tr>
                <th>Name</th>
                <th>Why to plant it?</th>
                <th>Scientifc name</th>
                <th>Description</th>
                <th>Learn more</th>
                <th>Detail</th>
              </tr>
              {trees.map(
                (treeObj)=>
                  <tr>
                    <td className="center">{treeObj.name}</td>
                    <td className="center, justify">{treeObj.why}</td>
                    <td className="center">{treeObj.scientifiName}</td>
                    <td>{treeObj.description}</td>
                    <td>{treeObj.learnMore}</td>
                    <button className="button2 buttonSize" onClick={ (event, slug)=>{this.onDetailsClick(event, treeObj.slug)}}>Details</button>
                    <button className="button2 buttonSize" onClick={ (event)=>{this.onUpdateClick(event)}}>Update</button>
                  </tr>
              )}
            </table>
            <br />
            <button className="right button2" onClick={ (event)=>{this.onCreateClick(event)} }>Create</button>
            <button className="button2 left" onClick={ (event)=>{this.onLogOutClick(event)} }>Log out</button>
        </div>
      )
    };
};
