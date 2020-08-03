module.exports = {
  read(req, res) {
    res.json({
      error: false,
      data: [
        {
          name: 'Mom',
          wishList: [
            {
              name: 'Sweater',
              notes: 'I like green or purple',
              links: ['https://www.google.com'],
            },
            {
              name: 'Slippers',
              notes: 'I like my 40 year old ones',
              links: ['https://www.google.com', 'https://www.google.com'],
            },
          ],
        },
        {
          name: 'Dad',
          wishList: [
            {
              name: 'Slippers',
              notes: 'I like my 40 year old ones',
              links: ['https://www.google.com'],
            },
          ],
        },
      ],
    });

    // Family.findAll({})
    //   .then((family) =>
    //     res.json({
    //       error: false,
    //       data: family,
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
