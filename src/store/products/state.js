const state = {
  products: [
    {
      collection: '001',
      code: '001',
      name: 'Rượu sen 350 ml',
      content: 'Những cánh sen bách hoa quý hiếm kết hợp cùng rượu nếp trắng cổ truyền đã cho ra đời loại rượu sen thơm ngon, nồng đượm. Rượu sen là thức uống quý, thường chỉ dành để mời tri kỷ tâm giao.',
      price: 1530000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-001.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '001',
      code: '002',
      name: 'Mơ lên men 350ml',
      content: 'Có vị rượu mơ cổ truyền, nồng nàn hương vị. Chỉ cần nhấp môi chút rượu mơ đầu xuân, cũng khiến lòng người mơ màng như lạc bước bồng lai tiên cảnh.',
      price: 390000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-002.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '001',
      code: '003',
      name: 'Chanh dây lên men 350ml',
      content: 'Sự kết hợp của chanh dây tươi và rượu nếp cái, cho ra đời thức rượu chanh dây thơm ngon, bổ dưỡng. Đây vừa là thức uống phù hợp cho những dịp hàn huyên bè bạn, vừa là món quà sức khỏe cho gia đình.',
      price: 280000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-003.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '001',
      code: '004',
      name: 'Nếp cẩm lên men 350ml',
      content: 'Nếp cẩm sạch từ Sóc Trăng, phối hợp cùng rượu trắng cổ truyền, trải qua nhiều tháng ngâm ủ, sẽ mang lại vị ngọt thơm đặc trưng của gạo. Rượu nếp cẩm còn là phương thuốc quý giúp bổ huyết, lưu thông kinh mạch, điều hoà huyết áp và tiêu hoá tốt.',
      price: 320000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-004.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '001',
      code: '005',
      name: 'Hộp trà 12 gói',
      content: 'Trà trồng sạch được ướp hương  hoàn toàn tự nhiên và sao bằng tay trên chảo đất nung.  Trà thiên nhiên The Bloom cho vị trà nồng đượm mà thanh khiết, ngọt hậu lâu phai. Phẩm chất trà ngon có thể giữ nguyên mùi vị sau 5 lần nước.',
      price: 320000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-005.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '001',
      code: '006',
      name: 'Hộp cà phê 12 gói',
      content: 'Cà phê sạch của The Bloom được trồng theo quy trình trồng an toàn: trước 45 ngày thu hái không thêm phân và không phun thuốc bảo vệ thực vật. Những hạt cà phê tốt nhất được lựa chọn để tạo nên những gói cà phê túi lọc thơm ngon tinh khiết, đậm đà và rất tiện dụng cho mọi nơi.',
      price: 189000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-006.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '018',
      name: 'Bộ xông thơm 50gr',
      content: 'Được làm từ các loại thảo mộc trồng sạch: quế, bồ kết, sả, mùi già, vỏ bưởi, hoa ngò… Rải bột xông lên than đượm để khói thơm len lỏi khắp nhà, những mùi cũ kĩ, ẩm thấp bay đi mất, chỉ còn lại mùi Tết thanh khiết, ấm áp mà trong lành.',
      price: 180000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '019',
      name: 'Túi xông 20gr',
      content: 'Được làm từ các loại thảo mộc trồng sạch: quế, bồ kết, sả, mùi già, vỏ bưởi, hoa ngò… Rải bột xông lên than đượm để khói thơm len lỏi khắp nhà, những mùi cũ kĩ, ẩm thấp bay đi mất, chỉ còn lại mùi Tết thanh khiết, ấm áp mà trong lành.',
      price: 65000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-019.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '020',
      name: 'Túi xông 50gr',
      content: 'Được làm từ các loại thảo mộc trồng sạch: quế, bồ kết, sả, mùi già, vỏ bưởi, hoa ngò… Rải bột xông lên than đượm để khói thơm len lỏi khắp nhà, những mùi cũ kĩ, ẩm thấp bay đi mất, chỉ còn lại mùi Tết thanh khiết, ấm áp mà trong lành.',
      price: 90000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-019.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '007',
      name: 'Chườm mắt',
      content: 'Túi chườm nóng lạnh cho mắt với tác dụng tạo cảm giác thư giãn, dễ chịu, giảm mỏi và khô mắt, hỗ trợ giảm vết thâm quầng, cho giấc ngủ ngon và sâu.',
      price: 280000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-007.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '008',
      name: 'Chườm lưng/bụng',
      content: 'Túi chườm được thiết kế bao phủ hết toàn bộ vùng thắt lưng và eo; giúp giảm nhức mỏi cột sống, hỗ trợ điều trị đau lưng mãn tính và giảm bớt lượng mỡ thừa tích tụ, giữ ấm cơ thể,giúp thư giãn và làm dễ ngủ.',
      price: 1090000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-008.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '009',
      name: 'Chườm chân',
      content: 'Túi chườm chân được thiết kế bao phủ hết toàn bộ chân, giúp giảm chứng nhức mỏi và tê chân, giúp làm ấm chân, tăng cường sự lưu thông khí huyết  giúp thư giãn và làm dễ ngủ.',
      price: 1200000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-009.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '010',
      name: 'Chườm củ tỏi',
      content: 'Giảm căng cơ và nhức mỏi, phục hồi sức khỏe, tái tạo năng lượng cho cơ thể thông qua các động tác massage, ấn huyệt kết hợp cùng mùi hương thư giãn từ thảo mộc.',
      price: 590000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-010.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '011',
      name: 'Tinh dầu mùi già',
      content: 'Tinh dầu nguyên chất chưng cất từ hạt mùi già trồng sạch từ nông trường Thanh Hoá. Hương thơm nhẹ thư giãn, ngoài tính kháng khuẩn cao còn giúp tạo không gian thoáng, ấm cúng giúp tăng cường hoạt động não, giảm lo lắng và mệt mỏi.',
      price: 920000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-011.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '012',
      name: 'Tinh dầu sả hồng',
      content: 'Tinh dầu nguyên chất chưng cất từ cây sả hồng, trồng sạch tại các vườn thảo dược Đà Lạt. Hương thơm nhẹ thư giãn, ngoài tính kháng khuẩn cao còn giúp tạo không gian thoáng, ấm cúng giúp tăng cường hoạt động não, giảm lo lắng và mệt mỏi.',
      price: 630000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-012.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '013',
      name: 'Túi than tre',
      content: 'Tre từ rừng tre thiên nhiên Củ Chi, được nung ở nhiệt độ 1200◦C. Than tre hoạt tính có độ xốp cao, có khả năng lọc không khí và nước, cân bằng độ ẩm; đồng thời cũng có khả năng khử mùi và kháng khuẩn...',
      price: 189000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-013.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '014',
      name: 'Hộp than que',
      ontent: 'Tre từ rừng tre thiên nhiên Củ Chi, được nung ở nhiệt độ 1200◦C. Than tre hoạt tính có độ xốp cao, có khả năng lọc không khí và nước, cân bằng độ ẩm; đồng thời cũng có khả năng khử mùi và kháng khuẩn...',
      price: 219000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-014.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '015',
      name: 'Bộ sản phẩm dưỡng thể (có dầu dừa)',
      content: 'Hỗn hợp tẩy tế bào chết dịu nhẹ từ muối thảo dược và dầu dừa nguyên chất mang đến dáng vẻ tươi sáng và sự mềm mại cho làn da của bạn cùng cảm giác thư giãn dễ chịu.',
      price: 875000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-015.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '016',
      name: 'Bộ sản phẩm dưỡng thể (không dầu dừa)',
      content: 'Hỗn hợp tẩy tế bào chết dịu nhẹ từ muối thảo dược và dầu dừa nguyên chất mang đến dáng vẻ tươi sáng và sự mềm mại cho làn da của bạn cùng cảm giác thư giãn dễ chịu.',
      price: 685000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-015.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '002',
      code: '017',
      name: 'Dầu dừa',
      content: '',
      price: 250000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-017.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '021',
      name: 'Than hoạt tính',
      content: '',
      price: 15000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '028',
      name: 'Mứt gừng thốt nốt 150gr',
      content: 'Củ gừng ta nhỏ mà đậm vị và thơm nồng được trồng sạch từ vườn Đạ Terh Lâm Đồng, ngào với đường thốt nốt để cả vị lẫn hương thêm ngọt. Gừng cay ấm, ta chiêu thêm chút trà, cả chầu hàn huyên sẽ đượm.',
      price: 125000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-028.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '029',
      name: 'Mứt gừng thốt nốt 250gr',
      content: 'Củ gừng ta nhỏ mà đậm vị và thơm nồng được trồng sạch từ vườn Đạ Terh Lâm Đồng, ngào với đường thốt nốt để cả vị lẫn hương thêm ngọt. Gừng cay ấm, ta chiêu thêm chút trà, cả chầu hàn huyên sẽ đượm.',
      price: 180000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-028.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '030',
      name: 'Mứt Thơm mặn cay 150gr',
      content: 'Những trái thơm chín mọng, trồng sạch được sấy vừa đủ khô, còn dẻo và còn đủ đầy dưỡng chất lẫn vị chua ngọt đặc trưng, bám chút muối ớt cay nhẹ trên lưỡi. Ăn mãi vẫn thòm thèm.',
      price: 170000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-030.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '031',
      name: 'Mứt Thơm mặn cay 250gr',
      content: 'Những trái thơm chín mọng, trồng sạch được sấy vừa đủ khô, còn dẻo và còn đủ đầy dưỡng chất lẫn vị chua ngọt đặc trưng, bám chút muối ớt cay nhẹ trên lưỡi. Ăn mãi vẫn thòm thèm.',
      price: 230000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-030.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '032',
      name: 'Mứt xoài mặn cay 150gr',
      content: 'Xoài trồng sạch vừa chín tới, hái về sấy thành những lát xoài dẻo vàng tươi, thơm ngát. Ngào thêm chút muối ớt để vị chua cân với ngọt, mặn mặn cay cay, mọng nước và tinh tế.',
      price: 330000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-032.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '033',
      name: 'Mứt xoài mặn cay 250gr',
      content: 'Xoài trồng sạch vừa chín tới, hái về sấy thành những lát xoài dẻo vàng tươi, thơm ngát. Ngào thêm chút muối ớt để vị chua cân với ngọt, mặn mặn cay cay, mọng nước và tinh tế.',
      price: 490000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-032.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '034',
      name: 'Mứt mơ - mận 150gr',
      content: 'Những trái mơ và mận tam hoa Mộc Châu trồng sạch, chín tới, ngọt thanh và giòn sần sật. Sên với đường thốt nốt theo cách thủ công, mơ mận quện vào nhau tròn trịa, dẻo dẻo, xinh xinh.',
      price: 150000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-034.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '035',
      name: 'Mứt mơ - mận 250gr',
      content: 'Những trái mơ và mận tam hoa Mộc Châu trồng sạch, chín tới, ngọt thanh và giòn sần sật. Sên với đường thốt nốt theo cách thủ công, mơ mận quện vào nhau tròn trịa, dẻo dẻo, xinh xinh.',
      price: 220000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-034.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '039',
      name: 'Bánh chưng 1.2kg',
      content: 'Bánh chưng từ những nghệ nhân Bắc Ninh trải qua mấy kỳ tuyển lựa: nếp cái hoa vàng phải hạt to đều và thơm ngát, đậu xanh chắc hạt, thịt ba chỉ đều thớ, tất cả từ nguồn nuôi trồng sạch thuận tự nhiên.',
      price: 130000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-039.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '036',
      name: 'Giò thủ 500gr',
      content: 'Giò thủ bếp nhà tự gói bằng thịt heo nuôi sạch, thêm nấm hương tươi và tiêu hồng Phú Quốc. Sản phảm không dùng chất phụ gia hay chất bảo quản nào nên cần để tủ mát khi mới mua về và dùng hết trong 5 ngày từ khi mở gói.',
      price: 160000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-036.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '037',
      name: 'Giò thủ 1kg',
      content: 'Giò thủ bếp nhà tự gói bằng thịt heo nuôi sạch, thêm nấm hương tươi và tiêu hồng Phú Quốc. Sản phảm không dùng chất phụ gia hay chất bảo quản nào nên cần để tủ mát khi mới mua về và dùng hết trong 5 ngày từ khi mở gói.',
      price: 300000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-036.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '038',
      name: 'Khô gà lá chanh 250gr',
      content: 'Khô này làm từ ức gà thả vườn nên dai và đậm vị tự nhiên, rồi chế biến cùng các gia vị thân quen như sả, tỏi, ớt, đường, tương ớt , thêm lá chanh thơm, lai rai một chốc sẽ hết veo cả khô lẫn tửu.',
      price: 200000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-038.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '022',
      name: 'Tương ớt cay 180ml',
      content: 'Những trái ớt chỉ thiên nức tiếng cay trồng sạch tự nhiên tại vườn Tu Tra, Lâm Đồng, ngâm muối với tỏi Lý Sơn và nước tinh khiết trong ba tuần. Ớt dậy mùi thơm nồng và vẫn giữ màu đỏ tươi, qua lọc thủ công sắc đỏ vẫn thắm còn chất tương sóng sánh.',
      price: 96000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-022.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '023',
      name: 'Tương ớt cay nhiều 180ml',
      content: 'Những trái ớt chỉ thiên nức tiếng cay trồng sạch tự nhiên tại vườn Tu Tra, Lâm Đồng, ngâm muối với tỏi Lý Sơn và nước tinh khiết trong ba tuần. Ớt dậy mùi thơm nồng và vẫn giữ màu đỏ tươi, qua lọc thủ công sắc đỏ vẫn thắm còn chất tương sóng sánh.',
      price: 96000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-022.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '024',
      name: 'Tương ớt cay 250ml',
      content: 'Những trái ớt chỉ thiên nức tiếng cay trồng sạch tự nhiên tại vườn Tu Tra, Lâm Đồng, ngâm muối với tỏi Lý Sơn và nước tinh khiết trong ba tuần. Ớt dậy mùi thơm nồng và vẫn giữ màu đỏ tươi, qua lọc thủ công sắc đỏ vẫn thắm còn chất tương sóng sánh.',
      price: 136000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-022.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '025',
      name: 'Tương ớt cay nhiều 250ml',
      content: 'Những trái ớt chỉ thiên nức tiếng cay trồng sạch tự nhiên tại vườn Tu Tra, Lâm Đồng, ngâm muối với tỏi Lý Sơn và nước tinh khiết trong ba tuần. Ớt dậy mùi thơm nồng và vẫn giữ màu đỏ tươi, qua lọc thủ công sắc đỏ vẫn thắm còn chất tương sóng sánh.',
      price: 136000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-022.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '026',
      name: 'Gừng muối chua 150gr',
      content: 'Những lát gừng có đủ vị chua, cay, ngọt, nên khi dùng kèm các món chiên hoặc nhiều tinh bột thì hợp nhiều đàng, vừa giúp ngon miệng vừa tăng cường tiêu hoá, lai rai cả bữa, cả mùa vẫn thấy ngon.',
      price: 90000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-026.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '003',
      code: '027',
      name: 'Sả muối chua 150gr',
      content: 'Sả muối chua đạt độ chua dịu, cay êm, dùng như món nhắm thì đưa tửu, ăn kèm các món thịt đông, giò chả, món chiên thì thanh vị, mà dùng làm gia vị nấu món cũng thật đặc sắc.',
      price: 90000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-027.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '040',
      name: 'Làn tre nhỏ',
      content: '',
      price: 320000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-040.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '041',
      name: 'Làn tre to',
      content: '',
      price: 350000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-040.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '004',
      code: '042',
      name: 'Thiệp tết',
      content: 'Thiệp in bức tranh màu nước \'Chuyện cuối năm\' của họa sĩ Hồ Hưng',
      price: 11000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-042.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '050',
      name: 'Mứt gừng thốt nốt 100gr',
      content: 'Củ gừng ta nhỏ mà đậm vị và thơm nồng được trồng sạch từ vườn Đạ Terh Lâm Đồng, ngào với đường thốt nốt để cả vị lẫn hương thêm ngọt. Gừng cay ấm, ta chiêu thêm chút trà, cả chầu hàn huyên sẽ đượm.',
      price: 44000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-028.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '051',
      name: 'Mứt Thơm mặn cay 100gr',
      content: 'Những trái thơm chín mọng, trồng sạch được sấy vừa đủ khô, còn dẻo và còn đủ đầy dưỡng chất lẫn vị chua ngọt đặc trưng, bám chút muối ớt cay nhẹ trên lưỡi. Ăn mãi vẫn thòm thèm.',
      price: 100000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-030.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '052',
      name: 'Mứt xoài mặn cay 100gr',
      content: 'Xoài trồng sạch vừa chín tới, hái về sấy thành những lát xoài dẻo vàng tươi, thơm ngát. Ngào thêm chút muối ớt để vị chua cân với ngọt, mặn mặn cay cay, mọng nước và tinh tế.',
      price: 220000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-032.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '053',
      name: 'Mứt mơ - mận 100gr',
      content: 'Những trái mơ và mận tam hoa Mộc Châu trồng sạch, chín tới, ngọt thanh và giòn sần sật. Sên với đường thốt nốt theo cách thủ công, mơ mận quện vào nhau tròn trịa, dẻo dẻo, xinh xinh.',
      price: 76000,
      thumbnail: {
        src: require('@/assets/images/stores/products/im-034.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '054',
      name: 'Mứt bưởi thốt nốt 50gr',
      content: '',
      price: 63000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '055',
      name: 'Hộp trà 5 gói',
      content: '',
      price: 126000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '056',
      name: 'Hộp âm dương',
      content: '',
      price: 743000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }, {
      collection: '005',
      code: '057',
      name: 'Bao lì xì',
      content: '',
      price: 743000,
      thumbnail: {
        src: require('@/assets/images/stores/products/thumb.png'),
        alt: 'The Bloom'
      }
    }
  ]
}

export default state
