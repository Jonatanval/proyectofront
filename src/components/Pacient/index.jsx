import { Card } from "../../components";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function Pacient({ pacient, getPacients }) {
  return (
    <Card className="mt-5 flex justify-between">
      <p>{pacient.name} {pacient.lastname} {pacient.dni} </p>
      <div className="flex gap-3">
        <CheckCircleIcon className="h-6 w-6 text-green-500" />        
        <TrashIcon className="h-6 w-6 text-red-500" />
      </div>
    </Card>
  );
}