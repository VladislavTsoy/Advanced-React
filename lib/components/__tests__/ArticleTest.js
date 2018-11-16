import React from 'react';
import Article from '../Article';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter()});

const testProps = {
    article: {
        title: 'title',
        date: 'date',
        body: 'body',
        authorId: 'a',
        id: 'a'
    },
    author: {
        id: 'a',
        firstName: 'a',
        lastName: 'a',
        website: 'a',
        lookupAuthor: jest.fn(() => ({}))
    }
};

describe('Article', () => {
    it('Article Component renders correctly', () => {
        const wrapper = shallow(
            <Article 
                {...testProps}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});