const bcrypt = require("bcryptjs");
const { Admin, sequelize } = require("./models");

async function createAdmin() {
    try {
        await sequelize.authenticate();

        const username = "admin1";
        const fullName = "Main Admin";
        const plainPassword = "admin123";

        const passwordHash = await bcrypt.hash(plainPassword, 10);

        const admin = await Admin.create({
            fullName,
            username,
            passwordHash
        });

        console.log("Admin created:", admin.toJSON());
    } catch (e) {
        console.error("Error creating admin:", e);
    } finally {
        await sequelize.close();
    }
}

createAdmin();