import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #eeeeee;
  padding: 0;
`;

const Container = ({ children, ...props }) => <StyledContainer {...props}>{children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
