# Find the secret number
```
Given two starting values (float) A and B with A<B you need to find an unknown value (float) X which is certainly within the range A-B.
The value of X must be found with an accuracy of 0.000001.

To find the X value you need to use a function, whose implementation is unknown, called blackbox and with the following signature:

boolean blackbox (float val1, float val2)

The blackbox function knows the value of X and returns TRUE if X is between the two input parameters val1 and val2 and FALSE otherwise.
```

# How to run
- You need to install the packages with `yarn` or `npm`
  ```
  yarn install
  ```
- The you have to create your own `.env` file based on the `.env.example`
  ```
  SECRET_NUMBER=10
  A=0
  B=20
  ```
- Finally, you should execute the tests
  ```
  yarn test
  ```
