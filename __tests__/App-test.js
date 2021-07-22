import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TechnologyScreen, ScienceScreen } from '../src/screens';
import { create, act } from 'react-test-renderer';

describe('Starting tests', () => {

  it('should validate the Snapshot TechnologyScreen', () => {
    const treeTechnologyScreen = render(<TechnologyScreen />);
    expect(treeTechnologyScreen).toMatchSnapshot();
  });

  it('should validate the Snapshot ScienceScreen', () => {
    const treeScienceScreen = render(<ScienceScreen />);
    expect(treeScienceScreen).toMatchSnapshot();
  });

  it('should validate the texts - TechnologyScreen', () => {
    const { queryAllByText } = render(<TechnologyScreen />);
    expect(queryAllByText("Press the button to see the news!").length).toBe(1)
    expect(queryAllByText("ERROR!").length).toBe(0)
    expect(queryAllByText("Loading...").length).toBe(0)
    expect(queryAllByText("X").length).toBe(0)
    expect(queryAllByText("Filter a news").length).toBe(0)
  })

  it('should validate the texts - ScienceScreen', () => {
    const { queryAllByText } = render(<ScienceScreen />);
    expect(queryAllByText("Press the button to see the news!").length).toBe(1)
    expect(queryAllByText("ERROR!").length).toBe(0)
    expect(queryAllByText("Loading...").length).toBe(0)
    expect(queryAllByText("X").length).toBe(0)
    expect(queryAllByText("Filter a news").length).toBe(0)
  })

  it('should press searchButton - TechnologyScreen', () => {
    const page = render(<TechnologyScreen />);
    const button = page.getByTestId('searchButton')
  });

  it('should press searchButton - ScienceScreen', () => {
    const page = render(<ScienceScreen />);
    const button = page.getByTestId('searchButton')
  });

});