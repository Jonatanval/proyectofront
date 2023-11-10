import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../slices/userSlice";
import { Card, Form, MenuList } from "../../components";
import { create } from "../../services";
import { inputs } from "./form";
import Swal from "sweetalert2";

export default function Pacients() {
  const { errors, values, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      name: "",
      lastname: "",
      dni: "",
      telephone: "",
      profession: "",
      bloodType: "",
      birthdate: "",
      civilStatus: "",
      historyNumber: "",
      insured: "",

    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateIfValuesHasEmpty()) return;
    const user = await create(values, "pacients");
    dispatch(saveUser(user));
    Swal.fire({
        title: "Success",
        text: "Se creo el paciente correctamente",
        icon: "success",
      });
  
    navigate("/pacientslist");
  };

  return (
    <>
    <div className="mb-5 flex flex-col gap-5  ">
      <Card className="max-w-md mx-0 "> 
        <MenuList                  
        />
      </Card>
    </div>
        
    <div className="h-screen flex flex-col-2  items-center justify-center max-w-md mx-auto">
      <Card >      
        <h1 className="text-2xl font-semibold my-5">Crear Paciente</h1>
        <Form
          inputs={inputs}
          errors={errors}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          textButton="Registrar paciente"
          values={values}
        />
      </Card>
    </div>
    </>
  );
}
