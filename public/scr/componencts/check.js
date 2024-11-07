const checkPathExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' }); // Gửi yêu cầu HEAD để kiểm tra đường dẫn
      if (!response.ok) { // Nếu mã trạng thái không nằm trong khoảng 200–299
        window.location.href = '/404.html'; // Chuyển hướng đến trang 404
      }
    } catch (error) {
      console.error('Lỗi khi kiểm tra đường dẫn:', error);
      window.location.href = './404.html'; // Chuyển hướng đến trang 404 nếu có lỗi
    }
  };
  // Ví dụ sử dụng
  checkPathExists('/public/path-does-not-exist'); // Thay đổi đường dẫn để kiểm tra  