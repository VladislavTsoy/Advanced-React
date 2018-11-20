// Required Modules
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

// Required Components
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

class App extends PureComponent {
    static childContextTypes = {
        store: PropTypes.object
    };
    
    getChildContext() {
        return {
            store: this.props.store
        };
    }

    appState = () => {
        const { articles, searchTerm } = this.props.store.getState();
        return  { articles, searchTerm };
    }
    state = this.appState();

    onStoreChange = () => {
        this.setState(this.appState());
    }

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
    }

    componentWillUnmount(){
        this.props.store.unsubscribe(this.subscriptionId);
    }

    render() {
        let { articles, searchTerm } = this.state;
        const searchRE = new RegExp(searchTerm, 'i');
        if (searchTerm){
            articles = pickBy(articles, value => {
                return value.title.match(searchRE) || value.body.match(searchRE);
            });
        }

        return (
            <Fragment>
                <TimeStamp />
                <SearchBar />
                <ArticleList
                    articles={articles}
                />
            </Fragment>
        );
    }
}

export default App;