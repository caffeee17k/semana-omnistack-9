const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        //Buscando as informações do user, spot e date utilizando desestruturação
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        //Criação do cadastro de reserva
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
            
        });
        // Função utilizada para popular as informações do json preenchendo o user e spot
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
}