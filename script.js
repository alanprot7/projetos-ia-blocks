const $menuScreen = document.getElementById('menu-screen');
const $gameScreen = document.getElementById('game-screen');
const $board = document.getElementById('board');
const $btnBack = document.getElementById('btn-back');
const $btnReset = document.getElementById('btn-reset');
const $levelGrid = document.getElementById('level-grid');
const $moveCounter = document.getElementById('move-counter');
const $levelIndicator = document.getElementById('level-indicator');

const GRID_SIZE = 6;

const gameLevels = {
  1: {
    blocks: [
      { x: 2, y: 3, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 1, length: 2, orientation: 'v', type: 'wood' },
    ],
  },
  2: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },
  3: {
    blocks: [
      { x: 2, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 1, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 5, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 4, length: 2, orientation: 'h', type: 'wood' },
    ],
  },
  4: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 5, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 5, length: 3, orientation: 'h', type: 'wood' },
    ],
  },

  5: {
    blocks: [
      { x: 0, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 0, length: 3, orientation: 'h', type: 'wood' },
      { x: 3, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 3, orientation: 'h', type: 'wood' },
      { x: 4, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 5, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  6: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 1, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 1, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 2, y: 5, length: 2, orientation: 'h', type: 'wood' },
      { x: 5, y: 3, length: 3, orientation: 'v', type: 'wood' },
    ],
  },
  7: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 3, length: 3, orientation: 'h', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 5, length: 3, orientation: 'h', type: 'wood' },
    ],
  },

  8: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 5, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 4, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 5, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 1, y: 3, length: 3, orientation: 'h', type: 'wood' },
      { x: 0, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  9: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 5, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 5, length: 3, orientation: 'h', type: 'wood' },
    ],
  },
  10: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 1, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 4, length: 2, orientation: 'v', type: 'wood' },
    ],
  },

  11: {
    blocks: [
      { x: 0, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 3, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 5, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 2, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 4, length: 3, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  12: {
    blocks: [
      { x: 0, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 1, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 3, orientation: 'v', type: 'wood' },
      { x: 1, y: 3, length: 3, orientation: 'h', type: 'wood' },
      { x: 4, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 5, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 4, length: 2, orientation: 'v', type: 'wood' },
    ],
  },
  13: {
    blocks: [
      { x: 3, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 1, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 1, y: 5, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  14: {
    blocks: [
      { x: 2, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 1, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  15: {
    blocks: [
      { x: 2, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 1, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 5, y: 1, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 1, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 2, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 3, length: 2, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 1, y: 5, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },
  16: {
    blocks: [
      { x: 2, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 1, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 1, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 2, y: 3, length: 3, orientation: 'v', type: 'wood' },
      { x: 3, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 2, orientation: 'h', type: 'wood' },
    ],
  },

  17: {
    blocks: [
      { x: 0, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 1, y: 0, length: 3, orientation: 'h', type: 'wood' },
      { x: 2, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 4, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 2, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 3, length: 2, orientation: 'h', type: 'wood' },
      { x: 3, y: 3, length: 3, orientation: 'v', type: 'wood' },
      { x: 4, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 5, y: 4, length: 2, orientation: 'v', type: 'wood' },
      { x: 0, y: 4, length: 3, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 3, orientation: 'h', type: 'wood' },
    ],
  },

  18: {
    blocks: [
      { x: 1, y: 2, length: 2, orientation: 'h', type: 'red' },
      { x: 0, y: 0, length: 2, orientation: 'h', type: 'wood' },
      { x: 2, y: 0, length: 2, orientation: 'v', type: 'wood' },
      { x: 3, y: 0, length: 3, orientation: 'v', type: 'wood' },
      { x: 0, y: 1, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 2, length: 3, orientation: 'v', type: 'wood' },
      { x: 1, y: 3, length: 3, orientation: 'h', type: 'wood' },
      { x: 1, y: 4, length: 2, orientation: 'h', type: 'wood' },
      { x: 0, y: 5, length: 3, orientation: 'h', type: 'wood' },
    ],
  },
};

let currentLevel = null;
let moveCount = 0;

function showScreen(screen) {
  if (screen === 'menu') {
    $menuScreen.style.display = 'flex';
    $gameScreen.style.display = 'none';
  } else if (screen === 'game') {
    $menuScreen.style.display = 'none';
    $gameScreen.style.display = 'flex';
  }
}

function renderLevel(levelId) {
  $board.innerHTML = '';
  moveCount = 0;
  updateMoveCounter();

  const level = gameLevels[levelId];
  if (!level) return;

  const cellSize = $board.offsetWidth / GRID_SIZE;

  level.blocks.forEach((block) => {
    const $block = document.createElement('div');
    $block.classList.add('block', `block-${block.type}`);
    $block.dataset.x = block.x;
    $block.dataset.y = block.y;
    $block.dataset.length = block.length;
    $block.dataset.orientation = block.orientation;

    $block.style.left = `${block.x * cellSize}px`;
    $block.style.top = `${block.y * cellSize}px`;
    $block.style.width = `${(block.orientation === 'h' ? block.length : 1) * cellSize}px`;
    $block.style.height = `${(block.orientation === 'v' ? block.length : 1) * cellSize}px`;

    $board.appendChild($block);
  });
}
let dragBlock = null;
let dragStartMouse = { x: 0, y: 0 };
let dragStartBlock = { left: 0, top: 0 };
let dragStartGrid = { x: 0, y: 0 };
let dragCellSize = 0;

function getBlockProps(block) {
  return {
    x: parseInt(block.dataset.x),
    y: parseInt(block.dataset.y),
    length: parseInt(block.dataset.length),
    orientation: block.dataset.orientation,
  };
}

function getGridMax(block) {
  const { length, orientation } = getBlockProps(block);
  return {
    maxCol: orientation === 'h' ? GRID_SIZE - length : GRID_SIZE - 1,
    maxRow: orientation === 'v' ? GRID_SIZE - length : GRID_SIZE - 1,
  };
}

function buildOccupancyGrid(excludeBlock) {
  const grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(false));
  const blocks = $board.querySelectorAll('.block');
  blocks.forEach((block) => {
    if (block === excludeBlock) return;
    const { x, y, length, orientation } = getBlockProps(block);
    if (orientation === 'h') {
      for (let i = 0; i < length; i++) grid[y][x + i] = true;
    } else {
      for (let i = 0; i < length; i++) grid[y + i][x] = true;
    }
  });
  return grid;
}

function isPositionValid(gridX, gridY, length, orientation, occupancyGrid) {
  if (gridX < 0 || gridY < 0) return false;
  if (orientation === 'h') {
    if (gridX + length > GRID_SIZE) return false;
    for (let i = 0; i < length; i++) {
      if (occupancyGrid[gridY][gridX + i]) return false;
    }
  } else {
    if (gridY + length > GRID_SIZE) return false;
    for (let i = 0; i < length; i++) {
      if (occupancyGrid[gridY + i][gridX]) return false;
    }
  }
  return true;
}

function clampGridX(startX, targetX, gridY, length, occupancyGrid, maxCol) {
  targetX = Math.max(0, Math.min(targetX, maxCol));
  const dir = targetX > startX ? 1 : targetX < startX ? -1 : 0;
  if (dir === 0) return startX;

  let bestX = startX;
  for (let x = startX + dir; dir > 0 ? x <= targetX : x >= targetX; x += dir) {
    if (isPositionValid(x, gridY, length, 'h', occupancyGrid)) {
      bestX = x;
    } else {
      break;
    }
  }
  return bestX;
}

function clampGridY(gridX, startY, targetY, length, occupancyGrid, maxRow) {
  targetY = Math.max(0, Math.min(targetY, maxRow));
  const dir = targetY > startY ? 1 : targetY < startY ? -1 : 0;
  if (dir === 0) return startY;

  let bestY = startY;
  for (let y = startY + dir; dir > 0 ? y <= targetY : y >= targetY; y += dir) {
    if (isPositionValid(gridX, y, length, 'v', occupancyGrid)) {
      bestY = y;
    } else {
      break;
    }
  }
  return bestY;
}

function beginDrag(e, block) {
  dragBlock = block;
  dragCellSize = $board.offsetWidth / GRID_SIZE;

  const point = e.touches ? e.touches[0] : e;
  dragStartMouse.x = point.clientX;
  dragStartMouse.y = point.clientY;
  dragStartBlock.left = parseFloat(block.style.left);
  dragStartBlock.top = parseFloat(block.style.top);
  dragStartGrid.x = parseInt(block.dataset.x);
  dragStartGrid.y = parseInt(block.dataset.y);

  block.classList.add('block-dragging');
  block.style.zIndex = '10';
}

function moveDrag(e) {
  if (!dragBlock) return;

  const point = e.touches ? e.touches[0] : e;
  const dx = point.clientX - dragStartMouse.x;
  const dy = point.clientY - dragStartMouse.y;

  const { length, orientation } = getBlockProps(dragBlock);
  const { maxCol, maxRow } = getGridMax(dragBlock);
  const occupancyGrid = buildOccupancyGrid(dragBlock);

  let gridX = parseInt(dragBlock.dataset.x);
  let gridY = parseInt(dragBlock.dataset.y);

  if (orientation === 'h') {
    const targetPx = dragStartBlock.left + dx;
    const targetX = Math.round(Math.max(0, Math.min(targetPx, maxCol * dragCellSize)) / dragCellSize);
    gridX = clampGridX(dragStartGrid.x, targetX, gridY, length, occupancyGrid, maxCol);
    dragBlock.style.left = `${gridX * dragCellSize}px`;
  } else {
    const targetPx = dragStartBlock.top + dy;
    const targetY = Math.round(Math.max(0, Math.min(targetPx, maxRow * dragCellSize)) / dragCellSize);
    gridY = clampGridY(gridX, dragStartGrid.y, targetY, length, occupancyGrid, maxRow);
    dragBlock.style.top = `${gridY * dragCellSize}px`;
  }

  dragBlock.dataset.x = gridX;
  dragBlock.dataset.y = gridY;
}

function endDrag() {
  if (!dragBlock) return;

  const { length, orientation } = getBlockProps(dragBlock);
  const { maxCol, maxRow } = getGridMax(dragBlock);
  const occupancyGrid = buildOccupancyGrid(dragBlock);

  let gridX = parseInt(dragBlock.dataset.x);
  let gridY = parseInt(dragBlock.dataset.y);

  if (!isPositionValid(gridX, gridY, length, orientation, occupancyGrid)) {
    gridX = dragStartGrid.x;
    gridY = dragStartGrid.y;
  }

  dragBlock.style.left = `${gridX * dragCellSize}px`;
  dragBlock.style.top = `${gridY * dragCellSize}px`;
  dragBlock.dataset.x = gridX;
  dragBlock.dataset.y = gridY;

  dragBlock.classList.remove('block-dragging');
  dragBlock.style.zIndex = dragBlock.classList.contains('block-red') ? '2' : '1';

  if (gridX !== dragStartGrid.x || gridY !== dragStartGrid.y) {
    moveCount++;
    updateMoveCounter();
  }

  dragBlock = null;

  checkWinCondition();
}
function updateMoveCounter() {
  if (!currentLevel) return;
  const best = getBestRecord(currentLevel);
  $moveCounter.innerHTML = `Movimentos: <strong>${moveCount}</strong>`;
  if (best !== null) {
    $moveCounter.innerHTML += `<span class="record">| Recorde: ${best}</span>`;
  }
}

function getBestRecord(levelId) {
  const val = localStorage.getItem(`blocks_best_${levelId}`);
  return val !== null ? parseInt(val) : null;
}

function saveBestRecord(levelId, moves) {
  const current = getBestRecord(levelId);
  if (current === null || moves < current) {
    localStorage.setItem(`blocks_best_${levelId}`, moves);
    return true;
  }
  return false;
}
function checkWinCondition() {
  const redBlock = $board.querySelector('.block-red');
  if (!redBlock) return;

  const { x, length, orientation } = getBlockProps(redBlock);

  if (orientation === 'h' && x + length === GRID_SIZE) {
    markLevelSolved(currentLevel);
    const isNewRecord = saveBestRecord(currentLevel, moveCount);
    showWinModal(moveCount, getBestRecord(currentLevel), isNewRecord);
  }
}
function createWinModal() {
  if (document.getElementById('win-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'win-overlay';
  overlay.className = 'win-overlay';
  overlay.innerHTML = `
    <div class="win-modal">
      <h2>Parabéns!</h2>
      <p class="win-moves"></p>
      <p class="win-new-record" style="display:none">Novo Recorde!</p>
      <p class="win-record"></p>
      <button class="win-btn">Continuar</button>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('.win-btn').addEventListener('click', () => {
    overlay.classList.remove('active');
    if (document.getElementById('confetti-container')) {
      document.getElementById('confetti-container').remove();
    }
    goToNextUnsolved();
  });
}

function goToNextUnsolved() {
  const solved = loadSolvedLevels();
  const levels = Object.keys(gameLevels);
  const next = levels.find((id) => !solved.has(parseInt(id)));
  if (next) {
    startLevel(next);
  } else {
    showScreen('menu');
    updateLevelButtons();
  }
}

function showWinModal(moves, best, isNewRecord) {
  createWinModal();

  const overlay = document.getElementById('win-overlay');
  overlay.querySelector('.win-moves').textContent = `${moves} movimento${moves !== 1 ? 's' : ''}`;
  overlay.querySelector('.win-record').textContent = `Recorde: ${best}`;
  overlay.querySelector('.win-new-record').style.display = isNewRecord ? 'block' : 'none';

  overlay.classList.add('active');
  spawnConfetti();
}
function spawnConfetti() {
  const container = document.createElement('div');
  container.id = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#e67e22', '#1abc9c'];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * -30 - 10}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 8}px`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = `${2 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    fragment.appendChild(piece);
  }

  container.appendChild(fragment);

  const maxDuration = 4;
  setTimeout(() => {
    if (container.parentNode) container.remove();
  }, maxDuration * 1000 + 500);
}

function markLevelSolved(levelId) {
  localStorage.setItem(`blocks_solved_${levelId}`, 'true');
  updateLevelButtons();
}

function loadSolvedLevels() {
  const solved = new Set();
  Object.keys(gameLevels).forEach((levelId) => {
    if (localStorage.getItem(`blocks_solved_${levelId}`) === 'true') {
      solved.add(parseInt(levelId));
    }
  });
  return solved;
}

function updateLevelButtons() {
  const solved = loadSolvedLevels();
  const container = $levelGrid || document.getElementById('level-grid');
  if (!container) return;
  const buttons = container.querySelectorAll('.level-btn');
  buttons.forEach((btn) => {
    const level = parseInt(btn.dataset.level);
    if (solved.has(level)) {
      btn.classList.add('level-btn--solved');
    } else {
      btn.classList.remove('level-btn--solved');
    }
  });
}
$board.addEventListener('mousedown', (e) => {
  const block = e.target.closest('.block');
  if (!block) return;
  beginDrag(e, block);
});

$board.addEventListener('touchstart', (e) => {
  const block = e.target.closest('.block');
  if (!block) return;
  e.preventDefault();
  beginDrag(e, block);
}, { passive: false });

document.addEventListener('mousemove', moveDrag);
document.addEventListener('mouseup', endDrag);

document.addEventListener('touchmove', (e) => {
  if (dragBlock) e.preventDefault();
  moveDrag(e);
}, { passive: false });

document.addEventListener('touchend', endDrag);
function buildLevelMenu() {
  $levelGrid.innerHTML = '';
  const levels = Object.keys(gameLevels);
  levels.forEach((levelId) => {
    const btn = document.createElement('button');
    btn.className = 'level-btn';
    btn.dataset.level = levelId;
    btn.textContent = levelId;
    $levelGrid.appendChild(btn);
  });
}

$levelGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.level-btn');
  if (!btn) return;
  startLevel(btn.dataset.level);
});
function startLevel(level) {
  currentLevel = level;
  $levelIndicator.textContent = `Desafio ${level}`;
  showScreen('game');
  renderLevel(level);
}

$btnBack.addEventListener('click', () => {
  showScreen('menu');
  updateLevelButtons();
});

$btnReset.addEventListener('click', () => {
  if (currentLevel) {
    renderLevel(currentLevel);
  }
});

buildLevelMenu();
updateLevelButtons();
