const db = require('../db');

exports.addItem = async (req, res) => {
    const { item_name, quantity, price } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO inventory (item_name, quantity, price) VALUES ($1, $2, $3) RETURNING *',
            [item_name, quantity, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error adding inventory item', error });
    }
};

exports.getInventory = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM inventory');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching inventory', error });
    }
};