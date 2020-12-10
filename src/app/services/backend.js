import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebase-config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in!');
  } else {
    console.log('logged out!');
  }
});

const getCredentials = () => {
  return firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      const { credential } = result;
      return {
        isAuthenticated: !!credential,
      };
    })
    .catch((error) => {
      const { code, credential, email, message } = error;
      console.log(
        'there was an error signing in: ',
        code,
        credential,
        email,
        message
      );
    });
};

export const isLoggedIn = () => {
  return getCredentials()
    .then((isLoggedIn) => isLoggedIn)
    .catch(() => false);
};

export const logIn = () => {
  return firebase.auth().signInWithRedirect(provider);
};

export const logOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('successfully logged out');
    })
    .catch((error) => {
      console.log('error logging out: ', error);
    });
};

// Database
const database = firebase.firestore();

async function getUserRef(user) {
  let userRef;
  await database
    .collection('people')
    .where('id', '==', user.uid)
    .limit(1)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((result) => {
        userRef = result;
      });
    });
  return userRef;
}

export const getPersonalWishlist = () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return getUserRef(currentUser).then((userRef) =>
      database
        .collection('people')
        .doc(userRef.id)
        .get()
        .then((results) => {
          const { wishlist } = results.data();
          return wishlist;
        })
    );
  }
};

export const removeFromPersonalWishlist = (present) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return getUserRef(currentUser).then((userRef) => {
      const personRef = database.collection('people').doc(userRef.id);

      return personRef.get().then((results) => {
        const { wishlist } = results.data();
        return personRef.update({
          wishlist: wishlist.filter((item) => item.name !== present.name),
        });
      });
    });
  }
};

export const saveToPersonalWishlist = (present) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return getUserRef(currentUser).then((userRef) => {
      const personRef = database.collection('people').doc(userRef.id);

      return personRef.get().then((results) => {
        const { wishlist } = results.data();
        return personRef.update({
          wishlist: wishlist.concat(present),
        });
      });
    });
  }
};

export const updatePersonalWishlist = (present) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    return getUserRef(currentUser).then((userRef) => {
      const personRef = database.collection('people').doc(userRef.id);

      return personRef.get().then((results) => {
        const { wishlist } = results.data();
        return personRef.update({
          wishlist: wishlist.map((item) => {
            if (item.name === present.name) {
              return present;
            } else {
              return item;
            }
          }),
        });
      });
    });
  }
};

export const getFamilyWishlist = (familyId) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    let personalId;
    // get references to all members of family
    return getUserRef(currentUser).then((userRef) => {
      personalId = userRef.id;
      return database
        .collection('families')
        .doc(familyId)
        .collection('familyMembers')
        .get()
        .then((results) => {
          const familyMembers = [];
          results.forEach((result) => {
            const memberRef = result.data().member;

            // Only concat other family members (not self)
            if (memberRef.id !== personalId) {
              familyMembers.push(memberRef);
            }
          });
          return familyMembers;
        })
        .then((familyMembers) => {
          const familyList = [];

          // get wishlists from each member in family (from prev. refs)
          return familyMembers.reduce(async (membersQuery, currentMember) => {
            return await membersQuery.then(() =>
              database
                .doc(currentMember.path)
                .get()
                .then((results) => {
                  const { name, wishlist } = results.data();
                  familyList.push({ id: results.id, name, wishlist });
                  return familyList;
                })
            );
          }, Promise.resolve());
        });
    });
  }
};
