const { Op } = require('sequelize');
const { Family, Member, FamilyMember, Present } = require('../models');

module.exports = {
  read(req, res) {
    Member.findAll({
      where: {
        id: 1,
      },
      include: {
        model: Family,
        include: {
          model: Member,
          include: Present,
        },
      },
    })
      .then((data) => {
        let response = {
          wishlist: [],
          family: [],
        };

        const family = data[0].Families[0];

        family.Members.map((member) => {
          if (member.id === 1) {
            response.wishlist = member.Presents;
            return;
          } else {
            response.family.push(member);
            return;
          }
        });

        return response;
      })
      .then((response) => {
        return res.status(201).json({
          error: false,
          data: response,
        });
      })
      .catch((error) =>
        res.json({
          error: true,
          data: [],
          error: error,
        })
      );
  },

  create(req, res) {
    console.log('create: ', req, res);
    // const { name, username } = req.body;
    // Family.create({
    //   name,
    //   username,
    // })
    //   .then((user) =>
    //     res.status(201).json({
    //       error: false,
    //       data: user,
    //       message: 'new user has been created',
    //     })
    //   )
    //   .catch((error) =>
    //     res.json({
    //       error: true,
    //       data: [],
    //       error: error,
    //     })
    //   );
  },

  update(req, res) {
    console.log('update: ', req, res);
    // const user_id = req.params.id;

    // const { name, username } = req.body;

    // Family.update(
    //   {
    //     name,
    //     username,
    //   },
    //   {
    //     where: {
    //       id: user_id,
    //     },
    //   }
    // )
    //   .then((user) =>
    //     res.status(201).json({
    //       error: false,
    //       data: user,
    //       message: 'user has been updated',
    //     })
    //   )
    //   .catch((error) =>
    //     res.json({
    //       error: true,
    //       error: error,
    //     })
    //   );
  },

  destroy(req, res) {
    console.log('destroy: ', req, res);
    // const user_id = req.params.id;

    // Family.destroy({
    //   where: {
    //     id: user_id,
    //   },
    // })
    //   .then((status) =>
    //     res.status(201).json({
    //       error: false,
    //       message: 'user has been deleted',
    //     })
    //   )
    //   .catch((error) =>
    //     res.json({
    //       error: true,
    //       error: error,
    //     })
    //   );
  },
};
