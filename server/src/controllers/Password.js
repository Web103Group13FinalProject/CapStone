import { db } from '../db.js';

export class PasswordController {

    async checkPassword(req, res) {
        try {
            const check = await db.one('SELECT * FROM password WHERE password = $1', [req.params.password]);
            return res.json(check);
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: "Error Occured when fetching password by id"})
        }
    };

    createPassword(req, res) {
        try {
            db.none('INSERT INTO password(password) VALUES($1)', [req.body.password])
            .then(() => {
                console.log('Password created successfully');
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: error})
            });
        } catch(error) {
            console.log(error);
            res.status(500).json({error: error});
        }
    };

    updatePassword(req, res) {
        try {
            db.none('UPDATE password SET password = $1 WHERE id = $2', [req.body.password, req.params.id])
            .then(() => {
                console.log('Password updated successfully');
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: error});
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: error});
        }
    };

    deletePassword(req, res) {
        try {
            db.none('DELETE FROM password WHERE password = $1 AND id = $2', [req.params.password, req.params.id])
            .then(() => {
                console.log('Password deleted successfully');
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: error});
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: error});
        }
    };

};