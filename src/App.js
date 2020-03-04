import React, { Component } from 'react';
import './App.css';
import LoginPage from './login';
import RegisterPage from './register';
import ListView from './list';
import DetailView from './detail';
import UpdateView from './update';
import CreateView from './create';
import { REGISTER_PAGE_ID, LOGIN_PAGE_ID, LIST_PAGE_ID, DETAILS_PAGE_ID,
  UPDATE_PAGE_ID, TREE_APP_PAGE, TREE_OBJ_ID, CREATE_PAGE_ID } from './constants.js';



export default class AppNavigation extends Component {
    constructor(props) {
      super(props);
      let page = localStorage.getItem(TREE_APP_PAGE);
      if (page === "" || page === null || page === undefined) {
          page = LOGIN_PAGE_ID;
      }
      const objectId= localStorage.getItem(TREE_OBJ_ID)

      this.state = {
        page: page,
        objectId: objectId
      };
      this.onChangePage = this.onChangePage.bind(this);
      this.onBackClick = this.onBackClick.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onChangePage(page, objectId) {
      this.setState({
        page:page,
        objectId: objectId
      });
      localStorage.setItem(TREE_APP_PAGE, page);
      localStorage.setItem(TREE_OBJ_ID, objectId);
    }

    onBackClick() {
      this.setState({
        pageId: LIST_PAGE_ID,
        slug: ""
      });
    }


    render() {
      const { page, objectId } = this.state;
      return(
        <div>
            <h1>TREE APPLICATION</h1>
            <br></br>
            {page   === LIST_PAGE_ID &&
                <ListView onChangePage={ this.onChangePage } />
            }
            {page === DETAILS_PAGE_ID &&
                <DetailView
                    onChangePage={(page)=>this.onChangePage(page)}
                    objectId={objectId}
                />
            }
            <br></br>
            {page === LOGIN_PAGE_ID &&
                <LoginPage
                    onChangePage={ (page)=>this.onChangePage(page)}
                />
            }
            {page === REGISTER_PAGE_ID &&
                <RegisterPage
                    onChangePage={ (page)=>this.onChangePage(page)}
                />
            }
            {page === UPDATE_PAGE_ID &&
                <UpdateView
                    onChangePage={ (page)=>this.onChangePage(page)}
                />
            }
            {page === CREATE_PAGE_ID &&
                <CreateView
                    onChangePage={ (page)=>this.onChangePage(page)}
                />
            }
        </div>
      )
    }


};
