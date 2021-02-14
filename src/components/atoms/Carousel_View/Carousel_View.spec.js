import * as React from 'react';
import 'react-native';
import 'jest-enzyme';
import {shallow} from 'enzyme';
import Carousel_View from './Carousel_View';

const defaultProps = {
  showPagination: true,
  carouselData: [{test: 'TEST_DATA_1'}, {test: 'TEST_DATA_2'}, {test: 'TEST_DATA_3'}],
  carouselComponent: jest.fn(),
};

describe('<Carousel_View />', () => {
  describe('<Render>', () => {
    test('should render a carousel component', () => {
      const wrapper = shallow(<Carousel_View {...defaultProps} />);
      const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
      expect(carousel).toExist();
    });
    test('should render a pagination component when showPagination is true', () => {
      const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={true} />);
      const pagination = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Pagination');
      expect(pagination).toExist();
    });
    test('should NOT render a pagination component when showPagination is false', () => {
      const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={false} />);
      const pagination = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Pagination');
      expect(pagination).not.toExist();
    });
  });
  describe('<Props>', () => {
    describe('<Carousel>', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      afterAll(() => {
        jest.restoreAllMocks();
      });
      test('should pass carouselData to the Carousel data prop', () => {
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const CarouselProps = carousel.props();
        expect(CarouselProps).toHaveProperty('data', defaultProps.carouselData);
      });
      test('should pass the layout prop from config to Carousel component', () => {
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const CarouselProps = carousel.props();
        expect(CarouselProps).toHaveProperty('layout', 'default');
      });
      test('should pass carouselDimensions width to sliderWidth prop', () => {
        /**
         * Mock useState initial state
         */
        const mockWidth = 100;
        const UseState = React.useState;
        const initialState = {width: mockWidth, height: 50};
        jest.spyOn(React, 'useState').mockImplementation(() => UseState(initialState));
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const CarouselProps = carousel.props();
        expect(CarouselProps).toHaveProperty('sliderWidth', mockWidth);
        // expect(CarouselProps).toHaveProperty('itemWidth', 'default');
      });
      test('should pass carouselDimensions 95% width to itemWidth prop', () => {
        /**
         * Mock useState initial state
         */
        const mockWidth = 100;
        const UseState = React.useState;
        const initialState = {width: mockWidth, height: 50};
        jest.spyOn(React, 'useState').mockImplementation(() => UseState(initialState));
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const CarouselProps = carousel.props();
        expect(CarouselProps).toHaveProperty('itemWidth', mockWidth * 0.95);
      });
    });
    describe('<Pagination>', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      afterAll(() => {
        jest.restoreAllMocks();
      });
      test('should pass the number of items to render to the dotsLength prop', () => {
        const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={true} />);
        const pagination = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Pagination');
        const paginationProps = pagination.props();
        const numberOfItemsToRender = defaultProps.carouselData.length;
        expect(paginationProps).toHaveProperty('dotsLength', numberOfItemsToRender);
      });
      test('should pass cardIndex state to the activeDotIndex prop', () => {
        /**
         * Mock useState initial state
         */
        const UseState = React.useState;
        const initialState = 8;
        jest.spyOn(React, 'useState').mockImplementation(() => UseState(initialState));
        const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={true} />);
        const pagination = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Pagination');
        const paginationProps = pagination.props();
        expect(paginationProps).toHaveProperty('activeDotIndex', initialState);
      });
    });
  });
  describe('<Methods>', () => {
    describe('<Carousel View> -onLayout', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      afterAll(() => {
        jest.restoreAllMocks();
      });
      test('should call setCarouselDimensions when the wrapper view onLayout is called', () => {
        /**
         * Mock useState hook
         */
        const setState = jest.fn();
        const useStateMock = (initState) => [initState, setState];
        jest.spyOn(React, 'useState').mockImplementationOnce(useStateMock);
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const mockNativeEvent = {nativeEvent: {layout: {height: 200, width: 200}}};
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View');
        carousel.props().onLayout(mockNativeEvent);
        expect(setState).toHaveBeenCalledTimes(1);
      });
      test('should call setCarouselDimensions with the width and height of the native event emitted from onLayout', () => {
        /**
         * Mock useState hook
         */
        const setState = jest.fn();
        const useStateMock = (initState) => [initState, setState];
        jest.spyOn(React, 'useState').mockImplementationOnce(useStateMock);
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const mockNativeEvent = {nativeEvent: {layout: {height: 200, width: 200}}};
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View');
        carousel.props().onLayout(mockNativeEvent);
        expect(setState).toHaveBeenCalledWith({height: 200, width: 200});
      });
    });
    describe('<Carousel > -onSnapToItem ', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      });
      afterAll(() => {
        jest.restoreAllMocks();
      });
      test('should call setCardIndex when onSnapToItem is called', () => {
        /**
         * Mock useState hook
         */
        const setState = jest.fn();
        const useStateMock = (initState) => [initState, setState];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const mockIndex = 98;
        carousel.props().onSnapToItem(mockIndex);
        expect(setState).toHaveBeenCalledTimes(1);
      });
      test('should call setCardIndex with the index passed from onSnapToItem', () => {
        /**
         * Mock useState hook
         */
        const setState = jest.fn();
        const useStateMock = (initState) => [initState, setState];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        const wrapper = shallow(<Carousel_View {...defaultProps} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const mockIndex = 99;
        carousel.props().onSnapToItem(mockIndex);
        expect(setState).toHaveBeenCalledWith(mockIndex);
      });
    });
    describe('<renderItem> - carouselComponent', () => {
      beforeEach(() => {
        jest.resetAllMocks();
      });
      test('should call carouselComponent when renderItem is called', () => {
        const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={true} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const mockCarouselItem = {item: {}};
        carousel.props().renderItem(mockCarouselItem);
        expect(defaultProps.carouselComponent).toHaveBeenCalledTimes(1);
      });
      test('should call carouselComponent with the key value pair from carouselItem spread in', () => {
        const wrapper = shallow(<Carousel_View {...defaultProps} showPagination={true} />);
        const carousel = wrapper.findWhere((node) => node.prop('testID') === 'Carousel_View_Carousel');
        const mockCarouselItem = {item: {test1: 'test1', test2: 'test2'}};
        carousel.props().renderItem(mockCarouselItem);
        expect(defaultProps.carouselComponent).toHaveBeenCalledWith({test1: 'test1', test2: 'test2'});
      });
    });
  });
});
