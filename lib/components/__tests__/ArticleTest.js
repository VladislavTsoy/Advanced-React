import React from 'react';
import Article from '../Article';
import renderer from 'react-test-renderer';

const testProps = {
    article: {
        title: 'title',
        date: 'date',
        body: 'body',
        authorId: 'a'
    },
    store: {
        lookupAuthor: jest.fn(() => ({}))
    }
};

describe('Article', () => {
    it('Article Component renders correctly', () => {
        const tree = renderer.create(
            <Article 
                {...testProps}
            />
        ).toJSON();

        expect(tree.children.length).toBe(4);
        expect(tree).toMatchSnapshot();
    });
});