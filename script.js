/* =========================================================
   MAI THIÊN LỘC V2 — DỮ LIỆU TỪNG PHÒNG & HỆ THỐNG
   ========================================================= */

// 🔴 QUAN TRỌNG: DÁN LINK GOOGLE APPS SCRIPT CỦA BẠN VÀO GIỮA 2 DẤU NGOẶC KÉP BÊN DƯỚI
const GOOGLE_SHEET_API_URL = "DÁN_LINK_BƯỚC_3_VÀO_ĐÂY";


const roomData = [
  // --- TẦNG TRỆT (3 Phòng) ---
  {
    id: "ground-01",
    floor: "ground",
    floorLabel: "TẦNG TRỆT",
    name: "Phòng a 0.1",
    code: "a 0.1",
    status: "available",
    capacity: "Tối đa 5 người",
    guests: 5,
    beds: "2 Giường đôi 1 giường đơn",
    price: "Liên hệ",
    image: "images/phong-a01.jpg",
    description: "Phòng ở tầng trệt, phù hợp 5 người, thuận tiện cho khách không muốn leo lầu.",
    amenities: ["Phòng riêng", "Tiện lợi di chuyển", "Phòng tắm trong"]
  },
  {
    id: "ground-02",
    floor: "ground",
    floorLabel: "TẦNG TRỆT",
    name: "Phòng a 0.2",
    code: "a 0.2",
    status: "available",
    capacity: "Tối đa 4 người",
    guests: 4,
    beds: "2 Giường đôi",
    price: "Liên hệ",
    image: "images/phong-a02.jpg",
    description: "Phòng riêng có cửa sổ thoáng mát, không gian sạch sẽ tiện nghi.",
    amenities: ["Phòng riêng", "Có cửa sổ", "phòng tắm trong"]
  },
  {
    id: "ground-03",
    floor: "ground",
    floorLabel: "TẦNG TRỆT",
    name: "Phòng a0.3",
    code: "a 0.3",
    status: "available",
    capacity: "Tối đa 3 người",
    guests: 3,
    beds: "1 Giường đơn & 1 Giường đôi",
    price: "Liên hệ",
    image: "images/phong-a03.jpg",
    description: "Phòng 2 giường rộng rãi, thích hợp gia đình.",
    amenities: ["Phòng rộng", "2 Giường", "phòng tắm đầy đủ"]
  },

  // --- LẦU 1 (6 Phòng) ---
  {
    id: "floor1-01",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.1",
    code: "a 1.1",
    status: "available",
    capacity: "Tối đa 5 người",
    guests: 5,
    beds: "1 Giường đơn & 2 giường đôi",
    price: "Liên hệ",
    image: "images/phong-a11.jpg",
    description: "Phòng yên tĩnh với ban công nhỏ đón gió mát.",
    amenities: ["Phòng riêng", "Ban công nhỏ", "Phòng tắm đầy đủ"]
  },
  {
    id: "floor1-02",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.2",
    code: "a 1.2",
    status: "available",
    capacity: "Tối đa 4 người",
    guests: 4,
    beds: "2 Giường đôi",
    price: "Liên hệ",
    image: "images/phong-a12.jpg",
    description: "Không gian trang bị đầy đủ tiện nghi tiêu chuẩn.",
    amenities: ["Phòng riêng", "Thoáng mát", "Lầu 1"]
  },
  {
    id: "floor1-03",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.3",
    code: "a 1.3",
    status: "available",
    capacity: "Tối đa 2 người",
    guests: 2,
    beds: "1 Giường đôi",
    price: "Liên hệ",
    image: "images/phong-a13.jpg",
    description: "Phòng rộng rãi, thông thoáng và yên tĩnh.",
    amenities: ["1 Giường", "Thoáng mát", "Lầu 1"]
  },
  {
    id: "floor1-04",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.4",
    code: "a 1.4",
    status: "available",
    capacity: "Tối đa 2 người",
    guests: 2,
    beds: "1 Giường đôi",
    price: "Liên hệ",
    image: "images/phong-a14.jpg",
    description: "Góc phòng yên tĩnh tuyệt đối để nghỉ ngơi.",
    amenities: ["Phòng riêng", "Yên tĩnh", "Lầu 1"]
  },
  {
    id: "floor1-05",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.5",
    code: "a 1.5",
    status: "available",
    capacity: "Tối đa 4 người",
    guests: 4,
    beds: "2 Giường lớn",
    price: "Liên hệ",
    image: "images/phong-a15.jpg",
    description: "Phòng gia đình với 2 giường lớn thoải mái.",
    amenities: ["Phòng gia đình", "Rộng rãi", "Lầu 1"]
  },
  {
    id: "floor1-06",
    floor: "floor1",
    floorLabel: "LẦU 1",
    name: "Phòng a 1.6",
    code: "a 1.6",
    status: "available",
    capacity: "Tối đa 2 người",
    guests: 2,
    beds: "2 Giường đơn",
    price: "Liên hệ",
    image: "images/phong-a16.jpg",
    description: "Phòng nghỉ tinh tươm, sạch sẽ, đón nắng tự nhiên.",
    amenities: ["Phòng riêng", "Sạch sẽ", "Lầu 1"]
  },

  // --- LẦU 2 (2 Phòng) ---
  {
    id: "floor2-01",
    floor: "floor2",
    floorLabel: "LẦU 2",
    name: "Phòng a 2.1",
    code: "a 2.1",
    status: "available",
    capacity: "Tối đa 2 người",
    guests: 2,
    beds: "1 Giường đôi lớn",
    price: "Liên hệ",
    image: "images/phong-a21.jpg",
    description: "Phòng lầu cao với view nhìn thoáng đãng, đón gió biển lồng lộng.",
    amenities: ["View cao", "Riêng tư", "Đón gió"]
  },
  {
    id: "floor2-02",
    floor: "floor2",
    floorLabel: "LẦU 2",
    name: "Phòng a 2.2",
    code: "a 2.2",
    status: "available",
    capacity: "Tối đa 4-5 người",
    guests: 5,
    beds: "Giường gia đình",
    price: "Liên hệ",
    image: "images/phong-a22.jpg",
    description: "Phòng siêu rộng trên lầu 2, thoải mái cho cả gia đình lớn sinh hoạt.",
    amenities: ["Siêu rộng", "Gia đình", "Lầu 2"]
  },

  // --- PHÒNG TẬP THỂ (2 Phòng) ---
  {
    id: "group-01",
    floor: "group",
    floorLabel: "TẬP THỂ",
    name: "Phòng Tập Thể Lớn",
    code: "TT.LỚN",
    status: "available",
    capacity: "Tối đa 15-20 người",
    guests: 120,
    beds: "Nhiều nệm/giường",
    price: "Liên hệ",
    image: "images/phong-tap-the-lon.jpg",
    description: "Không gian sinh hoạt chung rộng lớn, cực kỳ tối ưu chi phí cho các đoàn đông người.",
    amenities: ["Sức chứa lớn", "Chi phí rẻ", "Sinh hoạt chung"]
  },
  {
    id: "group-02",
    floor: "group",
    floorLabel: "TẬP THỂ",
    name: "Phòng Tập Thể Nhỏ",
    code: "TT.NHỎ",
    status: "available",
    capacity: "Tối đa 6-8 người",
    guests: 8,
    beds: "Nhiều nệm/giường",
    price: "Liên hệ",
    image: "images/phong-tap-the-nho.jpg",
    description: "Phòng tập thể ấm cúng, riêng tư hơn, phù hợp cho nhóm bạn thân hoặc đại gia đình.",
    amenities: ["Ấm cúng", "Nhóm bạn", "Tiết kiệm"]
  }
];

