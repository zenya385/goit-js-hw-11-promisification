const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    resolve(
      allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user
      )
    );
  });
};

const log = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(log);
toggleUserState(users, "Lux").then(log);
