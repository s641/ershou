//登录数据

var userlogin=[
	{
		"name": '1415173043@qq.com',
		"password":'123456'
	},{
		"name": '1011789369@qq.com',
		"password":'123456'
	}
]


var people = {
	"admin": [{
		"name": '郑小曼',
		"imgScr": 'zxm.jpg',
		"phone": "12323453456",
		"email": '1213123234@qq.com',
		"paddword": "111111",
		"address":"四川省泸州市龙马潭区长桥路二号泸州职业技术学院3-A123",
		"scnum":4,
		"dznum":4,
		"scartnum":4,//购物车数量
		"aid": 1
	}, {
		"name": '邓丽君',
		"imgScr": 'denglijun.jpg',
		"phone": "12323453456",
		"email": '1213123234@qq.com',
		"paddword": "111111",
		"address":"四川省泸州市龙马潭区长桥路二号泸州职业技术学院3-A123",
		"scnum":4,
		"dznum":4,
		"scartnum":4,//购物车数量
		"aid": 2
	}],
	"student": [{
		"name": '李明',
		"imgScr": 'user/liming.jpg', //头像
		"phone": "12323453456",
		"email": '1213123234@qq.com',
		"paddword": "111111",
		"address":"四川省泸州市龙马潭区长桥路二号泸州职业技术学院3-A215",
		"scnum":4,
		"dznum":4,
		"scartnum":4,//购物车数量
		"uid": 1 //可以对应评论的商品，收藏，发布等等
	}, {
		"name": '何梅',
		"imgScr": 'user/liming.jpg',
		"phone": "12323453456",
		"email": '1213123234@qq.com',
		"paddword": "111111",
		"address":"四川省泸州市龙马潭区长桥路二号泸州职业技术学院3-A314",
		"scnum":4,
		"dznum":4,
		"scartnum":4,//购物车数量
		"uid": 2
	}]
};
/*
是否下架未补充

*/
var img=["school/school1.jpg","school/school2.jpg","school/school3.jpg","school/school4.jpg","school/school5.jpg","school/school6.jpg","school/school7.jpg","school/school8.jpg","school/school9.jpg","school/school10.jpg","school/school11.jpg","school/school12.jpg","school/school13.jpg","school/school14.jpg","school/school15.jpg","school/school16.jpg","school/school17.jpg","school/school18.jpg"];//校园一角，乱序轮播

