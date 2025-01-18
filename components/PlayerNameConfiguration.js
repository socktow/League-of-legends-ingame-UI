const PlayerNameConfiguration = () => {
  return `
    <div class="mt-8 grid grid-cols-2 gap-6">
      <!-- Blue Team -->
      <div>
        <h2 class="text-lg font-semibold text-blue-400 mb-4">Đội Xanh</h2>
        <ul id="blueTeam" class="space-y-2">
          ${[1, 2, 3, 4, 5].map(i => `<li><input type="text" placeholder="Player ${i}" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" /></li>`).join('')}
        </ul>
      </div>
      <!-- Red Team -->
      <div>
        <h2 class="text-lg font-semibold text-red-400 mb-4">Đội Đỏ</h2>
        <ul id="redTeam" class="space-y-2">
          ${[6, 7, 8, 9, 10].map(i => `<li><input type="text" placeholder="Player ${i}" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" /></li>`).join('')}
        </ul>
      </div>
    </div>
  `;
};

export default PlayerNameConfiguration; 