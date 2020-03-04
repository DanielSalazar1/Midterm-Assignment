import React, { Component } from 'react';
import { LIST_PAGE_ID } from './constants';
import TreeDAO from './treeDAO';


export default class UpdateView extends Component {
    constructor(props) {
        super(props);
        const objectId= props.objectId;

        const treeDAO = new TreeDAO();
        const treeObj = treeDAO.getTreeObject(objectId);

        this.state={
          objectId: objectId,
          treeObj: treeObj,
          name: treeObj.name,
          slug: treeObj.slug,
          why: treeObj.why,
          scientifiName: treeObj.scientifiName,
          description: treeObj.description,
          learnMore: treeObj.learnMore,
        }
        this.onBackClick = this.onBackClick.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onWhyChange = this.onWhyChange.bind(this);
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
    onScientificNameChange(event) {
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
    onSaveClick(event) {
      event.preventDefault();
      const { slug, name, why, scientifiName, description, learnMore } = this.state;

      const treeDAO = new TreeDAO();
      treeDAO.updateTreeObject(slug, name, why, scientifiName, description, learnMore);

      this.props.onChangePage(LIST_PAGE_ID);
    }
    onBackClick(event) {
      event.preventDefault();
      this.props.onChangePage(LIST_PAGE_ID)
    }

    render(){
      const { name, slug, scientifiName, description, learnMore, why } = this.state;
      return(
        <div className="center" key={slug}>
          <h2>Edit tree information</h2>
          <br /><br />
          <input
              type="text"
              onChange={ (event)=>{this.onNameChange(event)}}
              value={name}
          />
          <br /><br />
          <input
              type="text"
              onChange={ (event)=>{this.onWhyChange(event)}}
              value={why}
          />
          <br /><br />
          <input
              type="text"
              onChange={ (event)=>{this.onScientificNameChange(event)}}
              value={scientifiName}
          />
          <br /><br />
          <input
              type="text"
              onChange={ (event)=>{this.onDescriptionChange(event)}}
              value={description}
          />
          <br /><br />
          <input
              type="text"
              onChange={ (event)=>{this.onLearnMoreLinkChange(event)}}
              value={learnMore}
          />
          <br /><br />
        <button onClick={(event)=>{this.onBackClick(event)}}>Back</button>
        </div>
      )
    }
};
