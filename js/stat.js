'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 5;
var GAP = 10;
var FONT_GAP = 15;
var COLUMN_GAP = 50;
var CLOUD_OFFSET = 60;
var BAR_WIDTH = 50;
var TEXT_OFFSET_X = 15;
var TEXT_OFFSET_Y = 15;
var BAR_HEIGHT = 150;
var lineHeight = 10 + FONT_GAP;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_OFFSET_X, CLOUD_Y + FONT_GAP + TEXT_OFFSET_Y);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_OFFSET_X, CLOUD_Y + FONT_GAP + lineHeight + TEXT_OFFSET_Y);
  var maxTime = getMaxElement(times);
  var oneUnit = maxTime / BAR_HEIGHT;

  for (var i = 0; i < players.length; i++) {

    var columnHeight = times[i] / oneUnit;
    // Визуализация статистики
    var barStep = (COLUMN_GAP + BAR_WIDTH) * i;
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + CLOUD_OFFSET + barStep, CLOUD_Y + FONT_GAP + FONT_GAP + lineHeight + TEXT_OFFSET_Y + GAP + (BAR_HEIGHT - columnHeight));
    ctx.fillText(players[i], CLOUD_X + CLOUD_OFFSET + barStep, CLOUD_Y + FONT_GAP + FONT_GAP + lineHeight + TEXT_OFFSET_Y + GAP + (GAP * 18));
    ctx.fillStyle = (players[i] === 'Вы') ? '#f00' : 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    ctx.fillRect(CLOUD_X + CLOUD_OFFSET + barStep, CLOUD_Y + FONT_GAP + lineHeight + TEXT_OFFSET_Y + GAP + GAP + GAP + (BAR_HEIGHT - columnHeight), BAR_WIDTH, columnHeight);
  }
};
