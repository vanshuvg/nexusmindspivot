const db = require('../db');

exports.createReservation = async (req, res) => {
    const { customer_name, date, time, table_number } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO reservations (customer_name, date, time, table_number) VALUES ($1, $2, $3, $4) RETURNING *',
            [customer_name, date, time, table_number]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM reservations');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservations', error });
    }
};