It's a todo app but with redux.
Check it out : https://reminder-app-itsrisingtide.netlify.app

Here I use some basic recomended by https://redux.js.org/ concepts like :

- writing redux logic in slices with `@reduxjs/toolkit`, organizing project in feature folder structure;
- using custom memoized selectors aka `createSelector` and common hooks `useDispatch`, `useSelector`
- store setup with `configureStore` and devtools extension,
- using `Typescript` for types checking,

Overall, seems not too bad

Next time i will try to use `thunks` and `normalizr` to work with async logic and storing data in a normalized form
