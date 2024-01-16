function error() {
      // Example usage
    toastr.options = {
      closeButton: true,
      positionClass: 'toast-top-right',
      timeOut: 3000 // Duration in milliseconds
    };
    
  toastr.error('เกิดข้อผิดพลาด!', 'Connection ERROR!');
};


function buyProduct() {
  // สร้าง div สำหรับ Popup
  var popupDiv = document.createElement("div");
  popupDiv.id = "confirmationPopup";
  popupDiv.className = "buy-product";

  // เพิ่มเนื้อหาใน Popup
  popupDiv.innerHTML = `
    <p>คุณต้องการซื้อสินค้าชิ้นนี้ใช่หรือไม่?</p>
    <button onclick="handleConfirmation(true)">ยืนยัน</button>
    <button onclick="handleConfirmation(false)">ยกเลิก</button>
  `;

  // เพิ่ม Popup ลงใน body
  document.body.appendChild(popupDiv);
  
  document.body.style.overflow = 'hidden';
}

function handleConfirmation(isConfirmed) {
  // ทำสิ่งที่ต้องการทำเมื่อผู้ใช้ยืนยันหรือยกเลิก
  var popupDiv = document.getElementById("confirmationPopup");
  if (popupDiv) {
    // ถ้ามี Popup อยู่, ลบออก
    document.body.removeChild(popupDiv);
    document.body.style.overflow = 'auto';
  }

  if (isConfirmed) {
    toastr.options = {
      closeButton: true,
      positionClass: 'toast-top-right',
      timeOut: 3000
    };
    // ทำสิ่งที่คุณต้องการทำเมื่อผู้ใช้ยืนยัน
    const img = "https://drive.usercontent.google.com/u/6/uc?id=16HMjjIai8Xk4W3Scq-ba-4kMEjh1aFJp&export=download";
 
        const downloadLink = document.createElement('a');
        downloadLink.href = img;
        downloadLink.download = 'kuy';

        downloadLink.click();
 
    toastr.success('ดำเนินการสำเร็จแล้ว!', 'Successfully');
  }
}

