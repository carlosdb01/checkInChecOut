const { Registration } = require("../models/registration.model");

const getAllRegistration = async (req, res) => {
    try {
        const registration = await Registration.findAll();
        res.status(200).json({
            status: "success",
            data: {
                registration,
            },
        });
    } catch (error) {
        console.log(`ocurrio un error al recuperar los datos `);
    }
};
const createRegistration = async (req, res) => {
    try {
        const idRegistration = req.id;
        const entranceTime = new Date();
        const status = "working";

        const newregistration = await Registration.create({
            idRegistration,
            entranceTime,
            status,
        });

        res.status(200).json({
            status: "success",
            data: {
                newregistration,
            },
        });
    } catch (error) {
        console.log(`ocurrio un error al recuperar los datos `);
    }
};
const updateRegistration = async (req, res) => {
    try {
        const idRegistration = req.id;
        const exitTime = new Date();
        const status = "out";

        const newregistration = await Registration.update(
            { exitTime, status },
            { where: { idRegistration } }
        );
        res.status(200).json({
            status: "success",
            data: {
                newregistration,
            },
        });
    } catch (error) {
        console.log(`ocurrio un error al recuperar los datos `);
    }
};
const cancelRegistration = async (req, res) => {
    try {
        const idRegistration = req.id;
        const status = "canceled";

        const newregistration = await Registration.update(
            { exitTime, status },
            { where: { idRegistration } }
        );
        res.status(200).json({
            status: "success",
            data: {
                newregistration,
            },
        });
    } catch (error) {
        console.log(`ocurrio un error al recuperar los datos `);
    }
};

module.exports = {
    getAllRegistration,
    createRegistration,
    updateRegistration,
    cancelRegistration,
};
