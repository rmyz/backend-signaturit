# Backend-Signaturit

## Test Description

We are in the era of "lawsuits", everyone wants to go to court with their lawyer Saul and try to get a
lot of dollars as if they were raining over Manhattan
The laws have changed much lately and governments have been digitized. That's when Signaturit
comes into play.

The city council through the use of [Signaturit] (https://www.signaturit.com/en) maintains a
registry of legal signatures of each party involved in the contracts that are made.
During a trial the justice only verifies the signatures of the parties involved in the contract to decide
who wins. For that, they assign points to the different firms depending on their signers roles.
For example, if the plaintiff has a contract that is signed by a notary he gets 2 points, if the
defendant has in the contract the signature of only a validator he gets only 1 point, so the plaintiff
party wins the trial.

We want you to automate this process, given a contract with your 2 parties involved and their
signatures and indicate which one wins the test

### Roles

● K - King - 5 points
  
● N - Notary - 2 points

● V - Validator - 1 point

## About

This is the `Full stack` coding challenge of Signaturit.
This project is structured as a `Clean Architecture`, following `Domain Driven Design`, with the principles of `Clean Code` and `SOLID`.

## Commands

First of all, we need to install the project:

```
  npm i
```

And you need to create an `.env` file in the root of the project with the following content:

```
PORT=3025
```

After that, we can both launch the dev server or the test runner.

To launch the dev server:

```
  npm run start
```

To run the tests:

```
  npm run test
```