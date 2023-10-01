# Problem Statement:
Link to Presentation and Demo: https://www.youtube.com/watch?v=XU-SVZyFwrE
Optimising berth allocation when lacking timely updates from external ship or port operators.
They won’t tell you they are  late...
Because if they do, PSA may allocate their designated berth to another ship to maximise port productivity.

Consequently, PSA will operate at a level substantially below their optimal capacity.

# Solution
With state-of-the-art ML models, predict the trajectory of a ship’s journey, from the start to end, sensitive to important factors.
- Estimates a ship’s arrival time at PSA’s port, and key checkpoint ports, based on vessel size, efficiency of incoming ports, weather conditions, and the distance travelled with powerful machine-learning techniques
- Displays forecasted weather conditions for important port checkpoints
- Adaptable, responsive mobile-friendly UI so that the ETA can be checked anywhere at anytime

# Technology Stack
## Frontend
ReactTS with Vite

## Backend
Flask, Tomorow.io API for weather forecasting

## AI Technologies
Random Forest Regression, SkLearn,  Pandas, NumPy

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
