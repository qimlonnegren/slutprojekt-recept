# slutprojekt-recept

Slutprojekt - Receptsajten
Cupcake-mania

Backend

Recept
| Egenskap | Datatyp | Värde |
|---|---|---|
| id | string | Id för receptet |
| title | string | Namn på receptet |
| description | string | Beskrivning av receptet |
| imageUrl | string | Länk till bild för receptet (kan ligga online) |
| timeInMins | int | Antal minuter det tar att laga receptet
ratings | array<int> | Betyg på receptet (1-5) |
category 	array<string> 	Kategorier |
| ingrediensts |	array<Ingredient> |	Ingredienser i receptet |
| instructions |	array<string> |	Instruktioner till receptet |
| comments | array<Comment> |	Kommentarer till receptet |


Ingrediens/er

| Egenskap |	Datatyp |	Värde |
|---|---|---|
| ingredient |	string |	Namn på ingrediensen |
| amount |	number |	Mängd |
| unit |	string |	Enhet som mängden anges i, t.ex. msk, tsk, gram.. |


Kommentar/er

| Egenskap |	Datatyp |	Värde |
|---|---|---|
| comment |	string |	Kommentaren som någon skrivit |
| name |	string |	Namn på den som skrivit kommentaren |
| createdAt |	date |	Datum när kommentaren skrevs |


REST API routes

| Metod |	Resurs |	Body | 	Respons |
|---|---|---|---|
| GET | 	/recipes |	- |	Hämtar information för alla recept |
| GET |	/recipes?search=abc |	- |	Hämtar alla recept filtrerade på en söksträng |
| GET |	/recipes/:recipeId |	- |	Hämtar all information för ett recept |
| GET |	/categories |	- |	Hämtar alla kategorier |
| GET |	/categories/:categoryName/recipes |	- |	Hämtar recept för en viss kategori |
| GET |	/categories/:categoryName/recipes?search=abc |	- |	Hämtar alla recept i en kategori filtrerade på en söksträng |
| POST |	/recipes/:recipeId/ratings |	- |	Lägger till en ny rating för ett recept |


Frontend

| Vy |	Frontend- route |	Innehåll |
|---|---|---|
| Startsida |	/ 	Här listas alla recept. | Man kan söka och filtrera på kategori. |
| Kategorisida |	/category/:categoryId |	Samma som startsida men listar endast recept i en viss kategori. |
| Receptsida |	/recipe/:recipeId |	Här visas varje recept med ingredienser och instruktioner. |

Startsida

    - Startsidan ska innehålla en lista med alla recept som ligger i databasen
    - Varje recept som listas på startsidan ska visa upp relevant information om receptet, t.ex:
        - Namnet på receptet
        - Liten bild
        - Rating
        - Hur många ingredienser
        - Tid det tar att göra receptet
    - Startsidan ska ha en lista som visar alla kategorier
        - Bredvid kategorinamnet ska det stå hur många recept som finns i den kategorin
        - Klickar man på kategorin ska man länkas till Kategorisidan
    - Startsidan ska ha en sökruta
        - Om man skriver i sökrutan visas endast de recept som matchar sökningen



[![Netlify Status](https://api.netlify.com/api/v1/badges/acef87d7-0952-45c9-ae0f-9f4b43b8e739/deploy-status)](https://app.netlify.com/sites/glittery-frangollo-f0c510/deploys)