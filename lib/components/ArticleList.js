import React from 'react';
import PropTypes from 'prop-types';

// Required Components
import Article from './Article';

const ArticleList = props => {
    return (
        <div>
            {Object.values(props.articles).map(article => 
                <Article 
                    key={article.id} 
                    article={article} 
                    store={props.store}
                />  
            )}
        </div>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired,
};

export default ArticleList;