const Dish = require("../models/Dish");

// GET All Dishes
const getAllDishes = async (req, res) => {
    try {
        const dishes = await Dish.find().sort({ dishId: 1 });

        res.status(200).json({
            success: true,
            count: dishes.length,
            data: dishes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Toggle Publish Status
const togglePublish = async (req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);

        if (!dish) {
            return res.status(404).json({
                success: false,
                message: "Dish not found",
            });
        }

        dish.isPublished = !dish.isPublished;

        await dish.save();

        // Real-Time Update
        const io = req.app.get("io");
        io.emit("dishUpdated");

        res.status(200).json({
            success: true,
            message: "Status Updated",
            data: dish,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getAllDishes,
    togglePublish,
};