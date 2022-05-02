A password manager whose primary objective is to provide you with the
credentials you're looking for ASAP.

This application is heavily based on other excellent password managers
I've used in the past, including 1Password and especially
[Passbolt](https://www.passbolt.com/), which I recently set up to manage
passwords for a club on campus.

**Do not store actual passwords using this web application!** This is a proof of
concept and has not been properly secured for use in production.

Demo video: https://brandeis.zoom.us/rec/share/lo2iXanbfPS3y6FVNCqfVasnXgIwAQTLbDF1gFI_RbCwUXxgoVXOiugYwy-IcAir.y7XrS66xb14L87in?startTime=1651508723000

# Motivation

This project was motivated by the fact that Passbolt was very deliberately built
using a system other than session-based authentication. However, session-based is
more convenient and understandable than their PGP key-based system, which
requires a browser plugin to work. If session-based auth could be made secure
for a web app-based password manager, then MagnifyingPass
could be a session-based, open-source password manager built for teams of non-software
developers.

# Installation Instructions

Install Node.js and MongoDB (if you're going to be hosting your database locally).

Clone this repository and run `npm install`.

Create a script in the repo setting the `MONGODB_URI` and `SECRET` environment variables.

```bash
export MONGODB_URI="enter uri here"
export SECRET="enter secret here"
node app.js
```

Launch the app by executing your start script.

# Usage

When you first open the application, you'll be greeted with the home page.

![index logged out](/img/index_loggedout.png?raw=true)

In order to create an account, click the "Sign Up" button in the navbar.

![signup sheet filled out](/img/signup_filledout.png?raw=true)

Once logged in, you can create a password by clicking "Create Password" in the top right.

![new password filled out](/img/create_password_filledout.png?raw=true)

After you've created the password, you'll be redirected to its record, which shows its attributes.

![new password record](/img/password_record.png?raw=true)

From here, you can update or delete the password entry.

Clicking on "Vault" will bring you to a list of all the passwords you have stored.

![vault](/img/vault.png?raw=true)

You can return to the home page to search through your passwords by name.

![search page](/img/search.png?raw=true)

# To Do

- Allow password sharing between users
- Hide passwords and add copy to clipboard button
- Fuzzy find search suggestion dropdown keying off password names
  - Also key off descriptions
- On login and register, redirect to next page instead of `/`
- GIF showing usage in `README.md`
- Mark URL and description fields optional
- Allow attaching image to password
- Add import/export feature
- Only update changed fields in MongoDB
