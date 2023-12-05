
async function searchMeal() {
    const searchBox = document.getElementById('search-box');
    const resultContainer = document.getElementById('result-container');

    resultContainer.innerHTML = '';

   
    const searchTerm = searchBox.value;

    if (searchTerm.trim() !== '') {
      try {
        
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();

       
        const meals = data.meals.slice(0, 5);

        meals.forEach(meal => {
          const mealCard = document.createElement('div');
          mealCard.classList.add('meal-card');

          const mealName = meal.strMeal;
          const mealImage = meal.strMealThumb;

          mealCard.innerHTML = `
            <img src="${mealImage}" alt="${mealName}">
            <p>${mealName}</p>
          `;

          resultContainer.appendChild(mealCard);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      alert('Please enter a meal name');
    }
  }