const floorLabels = {
  all: "Tất cả phòng",
  ground: "Tầng trệt",
  floor1: "Lầu 1",
  floor2: "Lầu 2",
  group: "Phòng tập thể"
};

function roomCardTemplate(room) {
  const guestText = room.capacity || "Cập nhật sức chứa";
  const priceHtml = room.price === "Liên hệ" ? `<a href="tel:0764878668" class="phone-link">Liên hệ 📞</a>` : room.price;
  
  // Xử lý trạng thái phòng hiển thị
  const isBooked = room.status === "booked";
  const statusClass = isBooked ? "badge-booked" : "badge-available";
  const statusText = isBooked ? "Đã được đặt" : "Còn trống";
  const cardClass = isBooked ? "room-card is-booked" : "room-card";

  return `
    <article class="${cardClass}" data-floor="${room.floor}" data-room-id="${room.id}">
      <div class="room-image" style="background-image:url('${room.image}')">
        <div class="room-image-overlay"></div>
        <span class="room-floor-badge">${room.floorLabel}</span>
        <span class="room-status-badge ${statusClass}">${statusText}</span>
        <div class="room-tag">${room.code}</div>
      </div>
      <div class="room-body">
        <span class="room-kicker">${room.floorLabel}</span>
        <h3>${room.name}</h3>
        <p>${room.description}</p>
        <div class="room-meta">
          <span>♧ ${guestText}</span>
          <span>▣ Phòng riêng</span>
        </div>
        <div class="room-bottom">
          <strong>${priceHtml}</strong>
          <button class="outline-btn" type="button" data-view-room="${room.id}">Xem chi tiết</button>
        </div>
      </div>
    </article>
  `;
}

