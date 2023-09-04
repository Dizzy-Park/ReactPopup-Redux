import { styled } from "styled-components";
import { AbsPopupType } from "../AbsPopupType";
import { useAbsPopupTitle } from "../store/absPopupHook";
import { ButtonState } from "../store/absPopupVo";

const MsgHeader = styled.div`
  display: flex;
  position: relative;
  min-height: 55px;
  padding: 15px 25px;
  border-bottom: 1px solid ${props => props.theme.colors.borderPrimary};
  justify-content: center;
`;

function AbsPopupTitle(props: { type: AbsPopupType | string }) {
  const { title, isClose, close } = useAbsPopupTitle(props.type);
  return (
    <>
      {title !== undefined ? (
        <MsgHeader>
          <h3>{title}</h3>
        </MsgHeader>
      ) : (
        <></>
      )}
      {isClose && (
        <button
          className="close"
          onClick={close.bind(null, ButtonState.NO, undefined)}
        ></button>
      )}
    </>
  );
}

export default AbsPopupTitle;
