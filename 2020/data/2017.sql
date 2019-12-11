-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2019-12-11 11:54:18
-- 服务器版本： 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `2017`
--

-- --------------------------------------------------------

--
-- 表的结构 `b_admin`
--

DROP TABLE IF EXISTS `b_admin`;
CREATE TABLE IF NOT EXISTS `b_admin` (
  `aid` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员Id',
  `teacher` varchar(30) COLLATE utf8_german2_ci NOT NULL COMMENT '教工号',
  `password` varchar(50) COLLATE utf8_german2_ci NOT NULL COMMENT '密码',
  `addtime` datetime DEFAULT NULL COMMENT '添加时间',
  `status` int(4) NOT NULL DEFAULT '1' COMMENT '状态0或1',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- 转存表中的数据 `b_admin`
--

INSERT INTO `b_admin` (`aid`, `teacher`, `password`, `addtime`, `status`) VALUES
(1, 'admin', '123456', '2019-10-08 00:00:00', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_cart`
--

DROP TABLE IF EXISTS `b_cart`;
CREATE TABLE IF NOT EXISTS `b_cart` (
  `cid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `cnum` int(11) UNSIGNED NOT NULL DEFAULT '1',
  `cprice` float NOT NULL,
  `ccreate_time` datetime NOT NULL,
  `cstatus` int(11) NOT NULL DEFAULT '1' COMMENT '0为已付款1为未付款',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_cart`
--

INSERT INTO `b_cart` (`cid`, `uid`, `gid`, `cnum`, `cprice`, `ccreate_time`, `cstatus`) VALUES
(8, 1, 9, 1, 1615, '2019-10-28 10:25:47', 1),
(9, 2, 17, 1, 5000, '2019-12-01 10:29:14', 1);

-- --------------------------------------------------------

--
-- 表的结构 `b_goods`
--

DROP TABLE IF EXISTS `b_goods`;
CREATE TABLE IF NOT EXISTS `b_goods` (
  `gid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gname` varchar(255) NOT NULL,
  `gtypeid` int(11) UNSIGNED NOT NULL,
  `gcounts` int(11) NOT NULL,
  `gprice` decimal(10,2) NOT NULL,
  `goldprice` decimal(10,2) NOT NULL,
  `uid` int(11) UNSIGNED NOT NULL,
  `gadname` varchar(255) NOT NULL,
  `gadtel` varchar(255) NOT NULL,
  `gimgarray` varchar(255) NOT NULL,
  `gdetail` text NOT NULL,
  `gcreate_time` datetime NOT NULL,
  `gis_selloff` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '购买数量',
  `gview` int(11) UNSIGNED NOT NULL DEFAULT '0' COMMENT '浏览次数',
  `gdznum` int(11) NOT NULL DEFAULT '0' COMMENT '点赞数量',
  `gcollect` int(11) NOT NULL DEFAULT '0' COMMENT '收藏数量',
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_goods`
--

INSERT INTO `b_goods` (`gid`, `gname`, `gtypeid`, `gcounts`, `gprice`, `goldprice`, `uid`, `gadname`, `gadtel`, `gimgarray`, `gdetail`, `gcreate_time`, `gis_selloff`, `gview`, `gdznum`, `gcollect`) VALUES
(1, '二手手机', 6, 2, '200.00', '200.00', 1, '小米', '188858395625', '2016-04-12/570c49ee63bb6.jpg', '质量保障', '2019-10-27 09:05:51', 1, 3, 0, 0),
(2, '二手电脑', 7, 3, '1200.00', '1200.00', 0, '苹果', '', '2016-04-12/570c49ee63bb6.jpg', '质量保障', '2019-10-19 14:57:40', 1, 1, 0, 0),
(3, 'iphone11', 4, 10, '7000.00', '12000.00', 1, '王女士', '18237465321', '2019-10-27/5db569353f552.jpg', '因为家里太有钱，便宜卖了', '2019-10-27 17:53:57', 0, 5, 0, 0),
(4, '英语语法', 1, 20, '50.00', '500.00', 1, '李飞', '1856356926', '2019-10-28/5db63ef8f41af.jpg', '学习！', '2019-10-28 09:05:25', 0, 3, 0, 0),
(5, '学习资料', 3, 30, '70.00', '700.00', 1, '念佛萨拉', '1856351568', '2019-10-28/5db63ef8f41af.jpg', '厉害啊', '2019-10-28 09:06:01', 0, 1, 0, 0),
(6, '学习资料2', 5, 16, '60.00', '800.00', 1, '难咯', '1856356981', '2019-10-28/5db63f1a9ee86.jpg', '好好看书', '2019-10-28 09:06:34', 0, 0, 0, 0),
(7, '书籍', 8, 80, '600.00', '1600.00', 1, '米板', '1856351550', '2019-10-28/5db63f50127ec.jpg', '膜拜', '2019-10-28 09:07:28', 1, 1, 0, 0),
(8, '画画', 6, 60, '700.00', '2000.00', 1, '匆匆', '1856351590', '2019-10-28/5db63f7175af4.jpg', '好学', '2019-10-28 09:08:01', 0, 0, 0, 0),
(9, '英语语法3', 1, 60, '1615.00', '18152.00', 1, '刹那间', '1856351550', '2019-10-28/5db63ef8f41af.jpg', '厉害', '2019-10-28 09:08:29', 0, 0, 0, 0),
(10, '厉害', 6, 200, '2610.00', '14953.00', 1, '米哦哦', '1856356915', '2019-10-28/5db6404a51374.jpg', '漂亮', '2019-10-28 09:11:38', 0, 0, 0, 0),
(11, '水彩衣服', 6, 1300, '15600.00', '156500.00', 1, '到位', '1856351502', '2019-10-28/5db6406d531ca.jpg', '漂亮', '2019-10-28 09:12:13', 0, 0, 0, 0),
(12, '男生衣服', 5, 20, '300.00', '5000.00', 1, '迷哦', '1856351590', '2019-10-28/5db6408a008a5.jpg', '帅气', '2019-10-28 09:12:42', 0, 0, 0, 0),
(13, '国风', 6, 300, '6000.00', '45000.00', 1, 'io', '1856365155', '2019-10-28/5db640a9dc53b.jpeg', '国风', '2019-10-28 09:13:14', 0, 0, 0, 0),
(14, '艺术', 6, 120, '6000.00', '120000.00', 1, '偶像', '185635610', '2019-10-28/5db640d410c7c.jpg', '艺术', '2019-10-28 09:13:56', 0, 0, 0, 0),
(15, '女生', 6, 150, '30000.00', '45600.00', 1, '解耦i', '1856351551', '2019-10-28/5db640eea1dd3.jpg', '女生', '2019-10-28 09:14:22', 0, 0, 0, 0),
(16, '可爱', 7, 150, '6000.00', '12034.00', 1, 'VS', '182356973', '2019-10-28/5db6410d24957.jpg', '可爱', '2019-10-28 09:14:53', 0, 1, 0, 0),
(17, '笔记本电脑', 4, 200, '5000.00', '12600.00', 1, '321', '1856351551', '2019-10-28/5db6417fa49d6.jpg', '笔记本电脑便宜卖', '2019-10-28 09:16:47', 0, 3, 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `b_information`
--

DROP TABLE IF EXISTS `b_information`;
CREATE TABLE IF NOT EXISTS `b_information` (
  `pid` int(11) NOT NULL AUTO_INCREMENT COMMENT '信息发布id',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `pname` varchar(255) NOT NULL COMMENT '信息标题',
  `pcontent` text NOT NULL COMMENT '信息内容',
  `pimage` varchar(255) NOT NULL COMMENT '图片',
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `b_jianyi`
--

DROP TABLE IF EXISTS `b_jianyi`;
CREATE TABLE IF NOT EXISTS `b_jianyi` (
  `jian_id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `jian_content` text NOT NULL COMMENT '内容',
  `jian_date` varchar(30) NOT NULL COMMENT '时间',
  `uid` int(10) NOT NULL,
  PRIMARY KEY (`jian_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_jianyi`
--

INSERT INTO `b_jianyi` (`jian_id`, `jian_content`, `jian_date`, `uid`) VALUES
(1, '内容较少', '2018-11-08 17:19:20', 44),
(2, '账号注册时候有误 但自己不能修改 只能通过联系管理员修改 感觉麻烦', '2018-11-08 17:23:38', 44),
(3, '很好', '2018-11-30 17:12:54', 44),
(4, '真的可以', '2018-11-30 17:13:04', 44);

-- --------------------------------------------------------

--
-- 表的结构 `b_link`
--

DROP TABLE IF EXISTS `b_link`;
CREATE TABLE IF NOT EXISTS `b_link` (
  `link_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '友情链接id',
  `link_name` varchar(30) NOT NULL COMMENT '友情链接姓名',
  `url` varchar(300) NOT NULL COMMENT '友情链接地址',
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_link`
--

INSERT INTO `b_link` (`link_id`, `link_name`, `url`) VALUES
(1, 'CSDN', 'https://www.csdn.net/'),
(2, '中国知网', 'http://epub.cnki.net/kns/default.htm'),
(3, '中国机械网', 'http://www.jx.cn/'),
(5, '百度', 'www.baidu.com');

-- --------------------------------------------------------

--
-- 表的结构 `b_message`
--

DROP TABLE IF EXISTS `b_message`;
CREATE TABLE IF NOT EXISTS `b_message` (
  `mid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `gid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `mcontent` text,
  `mcreate_time` datetime NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_message`
--

INSERT INTO `b_message` (`mid`, `gid`, `uid`, `mcontent`, `mcreate_time`) VALUES
(1, 18, 1, '666', '2019-10-28 09:29:42'),
(2, 17, 1, '666', '2019-10-28 09:39:01'),
(3, 5, 1, '厉害', '2019-10-28 10:25:40'),
(4, 3, 1, '还可以', '2019-10-30 16:14:58'),
(5, 3, 1, '差评', '2019-10-30 16:15:08');

-- --------------------------------------------------------

--
-- 表的结构 `b_order`
--

DROP TABLE IF EXISTS `b_order`;
CREATE TABLE IF NOT EXISTS `b_order` (
  `oid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `gid` int(11) NOT NULL,
  `ostatus` int(11) NOT NULL DEFAULT '0' COMMENT '0为已付款1为未付款',
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_order`
--

INSERT INTO `b_order` (`oid`, `uid`, `gid`, `ostatus`) VALUES
(8, 1, 9, 0),
(9, 2, 17, 0);

-- --------------------------------------------------------

--
-- 表的结构 `b_type`
--

DROP TABLE IF EXISTS `b_type`;
CREATE TABLE IF NOT EXISTS `b_type` (
  `tid` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tname` varchar(255) NOT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_type`
--

INSERT INTO `b_type` (`tid`, `tname`) VALUES
(1, '学习资料'),
(2, '阅读书籍'),
(3, '鞋服包饰'),
(4, '美妆护理'),
(5, '生活日用'),
(6, '租凭买卖'),
(7, '零食糖巧'),
(8, '其他');

-- --------------------------------------------------------

--
-- 表的结构 `b_typeclass`
--

DROP TABLE IF EXISTS `b_typeclass`;
CREATE TABLE IF NOT EXISTS `b_typeclass` (
  `tcid` int(11) NOT NULL AUTO_INCREMENT COMMENT '小分类id',
  `tid` int(11) NOT NULL COMMENT '大分类id',
  `tcname` varchar(255) NOT NULL COMMENT '类名',
  PRIMARY KEY (`tcid`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_typeclass`
--

INSERT INTO `b_typeclass` (`tcid`, `tid`, `tcname`) VALUES
(1, 1, '纸质资料'),
(2, 1, '电子资料'),
(3, 1, '各类考证'),
(4, 2, '课外阅读'),
(5, 2, '科目延伸'),
(6, 2, '小说'),
(7, 3, '鞋子'),
(8, 3, '服装'),
(9, 3, '箱包'),
(10, 3, '首饰'),
(11, 4, '彩妆工具'),
(12, 4, '身体护理'),
(13, 4, '各类彩妆'),
(14, 5, '生活用品'),
(15, 5, '清洁用品'),
(16, 5, '学习用品'),
(17, 6, '服装租凭'),
(18, 6, '校园代步'),
(19, 6, '闲置数码'),
(20, 6, '其他'),
(21, 7, '零食大礼包'),
(22, 7, '地方特产'),
(23, 7, '节日特惠'),
(24, 8, '其他');

-- --------------------------------------------------------

--
-- 表的结构 `b_user`
--

DROP TABLE IF EXISTS `b_user`;
CREATE TABLE IF NOT EXISTS `b_user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `user_num` int(10) NOT NULL COMMENT '学号',
  `user_password` varchar(50) NOT NULL COMMENT '密码',
  `user_name` varchar(10) NOT NULL COMMENT '姓名',
  `user_sex` varchar(5) NOT NULL COMMENT '性别',
  `user_college` varchar(10) NOT NULL COMMENT '院系',
  `user_class` varchar(30) NOT NULL COMMENT '班级',
  `user_phone` varchar(11) NOT NULL COMMENT '电话',
  `user_QQ` varchar(15) NOT NULL COMMENT 'QQ',
  `user_picture` varchar(200) NOT NULL COMMENT '图片',
  `user_type` varchar(10) NOT NULL COMMENT '类别',
  `user_state` int(1) NOT NULL COMMENT '1禁用0正常',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `b_user`
--

INSERT INTO `b_user` (`uid`, `user_num`, `user_password`, `user_name`, `user_sex`, `user_college`, `user_class`, `user_phone`, `user_QQ`, `user_picture`, `user_type`, `user_state`) VALUES
(44, 16204069, 'e10adc3949ba59abbe56e057f20f883e', '曹若琳', '女', '信息工程学院', '16级计算机应用技术3班', '18008202453', '454589227', 'Uploads/2018-11-01/5bdabfd95457c.jpg', '学生', 0),
(45, 16204068, '4297f44b13955235245b2497399d7a93', '宋泽', '男', '信息工程学院', '16级计应3班', '18008202453', '1785481543', 'Uploads/2018-11-05/5be011cdae6e0.jpg', '学生', 0),
(46, 16204067, 'e10adc3949ba59abbe56e057f20f883e', '杨素岚', '女', '信息工程学院', '计算机应用技术3班', '12323454321', '333333333', 'Uploads/2018-11-09/5be556cc06530.jpg', '学生', 0),
(47, 16298987, '4297f44b13955235245b2497399d7a93', '易秋虹', '女', '机械工程学院', '16级机械3班', '12332123212', '1785481543', 'Uploads/2018-11-09/5be555c5792b3.jpg', '学生', 1),
(49, 16209089, '4297f44b13955235245b2497399d7a93', '张蕾', '女', '人文学院', '16级小教3班', '18008202453', '1785481543', 'Uploads/2018-11-09/5be5561261220.jpg', '学生', 0),
(50, 13243234, '4297f44b13955235245b2497399d7a93', '吴港', '男', '人文学院', '16级小教3班', '12332123212', '1785481543', 'Uploads/2018-11-09/5be55630d8008.jpg', '学生', 0),
(51, 14232123, '4297f44b13955235245b2497399d7a93', '王老', '男', '建筑工程学院', '16级装饰3班', '18008202453', '1785481543', 'Uploads/2018-11-09/5be55661c5af2.jpg', '老师', 0),
(52, 14232345, '4297f44b13955235245b2497399d7a93', '蒋斌', '男', '电子工程学院', '16级装饰3班', '18008202453', '1785481543', 'Uploads/2018-11-09/5be55681a9a58.jpg', '学生', 0),
(53, 16545654, '4297f44b13955235245b2497399d7a93', '王丹', '女', '国际学院', '15级英教3班', '12332123212', '1785481543', 'Uploads/2018-11-09/5be556b6e3217.jpg', '学生', 0),
(54, 14323456, '4297f44b13955235245b2497399d7a93', '伍燕', '女', '郎酒学院', '16级计应3班', '18008202453', '1785481543', 'Uploads/2018-11-09/5be5570c19d25.jpg', '学生', 0),
(55, 23456786, '4297f44b13955235245b2497399d7a93', '赵丽丽', '女', '艺术学院', '15级英教3班', '18008202453', '1785481543', 'Uploads/2018-11-09/5be5572927f77.jpg', '学生', 0),
(56, 16204001, '4297f44b13955235245b2497399d7a93', '曹若', '男', '信息工程学院', '16级计应3班', '18008202453', '1785481543', 'Uploads/2018-11-19/5bf272b89a185.jpg', '学生', 0),
(58, 16204099, '4297f44b13955235245b2497399d7a93', '张家祥', '男', '商学院', '17级市场营销3班', '18008202453', '1785481543', 'Uploads/2018-11-19/5bf28774524c5.jpg', '学生', 0),
(59, 16253217, 'cbbbdd851c60627b4785e3ecedc8ff3e', '张小花', '女', '人文学院', '16小教二班', '18715873541', '256509989', 'Uploads/2018-11-22/5bf69cb9b46df.jpg', '学生', 0),
(60, 16204000, 'f5bb0c8de146c67b44babbf4e6584cc0', '刘珊珊', '女', '继续教育学院', '', '18008202453', '1785481543', 'Uploads/2018-12-03/5c050097c7bb5.jpg', '学生', 0),
(61, 16204002, '4297f44b13955235245b2497399d7a93', '熊三', '男', '信息工程学院', '', '18008202452', '1785481543', 'Uploads/2018-12-04/5c0613168297a.jpg', '学生', 0),
(62, 16204055, 'e10adc3949ba59abbe56e057f20f883e', '陈伟', '男', '信息工程学院', '16级计应3班', '18008202453', '1785481543', 'Uploads/2018-12-07/5c09f1a8c126f.jpg', '学生', 0),
(63, 16204044, '4297f44b13955235245b2497399d7a93', '若琳', '女', '信息工程学院', '', '', '', 'Uploads/2018-12-07/5c0a2e0272123.jpg', '学生', 0),
(64, 16203069, '4297f44b13955235245b2497399d7a93', '牛小与', '女', '国际学院', '', '', '', 'Uploads/2018-12-07/5c0a2fd401b52.jpg', '学生', 0);

-- --------------------------------------------------------

--
-- 替换视图以便查看 `b_vcart`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `b_vcart`;
CREATE TABLE IF NOT EXISTS `b_vcart` (
);

-- --------------------------------------------------------

--
-- 替换视图以便查看 `b_vmessage`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `b_vmessage`;
CREATE TABLE IF NOT EXISTS `b_vmessage` (
);

-- --------------------------------------------------------

--
-- 视图结构 `b_vcart`
--
DROP TABLE IF EXISTS `b_vcart`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `b_vcart`  AS  select `c`.`cid` AS `cid`,`c`.`uid` AS `uid`,`g`.`gid` AS `gid`,`g`.`guid` AS `guid`,`c`.`cnum` AS `cnum`,`c`.`ccreate_time` AS `ccreate_time`,`g`.`gname` AS `gname`,`u`.`uname` AS `uname`,`g`.`gprice` AS `gprice`,`g`.`gimgarray` AS `gimgarray`,`g`.`gdetail` AS `gdetail`,`g`.`gadname` AS `gadname` from ((`b_cart` `c` left join `b_goods` `g` on((`c`.`gid` = `g`.`gid`))) left join `b_user` `u` on((`c`.`uid` = `u`.`uid`))) ;

-- --------------------------------------------------------

--
-- 视图结构 `b_vmessage`
--
DROP TABLE IF EXISTS `b_vmessage`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `b_vmessage`  AS  select `m`.`mid` AS `mid`,`m`.`mcontent` AS `mcontent`,`u`.`uid` AS `uid`,`u`.`uname` AS `uname`,`g`.`gid` AS `gid`,`m`.`mcreate_time` AS `mcreate_time`,`u`.`uavatar` AS `uavatar`,`g`.`guid` AS `guid` from ((`b_message` `m` left join `b_user` `u` on((`m`.`muid` = `u`.`uid`))) left join `b_goods` `g` on((`m`.`mgid` = `g`.`gid`))) ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
