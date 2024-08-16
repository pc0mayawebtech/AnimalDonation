import express from 'express';
import userdb from '../models/userSchema.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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

    if (!email || !password) {
        return res.status(400).send({ error: "Please fill in all fields." });
    }
    const user = await userdb.findOne({ email });
    if (user && user.passwordResetToken) {
        return res.redirect(`/reset-password/${user.passwordResetToken}`);
    }
    else if (email === "pawan30jul@gmail.com" && password === "admin@123") {
        const token = jwt.sign({ email, password }, 'pawan30');
        const response = res.status(200).json([{ msg: "user successful create", token }, { status: 200 }]);
        console.log('token', response);
        return response;
    }
});

//dashboard API
router.get('/dashboard', async (req, res) => {
    try {
        const users = await userdb.find();
        return res.status(200).json({ status: 200, users });
    } catch (error) {
        console.log("dashboard error", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// forgot password API
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userdb.findOne({ email });
        console.log('forotuser', user);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        const token = jwt.sign({ id: user._id }, 'pawan30', { expiresIn: '1h' });
        console.log('Token generated:', token);
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "pawan.kumar@webwisestudio.in",
                pass: "cdtpuhiieeifyvvm",
            },
        });

        var mailOptions = {
            from: "email",
            to: email,
            subject: "Password Reset",
            text: `http://localhost:5173/reset-password/${user._id}/${token}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.json({
                    success: false,
                    message: "Email does not send. Please try again.",
                });
            } else {
                return res.json({ success: true, message: "Email send successfully." });
            }
        });

    } catch (error) {
        console.log('Forgot password error:', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
});

// reset password API
router.post('/reset-password/:id/:token', async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
    console.log(id, token, 'toekb')
    try {
        // Verify the token
        const decoded = jwt.verify(token, 'pawan30');
        console.log(decoded)
        if (decoded.id !== id) {
            console.log("decode errror")
            return res.status(400).send({ error: 'Invalid token or ID' });
        }

        // Find the user by ID
        const user = await userdb.findById(id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password and save
        user.password = hashedPassword;
        await user.save();

        return res.status(200).send({ message: 'Password reset successfully' });
    } catch (error) {
        console.error('reset password error', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
});
export default router;