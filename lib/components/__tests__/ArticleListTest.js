import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

const testProps = {
    articles: {
        a: { 
            id: 'a', 
            title: 'a',
            date: 'a',
            authorId: 'a',
            body: 'a'
        },
        b: { 
            id: 'b', 
            title: 'b',
            date: 'b',
            authorId: 'b',
            body: 'b' 
        }
    },
    store: {
        lookupAuthor: jest.fn(() => ({})),
    },
};

describe('ArticleList', () => {
    it('ArticleList Component Renders Correctly', () => {
        const tree = renderer.create(
            <ArticleList 
                {...testProps}
            />
        ).toJSON();
       
        expect(tree.children.length).toBe(2); // confirms 2 objects were mapped
        expect(tree).toMatchSnapshot();
    });
});