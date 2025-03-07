# Portfolio Website

Một trang portfolio cá nhân hiện đại được xây dựng bằng React, TypeScript và các công nghệ web hiện đại.

## Tính năng

- Thiết kế responsive và hiện đại
- Animation mượt mà với Framer Motion
- Routing với React Router
- Styling với Styled Components
- TypeScript cho type safety
- Tối ưu hiệu suất
- Menu mobile thông minh
- Các hiệu ứng hover đẹp mắt
- Thanh tiến trình animation
- Timeline với animation
- Card dự án với hiệu ứng hover

## Cấu trúc dự án

```
portfolio/
├── public/
│   └── images/         # Hình ảnh tĩnh
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Story.tsx
│   │   ├── Skills.tsx
│   │   └── Projects.tsx
│   ├── App.tsx        # Component chính
│   └── index.tsx      # Entry point
└── package.json       # Dependencies
```

## Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy dự án:
```bash
npm start
```

4. Build cho production:
```bash
npm run build
```

## Công nghệ sử dụng

- React
- TypeScript
- React Router
- Framer Motion
- Styled Components

## Tùy chỉnh

1. Thay đổi nội dung trong các components
2. Thêm/sửa/xóa các sections trong `App.tsx`
3. Tùy chỉnh styles trong các styled components
4. Thêm hình ảnh vào thư mục `public/images`
5. Điều chỉnh màu sắc và font chữ trong `index.css`

## Cấu trúc Components

### Navbar
- Menu navigation với animation
- Responsive design
- Hiệu ứng scroll
- Menu mobile

### Hero
- Giới thiệu ngắn gọn
- Animation mượt mà
- Các role badges
- Nút scroll

### About
- Thông tin chi tiết
- Hình ảnh với hiệu ứng
- Thống kê số liệu
- Animation khi scroll

### Story
- Timeline với animation
- Responsive design
- Hiệu ứng hover
- Gradient line

### Skills
- Thanh tiến trình animation
- Phân loại kỹ năng
- Hiệu ứng hover
- Gradient progress bar

### Projects
- Card dự án với animation
- Hình ảnh với hiệu ứng
- Tags công nghệ
- Link đến dự án

## License

MIT
