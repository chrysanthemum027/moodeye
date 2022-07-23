import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ChartContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 1.4rem;
    padding: 1rem;
    margin: 0;
  }
  & > p {
    padding: 0.5rem 1rem;
    margin: 0;
  }
  & > p:nth-of-type(2) {
    text-align: center;
    color: var(--text-color-attention);
  }
  & > p:nth-of-type(n + 3) {
    font-size: 0.75rem;
    text-align: center;
  }
  & > p:last-of-type {
    padding-bottom: 1rem;
  }
  > div {
    padding: 1rem;
    transform: translateX(-1.5rem);
  }
`;

export default ChartContainer;

ChartContainer.propTypes = {
  children: PropTypes.element,
};
