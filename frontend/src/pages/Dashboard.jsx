import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import DishCard from "../components/DishCard";

const socket = io(process.env.BACKEND_URL); // Replace with your backend URL

function Dashboard() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDishes = async () => {
    try {
      const res = await axios.get(`${process.env.BACKEND_URL}/api/dishes`);
      setDishes(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();

    socket.on("dishUpdated", () => {
      fetchDishes();
    });

    return () => {
      socket.off("dishUpdated");
    };
  }, []);

  const togglePublish = async (id) => {
    try {
      await axios.patch(`${process.env.BACKEND_URL}/api/dishes/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container">
      <h1>🍽️ Dish Dashboard</h1>

      <div className="grid">
        {dishes.map((dish) => (
          <DishCard
            key={dish._id}
            dish={dish}
            togglePublish={togglePublish}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;