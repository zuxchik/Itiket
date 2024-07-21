const admin = require("./adminRoute");
const { Admin } = require("./adminSchema");

const createAdmin = async (req, res) => {
  try {
    const {
      name,
      login,
      hashed_password,
      is_active,
      is_creator,
      hashed_refresh_token,
    } = req.body;

    const newAdmin = new Admin({
      name,
      login,
      hashed_password,
      is_active,
      is_creator,
    });

    await newAdmin.save();
    res.status(201).send(newAdmin);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAdmin = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.send(admins);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).send("Admin not found");
    }
    res.send(admin);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const AdminId = req.params.id;
    const updatedData = req.body;

    const updatedAdmin = await Admin.findByIdAndUpdate(AdminId, updatedData, {
      new: true,
    });

    if (!updatedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin topilmadi.",
      });
    }

    res.json({
      success: true,
      message: "Admin ma'lumotlari yangilandi.",
      admin: updatedAdmin,
    });
  } catch (error) {
    console.error("Xato:", error);
    res.status(500).json({
      success: false,
      message: "Server xatosi: Admini yangilashda xato yuz berdi.",
    });
  }
};

// const searchUser = async (req, res) => {
//   try {
//     const { query } = req.query;
//     const result = await User.find({
//       $or: [
//         { firstname: { $regex: query, $options: "i" } },
//         { lastname: { $regex: query, $options: "i" } },
//         { username: { $regex: query, $options: "i" } },
//       ],
//     });
//     if (result.length === 0) {
//       return res.json({ message: "Bunday foydalanuvchi topilmadi" });
//     }
//     res.json(result);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).json({ message: "Server error: Failed to fetch users." });
//   }
// };

module.exports = {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
};