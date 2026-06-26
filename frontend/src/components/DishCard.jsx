function DishCard({ dish, togglePublish }) {
  return (
    // <div className="card">
    //   <img src={dish.imageUrl} alt={dish.dishName} />

    //   <h2>{dish.dishName}</h2>

    //   <p>
    //     Status :
    //     <span
    //       className={dish.isPublished ? "published" : "unpublished"}
    //     >
    //       {dish.isPublished ? " Published" : " Unpublished"}
    //     </span>
    //   </p>

    //   <button onClick={() => togglePublish(dish._id)}>
    //     {dish.isPublished ? "Unpublish" : "Publish"}
    //   </button>
    // </div>
    <div className="card">
    <img src={dish.imageUrl} alt={dish.dishName} />

    <h2>{dish.dishName}</h2>

    <p>
        Status
        <span className={dish.isPublished ? "published" : "unpublished"}>
            {dish.isPublished ? "Published" : "Unpublished"}
        </span>
    </p>

    <button onClick={() => togglePublish(dish._id)}>
        {dish.isPublished ? "🚫 Unpublish Dish" : "🚀 Publish Dish"}
    </button>
    </div>
  );
}

export default DishCard;