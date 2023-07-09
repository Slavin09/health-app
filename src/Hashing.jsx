function Hashed(){
    // Requiring module
const bcrypt = require('bcryptjs');

const address =document.getElementById("Address").value;
let hashedAddress;

// Encryption of the string address
bcrypt.genSalt(10, function (err, Salt) {

	// The bcrypt is used for encrypting address.
	bcrypt.hash(address, Salt, function (err, hash) {

		if (err) {
			return console.log('Cannot encrypt');
		}

		hashedAddress = hash;
		console.log(hash);

		bcrypt.compare(address, hashedAddress,
			async function (err, isMatch) {

				// Comparing the original address to
				// encrypted address
				if (isMatch) {
					console.log('Encrypted address is: ', address);
					console.log('Decrypted address is: ', hashedAddress);
				}

				if (!isMatch) {

					// If address doesn't match the following
					// message will be sent
					console.log(hashedAddress + ' is not encryption of '
						+ address);
				}
			})
	})
})

}