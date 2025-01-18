const TeamInformation = () => {
  return `
    <div class="grid grid-cols-2 gap-6 mb-8">
      <!-- Blue Team -->
      <div>
        <label for="blueTeamName" class="block text-sm font-medium text-gray-300 mb-2">Tên Đội Xanh:</label>
        <input type="text" id="blueTeamName" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tên Đội Xanh" />
        <label for="blueScore" class="block text-sm font-medium text-gray-300 mt-4 mb-2">Tỉ Số Đội Xanh:</label>
        <input type="number" id="blueScore" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tỉ Số" />
        <label for="blueTeamSubtext" class="block text-sm font-medium text-gray-300 mt-4 mb-2">Subline Đội Xanh:</label>
        <input type="text" id="blueTeamSubtext" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Subline" />
      </div>
      <!-- Red Team -->
      <div>
        <label for="redTeamName" class="block text-sm font-medium text-gray-300 mb-2">Tên Đội Đỏ:</label>
        <input type="text" id="redTeamName" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tên Đội Đỏ" />
        <label for="redScore" class="block text-sm font-medium text-gray-300 mt-4 mb-2">Tỉ Số Đội Đỏ:</label>
        <input type="number" id="redScore" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Tỉ Số" />
        <label for="redTeamSubtext" class="block text-sm font-medium text-gray-300 mt-4 mb-2">Subline Đội Đỏ:</label>
        <input type="text" id="redTeamSubtext" class="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Subline" />
      </div>
    </div>
  `;
};

export default TeamInformation; 