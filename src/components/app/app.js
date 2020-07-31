import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';
import '/Front/BeOnMax/React/project_01/my-app/src/index.css';




const App = () => {

    const data = [
        {label:'Task_1', important: true, id: 'djjl'},
        {label:'Task_2', important: false, id: 'tkos'},
        {label:'Task_3', important: false, id: 'hfug'}
    ];

    return (
        <div className="app">
          <AppHeader/>
          <div className="search-panel d-flex">
              <SearchPanel/>
              <PostStatusFilter/>
          </div>
          <PostList posts={data}/>
          <PostAddForm/>
        </div>
        )
}

export default App;