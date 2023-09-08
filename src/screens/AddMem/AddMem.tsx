import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MemForm } from "../../components/MemForm/MemForm";
import { AddMemFormikValues } from "../../types/AddMemFormikValues";
import { addMem } from "../../data/redux/memes";

export const AddMem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBack = () => {
    navigate(-1);
  };
  const handleSubmit = async (values: AddMemFormikValues) => {
    await addMem(dispatch, values);
    goBack();
  };
  return <MemForm handelCancel={goBack} handleSubmit={handleSubmit} />;
};