var newData = {
	"classname": [{
		"name": "主页",
		"link": "index.html",
		"lx": "indexPage"
	}, {
		"name": "商品类别",
		"link": "product_list.html",
		"lx": "listPage"
	}, {
		"name": "信息发布",
		"link": "information_publish.html",
		"lx": "ifmPublish"
	}, {
		"name": "用户中心",
		"link": "user_info.html",
		"lx": "userCenter"
	}, {
		"name": "登录",
		"link": "login.html",
		"lx": "login"
	}, {
		"name": "注册",
		"link": "register.html",
		"lx": "register"
	}],
	"indexPage": {
	},
	"listPage":[{
		"name": "学习资料",
		"lb":["纸质资料","电子资料","各类考证"],
		"src":"asban7.jpg",
		"link": 'product_list.html',
		"groupId": "1",
		"main": [{
				"sclass": "纸质资料",
				"c":["试卷","专套本书籍","专业书籍","星火英语","便捷书籍","手写笔记"],
				"info": [{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "zl1", //商品id
						"jdPrice": "58", //原价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "zl2", //商品id
						"jdPrice": "35", //原价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "zl3", //商品id
						"jdPrice": "58", //原价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "zl4", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "zl41", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "zl42", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "5", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "6", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "7", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "8", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "9", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "10", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			},
			{
				"sclass": "电子资料",
				"c":["c语言","java就业班","PHP就业班","UI合集","CAD制图","web前端开发"],
				"info": [{
						"newPrice": "21.90", //现价
						"image": "study/dstu1.jpg",
						"comId": "11", //商品id
						"jdPrice": "58", //原价价
						"name": "莫奈油画合集", //商品名称
						"describe": "莫奈油画合集，百度网盘资源私发，另外赠送ps网页素材常用背景图", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 1, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/book_1.jpg",
						"comId": "12", //商品id
						"jdPrice": "35", //原价价
						"name": "专升本考试教辅", //商品名称
						"describe": "专升本考试教辅，视频自学课程，考研辅导资料学习视屏辅导", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "13", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "14", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "15", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "16", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "17", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			},
			{
				"sclass": "各类考证",
				"c":["英语四六级","普通话","事业单位","证券","公务员","web前端工程师"],
				"info": [{
						"newPrice": "21.90", //现价
						"image": "study/book.jpg",
						"comId": "18", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "英语语法大全教材初中高中大学生英语学习方法资料零基础英语书籍", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/book_1.jpg",
						"comId": "19", //商品id
						"jdPrice": "35", //原价价
						"name": "哈尔滨工业大学机械原理视频自学课程考研辅导资料学习视屏辅导", //商品名称
						"describe": "哈尔滨工业大学机械原理视频自学课程考研辅导资料学习视屏辅导", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "20", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "21", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "22", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "23", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "24", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "1", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			}
		]
	},
	{
		"name": "阅读书籍",
		"lb":["课外阅读","科目延伸","小说"],
		"src":"asban5.jpg",
		"link": 'product_list.html',
		"groupId": "2",
		"main": [{
				"sclass": "课外阅读",
				"c":["中外名著","管理","绘画","传记","经济","励志与成功","金融与投资"],
				"info": [{
						"newPrice": "348", //现价
						"image": "study/book2.jpg",
						"comId": "25", //商品id
						"jdPrice": "899", //原价价
						"name": "口才训练沟通技巧艺术人际交往情商书籍畅销书", //商品名称
						"describe": "正版4册 情商高就是说话让人舒服+别输在不会表达上+别让不好意思害了你+说话心理学 口才训练沟通技巧艺术人际交往情商书籍畅销书", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "348", //现价
						"image": "study/book1.jpg",
						"comId": "26", //商品id
						"jdPrice": "899", //原价价
						"name": "阿衰", //商品名称
						"describe": "阿衰搞笑合集，阿衰身高并不高，喜欢打CS、看漫画怕踢、爱吃油炸臭豆腐，爱放臭P，经常被大脸妹虐待，特长是睡觉、恶作剧等一些中学生经常做的事，让人能回忆起初中时候的美好。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "27", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "28", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "29", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "30", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "31", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			},
			{
				"sclass": "科目延伸",
				"c":["信息基础","数据库","数据结构","大数据","小语种","美工","剪辑"],
				"info": [{
						"newPrice": "348", //现价
						"image": "study/book5.jpg",
						"comId": "32", //商品id
						"jdPrice": "899", //原价价
						"name": "软件测试进阶之路", //商品名称
						"describe": "本书适读人群 ：有意愿、即将和已经踏入软件测试大门的初中级软件测试工程师和学生。10年软件测试管理经验，汇成 52 个问题，助你职场顺利进阶。基于问题驱动模式，根据具体应用场景构建解决问题所需的知识。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "20", //现价
						"image": "study/book6.jpg",
						"comId": "33", //商品id
						"jdPrice": "45", //原价价
						"name": "明解C语言入门篇", //商品名称
						"describe": "明解C语言入门篇对C语言的基础知识进行了彻底剖析，内容涉及数组、函数、指针、文件操作等。对于C语言语法以及一些难以理解的概念，均以精心绘制的示意图，清晰、通俗地进行讲解。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "34", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "35", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "36", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "37", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "38", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			},
			{
				"sclass": "小说",
				"c":["言情","中国当代小说","古风","穿越","现代","历史","科幻","推理/悬疑"],
				"info": [{
						"newPrice": "25", //现价
						"image": "study/book3.jpg",
						"comId": "39", //商品id
						"jdPrice": "42", //原价价
						"name": "《活着》余华", //商品名称
						"describe": "《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "50", //现价
						"image": "study/book4.jpg",
						"comId": "40", //商品id
						"jdPrice": "120", //原价价
						"name": "《傲慢与偏见》简·奥斯汀", //商品名称
						"describe": "《傲慢与偏见》是简·奥斯汀的代表作，是一部描写爱情与婚姻的经典小说。作品以男女主人公达西和伊丽莎白由于傲慢和偏见而产生的爱情纠葛为线索，共写了四起姻缘：伊丽莎白与达西、简与宾利、莉迪亚与威克姆、夏洛蒂与柯林斯。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "41", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "42", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/stu2.jpg",
						"comId": "43", //商品id
						"jdPrice": "58", //原价价
						"name": "思科认证考试书籍", //商品名称
						"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "4", //现价
						"image": "study/stu1.png",
						"comId": "44", //商品id
						"jdPrice": "35", //原价价
						"name": "大学生就业与创业指导", //商品名称
						"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					},
					{
						"newPrice": "21.90", //现价
						"image": "study/book_2.jpg",
						"comId": "45", //商品id
						"jdPrice": "58", //原价价
						"name": "基础会计学", //商品名称
						"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
						"groupId": "2", //类别id
						"uId": "2", //用户id
						"username": "李明", //用户名称
						"num": 4, //商品数量
						"scnum": 4, //收藏数量
						"dznum": 4, //点赞数量
						"time": [2019, 10, 11] //发布时间
					}
				]
			}
		]
	}, {
		"name": "鞋服包饰",
		"lb":["鞋子","服装","箱包","首饰"],
		"src":"asban8.jpg",
		"link": 'product_list.html',
		"groupId": "3",
		"main": [{
			"sclass": "鞋子",
			"c":["雪地靴","高跟鞋","拖鞋","豆豆鞋","运动鞋","小白鞋"],
			"info": [{
				"newPrice": "348", //现价
				"image": "foot/foot1.jpg",
				"comId": "46", //商品id
				"jdPrice": "899", //原价价
				"name": "小白鞋", //商品名称
				"describe": "小白鞋女厚底2019新款秋季百搭韩版休闲松糕全黑色鞋子女皮面", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "foot/foot2.jpg",
				"comId": "47", //商品id
				"jdPrice": "899", //原价价
				"name": "高跟鞋女细跟小香风绸缎2019新款尖头百搭防水台11CM小跟单鞋", //商品名称
				"describe": "高跟鞋女细跟小香风绸缎2019新款尖头百搭防水台11CM小跟单鞋", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "48", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "49", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/stu2.jpg",
				"comId": "50", //商品id
				"jdPrice": "58", //原价价
				"name": "思科认证考试书籍", //商品名称
				"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "51", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "52", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "服装",
			"c":["棉袄","时尚单品","衬衣","裤子","短裙","外套"],
			"info": [{
				"newPrice": "60", //现价
				"image": "cloth/cloth1.jpg",
				"comId": "53", //商品id
				"jdPrice": "80", //原价价
				"name": "白色高领毛衣", //商品名称
				"describe": "2019冬季新款女装韩版高领丝绒长袖T恤开叉打底衫百搭宽松厚上衣", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "cloth/cloth2.jpg",
				"comId": "54", //商品id
				"jdPrice": "899", //原价价
				"name": "衬衣红白杠", //商品名称
				"describe": "浅语桔初秋文艺复古清新甜美ins风红白条纹oversize衬衫女", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "55", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "56", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/stu2.jpg",
				"comId": "57", //商品id
				"jdPrice": "58", //原价价
				"name": "思科认证考试书籍", //商品名称
				"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "58", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "59", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "箱包",
			"c":["背包","挎包","行李箱","手提包","迷你包","钱包"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "xb1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "xb2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "xb3", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "xb4", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/stu2.jpg",
				"comId": "xb5", //商品id
				"jdPrice": "58", //原价价
				"name": "思科认证考试书籍", //商品名称
				"describe": "思科认证考试书籍,8本CCNA/CCNP/CCIE 路由交换，语音认证考试指南。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "4", //现价
				"image": "study/stu1.png",
				"comId": "xb6", //商品id
				"jdPrice": "35", //原价价
				"name": "大学生就业与创业指导", //商品名称
				"describe": "本书就大学生就业与创业做了深度分析，如果你得到这本书 你会受益匪浅。大学生难免会丢书，但如果我有我会帮你重新得到一本。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "21.90", //现价
				"image": "study/book_2.jpg",
				"comId": "xb7", //商品id
				"jdPrice": "58", //原价价
				"name": "基础会计学", //商品名称
				"describe": "会计基础是现代会计学的重要分支，研究会计学的根本问题，阐明会计基本理论、基本办法和基本技能。是会计从业资格的课程内容。", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "首饰",
			"c":["耳环/耳扣","手链/手镯","脚链","发饰","发带","挂链"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "ss1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "ss2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "ss3", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "ss4", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "3", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}]
	}, {
		"name": "美妆护理",
		"lb":["彩妆工具","身体护理","各类彩妆"],
		"src":"asban4.jpg",
		"link": 'product_list.html',
		"groupId": "4",
		"main": [{
			"sclass": "彩妆工具",
			"c":["化妆刷","美妆蛋","睫毛夹","双眼皮贴","棉签","眉毛剪","洁面仪"],
			"info": [{
				"newPrice": "150", //现价
				"image": "mz/mz1.jpg",
				"comId": "cz1", //商品id
				"jdPrice": "419", //原价价
				"name": "花西子化妆品套装女全套初学者学生新手眉笔气垫散粉蜜粉彩妆组合", //商品名称
				"describe": "花西子化妆品套装女全套初学者学生新手眉笔气垫散粉蜜粉彩妆组合", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "5", //现价
				"image": "mz/mz2.jpg",
				"comId": "cz2", //商品id
				"jdPrice": "18", //原价价
				"name": "美康粉黛气垫BB霜海绵葫芦彩美妆蛋干湿两用化妆棉化妆工具不吃粉", //商品名称
				"describe": "美康粉黛气垫BB霜海绵葫芦彩美妆蛋干湿两用化妆棉化妆工具不吃粉", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "150", //现价
				"image": "mz/mz1.jpg",
				"comId": "cz3", //商品id
				"jdPrice": "419", //原价价
				"name": "花西子化妆品套装女全套初学者学生新手眉笔气垫散粉蜜粉彩妆组合", //商品名称
				"describe": "花西子化妆品套装女全套初学者学生新手眉笔气垫散粉蜜粉彩妆组合", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "5", //现价
				"image": "mz/mz2.jpg",
				"comId": "cz4", //商品id
				"jdPrice": "18", //原价价
				"name": "美康粉黛气垫BB霜海绵葫芦彩美妆蛋干湿两用化妆棉化妆工具不吃粉", //商品名称
				"describe": "美康粉黛气垫BB霜海绵葫芦彩美妆蛋干湿两用化妆棉化妆工具不吃粉", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "身体护理",
			"c":["身体乳","水乳套装","面膜","眼霜","面霜","隔离乳"],
			"info": [{
				"newPrice": "60", //现价
				"image": "mz/mz3.jpg",
				"comId": "st1", //商品id
				"jdPrice": "126", //原价价
				"name": "玛丽黛佳黄金亮肤BB霜40ml 自然遮瑕服帖持久不掉妆 新颜乳液", //商品名称
				"describe": "玛丽黛佳黄金亮肤BB霜40ml 自然遮瑕服帖持久不掉妆 新颜乳液", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "mz/mz4.jpg",
				"comId": "st2", //商品id
				"jdPrice": "899", //原价价
				"name": "科娜蓝面霜补水保湿滋润锁水女秋冬季韩国Carenology正品艾菊50ml", //商品名称
				"describe": "科娜蓝面霜补水保湿滋润锁水女秋冬季韩国Carenology正品艾菊50ml", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "60", //现价
				"image": "mz/mz3.jpg",
				"comId": "st3", //商品id
				"jdPrice": "126", //原价价
				"name": "玛丽黛佳黄金亮肤BB霜40ml 自然遮瑕服帖持久不掉妆 新颜乳液", //商品名称
				"describe": "玛丽黛佳黄金亮肤BB霜40ml 自然遮瑕服帖持久不掉妆 新颜乳液", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "mz/mz4.jpg",
				"comId": "st4", //商品id
				"jdPrice": "899", //原价价
				"name": "科娜蓝面霜补水保湿滋润锁水女秋冬季韩国Carenology正品艾菊50ml", //商品名称
				"describe": "科娜蓝面霜补水保湿滋润锁水女秋冬季韩国Carenology正品艾菊50ml", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "各类彩妆",
			"c":["口红","散粉","眼线笔","粉底液","眉笔","腮红","高光"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "cz5", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "cz6", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "cz7", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "cz8", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "4", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}]
	}, {
		"name": "生活日用",
		"lb":["生活用品","清洁用品","学习用品"],
		"src":"asban3.jpg",
		"link": 'product_list.html',
		"groupId": "5",
		"main": [{
			"sclass": "生活用品",
			"c":["洗衣液","盆/水桶","洗脸巾","晾衣杆","垃圾袋","衣架"],
			"info": [{
				"newPrice": "10", //现价
				"image": "goods/ry1.jpg",
				"comId": "sh1", //商品id
				"jdPrice": "35", //原价价
				"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
				"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "5", //现价
				"image": "goods/ry2.jpg",
				"comId": "sh2", //商品id
				"jdPrice": "15.8", //原价价
				"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "10", //现价
				"image": "goods/ry1.jpg",
				"comId": "sh3", //商品id
				"jdPrice": "35", //原价价
				"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
				"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "5", //现价
				"image": "goods/ry2.jpg",
				"comId": "sh4", //商品id
				"jdPrice": "15.8", //原价价
				"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "清洁用品",
			"c":["洗头膏","沐浴露","护发素","洁面乳","洁厕剂","小白鞋清理液"],
			"info": [{
				"newPrice": "348", //现价
				"image": "goods/ry3.jpg",
				"comId": "qj1", //商品id
				"jdPrice": "899", //原价价
				"name": "吸水不掉毛抹布竹纤维洗碗布去油厨房用品洗碗巾家用懒人家务清洁", //商品名称
				"describe": "吸水不掉毛抹布竹纤维洗碗布去油厨房用品洗碗巾家用懒人家务清洁", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "goods/ry4.gif",
				"comId": "qj2", //商品id
				"jdPrice": "899", //原价价
				"name": "汽车洗车液白车专用泡沫水蜡上光强力去污清洗剂清洁套装工具用品", //商品名称
				"describe": "汽车洗车液白车专用泡沫水蜡上光强力去污清洗剂清洁套装工具用品", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "学习用品",
			"c":["笔","笔记本","橡皮擦","墨水","钢尺","文具盒"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "xx1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "xx2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "5", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}]
	}, {
		"name": "租凭买卖",
		"lb":["服装租凭","校园代步","闲置数码","其他"],
		"src":"asban2.jpg",
		"link": 'product_list.html',
		"groupId": "6",
		"main": [{
			"sclass": "服装租凭",
			"c":["汉服","cosplay","制服","正装","高跟鞋"],
			"info": [{
				"newPrice": "100", //现价
				"image": "goods/ry7.jpg",
				"comId": "fzzp1", //商品id
				"jdPrice": "298", //原价价
				"name": "汉尚华莲九曜原创汉服女织金龙纹明制袄裙马面裙多色可选日常秋冬", //商品名称
				"describe": "汉尚华莲九曜原创汉服女织金龙纹明制袄裙马面裙多色可选日常秋冬", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "28", //现价
				"image": "goods/ry8.jpg",
				"comId": "fzzp2", //商品id
				"jdPrice": "458", //原价
				"name": "西装套装女2019秋装新款黑色职业装正装时尚气质秋冬ol西服工作服", //商品名称
				"describe": "西装套装女2019秋装新款黑色职业装正装时尚气质秋冬ol西服工作服", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "校园代步",
			"c":["自行车","电瓶车","滑板","溜冰鞋","电动车"],
			"info": [{
				"newPrice": "100", //一个月
				"image": "goods/ry5.jpg",
				"comId": "xydb1", //商品id
				"jdPrice": "500", //押金
				"name": "10寸48V锂电池电动滑板车 成人折叠代驾代步VOOFYE便携迷你电动车", //商品名称
				"describe": "10寸48V锂电池电动滑板车 成人折叠代驾代步VOOFYE便携迷你电动车", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "goods/ry6.jpg",
				"comId": "xydb2", //商品id
				"jdPrice": "500", //原价价
				"name": "官方旗舰店凤凰自行车男山地车越野变速男女成年成人赛车学生单车", //商品名称
				"describe": "官方旗舰店凤凰自行车男山地车越野变速男女成年成人赛车学生单车", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "闲置数码",
			"c":["摄影机","电脑","音响","投影","话筒"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "xzsm1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "xzsm2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		},
			{
			"sclass": "其他",
			"c":["体育用品","书籍","学习用品"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "qt1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "qt2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "6", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}
		]
	}, {
		"name": "零食糖巧",
		"lb":["零食大礼包","地方特产","节日特惠"],
		"src":"asban10.PNG",
		"link": 'product_list.html',
		"groupId": "7",
		"main": [{
			"sclass": "零食大礼包",
			"c":["辣条","坚果","糕点","速食","糖果","水果"],
			"info": [{
				"newPrice": "25", //现价
				"image": "goods/food1.jpg",
				"comId": "ls1", //商品id
				"jdPrice": "30", //原价价
				"name": "酱鸭舌", //商品名称
				"describe": "酱鸭舌，麻辣，一袋30包，味道好极了", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "30", //现价
				"image": "goods/food2.jpg",
				"comId": "ls2", //商品id
				"jdPrice": "40", //原价价
				"name": "黑巧克力", //商品名称
				"describe": "黑巧克力", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "地方特产",
			"c":["白糕","猪儿粑","张飞牛肉","重庆麻花","辣子鸡","桂圆"],
			"info": [{
				"newPrice": "25", //现价
				"image": "goods/food3.jpg",
				"comId": "tc1", //商品id
				"jdPrice": "30", //原价价
				"name": "满减【三只松鼠_蛋黄酥120g】休闲零食早餐特产传统糕点小吃点心", //商品名称
				"describe": "满减【三只松鼠_蛋黄酥120g】休闲零食早餐特产传统糕点小吃点心", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "goods/food5.jpg",
				"comId": "tc2", //商品id
				"jdPrice": "899", //原价价
				"name": "中国台湾微热山丘凤梨酥50g*10颗盒土凤梨酥网红糕点点心", //商品名称
				"describe": "中国台湾微热山丘凤梨酥50g*10颗盒土凤梨酥网红糕点点心", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}, {
			"sclass": "节日特惠",
			"c":["情人节","元旦节","圣诞节","春节","中秋节"],
			"info": [{
				"newPrice": "348", //现价
				"image": "study/book_2.jpg",
				"comId": "jr1", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			},
			{
				"newPrice": "348", //现价
				"image": "study/book1.jpg",
				"comId": "jr2", //商品id
				"jdPrice": "899", //原价价
				"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
				"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
				"groupId": "7", //类别id
				"uId": "2", //用户id
				"username": "李明", //用户名称
				"num": 4, //商品数量
				"scnum": 4, //收藏数量
				"dznum": 4, //点赞数量
				"time": [2019, 10, 11] //发布时间
			}
		]
		}]
	}],
	"ifmPublish":[{
		"name":"卖家发布",
		"sclass": 'seller',
		"ifmId": "a1",
		"com":[{
			"newPrice":"私聊", //现价
			"image": "cloth/cloth1.jpg",
			"comId": "fb1", //商品id
			"jdPrice": "89", //原价价
			"name": "【毛衣】白色中长，很舒服", //商品名称
			"describe": "99新，不小心多买了", //商品描述
			"groupId": "8", //类别id
			"uId": "2", //用户id
			"username": "何爽", //用户名称
			"num": 1, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 11, 25] //发布时间
		},{
			"newPrice": "40", //现价
			"image": "cloth/cloth2.jpg",
			"comId": "fb2", //商品id
			"jdPrice": "86", //原价价
			"name": "【衬衣】红白杠百搭单品春秋内搭皆可以", //商品名称
			"describe": "质量好，价格可以商议", //商品描述
			"groupId": "8", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 11, 11] //发布时间
		},
		{
			"newPrice": "150", //现价
			"image": "cloth/cloth3.jpg",
			"comId": "fb3", //商品id
			"jdPrice": "799", //原价价
			"name": "【衣裙】圣迪奥优雅绿调绣花蕾丝袖口腰部褶皱造型连衣裙(sdeer)", //商品名称
			"describe": "99新，s/160,中腰不规则", //商品描述
			"groupId": "8", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num":1, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 12, 11] //发布时间
		},{
			"newPrice": "15", //现价
			"image": "book/book_1.jpg",
			"comId": "fb4", //商品id
			"jdPrice": "39", //原价价
			"name": "【书籍】你不能改变世界时就改变自己", //商品名称
			"describe": "你不能改变世界时就改变自己", //商品描述
			"groupId": "8", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 1, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 11, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "gb5", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb6", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "fb7", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb8", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "fb9", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb10", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "fb11", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb12", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "fb13", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb14", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "fb15", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "fb16", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		}
	]
	},{
		"name":"买家求购",
		"sclass": 'buyer',
		"ifmId": "a2",
		"com":[{
			"newPrice": "暂无", //现价
			"image": "foot/foot2.jpg",
			"comId": "qg1", //商品id
			"jdPrice": "暂无", //原价价
			"name": "【求购】小白鞋", //商品名称
			"describe": "40元左右", //商品描述
			"groupId": "9", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num":3, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 12, 11] //发布时间
		},{
			"newPrice": "0", //现价
			"image": "study/office.jpg",
			"comId": "qg2", //商品id
			"jdPrice": "0", //原价价
			"name": "【免费】二级电子资料，视频，工具免费拿", //商品名称
			"describe": "百度网盘链接", //商品描述
			"groupId": "9", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num":1, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 12, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "study/english.jpg",
			"comId": "qg3", //商品id
			"jdPrice": "0", //原价价
			"name": "【租赁】英语四级耳机", //商品名称
			"describe": "时间为考试当天", //商品描述
			"groupId": "9", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 1, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 11, 11] //发布时间
		},{
			"newPrice": "348", //现价
			"image": "book.jpg",
			"comId": "qg4", //商品id
			"jdPrice": "899", //原价价
			"name": "【zhu】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
			"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
			"groupId": "9", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "qg5", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "qg6", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "qg7", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "qg8", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "qg9", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "qg10", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "qg11", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "qg12", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		}
	]
	},{
		"name":"免费物品",
		"sclass": 'free',
		"ifmId": "a3",
		"com":[{
			"newPrice": "348", //现价
			"image": "book.jpg",
			"comId": "mf1", //商品id
			"jdPrice": "899", //原价价
			"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
			"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
			"groupId": "10", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},{
			"newPrice": "348", //现价
			"image": "book.jpg",
			"comId": "mf2", //商品id
			"jdPrice": "899", //原价价
			"name": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品名称
			"describe": "【二手99新】Beats X 蓝牙 魔音耳机入耳式x颈挂脖式魔音B耳塞式线控麦 黑色\/官方简装 国行充新", //商品描述
			"groupId": "10", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf3", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf4", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf5", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf6", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf7", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf8", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf9", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf10", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf11", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf12", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "10", //现价
			"image": "goods/ry1.jpg",
			"comId": "mf13", //商品id
			"jdPrice": "35", //原价价
			"name": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品名称
			"describe": "生日礼物女送大学闺蜜必备实用创意生活日用品家用宿舍家居家神器", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		},
		{
			"newPrice": "5", //现价
			"image": "goods/ry2.jpg",
			"comId": "mf14", //商品id
			"jdPrice": "15.8", //原价价
			"name": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品名称
			"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //商品描述
			"groupId": "1", //类别id
			"uId": "2", //用户id
			"username": "李明", //用户名称
			"num": 4, //商品数量
			"scnum": 4, //收藏数量
			"dznum": 4, //点赞数量
			"time": [2019, 10, 11] //发布时间
		}
	]
	}],
	"userCenter": [{ //我的收藏
		"name":"我的收藏",
		"link": 'user_info_collect.html',
		"uId": "1"
	},{ //我的发布
		"name":"我的发布",
		"link": 'user_info_public.html',
		"uId": "1"
	},{ //购物车
		"name":"购物车",
		"link": 'user_info_order.cart',
		"uId": "1"
	}],
	"news":{
		"myweb":[{
				"image": "school/new1.jpg",
				"name": "平台简介", //名称
				"describe": "本站是一个面对泸职院广大师生群体的一个二手交易平台，在这里你可以放心的发布和求购闲置资源", //描述
				"aId": "2", //管理员id
				"newId": "1", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new2.jpg",
				"name": "诚信规范", //名称
				"describe": "质量保证，诚信保证，安全良好环境靠大家共同建设", //描述
				"aId": "2", //管理员id
				"newId": "2", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new3.jpg",
				"name": "安全防范", //名称
				"describe": "减少线上支付，面对群体为同校同学，推荐一手交钱一手交货", //描述
				"aId": "2", //管理员id
				"newId": "3", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new4.jpg",
				"name": "最新动态列表", //名称
				"describe": "车找人：明天上午跑驾校，单趟只要20，来回35，联系:13434354546<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你好，帮我发一下，有没有人在出图书馆的那条路上捡到一张饭卡，写的有名字，是大三的，名字是:石一沈英捡到的请联系2531753174，谢谢！<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校有谁在卖古蔺萝卜干吗，麻烦有在卖的同学联系qq:2503745853谢谢。<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大三学姐双十一剁手，凑单买了澳宝沐浴露4瓶，润肤乳2瓶，第二天想退款结果发货了，就没有退成，先低价卖出15一瓶，联系方式Q Q:2697211317", //描述
				"aId": "2", //管理员id
				"newId": "4", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			}
		],
		"schoolnew":[{
				"image": "school/new1.jpg",
				"name": "平台简介", //名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //描述
				"aId": "2", //管理员id
				"newId": "s1", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new2.jpg",
				"name": "诚信规范", //名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //描述
				"aId": "2", //管理员id
				"newId": "s2", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new3.jpg",
				"name": "安全防范", //名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //描述
				"aId": "2", //管理员id
				"newId": "s3", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			},
			{
				"image": "school/new4.jpg",
				"name": "校园最新动态", //名称
				"describe": "创意卫生间日用品用具清洁神器家居家用生活厨房居家小百货大全", //描述
				"aId": "2", //管理员id
				"newId": "s4", //文章id
				"username": "李明", //名称
				"lcnum": 4, //浏览数量
				"dznum": 4, //点赞数量
				"pl":"ssssss",//评论
				"time": [2019, 10, 11] //发布时间
			}
		]
	}
};

var dataAll=newData.listPage;
var da=[];
for(var i=0;i<dataAll.length;i++){
	var main=dataAll[i].main;
	for(var j=0;j<main.length;j++){
		var info=main[j].info;
		for(var k=0;k<info.length;k++){
			da.push(info[k]);
		}
	}
}
var dataAll2=newData.ifmPublish;
for(var i=0;i<dataAll2.length;i++){
	var main=dataAll2[i].com;
	for(var j=0;j<main.length;j++){
		da.push(main[j]);
	}
}
