-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015-11-19 10:22:20
-- 服务器版本： 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunew`
--

-- --------------------------------------------------------

--
-- 表的结构 `allnews`
--

CREATE TABLE IF NOT EXISTS `allnews` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newscontent` text NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `addtime` date NOT NULL,
  `newstype` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `allnews`
--

INSERT INTO `allnews` (`newsid`, `newstitle`, `newscontent`, `newsimg`, `addtime`, `newstype`) VALUES
(1, '解放军今夏至少21人晋升中将', '核心事实在总部机关，总装备部副部长王力、中央军委办公厅主任秦生祥、军事检察院检察长李晓峰等分别由少将军衔晋升中将军衔', 'http://t11.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/96957944/1000&fm=36', '2015-11-18', 'hot'),
(2, '习近平:中国将大幅减少外资准入限制', '中方将继续鼓励有实力的企业赴马投资。', 'http://t10.baidu.com/it/u=http://c.hiphotos.baidu.com/news/crop%3D4%2C4%2C731%2C462/sign=c57a20b88335e5dd8463ff9f4bf28bdb/2e2eb9389b504fc25fda70efe3dde71191ef6d57.jpg&fm=36', '2015-11-18', 'hot'),
(3, '李克强:紧扣小康目标编制十三五规划纲要', '11月17日，中共中央政治局常委、国务院总理李克强主持召开“十三五”《规划纲要》编制工作会议并作重要讲话。', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1117/39/b/54558746/550x363.jpg&fm=36', '2015-11-18', 'hot'),
(4, '知名私募中科招商董事长被查', '全国中小企业股份转让系统11月16日在官网披露信息，新三板挂牌公司中科招商投资管理集团股份有限公司(832168)因信息披露违规被采取约见谈话的自律监管措施。', 'http://t12.baidu.com/it/u=http://img1.cache.netease.com/cnews/2015/11/18/20151118072500f6579_550.jpg&fm=36', '2015-11-18', 'hot'),
(5, '叶檀：A股被利用成为抽血机', '11月6日，证监会在新闻发布会上宣布，重启暂停4个月的IPO，此前暂缓发行的28家公司将按现行制度恢复发行。11月18日将有新的IPO公司上会。而在上周五（11月13日），证监会官网一次预披露85家公司招股说明书，是年内单日预披露最多的一次。', 'http://t12.baidu.com/it/u=http://img.jrjimg.cn/2015/09/20150918074721944.jpg&fm=36', '2015-11-18', 'hot'),
(6, '巴黎恐袭遇难者中无中国公民', '【新华社快讯】中国驻法国大使馆消息说，法方18日确认了129名巴黎系列恐怖袭击遇难者身份，其中没有中国公民', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1118/45/e/71559495/auto.jpg&fm=36', '2015-11-18', 'hot'),
(7, '亚马逊葛道远：不谋求做中国最大的电商平台', '在中国，对于亚马逊的讨论从未停止：11年间，这家公司在中国投入极大，但是却并不急于快速扩张，它以一种缓慢而独特的方式企图在中国建立壁垒。亚马逊中国区总裁葛道远说：“我们不谋求做中国最大的电商平台，但是我们要做中国最值得信赖的电商平台。”他能做到吗？', 'http://t11.baidu.com/it/u=http://i2.hexunimg.cn/2015-11-17/180622213.jpg&fm=36', '2015-11-18', 'web'),
(8, 'Uber对手Lyft寻求5亿美元融资：估值40亿美元', '知情人士表示，Lyft新一轮融资的估值约为40亿美元，而该公司在上一轮融资中获得的估值为25亿美元', 'http://t12.baidu.com/it/u=http://n.sinaimg.cn/default/20151017/4Au8-fxivsce6883049.jpg&fm=36', '2015-11-18', 'web'),
(9, '连接权与护城河：BAT的终极战争', '过去中国创业者们最担心的是中国最大的三家互联网公司百度、阿里巴巴和腾讯（简称BAT）是否会复制它们。现在，这个话题已经演变为，BAT是否会投资甚至收购它们。在过去那种“被复制”的情况下，创业者们还有成为下一个BAT级存在的机会——前提是克服BAT的关注；而在当前的境况下，中国的创业者，必须要面对的现实则是：如果不能入局BAT（被投资或收购），往往就意味着衰落甚至死亡。', 'http://t12.baidu.com/it/u=http://b.hiphotos.baidu.com/news/crop%3D0%2C5%2C358%2C215%3Bw%3D638/sign=7aa7879df41fbe090811995456502006/f2deb48f8c5494eef173b7f22bf5e0fe98257e83.jpg&fm=37', '2015-11-18', 'web'),
(10, '商务部：用3年时间遏制互联网领域侵权假冒行为', '互联网成为假冒伪劣和侵权盗版的重灾区\r\n“中国已经成为全球最大的网上零售市场，电子商务已经成为我国现代流通创新发展最有活力和潜力的领域，但互联网也是假冒伪劣和侵权盗版的重灾区。”在今天上午召开的新闻发布会上，商务部新闻发言人沈丹阳说道。', 'http://t12.baidu.com/it/u=http://y2.ifengimg.com/a/2015_47/3f704dcdce04e00.jpg&fm=37', '2015-11-18', 'web'),
(11, '五月天成员怪兽宣布结婚', '网易娱乐11月18日报道 五月天成员温尚翊（怪兽）18日下午在微博宣布将迎娶自己的女友，网友大呼：“又失恋了。”随便如此，大批网友在第一时间送上祝福：“团长要幸福！”', 'http://t12.baidu.com/it/u=http://img3.cache.netease.com/ent/2015/11/18/201511181639416fcd9_550.jpg&fm=37', '2015-11-15', 'etm'),
(12, '曝夏天被邀上央视春晚 夏克立:应该会吧', '中新网11月18日电 据台湾“东森新闻”消息，夏克立因与女儿夏天参与《爸爸去哪儿3》人气暴涨。近日，外传夏克立与夏天还受邀2016央视春晚，对此他18日录像时表示：“应该会吧！”', 'http://t10.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/smccloud/2015/11/18/144784627229950598_620_1000.JPEG&fm=37', '2015-11-18', 'etm'),
(13, '杨幂想献唱遭顶替 周笔畅K歌唱李宇春', '继上一场发布会曝光电影推广曲《心动》MV之后，本次发布会再次曝光了一首由畅销书作家丁丁张作词的电影插曲《片羽时光》。周笔畅现场首唱，杨幂则现场自愿化身舞台“道具”，并久违开嗓与周笔畅牵手合音结尾。', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1118/93/7/67554006/auto.jpg&fm=36', '2015-11-18', 'etm'),
(14, '孙俪想拍谍战片 穿旗袍掏枪', '北京晨报11月18日报道 2011年《甄嬛传》播出以及大热，让初次挑战古装剧的孙俪不仅尽收人气，而且让“娘娘”这个外号从此如影随形地跟上了她。之后的几年里孙俪又演了一些角色，但无论是一口一个“娘娘”的观众，还是声称“甄嬛之后不再演古装剧”的她自己，似乎都沉浸在“甄嬛”的余温里。对于一个演员来说，或许一辈子能遇到一个像甄嬛这样的角色足矣，因为同类型的角色或许再难超越，但孙俪似乎并不想止步于此，于是有了这部即将于11月30日在东方卫视和腾讯视频同步开播的《芈月传》。史上第一位女性政治家的前朝后宫、81集的超长篇幅、超过50年的年龄跨度，这一切似乎都预示着本剧超越前作的野心。对于所谓的重复或难以超越的疑问，孙俪日前接受采访时做出了明确回应：“芈月一定是全方位超越甄嬛的，而芈月也不会是我演技的顶峰。”', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/97176697/1000&fm=37', '2015-11-18', 'etm'),
(15, '小鸟依人！鹦鹉淡定落肩上 赵薇素颜献吻', '新浪娱乐讯 11月18日下午，赵薇在微博上晒出了自己亲吻鹦鹉的照片，并称：“吉祥的小鸟。第一次知道小鹦鹉这么粘人，谢谢我的好朋友送给我这么可爱的小生命，我会好好爱它！”', 'http://t12.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1118/c5/1/93553287/550x550.jpg&fm=37', '2015-11-18', 'etm'),
(23, '333', '123', '123', '2015-11-09', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allnews`
--
ALTER TABLE `allnews`
  ADD PRIMARY KEY (`newsid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allnews`
--
ALTER TABLE `allnews`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
