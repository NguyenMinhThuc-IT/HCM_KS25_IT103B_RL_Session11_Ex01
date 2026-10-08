/**
 * DO VET & SUA LOI CAM SAI SOT THUONG GAP FALSY KHI CAP NHAT TRANG THAI THIET BI THONG MINH
 * File name: solution_ex1.js
 * 
 * PHAN TICH LOI KY THUAT & CO CHE FALSY VALUES:
 * ----------------------------------------------------------------------------------
 * 1. Nguyen nhan loi:
 *    Trong JavaScript, cac gia tri nhu false, 0, "", null, undefined, NaN deu la "Falsy".
 *    Khi su dung dieu kien `if (updatedData.isActive)`, neu truyen vao `isActive: false`,
 *    bieu thuc dieu kien se tra ve `false` va khoi lenh cap nhat bi bo qua.
 *    Tuong tu, neu truyen `powerWatts: 0`, dieu kien `if (updatedData.powerWatts)` cung
 *    bi coi la Falsy va khong the ha cong suat ve 0W.
 * 
 * 2. Giai phap khac phuc:
 *    Chuyen tu kiem tra Falsy (`if (updatedData.prop)`) sang kiem tra su ton tai cua
 *    thuoc tinh (`updatedData.prop !== undefined`). Cach nay dam bao cac gia tri hieu luc
 *    nhu `false` hoac `0` van duoc ghi nhan va cap nhat chinh xac.
 * 
 * BANG TEST CASES DOI CHUNG:
 * +----+-----------------------------+-----------------------+-----------------------+-----------------------+
 * | STT| Truong hop kiem thu         | Du lieu dau vao       | Ket qua sai thuc te   | Ket qua dung mong doi |
 * +----+-----------------------------+-----------------------+-----------------------+-----------------------+
 * | 01 | Tat dieu hoa phong khach    | { isActive: false }   | isActive van la true  | isActive chuyen false |
 * | 02 | Ha cong suat den ngu ve 0W | { powerWatts: 0 }     | powerWatts van giu ng | powerWatts chuyen 0   |
 * +----+-----------------------------+-----------------------+-----------------------+-----------------------+
 */

// 1. HAM HO TRO TIM THIET BI THEO ID
function findDeviceById(devices, targetId) {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) {
      return devices[i];
    }
  }
  return null;
}

// 2. HAM CAP NHAT THIET BI AN TOAN (DA SUA LOI FALSY)
const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) {
    return false;
  }

  // Kiem tra chuoi ten device khong rong
  if (updatedData.name !== undefined && updatedData.name.trim() !== "") {
    targetDevice.name = updatedData.name.trim();
  }

  // Kiem tra thuoc tinh isActive khac undefined (cho phép nhan gia tri false)
  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  // Kiem tra thuoc tinh powerWatts khac undefined (cho phap nhan gia tri 0)
  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

// 3. KHOI TAO DU LIEU KIEM THU SMART HOME
const smartDevices = [
  {
    id: "DEV001",
    name: "Dieu hoa Phong Khach",
    isActive: true,
    powerWatts: 1500
  },
  {
    id: "DEV002",
    name: "Den Ngu Phong Ngu",
    isActive: true,
    powerWatts: 15
  }
];

// 4. CHAY THU NGHIEM CAC KICH BAN DUNG NGHIEP VU

console.log("================================================");
console.log("KHOI TAO TRANG THAI THIET BI BAN DAU");
console.log("================================================");
console.log(smartDevices);

// KICH BAN 1: TAT DIEU HOA PHONG KHACH ({ isActive: false })
console.log("\n================================================");
console.log("[KICH BAN 1] TAT DIEU HOA PHONG KHACH ({ isActive: false })");
console.log("================================================");

const res1 = updateDevice(smartDevices, "DEV001", { isActive: false });
console.log(`Ket qua cap nhat: ${res1 ? "THANH CONG" : "THAT BAI"}`);
console.log(`Trang thai hien tai cua DEV001:`, findDeviceById(smartDevices, "DEV001"));

// KICH BAN 2: HA CONG SUAT DEN NGU VE 0W ({ powerWatts: 0 })
console.log("\n================================================");
console.log("[KICH BAN 2] HA CONG SUAT DEN NGU VE 0W ({ powerWatts: 0 })");
console.log("================================================");

const res2 = updateDevice(smartDevices, "DEV002", { powerWatts: 0 });
console.log(`Ket qua cap nhat: ${res2 ? "THANH CONG" : "THAT BAI"}`);
console.log(`Trang thai hien tai cua DEV002:`, findDeviceById(smartDevices, "DEV002"));

// 5. IN BANG TONG KET CONSOLE
console.log("\n================================================");
console.log("BANG TONG KET TRANG THAI CAC THIET BI DANG QUAN LY");
console.log("================================================");

const borderLine = "-".repeat(70);
console.log(borderLine);
console.log(
  "MA THIET BI".padEnd(12) +
  "TEN THIET BI".padEnd(28) +
  "TRANG THAI".padEnd(15) +
  "CONG SUAT".padStart(12)
);
console.log(borderLine);

for (let i = 0; i < smartDevices.length; i++) {
  const dev = smartDevices[i];
  const colId = dev.id.padEnd(12);
  const colName = dev.name.padEnd(28);
  const colStatus = (dev.isActive ? "DANG BAT" : "DA TAT").padEnd(15);
  const colPower = (dev.powerWatts + " W").padStart(12);

  console.log(`${colId}${colName}${colStatus}${colPower}`);
}

console.log(borderLine);