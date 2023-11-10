import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorUserId } from "../../selectors/userSelector";
import { read } from "../../services";
import {  Pacient,Button,Card, MenuList } from "../../components";
import { useNavigate } from "react-router-dom";

export default function PacientsList() {
  const [pacients, setPacients] = useState([]);
  const userId = useSelector(selectorUserId);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    navigate("/pacients"); 

    await getTasks();
  };  

  const getPacients = async () => {
    const response = await read("pacients");
    setPacients(response);
  };

  useEffect(() => {
    getPacients();
  }, []);

  return (
    <>
    <div className="mb-5 flex flex-col gap-5  ">
      <Card className="max-w-md mx-0 "> 
        <MenuList                  
        />
      </Card>
    </div>    
    
    <div className="mt-10">
      <Card>
        <h2 className="font-semibold text-xl mt-3">Agregar Paciente</h2>
        <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>            
            <Button type="submit" text="Crear" variant="secondary" />
        </form>
        
      </Card>        
      {pacients.length > 0 &&
        pacients.map((pacient) => (
          <Pacient key={pacient.id} pacient={pacient} getPacients={getPacients} />
        ))}
    </div>
    </>
  );
}