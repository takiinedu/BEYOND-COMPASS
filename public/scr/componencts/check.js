// // Hàm kiểm tra sự tồn tại của trang
// async function checkPageExists(url) {
//   try {
//     const response = await fetch(url, { method: 'HEAD' });
//     if (!response.ok) {
//       // Chuyển đến trang 404 nếu không tìm thấy
//       window.location.href = './404.html';
//     }
//   } catch (error) {
//     console.error('Lỗi khi kiểm tra đường dẫn:', error);
//     window.location.href = './404.html';
//   }
// }

// // Kiểm tra trang khi nhấn vào liên kết
// function handleClick(event, url) {
//   event.preventDefault(); // Ngăn chặn việc tải trang mặc định
//   checkPageExists(url);
// }