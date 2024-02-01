const imageContainer = document.querySelector('.completed-projects__image-container');
const cityContainer = document.querySelector('.current-project__item__description_city');
const apartmentAreaContainer = document.querySelector('.current-project__item__description_apartment-area');
const repairTimeContainer = document.querySelector('.current-project__item__description_repair-time');
const repairCostContainer = document.querySelector('.current-project__item__description_repair-cost');

const numberedButtons = document.querySelectorAll('#button_0, #button_1, #button_2');

const leftButton = document.querySelector('.arrow-left');
const rightButton = document.querySelector('.arrow-right');

const projects = [
    {
        image: `<img src="image_1.png" alt="Rostov-on-Don, Admiral">`,
        city: `Rostov-on-Don <br>LCD admiral`,
        apartmentArea: `81 m<sup>2</sup>`,
        repairTime: `3.5 months`,
        repairCost: `Upon request`
    },
    {
        image: `<img src="image_2.png" alt="Sochi, Thieves">`,
        city: `Sochi <br>Thieves`,
        apartmentArea: `105 m<sup>2</sup>`,
        repairTime: `4 months`,
        repairCost: `Upon request`
    },
    {
        image: `<img src="image_3.png" alt="Rostov-on-Don, Patricotic">`,
        city: `Rostov-on-Don <br>Patriotic`,
        apartmentArea: `93 m<sup>2</sup>`,
        repairTime: `3 months`,
        repairCost: `Upon request`
    }
];

let currentProjectId = 0;
let previousProjectId = 0;

document.addEventListener('DOMContentLoaded', () => {
    changeButtons();
    changeData();
});

numberedButtons.forEach((button) => {
    button.addEventListener('click', function() {
        currentProjectId = button.id.slice(-1);

        if (currentProjectId != previousProjectId) {
            changeButtons();
            changeData();
        }        
    })
});

leftButton.addEventListener('click', () => {
    currentProjectId -= 1;
    if (currentProjectId < 0) {
        currentProjectId = 2;
    }
    changeButtons();
    changeData();
});

rightButton.addEventListener('click', () => {
    currentProjectId = Number(currentProjectId) + 1;
    if (currentProjectId > 2) {
        currentProjectId = 0;
    }
    changeButtons();
    changeData();
});

function changeButtons() {
    let activeButtons = document.querySelectorAll(`#button_${previousProjectId}, #button_${currentProjectId}`);

    activeButtons.forEach((button) => {
        switch (button.className) {
            case 'completed-pojects__navigation__button':
                button.className = 'completed-pojects__navigation__button completed-pojects__navigation__button_selected';
                break;
            case 'completed-pojects__navigation__button completed-pojects__navigation__button_selected':
                button.className = 'completed-pojects__navigation__button';
                break;
            case 'completed-pojects__info__navigation__button':
                button.className = 'completed-pojects__info__navigation__button completed-pojects__navigation__button__selected';
                button.innerHTML = '<img src="item_selected.svg">';
                break;
            case 'completed-pojects__info__navigation__button completed-pojects__navigation__button__selected':
                button.className = 'completed-pojects__info__navigation__button';
                button.innerHTML = '<img src="item.svg">';
                break;
        }
    });
    previousProjectId = currentProjectId;
}
    
function changeData() {
    imageContainer.innerHTML = projects[currentProjectId].image;
    cityContainer.innerHTML = projects[currentProjectId].city;
    apartmentAreaContainer.innerHTML = projects[currentProjectId].apartmentArea;
    repairTimeContainer.innerHTML = projects[currentProjectId].repairTime;
    repairCostContainer.innerHTML = projects[currentProjectId].repairCost;
}