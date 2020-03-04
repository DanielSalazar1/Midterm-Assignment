import React, { Component } from 'react';
import { LIST_PAGE_ID } from './constants';
import TreeDAO from './treeDAO';


export default class DetailView extends Component {
    constructor(props) {
        super(props);
        const objectId= props.objectId;

        const treeDAO = new TreeDAO();
        const treeObj = treeDAO.getTreeObject(objectId);

        this.state={
          objectId: objectId,
          treeObj: treeObj,
        }
        this.onBackClick = this.onBackClick.bind(this);
    }
    onBackClick(event) {
      event.preventDefault();
      this.props.onChangePage(LIST_PAGE_ID);
    }

    render(){
      const { name, why, scientifiName, picture, description, learnMore } = this.state.treeObj;
      return(
        <div className="section1">
          <h3>DETAILS OF TREES</h3>
            <table className="table1">
              <tr>
                <td>Name</td>
                <td>Why?</td>
                <td>scientifiName</td>
                <td>Picture</td>
                <td>Description</td>
                <td>Learn more!</td>
              </tr>
              <tr>
                <td>{name}</td>
                <td>{why}</td>
                <td>{scientifiName}</td>
                <td>{picture}</td>
                <td>{description}</td>
                <td>{learnMore}</td>
              </tr>
            </table>
            <br />
            <button className="button2" onClick={ (event)=> this.onBackClick(event) }>Back</button>
        </div>
      )
    }
};