function populateRoomSelect(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = `<option value="">Chọn phòng</option>` +
    roomData.map(room => {
        const statusLabel = room.status === "booked" ? " (Đã đặt)" : "";
        return `<option value="${room.id}" ${room.status === 'booked' ? 'disabled' : ''}>${room.name}${statusLabel} — ${room.capacity}</option>`;
    }).join("");
}

function renderRooms(floor = "all") {
  const grid = document.getElementById("roomGrid");
  if (!grid) return;

  const rooms = floor === "all"
    ? roomData
    : roomData.filter(room => room.floor === floor);

  grid.innerHTML = rooms.length
    ? rooms.map(roomCardTemplate).join("")
    : `<div class="empty-rooms">Chưa có dữ liệu phòng ở khu vực này.</div>`;

  grid.querySelectorAll("[data-view-room]").forEach(button => {
    button.addEventListener("click", () => openRoomModal(button.dataset.viewRoom));
  });
}

function openRoomModal(roomId) {
  const room = roomData.find(item => item.id === roomId);
  const modal = document.getElementById("roomModal");
  if (!room || !modal) return;

  document.getElementById("roomModalImage").style.backgroundImage = `url('${room.image}')`;
  document.getElementById("roomModalFloor").textContent = room.floorLabel;
  document.getElementById("roomModalTitle").textContent = room.name;
  document.getElementById("roomModalDescription").textContent = room.description;

  const priceHtml = room.price === "Liên hệ" ? `<a href="tel:0764878668" class="phone-link">Liên hệ 📞</a>` : room.price;
  document.getElementById("roomModalPrice").innerHTML = priceHtml;

  document.getElementById("roomModalMeta").innerHTML = `
    <span>♧ ${room.capacity || "Sức chứa cập nhật"}</span>
    <span>▣ ${room.beds}</span>
    <span>⌂ ${room.code}</span>
  `;

  document.getElementById("roomModalAmenities").innerHTML =
    room.amenities.map(item => `<span>✓ ${item}</span>`).join("");

  // Khóa nút đặt phòng nếu phòng đã có người đặt
  const bookBtn = document.getElementById("roomModalBook");
  if (room.status === "booked") {
      bookBtn.textContent = "Phòng đã có người đặt";
      bookBtn.style.backgroundColor = "#95a5a6";
      bookBtn.style.pointerEvents = "none";
  } else {
      bookBtn.textContent = "Đặt phòng này →";
      bookBtn.style.backgroundColor = "";
      bookBtn.style.pointerEvents = "auto";
  }

  bookBtn.dataset.roomId = room.id;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeRoomModal() {
  const modal = document.getElementById("roomModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function selectRoomAndBook(roomId) {
  const heroSelect = document.getElementById("roomType");
  const bookingSelect = document.getElementById("bookingRoom");
  if (heroSelect) heroSelect.value = roomId;
  if (bookingSelect) bookingSelect.value = roomId;
  closeRoomModal();
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

function initRoomV2() {
  populateRoomSelect("roomType");
  populateRoomSelect("bookingRoom");
  renderRooms();

  document.querySelectorAll(".floor-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".floor-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderRooms(tab.dataset.floor);
    });
  });

  document.querySelectorAll("[data-close-room]").forEach(el => {
    el.addEventListener("click", closeRoomModal);
  });

  document.getElementById("roomModalBook")?.addEventListener("click", (e) => {
    selectRoomAndBook(e.currentTarget.dataset.roomId);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeRoomModal();
  });

  document.getElementById("searchRoom")?.addEventListener("click", () => {
    const selected = document.getElementById("roomType")?.value;
    if (selected) {
      const room = roomData.find(r => r.id === selected);
      if (room) openRoomModal(room.id);
    } else {
      document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
    }
  });
}


