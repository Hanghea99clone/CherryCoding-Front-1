import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toggle } from "../redux/module/login";
import Button from "./Button";

function Modallogin() {
  const modal = useSelector((state) => state.modal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  const modalOpenClose = () => {
    dispatch(toggle(!modal));
  };

  return (
    <Modalblack>
      <Modalback>
        <div>
          <ModalloginTextArea>
            <span>로그인</span>
            <Modalloginclose onClick={modalOpenClose}>닫기</Modalloginclose>
          </ModalloginTextArea>
          <ModalloginInputBox>
            <ModalloginForm onSubmit={handleSubmit(onValid)}>
              <div>
                <Modallogininput
                  {...register("id", { required: "아이디를 입력해주세요." })}
                  placeholder="아이디를 적어주세요"
                />
              </div>
              <span>{errors?.id?.message}</span>
              <Modallogininput
                {...register("password", {
                  required: "비밀번호를 입력해주세요",
                })}
                placeholder="비밀번호를 적어주세요"
              />
              <span>{errors?.password?.message}</span>
              {/* <input
                {...register("emailCheck", {
                  required: "이메일로 작성해주세요.",
                  minLength: {
                    value: 10,
                    message: "10글자 이상으로 해주세요",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "이메일 형식만 허용됩니다.",
                  },
                })}
                placeholder="비밀번호를 적어주세요"
              />
              <span>{errors?.emailCheck?.message}</span> */}
              <ModalloginBtn loginMdBtn>로그인</ModalloginBtn>
              <ModalloginBtn onClick={() => navigate(`/signup`)} signupMdBtn>
                회원가입
              </ModalloginBtn>
            </ModalloginForm>
          </ModalloginInputBox>
        </div>
      </Modalback>
    </Modalblack>
  );
}

const Modalblack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const Modalback = styled.div`
  width: 400px;
  height: 380px;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`;

const ModalloginTextArea = styled.div`
  //border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px;
`;

const Modalloginclose = styled.span`
  cursor: pointer;
  font-size: 15px;
`;

const ModalloginInputBox = styled.div`
  //border: 1px solid red;
  margin-top: 25px;
  width: 100%;
`;

const Modallogininput = styled.input`
  height: 39px;
  margin-top: 10px;
  padding-left: 12px;
  border: none;
  border-radius: 4px;
  font-size: 19px;
  font-weight: bold;
  outline: none;
  border: 1px solid black;
  margin-bottom: 20px;
`;

const ModalloginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ModalloginBtn = styled(Button)`
  margin-top: 15px;
`;

export default Modallogin;