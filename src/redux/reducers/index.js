import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  CLEAR_CART,
  TOGGLE_ITEM_SELECTION,
} from '../actions/index';

import { SAVE_TRANSACTION } from '../actions/transactionActions';


const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 1099500,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'Men clothing',
      type: 'backpack', // Trường mới phân loại sản phẩm
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120,
      },
      classify: 'Popular',
    },

    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 223000,
      description:
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: 'Men clothing',
      type: 't-shirt', // Trường mới phân loại sản phẩm
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259,
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 559900,
      description:
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: 'Men clothing',
      type: 'jacket', // Trường mới phân loại sản phẩm
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {
        rate: 4.7,
        count: 500,
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 159900,
      description:
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
      category: 'Men clothing',
      type: 'slim fit', // Trường mới phân loại sản phẩm
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      rating: {
        rate: 2.1,
        count: 430,
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },

    {
      id: 5,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Grey-XL',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run nổi bật, màu xám, phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-gre-9.jpg?v=1690163400750',
      rating: {
        rate: 4.0, // Giả định rating
        count: 150, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 6,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Grey-2XL',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run, màu xám, size 2XL phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-gre-9.jpg?v=1690163400750',
      rating: {
        rate: 4.1, // Giả định rating
        count: 180, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 7,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Đen-M',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run, màu đen, size M phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-den-2.jpg?v=1690163400750',
      rating: {
        rate: 4.2, // Giả định rating
        count: 210, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 8,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Đen-L',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run, màu đen, size L phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-den-2.jpg?v=1690163400750',
      rating: {
        rate: 4.0, // Giả định rating
        count: 175, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 9,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Đen-XL',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run, màu đen, size XL phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-den-2.jpg?v=1690163400750',
      rating: {
        rate: 3.9, // Giả định rating
        count: 160, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 10,
      title: 'T-shirt Thể Thao Nam Siêu Nhẹ In Run-Đen-2XL',
      price: 49000,
      description:
        'T-shirt thể thao nam siêu nhẹ với thiết kế in Run, màu đen, size 2XL phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 't-shirt', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-thun-nam-stm6007-den-2.jpg?v=1690163400750',
      rating: {
        rate: 4.1, // Giả định rating
        count: 185, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },

    {
      id: 11,
      title: 'Polo Thể Thao Nam Phối Màu-XÁM 1-M',
      price: 99000,
      description:
        'Polo thể thao nam phối màu xám, thiết kế năng động, phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 'polo', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-polo-nam-sam6067-x1m-5-yody.jpg?v=1690163529187',
      rating: {
        rate: 4.3, // Giả định rating
        count: 120, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 12,
      title: 'Polo Thể Thao Nam Phối Màu-XÁM 1-L',
      price: 99000,
      description:
        'Polo thể thao nam phối màu xám, thiết kế năng động, size L, phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 'polo', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-polo-nam-sam6067-x1m-5-yody.jpg?v=1690163529187',
      rating: {
        rate: 4.2, // Giả định rating
        count: 95, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 13,
      title: 'Polo Thể Thao Nam Phối Màu-XÁM 1-XL',
      price: 99000,
      description:
        'Polo thể thao nam phối màu xám, thiết kế năng động, size XL, phù hợp cho các hoạt động thể thao hoặc mặc hàng ngày.',
      category: 'Men clothing',
      type: 'polo', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/100/438/408/products/ao-polo-nam-sam6067-x1m-5-yody.jpg?v=1690163529187',
      rating: {
        rate: 4.4, // Giả định rating
        count: 110, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 14,
      title: 'Quần Jeans Nam Coolmax Mỏng Nhẹ Mác Yody-xanh trung-28',
      price: 149000,
      description:
        'Quần jeans nam Coolmax với thiết kế mỏng nhẹ, chất liệu thấm hút tốt, màu xanh trung, size 28, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men clothing',
      type: 'jeans', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
      rating: {
        rate: 4.2, // Giả định rating
        count: 180, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 15,
      title: 'Quần Jeans Nam Coolmax Mỏng Nhẹ Mác Yody-xanh trung-29',
      price: 149000,
      description:
        'Quần jeans nam Coolmax với thiết kế mỏng nhẹ, chất liệu thấm hút tốt, màu xanh trung, size 29, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men clothing',
      type: 'jeans', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
      rating: {
        rate: 4.3, // Giả định rating
        count: 160, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },

    {
      id: 16,
      title: 'Quần Jeans Nam Coolmax Mỏng Nhẹ Mác Yody-xanh trung-30',
      price: 149000,
      description:
        'Quần jeans nam Coolmax với thiết kế mỏng nhẹ, chất liệu thấm hút tốt, màu xanh trung, size 30, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men clothing',
      type: 'jeans', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
      rating: {
        rate: 4.1, // Giả định rating
        count: 140, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 17,
      title: 'Quần Jeans Nam Coolmax Mỏng Nhẹ Mác Yody-xanh trung-31',
      price: 149000,
      description:
        'Quần jeans nam Coolmax với thiết kế mỏng nhẹ, chất liệu thấm hút tốt, màu xanh trung, size 31, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men clothing',
      type: 'jeans', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
      rating: {
        rate: 4.0, // Giả định rating
        count: 120, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 18,
      title: 'Quần Jeans Nam Coolmax Mỏng Nhẹ Mác Yody-xanh trung-32',
      price: 149000,
      description:
        'Quần jeans nam Coolmax với thiết kế mỏng nhẹ, chất liệu thấm hút tốt, màu xanh trung, size 32, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men clothing',
      type: 'jeans', // Trường phân loại sản phẩm
      image:
        'https://m.yodycdn.com/products/quan-jeans-nam-yody-qjm6037-xtu-gut6090-bee-7.jpg',
      rating: {
        rate: 4.4, // Giả định rating
        count: 200, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 19,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Đen-F',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu đen, thiết kế thanh lịch, phù hợp cho các dịp trang trọng.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-den-4.jpg',
      rating: {
        rate: 4.5, // Giả định rating
        count: 150, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 20,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Nâu-F',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu nâu, thiết kế thanh lịch, phù hợp cho các dịp trang trọng.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-nau-2.jpg',
      rating: {
        rate: 4.4, // Giả định rating
        count: 130, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 21,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Đen-115',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu đen, size 115, phù hợp cho các dịp trang trọng.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-den-4.jpg',
      rating: {
        rate: 4.3, // Giả định rating
        count: 110, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 22,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Nâu-115',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu nâu, size 115, thiết kế tinh tế cho các sự kiện trang trọng.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-nau-2.jpg',
      rating: {
        rate: 4.6, // Giả định rating
        count: 145, // Giả định số lượng đánh giá
      },
      classify: 'Best Sales', // Thêm trường phân loại mới
    },
    {
      id: 23,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Đen-125',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu đen, size 125, phù hợp cho mọi hoạt động hàng ngày.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-den-4.jpg',
      rating: {
        rate: 4.2, // Giả định rating
        count: 120, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 24,
      title: 'Thắt Lưng Nam Khoá Lăn Mặt Kim Loại Phối Da 03-Nâu-125',
      price: 499000,
      description:
        'Thắt lưng nam với khóa lăn mặt kim loại, phối da 03, màu nâu, size 125, thích hợp với các trang phục lịch sự.',
      category: 'Men accessories',
      type: 'belt', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/that-lung-nam-tlm7007-nau-2.jpg',
      rating: {
        rate: 4.4, // Giả định rating
        count: 135, // Giả định số lượng đánh giá
      },
      classify: 'Best Matched', // Thêm trường phân loại mới
    },
    {
      id: 24,
      title: 'Áo Khoác Gió Thể Thao Nam Can Phối Yody Sport-Ghi-M',
      price: 569050,
      description:
        'Áo khoác gió thể thao nam phối Yody Sport, màu ghi, size M, chất liệu nhẹ, phù hợp cho các hoạt động thể thao và ngoài trời.',
      category: 'Men clothing',
      type: 'jacket', // Trường phân loại sản phẩm
      image: 'https://m.yodycdn.com/products/ao-khoac-nam-SKM7003-GHI (1).jpg',
      rating: {
        rate: 4.3, // Giả định rating
        count: 115, // Giả định số lượng đánh giá
      },
      classify: 'Popular', // Thêm trường phân loại mới
    },
    {
      id: 26,
      title: 'Áo Khoác Gió Thể Thao Nam Can Phối Yody Sport-Navy-M',
      price: 569050,
      description:
        'Áo khoác gió thể thao nam phối Yody Sport, màu navy, size M, thiết kế hiện đại, thích hợp cho các hoạt động thể thao.',
      category: 'Men clothing',
      type: 'jacket',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/ao-khoac-nam-SKM7003-NAV (1).jpg',
      rating: {
        rate: 4.2,
        count: 100,
      },
    },
    {
      id: 27,
      title: 'Áo Khoác Gió Thể Thao Nam Can Phối Yody Sport-Đen-L',
      price: 569050,
      description:
        'Áo khoác gió thể thao nam phối Yody Sport, màu đen, size L, phù hợp cho các hoạt động thể thao và dạo phố.',
      category: 'Men clothing',
      type: 'jacket',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/ao-khoac-nam-SKM7003-DEN (1).jpg',
      rating: {
        rate: 4.1,
        count: 85,
      },
    },
    {
      id: 28,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695000,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: 'Jewelery',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 29,
      title: 'Solid Gold Petite Micropave ',
      price: 168000,
      description:
        'Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      category: 'Jewelery',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },

    {
      id: 30,
      title: 'White Gold Plated Princess',
      price: 999000,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: 'Jewelery',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 31,
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      price: 109090,
      description:
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
      category: 'Jewelery',
      classify: 'Popular', // Phân loại mới
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 32,
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
      price: 64000,
      description:
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
      category: 'Electronics',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 33,
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: 109000,
      description:
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
      category: 'Electronics',
      classify: 'Popular', // Phân loại mới
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 34,
      title:
        'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      price: 109000,
      description:
        '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
      category: 'Electronics',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 35,
      title:
        'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      price: 114000,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: 'Electronics',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
      rating: {
        rate: 4.8,
        count: 400,
      },
    },

    {
      id: 36,
      title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      price: 599000,
      description:
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
      category: 'Electronics',
      classify: 'Popular', // Phân loại mới
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 37,
      title:
        'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
      price: 999990,
      description:
        '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
      category: 'Electronics',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 38,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 569900,
      description:
        'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
      category: 'Women clothing',
      type: 'jacket',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 39,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 299500,
      description:
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
      category: 'Women clothing',
      type: 'jacket',
      classify: 'Popular', // Phân loại mới
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 40,
      title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
      price: 399900,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: 'Women clothing',
      type: 'raincoat',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 41,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 98500,
      description:
        '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      rating: {
        rate: 4.7,
        count: 130,
      },
    },

    {
      id: 42,
      title: "Opna Women's Short Sleeve Moisture",
      price: 795000,
      description:
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 43,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 129900,
      description:
        '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      category: 'Women clothing',
      type: 'top',
      classify: 'Popular', // Phân loại mới
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
    {
      id: 44,
      title: 'Áo nữ thinks - Be - L',
      price: 359000,
      description: 'Áo nữ thinks - Be - L',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-bee-2.jpg',
      rating: {
        rate: null,
        count: 214,
      },
    },
    {
      id: 45,
      title: 'Áo nữ thinks - Be - M',
      price: 359000,
      description: 'Áo nữ thinks - Be - M',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-bee-2.jpg',
      rating: {
        rate: null,
        count: 15,
      },
    },
    {
      id: 46,
      title: 'Áo nữ thinks - Hồng - M',
      price: 359000,
      description: 'Áo nữ thinks - Hồng - M',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-hog-1.jpg',
      rating: {
        rate: null,
        count: 167,
      },
    },
    {
      id: 47,
      title: 'Áo nữ thinks - Hồng - S',
      price: 359000,
      description: 'Áo nữ thinks - Hồng - S',
      category: 'Women clothing',
      type: 'top',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-hog-1.jpg',
      rating: {
        rate: null,
        count: 129,
      },
    },

    {
      id: 48,
      title: 'Áo nữ thinks - Hồng - L',
      price: 359000,
      description: 'Áo nữ thinks - Hồng - L',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-hog-1.jpg',
      rating: {
        rate: null,
        count: 261,
      },
    },
    {
      id: 49,
      title: 'Áo nữ thinks - Trắng - M',
      price: 359000,
      description: 'Áo nữ thinks - Trắng - M',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-tra-5.jpg',
      rating: {
        rate: null,
        count: 132,
      },
    },
    {
      id: 50,
      title: 'Áo nữ thinks - Trắng - S',
      price: 359000,
      description: 'Áo nữ thinks - Trắng - S',
      category: 'Women clothing',
      type: 'top',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-tra-5.jpg',
      rating: {
        rate: null,
        count: 2,
      },
    },
    {
      id: 51,
      title: 'Áo nữ thinks - Be - S',
      price: 359000,
      description: 'Áo nữ thinks - Be - S',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-bee-2.jpg',
      rating: {
        rate: null,
        count: 132,
      },
    },
    {
      id: 52,
      title: 'Áo nữ thinks - Trắng - L',
      price: 359000,
      description: 'Áo nữ thinks - Trắng - L',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/atn4422-tra-5.jpg',
      rating: {
        rate: null,
        count: 262,
      },
    },
    {
      id: 53,
      title: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Xanh-M',
      price: 99000,
      description: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Xanh-M',
      category: 'Women clothing',
      type: 'top',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/scn5056-xah1-yody-vn.jpg',
      rating: {
        rate: null,
        count: 213,
      },
    },
    {
      id: 54,
      title: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Xanh-L',
      price: 99000,
      description: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Xanh-L',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/scn5056-xah1-yody-vn.jpg',
      rating: {
        rate: null,
        count: 184,
      },
    },
    {
      id: 55,
      title: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Đen-S',
      price: 349000,
      description: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Đen-S',
      category: 'Women clothing',
      type: 'top',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/scn5056-den3-yody-vn.jpg',
      rating: {
        rate: null,
        count: 79,
      },
    },
    {
      id: 56,
      title: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Đen-M',
      price: 349000,
      description: 'Áo Sơ Mi Nữ Kiểu Croptop Cổ 2 Ve Chiết Eo-Đen-M',
      category: 'Women clothing',
      type: 'top',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/scn5056-den3-yody-vn.jpg',
      rating: {
        rate: null,
        count: 260,
      },
    },

    {
      id: 57,
      title: 'Váy nữ bèo tay bồng - Xanh ngọc - S',
      price: 99000,
      description: 'Váy nữ bèo tay bồng - Xanh ngọc - S',
      category: 'Women clothing',
      type: 'dress',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/van5124-xng0.jpg',
      rating: {
        rate: null,
        count: 217,
      },
    },
    {
      id: 58,
      title: 'Váy nữ bèo tay bồng - Xanh Biển - M',
      price: 99000,
      description: 'Váy nữ bèo tay bồng - Xanh Biển - M',
      category: 'Women clothing',
      type: 'dress',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/van5124-xbi-2.jpg',
      rating: {
        rate: null,
        count: 64,
      },
    },
    {
      id: 59,
      title: 'Chân Váy Ống Đứng Túi Ốp Hoạ Tiết Kẻ-Kẻ nâu-L',
      price: 99000,
      description: 'Chân Váy Ống Đứng Túi Ốp Hoạ Tiết Kẻ-Kẻ nâu-L',
      category: 'Women clothing',
      type: 'skirt',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/cvn5274-kna.jpg',
      rating: {
        rate: null,
        count: 298,
      },
    },
    {
      id: 60,
      title: 'Chân Váy Ống Đứng Túi Ốp Hoạ Tiết Kẻ-Kẻ đen-S',
      price: 99000,
      description: 'Chân Váy Ống Đứng Túi Ốp Hoạ Tiết Kẻ-Kẻ đen-S',
      category: 'Women clothing',
      type: 'skirt',
      classify: 'Popular', // Phân loại mới
      image: 'https://m.yodycdn.com/products/cvn5274-kde-7.jpg',
      rating: {
        rate: null,
        count: 148,
      },
    },
    {
      id: 61,
      title: 'Váy Cut Out Ngực Áo-Trắng-S',
      price: 149000,
      description: 'Váy Cut Out Ngực Áo-Trắng-S',
      category: 'Women clothing',
      type: 'dress',
      classify: 'Best Sales', // Phân loại mới
      image: 'https://m.yodycdn.com/products/van6148-tra-4.jpg',
      rating: {
        rate: null,
        count: 145,
      },
    },
    {
      id: 62,
      title: 'Váy Cut Out Ngực Áo-Trắng-M',
      price: 149000,
      description: 'Váy Cut Out Ngực Áo-Trắng-M',
      category: 'Women clothing',
      type: 'dress',
      classify: 'Best Matched', // Phân loại mới
      image: 'https://m.yodycdn.com/products/van6148-tra-4.jpg',
      rating: {
        rate: null,
        count: 270,
      },
    },
  ],
  transactions: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case 'TOGGLE_ITEM_SELECTION':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, selected: !item.selected } // Đảo trạng thái selected
            : item
        ),
      };

    
    
    
    
    
    case SAVE_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
