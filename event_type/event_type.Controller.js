const { event_typeChik } = require("./event_type.Schema");

const create_EvenType = async (req, res) => {
    try {
        const {
            name,
            start_age,
            finish_age,
            gender
        } = req.body;

        const new_EvenType = new event_typeChik({
            name,
            start_age,
            finish_age,
            gender
        });

        await new_EvenType.save();
        res.status(201).send(new_EvenType);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getEventType = async (req, res) => {
    try {
        const EventTypes = await event_typeChik.find();
        res.send(EventTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getEventTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const EventType = await event_typeChik.findById(id);
        if (!EventType) {
            return res.status(404).send("EventType not found");
        }
        res.send(EventType);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateEventType = async (req, res) => {
    try {
        const EventTypeId = req.params.id;
        const updatedData = req.body;

        const updatedEventType = await event_typeChik.findByIdAndUpdate(EventTypeId, updatedData, {
            new: true,
        });

        if (!updatedEventType) {
            return res.status(404).json({
                success: false,
                message: "EventType topilmadi.",
            });
        }

        res.json({
            success: true,
            message: "EventType ma'lumotlari yangilandi.",
            EventTypeChik: updatedEventType,
        });
    } catch (error) {
        console.error("Xato:", error);
        res.status(500).json({
            success: false,
            message: "Server xatosi: EventTypei yangilashda xato yuz berdi.",
        });
    }
};

module.exports = {
    create_EvenType,
    getEventType,
    getEventTypeById,
    updateEventType,
};