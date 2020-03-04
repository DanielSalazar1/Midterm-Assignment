import React, { Component } from 'react';
import { DETAILS_PAGE_ID, UPDATE_PAGE_ID, LIST_PAGE_ID } from './constants';
import TreeDAO from './treeDAO';


export default class CreateView extends Component {
    constructor(props) {
      super(props)
      this.state={
        name: "",
        why: "",
        scientifiName: "",
        description: "",
        learnMore: "",
      }
      this.onNameChange = this.onNameChange.bind(this);
      this.onWhyChange = this.onWhyChange.bind(this);
      this.onSaveClick = this.onSaveClick.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
      this.onScientificNameChange = this.onScientificNameChange.bind(this);
      this.onDescriptionChange = this.onDescriptionChange.bind(this);
      this.onLearnMoreLinkChange = this.onLearnMoreLinkChange.bind(this);
    }

    onNameChange(event) {
      this.setState({
        name: event.target.value,
      })
    }
    onWhyChange(event) {
      this.setState({
        why: event.target.value,
      })
    }
    onSaveClick(event){
      event.preventDefault();
      const { name, why, scientifiName, description, learnMore } = this.state;

      const treeDAO = new TreeDAO();

      treeDAO.addTreeObject(name, why, scientifiName, description, learnMore);

      alert("Tree has been succesfully saved");
      this.props.onChangePage(LIST_PAGE_ID);
    }
    onBackClick(event){
      event.preventDefault();
      this.props.onChangePage(LIST_PAGE_ID)
    }
    onScientificNameChange(event){
      this.setState({
        scientifiName: event.target.value,
      })
    }
    onDescriptionChange(event) {
      this.setState({
        description: event.target.value,
      })
    }
    onLearnMoreLinkChange(event){
      this.setState({
        learnMore: event.target.value,
      })
    }

    render(){
      const { name, why, scientifiName, description, learnMore } = this.state;
      return(
        <div className="center">
            <h2>Create new tree</h2>
            <input
                type="text"
                onChange={ (event)=>{this.onNameChange(event)}}
                placeholder="Name"
                value={name}
            />
            <br /><br />
            <textarea
                rows="2"
                cols="20"
                type="text"
                onChange={ (event)=>{this.onWhyChange(event)}}
                placeholder="Why grow the tree"
                value={why}
            />
            <br /><br />
            <input
                type="text"
                onChange={ (event)=>{this.onScientificNameChange(event)}}
                placeholder="Scientific name"
                value={scientifiName}
            />
            <br /><br />
            <textarea
                type="textarea"
                rows="5"
                cols="40"
                onChange={ (event)=>{this.onDescriptionChange(event)}}
                placeholder="Description"
                value={description}
            />
            <br /><br />
            <input
                type="text"
                onChange={ (event)=>{this.onLearnMoreLinkChange(event)}}
                placeholder="Link"
                href={learnMore}
            />
            <br /><br />
            <button className="button2" onClick={ (event)=>this.onSaveClick(event)}>Save</button>
            <br /><br />
            <button className="button2" onClick={ (event)=>this.onBackClick(event)}>Back</button>
        </div>
      )
    }
}
