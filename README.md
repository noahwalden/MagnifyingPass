A password manager whose primary objective is to provide you with the
credentials you're looking for ASAP.

This application is heavily based on other excellent password managers
I've used in the past, including 1Password and especially
[Passbolt](https://www.passbolt.com/), which I recently set up to manage
passwords for a club on campus.

# Motivation

This project was motivated by the fact that Passbolt was very deliberately built
using a system other than session-based authentication. However, session-based is
more convenient and understandable than their PGP key-based system, which
requires a browser plugin to work. If session-based auth could be made secure
for a web app-based password manager, then MagnifyingPass
could be a session-based, open-source password manager built for teams of non-software
developers.

**Do not store actual passwords using this web application!**

# Assumptions

- `MONGODB_URI` and `SECRET` environment variables set before `node app.js`

# To Do

- Allow password sharing between users
- Rearrange forms
- Add "Hello, user" button to nav linking to profile
- Clean up password display in vault and search
- Delete passwords from vault
- Error message on failed login
- Button rearrangement
- Hide passwords and add copy to clipboard button
- Fuzzy find search suggestion dropdown keying off password names
  - Also key off descriptions
- On login and register, redirect to next page instead of `/`
- GIF showing usage in `README.md`
- Make URL and description optional 
