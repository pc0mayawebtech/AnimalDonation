import express from 'express';
import userdb from '../models/userSchema.js';

const router = express.Router();

router.use(express.json());

// contact form post API

router.post('/contact', async (req, res) => {
    const { name, email, subject, yourMessage } = req.body;

    console.log('Signup request body:', req.body);

    if (!name || !email || !subject || !yourMessage) {
        return res.status(400).send({ error: "Please fill in all fields." });
    }
    try {
        const finaluser = new userdb({ name, email, subject, yourMessage });
        const storeData = await finaluser.save();
        return res.status(200).json({ status: 200, storeData });
    } catch (error) {
        console.log("contect error", error);
        return res.status(500).json({ "error": "internal server error" });
    }

});

// login API
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('login request body', req.body);
})
export default router;