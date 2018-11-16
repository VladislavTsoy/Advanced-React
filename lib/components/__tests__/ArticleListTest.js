import React from 'react';
import ArticleList from '../ArticleList';
import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()});

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
        const wrapper = shallow(
            <ArticleList 
                {...testProps}
            />
        );
        // expect(w).toBe(2); // confirms 2 objects were mapped
        expect(wrapper).toMatchSnapshot();
    });
});