'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          createdAt: new Date(),
          email: 'rudy@rnrd.com',
          id: 1,
          name: 'Rudolph',
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          email: 'prancer@rnrd.com',
          id: 2,
          name: 'Prancer',
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          email: 'cupid@rnrd.com',
          id: 3,
          name: 'Cupid',
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Families',
      [
        {
          createdAt: new Date(),
          id: 1,
          name: 'Reindeer',
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'FamilyMembers',
      [
        {
          createdAt: new Date(),
          familyId: 1,
          id: 1,
          memberId: 1,
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          familyId: 1,
          id: 2,
          memberId: 2,
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          familyId: 1,
          id: 3,
          memberId: 3,
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'Presents',
      [
        {
          createdAt: new Date(),
          link: 'http://www.google.com',
          memberId: 1,
          name: 'sweater',
          notes: 'I like green or purple',
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          link: 'http://www.hotmail.com',
          memberId: 1,
          name: 'Slippers',
          notes: 'I like my 40 yr old ones',
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          link: 'http://www.hotmail.com',
          memberId: 2,
          name: 'Tie',
          notes: 'Argyle please',
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          link: 'http://www.hotmail.com',
          memberId: 3,
          name: 'pony',
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
    await queryInterface.bulkDelete('Families', null, {});
    await queryInterface.bulkDelete('FamilyMembers', null, {});
    await queryInterface.bulkDelete('Presents', null, {});
  },
};
