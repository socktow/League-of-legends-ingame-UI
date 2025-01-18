const ColorSelection = () => {
  return `
    <div class="mb-8">
      <!-- Phần chọn màu và avatar nằm chung 1 hàng -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Chọn màu xanh -->
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <label for="blueColor" class="block text-sm font-medium text-gray-300 mb-2">Chọn màu xanh:</label>
            <input type="color" id="blueColor" value="#0b849e" class=" h-10 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" />
          </div>
          <div class="flex-1">
            <input type="text" id="blueColorCode" value="#0b849e" class="w-full h-10 border border-gray-600 rounded-md text-center" disabled />
          </div>
        </div>

        <!-- Chọn màu đỏ -->
        <div class="flex items-center space-x-4">
          <div class="flex-1">
            <label for="redColor" class="block text-sm font-medium text-gray-300 mb-2">Chọn màu đỏ:</label>
            <input type="color" id="redColor" value="#be1e37" class=" h-10 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400" />
          </div>
          <div class="flex-1">
            <input type="text" id="redColorCode" value="#be1e37" class="w-full h-10 border border-gray-600 rounded-md text-center" disabled />
          </div>
        </div>
      </div>

      <!-- Phần chọn avatar nằm chung 1 hàng -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex-1">
          <label for="avatarblue" class="block text-sm font-medium text-gray-300 mb-2">Nhập URL avatar xanh:</label>
          <input type="text" id="avatarblue" class="w-full h-10 border border-gray-600 rounded-md shadow-sm focus:outline-none" placeholder="Nhập URL hình ảnh xanh" />
        </div>

        <div class="flex-1">
          <label for="avatarred" class="block text-sm font-medium text-gray-300 mb-2">Nhập URL avatar đỏ:</label>
          <input type="text" id="avatarred" class="w-full h-10 border border-gray-600 rounded-md shadow-sm focus:outline-none" placeholder="Nhập URL hình ảnh đỏ" />
        </div>
      </div>
    </div>
  `;
};

export default ColorSelection;
