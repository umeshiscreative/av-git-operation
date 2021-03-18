# What is this?

Perform the git-operations in nodeJs.

# Installation

```
npm i av-git-operation --save
```

# Usage

- Import the module

```javascript
const gitOperation = require("av-git-operation");
```

- Clone a repo using

```javascript
gitOperation.clone(
  repoName,
  repoDirectoryPath,
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
  repoDirectoryPath,
  { email: configUserEmail, name: configUserName },
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Config Done");
  }
);
```

- Comit the repo

```javascript
gitOperation.commit(repoDirectoryPath, { message: commitMessage }, (err) => {
  if (err) {
    throw err;
  }
  console.log("Commit Done");
});
```

- Push the changes to your repo

```javascript
gitOperation.push(repoDirectoryPath, { branch: "Your Branch Name" }, (err) => {
  if (err) {
    throw err;
  }
  console.log("Push Done");
});
```

---

## Options

Use debug to print the usefult information.

```javascript
{ debug: true, branch: "Your Branch Name" }
```

---

## ❤️ Contributing

This is an open source project, so feel free to contribute. How?

- Open an [issue](https://github.com/umeshiscreative/av-git-operation/issues/new).
- Propose your own fixes, suggestions and open a pull request with the changes.

## Author

Umesh Verma
