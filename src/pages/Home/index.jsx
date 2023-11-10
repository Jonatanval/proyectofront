import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectorUserId } from "../../selectors/userSelector";
import { read } from "../../services";
import { Card, MenuList } from "../../components";



  


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const userId = useSelector(selectorUserId);

  const getTasks = async () => {
    const response = await read("tasks");
    setTasks(response.filter((task) => task.user_id === userId));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="mb-5 flex flex-col gap-5  ">
      <Card className="max-w-md mx-0 "> 
        <MenuList                  
        />
      </Card>
    </div>
  );
}