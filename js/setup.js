'use strict';

var COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
var setupSimilarWizards = document.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


// Открывает окно с похожими волшебниками
function init() {
  userDialog.classList.remove('hidden');
  setupSimilarWizards.classList.remove('hidden');
}
renderWizards();
init();


// Копирует шаблон волшебника
function renderWizards() {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
}


// Генерирует шаблон волшебника
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}


// Функция, возвращает массив магов
function generateWizards() {
  var shuffleWizardNames = shuffleArray(NAMES);
  var shuffleWizardSurnames = shuffleArray(SURNAMES);
  var wizards = [];
  for (var i = 0; i < COUNT; i++) {
    wizards.push({
      names: shuffleWizardNames[i],
      surnames: shuffleWizardSurnames[i],
      coatColor: getRandomElement(COAT_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    });
  }
  return wizards;
}


// Возвращает новый массив из старого в случайном порядке
function shuffleArray(array) {
  var mixedArray = array.slice();
  for (var i = mixedArray.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var tempValue = mixedArray[i];
    mixedArray[i] = array[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
}


// Возвращает случайный элемемент массива
function getRandomElement(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  }
  return randomElement;
}
