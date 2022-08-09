const CustomerModal = require("./Modal/CustomerModal");

const ExistingUser = async (email) => {
  let existinguser = false;
  await CustomerModal.find({ email: email }).then((Data) => {
    if (Data.length) {
      existinguser = true;
    }
  });
  return existinguser;
};

module.exports = ExistingUser;
