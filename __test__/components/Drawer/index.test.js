import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Drawer from '../../../src/components/Drawer';

describe('App', () => {
	describe('Drawer', () => {
		test('Drawer renders without exception', () => {
			const component = mount(<Drawer />);
		});
	});
});