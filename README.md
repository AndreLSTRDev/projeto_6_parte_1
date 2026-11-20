# efood

Projeto de delivery de restaurantes desenvolvido a partir do layout do Figma (EBAC).

## Tecnologias
- React + Vite
- Styled Components
- React Router DOM

## Estrutura
```
src/
  components/     # cada componente com index.jsx + styles.js
    Banner/  Button/  Cart/  Dish/  DishList/  Footer/
    Hero/  ProductModal/  ProfileHeader/  Restaurant/  RestaurantList/  Tag/
  pages/          # Home e Perfil do restaurante
  styles.js       # cores, GlobalStyle (fonte Roboto) e Container
  data.js         # dados dos restaurantes
```

## Rotas
- `/` — Home com a lista de restaurantes
- `/perfil/:id` — Perfil do restaurante com o cardápio

## Como executar
```bash
npm install
npm run dev
```
