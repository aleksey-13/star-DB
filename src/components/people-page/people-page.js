import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    };

    OnPersonSelected = (id) => {
        this.setState({
          selectedPerson: id
        })
    }
    
    render() {
        
        const itemList = (
            <ItemList
                OnItemSelected={this.OnPersonSelected}
                getData={this.swapiService.getAllPeople}> 
                {({ name, birthYear, gender}) => `${name} (${gender}, ${birthYear})`}
            </ItemList>
        );

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return (    
            <Row left={itemList} right={itemDetails} />
        );
    }
}