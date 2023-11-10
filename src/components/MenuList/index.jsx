import  { Menu1 } from  "../../components"

const menusitems = [{name: "MAESTRO DE PACIENTES", link:"/pacientslist"},
                    {name: "MAESTRO DE ENFERMEDADES", link:"#"},
                    {name: "MAESTRO DE SINTOMAS", link:"#"},
                    {name: "MAESTRO DE ENFERMEDADES Y SINTOMAS", link:"/#"},
                    {name: "REGISTRAR NUEVO USUARIO", link:"/signup"},                    
                    {name: "PACIENTES EN ESPERA", link:"#"},
                    {name: "ATENCION DE PACIENTES", link:"#"},                    
                    {name: "SALIR", link:"#"}];
const title="OPCIONES";
export default function MenuList(){
return(
    <Menu1 
    title={title}
    itemsmenus={menusitems}                   
  />
    )
}