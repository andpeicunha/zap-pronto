import styled from "styled-components";
import { THEME } from "../theme/theme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;

  font-size: ${THEME.FONTSIZE.MD}rem;
  color: ${THEME.COLORS.SECONDARY};
  background-color: ${THEME.COLORS.PRIMARY};
  font-family: Arial, Helvetica, sans-serif;
`;
