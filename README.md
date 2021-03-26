# What is this?

Perform the git-operations in nodeJs.

# Installation

```
npm i av-git-operation --save

OR

yarn add av-git-operation
```

# Usage

- Import the module

```javascript
const gitOperation = require("av-git-operation");
```

- Clone a repo using

```javascript
gitOperation.clone(
  "YOUR HOST REPO URL",
  "FOLDER PATH WHERE YOU WANT TO PUT REPO",
  { checkout: "Your Branch Name" },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Cloning Done");
  }
);
```

- Config the git user

```javascript
gitOperation.config(
  "FOLDER PATH WHERE YOU PUT REPO",
  { email: configUserEmail, name: configUserName },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Config Done");
  }
);
```

- Commit the repo

```javascript
gitOperation.commit(
  "FOLDER PATH WHERE YOU PUT REPO",
  { message: commitMessage },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Commit Done");
  }
);
```

- Push the changes to your repo

```javascript
gitOperation.push(
  "FOLDER PATH WHERE YOU PUT REPO",
  { branch: "Your Branch Name" },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Push Done");
  }
);
```

- File change status of your repo

```javascript
gitOperation.status("FOLDER PATH WHERE YOU PUT REPO", (result, err) => {
  if (err) {
    throw err;
  }
  console.log(result);
});
```

---

## Options

Use debug to print the useful information.

```javascript
{
  debug: true;
}
```

---

## ❤️ Contributing

This is an open source project, so feel free to contribute. How?

- Open an [issue](https://github.com/umeshiscreative/av-git-operation/issues/new).
- Propose your own fixes, suggestions and open a pull request with the changes.

## Author

Umesh Verma
