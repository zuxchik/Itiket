const { HumanChik } = require("./human_category.Schema");

const create_HumanCategory = async (req, res) => {
    try {
        const {
            name,
            start_age,
            finish_age,
            gender
        } = req.body;

        const new_HumanCategory = new HumanChik({
            name,
            start_age,
            finish_age,
            gender
        });

        await new_HumanCategory.save();
        res.status(201).send(new_HumanCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getHumanCategory = async (req, res) => {
    try {
        const HumanCategorys = await HumanChik.find();
        res.send(HumanCategorys);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getHumanCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const HumanCategory = await HumanChik.findById(id);
        if (!HumanCategory) {
            return res.status(404).send("HumanCategory not found");
        }
        res.send(HumanCategory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateHumanCategory = async (req, res) => {
    try {
        const HumanCategoryId = req.params.id;
        const updatedData = req.body;

        const updatedHumanCategory = await HumanChik.findByIdAndUpdate(HumanCategoryId, updatedData, {
            new: true,
        });

        if (!updatedHumanCategory) {
            return res.status(404).json({
                success: false,
                message: "HumanCategory topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "HumanCategory ma'lumotlari yangilandi.",
            HumanCategoryChik: updatedHumanCategory,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: HumanCategoryi yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_HumanCategory,
    getHumanCategory,
    getHumanCategoryById,
    updateHumanCategory,
};