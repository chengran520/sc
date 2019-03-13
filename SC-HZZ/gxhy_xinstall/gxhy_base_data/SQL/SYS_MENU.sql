--菜单表
CREATE TABLE [dbo].[SYS_MENU](
	[UUID] [varchar](255) NOT NULL,
	[MENU_ID] [varchar](32) NOT NULL,
	[P_MENU_ID] [varchar](32) NULL,
	[MENU_NM] [varchar](50) NULL,
	[MENU_URL] [varchar](200) NULL,
	[SORT] [int] NULL,
 CONSTRAINT [PK_SYS_MENU] PRIMARY KEY NONCLUSTERED 
(
	[UUID] ASC,
	[MENU_ID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'ab0b054fedf34e9087db1d36724ec708', N'zhzs', N'-1', N'综合展视', N'data_monitor/gismap/MapView.jsp', 1)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'817165b6255d4b3d89322273091bc0f4', N'ywsl', N'-1', N'业务受理', N'busine_accept/busineView.jsp', 3)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'3005b1155f6f4e93a875d91dd0424b61', N'rcgz', N'-1', N'日常办公', NULL, 4)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'a640c58f8c77483ab7820d5b7046b0bc', N'sjzx', N'-1', N'数据中心', NULL, 5)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'bcf6cbe0be304dc08268fa87261e43ea', N'yjzh', N'-1', N'应急指挥', NULL, 6)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'7f336735a4ea48cc92c3443a4856c078', N'ztsj', N'-1', N'专题事件', NULL, 7)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'37c558e4812242329d36db2a30752335', N'wagl', N'-1', N'文案管理', NULL, 8)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'6e7d9179064d431094a264f27f304bf3', N'ptgl', N'-1', N'平台管理', NULL, 9)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'7bae71a804644b90b839cef1ab10d377', N'xjhzrz', N'rcxh', N'下级河长日志', N'routine_work/RoutineView.jsp', 312)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'8f33b8940e564c02a27f5e8afebae750', N'rcxh', N'rcgz', N'巡河日志', N'sub_routine_work/subRoutineView.jsp', 31)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'f282f68cd3454011801afcaeaaea6958', N'jxkh', N'rcgz', N'绩效考核', N'merit_perf/meritView.jsp', 32)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'ea765af53bc14fa39d41c49501e97cc2', N'tsph', N'rcgz', N'投诉排行', N'rank_top/rankView.jsp', 33)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'd93987c2e95441d5bcea97e8434aa422', N'zfjg', N'rcgz', N'执法监管', NULL, 34)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'e89fad4a3399477fa9d584a67f0aa44f', N'xxfb', N'rcgz', N'信息发布', N'notice_issued/noticeView.jsp', 35)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'5b772b2766104703b8077a1d84202f18', N'czxx', N'sjzx', N'基础测站', N'basicSite/basicSiteInfo.jsp', 43)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'11aa55ca59254eb28c8a204737ca9b76', N'sqxx', N'ssjcxx', N'水情监测', N'data_center/water/rain/rain_info.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'073f42e35594460aba7e697f7c1390fc', N'hkjcxx', N'sjzx', N'河库基础', NULL, 41)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'62937981c516443f8875f9f8da468a11', N'bmgl', N'ptgl', N'部门管理', N'module/sysmanager/dept/deptInfo.jsp', 84)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'19011f295bac4394a0191acfd466250b', N'ssjcxx', N'sjzx', N'实时监测', NULL, 42)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'0809cb35e789441696b3079a530fed2f', N'szxx', N'ssjcxx', N'雨情监测', N'data_center/water/river/river.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'2f39dc882587466984d1072d650fc379', N'bgt', N'rcgz', N'曝光台', N'exposure/exposure.jsp', 36)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'7cf8986ec6d54d07b4f485f378a0ff12', N'yhgl', N'ptgl', N'用户管理', N'module/sysmanager/users/usersManager.jsp', 81)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'08d842d2583c4f968ae83a85bbc8a67c', N'jsgl', N'ptgl', N'角色管理', N'module/sysmanager/role/roleInfo.jsp', 82)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'62937981c516443f8875f9f8da468a8d', N'cdgl', N'ptgl', N'菜单管理', N'module/sysmanager/menu/menuInfo.jsp', 83)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'bddb449793fb4732a684b216c65de9e9', N'rzgl', N'ptgl', N'日志管理', NULL, 85)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'74a45adf947a4115817dd0a100438729', N'zdwa', N'wagl', N'制度文案', N'filemanage/systemFile/systemFile.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fa6ef534f8744787b16691c11cdd413e', N'zfwa', N'wagl', N'执法文案', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'e9db8ef2398e4ed7b6fb3cf26ce4f50f', N'xmwa', N'wagl', N'项目文案', N'filemanage/projectCopywriter/projectFile.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'2f39dc882587466984d1072d650fc879', N'gspsj', N'ztsj', N'河道专题', N'riverwaySpecial/riverway.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fa6ef534f874124787b121c11cdd413e', N'lxhy', N'yjzh', N'联席会议', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'321fdsf23232f1ab10d377', N'qdrz', N'rcxh', N'我的日志', NULL, 311)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fdsew121fe211ab10d377', N'xhbj', N'rcxh', N'保洁巡河', NULL, 313)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'12c88258743232d1072d650fc879', N'ddzh', N'yjzh', N'调度指挥', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fdw212132743232d1072d650fc879', N'zrgx', N'yjzh', N'资源共享', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'321fdsfs12fdf4787b121c11cdd413e', N'szbb', N'tzbb', N'水质报表', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fdw212132743232d1072d650fc879', N'ysqbb', N'tzbb', N'雨水情报表', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'32fdsfs121232743232d1072d650fc879', N'ywbb', N'tzbb', N'业务报表', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'3213213fdf4787b121c11cdd413e', N'tzbb', N'wagl', N'统计报表', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'321fdsf12166984d1072d650fc879', N'sjzt', N'ztsj', N'事件专题', N'eventSpecial/event.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'rewr1fsdfs43232d1072d650fc879', N'wrzt', N'ztsj', N'污染专题', N'pollutionSpecial/pollution.jsp', NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'f2f2f2sd2431094a264f27f304bf3', N'sjtb', N'-1', N'数据填报', NULL, 10)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'321fd12fdsrew0191acfd466250b', N'gztxx', N'-1', N'工作台', N'work_bench/workBench.jsp', 2)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fds12fds211696b3079a530fed2f', N'szjc', N'ssjcxx', N'水质监测', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'yret12fs12fdse1696b3079a530fed2f', N'pwkjc', N'ssjcxx', N'排污口监测', NULL, NULL)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'312321fdsfs79a530fed2fr1r1r12121', N'khyj', N'jxkh', N'考核依据', NULL, 321)
INSERT [dbo].[SYS_MENU] ([UUID], [MENU_ID], [P_MENU_ID], [MENU_NM], [MENU_URL], [SORT]) VALUES (N'fdsew121fe211abfdsfds12112', N'xjpm', N'jxkh', N'下级排名', NULL, 325)
