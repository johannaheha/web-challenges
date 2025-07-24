import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  handleToggleAllLightsOn,
  handleToggleAllLightsOff,
  lightsOn,
  lights,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={handleToggleAllLightsOff}
        disabled={lightsOn === 0 ? true : false}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={handleToggleAllLightsOn}
        disabled={lightsOn === lights.length ? true : false}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
