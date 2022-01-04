var dishes = document.querySelectorAll('input[name="dish"]');
var cookBtn = document.querySelector("#cook");
var cookpotSvg = document.querySelector(".cookpot-svg");
var dishMsgContent = document.querySelector(".dish-message");
var dishMsgContainer = document.querySelector(".right-box");
const dishMsg = `<span class="italic">You should make: </span>`



cookBtn.addEventListener("click", doSomething);

function doSomething() {
    event.preventDefault();
    let checkedDish;

    dishes.forEach(dish => dish.checked && (checkedDish = dish.value))

    // Hide SVG
    if (cookpotSvg.style.display !== "none") {
        cookpotSvg.style.display = "none"
        cookBtn.disabled = true;
    }

    if(checkedDish === "Side") {
        dishMsgContainer.insertAdjacentHTML('afterbegin', `<p>${dishMsg}<br><span class="bold">Mashed Potatoes</span></p>`)
    } else if (checkedDish === "Main Dish") {
        dishMsgContainer.insertAdjacentHTML('afterbegin', `<p>${dishMsg}<br><span class="bold">Steak</span></p>`)
    } else if (checkedDish === "Dessert") {
        dishMsgContainer.insertAdjacentHTML('afterbegin', `<p>${dishMsg}<br><span class="bold">Ice Cream Sundae</span></p>`)
    }
}