/* =========================================================
   XỬ LÝ GIAO DIỆN & GỬI FORM EMAIL
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  });

  menuToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
    menuToggle.textContent = navLinks?.classList.contains("open") ? "×" : "☰";
  });

  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const today = new Date().toISOString().split("T")[0];

  if (checkin) {
    checkin.min = today;
    checkin.addEventListener("change", () => {
      if (checkout) {
        checkout.min = checkin.value || today;
        if (checkout.value && checkout.value <= checkin.value) checkout.value = "";
      }
    });
  }

  // --- Xử lý Form Gửi Email ngầm qua FormSubmit ---
  const bookingForm = document.getElementById("bookingForm");
  bookingForm?.addEventListener("submit", e => {
    e.preventDefault(); 
    
    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    const submitBtn = bookingForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Đang gửi thông tin...";
    submitBtn.style.opacity = "0.7";
    submitBtn.style.pointerEvents = "none";

    const formData = new FormData(bookingForm);

    fetch(bookingForm.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        const toast = document.getElementById("toast");
        if (toast) {
            toast.textContent = "Đã gửi thành công! Nhà nghỉ sẽ liên hệ lại với bạn sớm nhất.";
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 4200);
        }
        bookingForm.reset();
        if (checkin) checkin.min = today;
        populateRoomSelect("roomType");
        populateRoomSelect("bookingRoom"); 
    })
    .catch(error => {
        alert("Có lỗi xảy ra khi gửi, vui lòng thử lại sau!");
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = "1";
        submitBtn.style.pointerEvents = "auto";
    });
  });

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      const lightboxImage = document.getElementById("lightboxImage");
      const caption = document.getElementById("lightboxCaption");
      if (!lightbox || !lightboxImage) return;
      lightboxImage.style.backgroundImage = item.style.backgroundImage;
      if (caption) caption.textContent = item.dataset.caption || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  document.querySelectorAll("[data-close-lightbox]").forEach(el => {
    el.addEventListener("click", () => {
      const lightbox = document.getElementById("lightbox");
      lightbox?.classList.remove("is-open");
      lightbox?.setAttribute("aria-hidden", "true");
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.getElementById("lightbox")?.classList.remove("is-open");
    }
  });

  const bookingRoom = document.getElementById("bookingRoom");
  const roomType = document.getElementById("roomType");
  roomType?.addEventListener("change", () => {
    if (bookingRoom) bookingRoom.value = roomType.value;
  });
});


/* =========================================================
   KẾT NỐI API GOOGLE SHEETS
   ========================================================= */
async function fetchRoomStatusAndRender() {
  try {
    if(GOOGLE_SHEET_API_URL !== "DÁN_LINK_BƯỚC_3_VÀO_ĐÂY") {
        const response = await fetch(GOOGLE_SHEET_API_URL);
        const statusData = await response.json();

        statusData.forEach(sheetRoom => {
          const room = roomData.find(r => r.id === sheetRoom.id);
          if (room) {
            room.status = sheetRoom.status;
          }
        });
    }
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu Google Sheets, dùng trạng thái mặc định:", error);
  }
  
  // Vẽ giao diện web sau khi lấy xong dữ liệu
  initRoomV2();
}

// Khởi chạy hệ thống sau khi tải xong toàn bộ HTML
document.addEventListener("DOMContentLoaded", fetchRoomStatusAndRender);